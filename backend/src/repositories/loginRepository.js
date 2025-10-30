import { connection } from "./connection.js";

export async function consultarCredenciais(email, senha) {
    const comando = `
    SELECT id_login, username, email
        FROM login 
    WHERE email = ?
        AND senha = MD5(?)
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros;
}

export async function criarCadastro(novoCadastro) {
    const comando = `
    INSERT INTO login (username, email, senha, dt_criacao, nr_doacoes)
        VALUES (?, ?, MD5(?), NOW(), 0);
    `;

    const [info] = await connection.query(comando, [
        novoCadastro.username,
        novoCadastro.email,
        novoCadastro.senha
    ]);
    return info.insertId;
}

export async function consultarCredenciaisADM(email, senha) {
    const comando = `
        SELECT id_admin, email
            FROM loginADM
        WHERE email = "admdonnet@net.org"
            AND senha = MD5("grupo5!starwars")
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros[0];    
}