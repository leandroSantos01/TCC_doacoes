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


export async function buscaPorFiltro(categoria) {
   const comando = `
        SELECT categoria
            FROM ongs
                WHERE categoria = ?;
   `

   const [registros] = await connection.query(comando,[categoria]);
   return registros;
}