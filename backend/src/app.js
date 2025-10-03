import { adicionarRotas } from './rotas.js';
import express from 'express';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

api.listen(3010, () => console.log('A api subiu na porta 3010'));