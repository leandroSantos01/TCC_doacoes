import * as repo from '../repositories/ongsRepository.js';
import { getAuthentication } from '../utils/jwt.js';
const autenticador = getAuthentication();

import multer from 'multer';
const upload = multer({ dest: 'public/storage '});

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/cadastro/ong', async (req, resp) => {
    let novoCadastro = req.body;

    const id = await repo.cadastrarOng(novoCadastro);
    resp.send({ novoId: id});
})

endpoints.get('/listar/ongs', async (req, resp) => {
    const registros = await repo.listarOngs();

    resp.send(registros);
})

endpoints.get('/listar/ongs/:id', async (req, resp) => {
    let id = req.params.id;

    const registros = await repo.listarOngs();
    resp.send(registros);
})

endpoints.get('/listar/ongs/categoria/:categoria', async (req, resp) => {
  const categoria = req.params.categoria;

  try {
    const registros = await repo.buscaPorCategoria(categoria);
    resp.send(registros);
  } catch (e) {
    console.error(e);
    resp.status(500).send({ erro: 'Erro ao buscar ONGs por categoria' });
  }
});

endpoints.get('/listar/ongs/nome', async (req, resp) => {
    let nome = req.body.nome;

    const registros = await repo.buscaPorNome(nome);
    resp.send(registros);
})

endpoints.get('/listar/ongs/cnpj', async (req, resp) => {
    let cnpj = req.body.cnpj;

    const registros = await repo.buscaPorCnpj(cnpj);
    resp.send(registros);
})


endpoints.put('/upload/:id/image', autenticador,upload.single('file'), async (req, resp) =>{
    let caminho = req.file.path;

    let id = req.params.id;

    await repo.alterarImagem(caminho, id);
    resp.send();
})


export default endpoints;