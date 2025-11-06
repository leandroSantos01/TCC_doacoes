import * as repo from '../repositories/loginRepository.js';
import { generateToken } from '../utils/jwt.js';

import { getAuthentication } from '../utils/jwt.js';
const autenticador = getAuthentication();

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/cadastro/conta', async (req, resp) => {
    let novoCadastro = req.body;

    let id = await repo.criarCadastro(novoCadastro);
    resp.send({ usuario: novoCadastro.username });
})

endpoints.post('/login', async (req, resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let credenciais = await repo.consultarCredenciais(email, senha);

    if (!credenciais) {
        resp.status(401).send({
            erro: 'Credenciais inválidas!'
        });
    }

    else {
        let token = generateToken(credenciais)
        resp.send({
            token: token,
            usuario: credenciais.username
        });
    }
});

endpoints.post('/login/administrador', async (req, resp) => {
    let email = req.body.email;
    let senha = req.body.senha;                                                          

    let credenciais = await repo.consultarCredenciaisADM(email, senha);

    if (!credenciais) {
        resp.status(401).send({
            erro: 'Credenciais inválidas!'
        });
    }
    else {
        resp.send({
            token: generateToken(credenciais)
        });
    }
})

endpoints.delete('/excluir/login/:id', autenticador, async (req, resp) => {
    let id = req.params.id;

    await repo.deletarConta(id);
    resp.send(id+': user deleted!');
})

endpoints.put('/alterar/senha', autenticador, async (req, resp) => {
    let email = req.body.email;
    let senha = req.body.senha;
    let novaSenha = req.body.novaSenha;

    await repo.alterarSenha(email, senha, novaSenha);
    resp.send('password changed sucessfully!');
})

export default endpoints;