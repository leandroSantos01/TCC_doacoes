import { connection } from "./connection.js";

export async function criarLogin(novoLogin) {
    const cmd=`
    INSERT INTO tb_login 
     (email, senha) VALUES (?, ?)
    `

    const [info] = await connection.query(comando [
        novoLogin.email,
        novoLogin.senha
    ]);
    return info.insertId;
}