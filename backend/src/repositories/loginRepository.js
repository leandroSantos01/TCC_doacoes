import { connection } from "./connection.js";

export async function consultarCredenciais(email, senha) {
    const comando = `
    SELECT username, email
        FROM login 
    WHERE email = ?
        AND senha = MD5(?)
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros[0];
}

export async function criarCadastro(novoCadastro) {
    const comando = `
    INSERT INTO login (username, email, senha, dt_criacao)
        VALUES (?, ?, MD5(?), NOW());
    `;

    const [info] = await connection.query(comando, [
        novoCadastro.username,
        novoCadastro.email,
        novoCadastro.senha
    ]);
    return info.insertId;
}

export async function listarUsuarios() {
   const comando = `
    SELECT id_login, email, username, dt_criacao
         FROM login;
   ` 

   const [ registros ] = await connection.query(comando);
   return [ registros ];  
}

export async function consultarCredenciaisADM(admin) {
    const comando = `
        SELECT id_admin, email
            FROM loginADM
            WHERE email = ?
            AND senha = MD5(?)
    `;

    const [registros] = await connection.query(comando, [admin.email, admin.senha]);
    return registros[0];    
}

export async function alterarImagemCurso(id, caminho) {
    const comando = `
      UPDATE ongs
         SET url_image = ?
       WHERE id = ?
    `
  
     await connection.query(comando, [caminho, id]);
  }

export async function deletarConta(id) {
    const comando = `
      DELETE FROM login
        WHERE id_login = ?;  
    `

    await connection.query(comando, id);
}

export async function alterarSenha(email, senha, novaSenha) {
    const comando = `
        UPDATE login
            SET senha = MD5(?)
              WHERE email = ? AND senha = MD5(?); 
    `

    await connection.query(comando, [senha, email, novaSenha]);
}

export async function editarUsuario(novoNome, username, senha) {
    const comando = `
        UPDATE login
            SET username = ?
              WHERE username = ? AND senha = MD5(?)
    `

    await connection.query(comando, [novoNome, username, senha]);
} 