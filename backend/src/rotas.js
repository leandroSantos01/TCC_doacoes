import loginController from './controllers/loginController.js';
import ongsController from './controllers/ongsController.js';

export function adicionarRotas (api) {
    api.use(loginController),
    api.use(ongsController);
}