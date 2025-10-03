import loginController from './controllers/loginController.js';
import cadastroController from './controllers/cadastroController.js';

export function adicionarRotas (api) {
    api.use(loginController);
    api.use(cadastroController);
}