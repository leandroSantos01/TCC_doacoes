import 'dotenv/config'
import { adicionarRotas } from './rotas.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const api = express();
api.use(express.json());
api.use(cors());
api.use('/storage', express.static(path.join(__dirname, '..', 'public', 'storage')));

adicionarRotas(api);
const porta = process.env.PORTA;

api.listen(porta, () => console.log('A api subiu na porta '+ porta));