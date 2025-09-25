import cadastroController from './controller/cadastroController.js'
import loginController from './controller/loginController.js'


export default function Rotas(api){
    api.use(cadastroController);
    api.use(loginController);
}