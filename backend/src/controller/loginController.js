import { Router } from "express";

const endpoints = Router();

endpoints.post('/login/conta', async (req, resp) => {
    let novoLogin = req.body;

    let id = await repo.criarLogin(novoLogin);
    resp.send({ novoId: id });
})

export default endpoints;