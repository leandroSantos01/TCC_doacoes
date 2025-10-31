import loginController from './controllers/loginController.js';
import ongsController from './controllers/ongsController.js';
import express from 'express';

export function adicionarRotas(api) {
    api.use(loginController),
    api.use(ongsController);

    api.use('/public/storage', express.static('public/storage'))
}

