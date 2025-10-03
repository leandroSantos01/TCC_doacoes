import * as repo from '../repositories/loginRepository.js';
import { generateToken } from '../utils/jwt.js';

import { Router } from 'express';
const api = Router();

api.post('/login/conta', async (req, resp) => {
    let novoLogin = req.body;

    let id = await repo.criarLogin(novoLogin);
    resp.send({ novoId: id });
})

api.post('/login', async (req, resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let credenciais = await repo.consultarCredenciais(email, senha);

    if (!credenciais) {
        resp.status(401).send({
            erro: 'Credenciais inválidas'
        });
    }
    else {
        resp.send({
            token: generateToken(credenciais)
        });
        }
});

export default api;