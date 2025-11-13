import * as repo from "../repositories/ongsRepository.js";
import { getAuthentication } from "../utils/jwt.js";
const autenticador = getAuthentication();

import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "public", "storage"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || "";
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, unique);
  },
});

const upload = multer({ storage });

import { Router } from "express";
const endpoints = Router();

endpoints.post("/cadastro/ong", async (req, resp) => {
  let novoCadastro = req.body;

  const id = await repo.cadastrarOng(novoCadastro);
  resp.send({ novoId: id });
});

endpoints.get("/listar/ongs", async (req, resp) => {
  const registros = await repo.listarOngs();

  resp.send(registros);
});

endpoints.get("/listar/ongs/:id", async (req, resp) => {
  let id = req.params.id;

  const registros = await repo.listarOngs();
  resp.send(registros);
});

endpoints.get("/listar/ongs/categoria/:categoria", async (req, resp) => {
  const categoria = req.params.categoria;

  try {
    const registros = await repo.buscaPorCategoria(categoria);
    resp.send(registros);
  } catch (e) {
    console.error(e);
    resp.status(500).send({ erro: "Erro ao buscar ONGs por categoria" });
  }
});

endpoints.get("/listar/ongs/nome", async (req, resp) => {
  let nome = req.body.nome;

  const registros = await repo.buscaPorNome(nome);
  resp.send(registros);
});

endpoints.get("/listar/ongs/cnpj", async (req, resp) => {
  let cnpj = req.body.cnpj;

  const registros = await repo.buscaPorCnpj(cnpj);
  resp.send(registros);
});

endpoints.put(
  "/upload/:id/image",
  autenticador,
  upload.single("file"),
  async (req, resp) => {
    try {
      const id = req.params.id;
      if (!req.file)
        return resp.status(400).send({ error: "Arquivo não enviado" });
      const urlPath = `/storage/${req.file.filename}`;
      await repo.alterarImagem(urlPath, id);
      return resp.send({ url: urlPath });
    } catch (e) {
      console.error(e);
      return resp.status(500).send({ error: "Erro ao salvar imagem" });
    }
  }
);

export default endpoints;
