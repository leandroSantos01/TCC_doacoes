import { connection } from "../connection.js";

export async function consultarCredenciais(email, senha) {
    const comando = `
    SELECT id
        email
    FROM login 
    WHERE email = ?
        AND senha = MD5(?)
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros[0];
}

export async function criarLogin(novoLogin) {
    const comando = `
    INSERT INTO login_tb (email, senha)
    VALUES (?, MD5(?));
    `;

    const [info] = await connection.query(comando, [
        novoLogin.email,
        novoLogin.senha
    ]);
    return info.insertId;
}