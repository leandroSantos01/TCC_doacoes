import * as repo from '../repositories/ongsRepository.js';
import { generateToken, getAuthentication } from '../utils/jwt.js';
const autenticador = getAuthentication();

import multer from 'multer';
const upload = multer({ dest: 'public/storage '});

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/cadastro/ong', autenticador, async (req, resp) => {
    let novoCadastro = req.body;

    const id = await repo.cadastrarOng(novoCadastro);
    resp.send({ novoId: id});
})

endpoints.post('/login/ong', async (req, resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    const credenciais = await repo.consultarCredenciaisOng(email, senha);
    
    if(!credenciais) {
        resp.status(401).send({
            erro: "Credenciais inválidas"
        });
    } 
    else {
        resp.send({
            token: generateToken(credenciais)
        });
    }
})

endpoints.get('/listar/ongs', async (req, resp) => {
    const registros = await repo.listarOngs();

    resp.send(registros);
})

endpoints.get('/listar/ongs/categoria', async (req, resp) => {
    let categoria = req.body.categoria;

    const registros = await repo.buscaPorCategoria(categoria);
    resp.send(registros);
})

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


endpoints.put('/upload/:id/image', upload.single('file'), async (req, resp) =>{
    let caminho = req.file.path;

    let id = req.params.id;

    await repo.alterarImagem(caminho, id);
    resp.send();
})


export default endpoints;