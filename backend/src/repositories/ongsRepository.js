import { connection } from "./connection.js";

export async function cadastrarOng(novoCadastro) {
    const comando = `
        INSERT INTO
            ongs (nome, email, senha, endereco, cnpj, categoria, dt_criacao, doacoes_recebidas) 
                VALUES(?, ?, MD5(?), ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoCadastro.nome,
        novoCadastro.email,
        novoCadastro.senha,
        novoCadastro.endereco,
        novoCadastro.cnpj,
        novoCadastro.categoria,
        novoCadastro.dt_criacao,
        novoCadastro.doacoes_recebidas
    ]);
    return info.insertId;  
}

export async function consultarCredenciaisOng(email, senha) {
    const comando = `
    SELECT nome, email
        FROM ongs 
    WHERE email = ?
        AND senha = MD5(?)
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros[0];
}




export async function alterarImagem(id, caminho) {
    const comando = `
        UPDATE ongs
        SET url_image = ?
        WHERE id = ?
  `

    const [info] = await connection.query(comando, [caminho, id])
}

export async function listarOngs() {
    const comando = `
          SELECT nome, endereco, categoria
            FROM ongs; 
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function buscaPorCategoria(categoria) {
   const comando = `
        SELECT nome, endereco, categoria
            FROM ongs
                WHERE categoria = ?;
   `

   const [registros] = await connection.query(comando,[categoria]);
   return registros;
}

export async function buscaPorNome(nome) {
    const comando = `
         SELECT nome, endereco, categoria
             FROM ongs
                 WHERE nome LIKE ?;
    `
 
    const [registros] = await connection.query(comando,['%'+nome+'%']);
    return registros;
}

export async function buscaPorCnpj(cnpj) {
    const comando = `
         SELECT nome, endereco, categoria
             FROM ongs
                 WHERE cnpj = ?;
    `

    const [registros] = await connection.query(comando,[cnpj]);
    return registros;
}