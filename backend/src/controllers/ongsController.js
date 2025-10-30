import * as repo from '../repositories/ongsRepository.js';
import { getAuthentication } from '../utils/jwt.js';

import { Router } from 'express';
const api = Router();


api.post('/cadastro/ong', async (req, resp) => {
    let novoCadastro = req.body;

    let id = await repo.cadastrarOng(novoCadastro);
    resp.send({ novoId: id});
})

api.get('/listar/ongs', async (req, resp) => {
    const registros = await repo.listarOngs();

    resp.send(registros);
})

api.get('/listar/ongs/categoria', async (req, resp) => {
    let categoria = req.body.categoria;

    const registros = await repo.buscaPorCategoria(categoria);
    resp.send(registros);
})

api.get('/listar/ongs/nome', async (req, resp) => {
    let nome = req.body.nome;

    const registros = await repo.buscaPorNome(nome);
    resp.send(registros);
})

api.get('/listar/ongs/cnpj', async (req, resp) => {
    let cnpj = req.body.cnpj;

    const registros = await repo.buscaPorCnpj(cnpj);
    resp.send(registros);
})

export default api;