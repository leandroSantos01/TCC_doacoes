import 'dotenv/config'
import { adicionarRotas } from './rotas.js';
import express from 'express';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);
const porta = process.env.PORTA;

api.listen(porta, () => console.log('A api subiu na porta '+ porta));