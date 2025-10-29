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

api.get('/busca/categoria', async (req, resp) => {
    let categoria = req.body;

    const registros = await repo.buscaPorFiltro(categoria);
    resp.send(registros);
})

export default api;