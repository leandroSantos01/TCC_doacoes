import { connection } from "./connection.js";

export async function cadastrarOng(novoCadastro) {
  const comando = `
        INSERT INTO
            ongs (nome, email, endereco, cnpj, categoria, contato, descricao, cadastro_ativo, dt_criacao) 
                VALUES(?, ?, ?, ?, ?, ?, ?, FALSE, NOW());
    `;

  const [info] = await connection.query(comando, [
    novoCadastro.nome,
    novoCadastro.email,
    novoCadastro.endereco,
    novoCadastro.cnpj,
    novoCadastro.categoria,
    novoCadastro.contato,
    novoCadastro.descricao,
  ]);
  return info.insertId;
}

export async function listarOngs() {
  const comando = `
          SELECT id_ong, nome, endereco, contato, descricao, url_image
            FROM ongs; 
    `;

  const [registros] = await connection.query(comando);
  return registros;
}

export async function buscaPorId(id) {
  const comando = `
          SELECT *
            FROM ongs
                WHERE id_ong = ?;
    `;

  const [registros] = await connection.query(comando);
  return registros;
}

export async function buscaPorCategoria(categoria) {
  const comando = `
        SELECT nome, endereco, categoria
        FROM ongs
        WHERE categoria LIKE ?;
   `;

  const [registros] = await connection.query(comando, [`%${categoria}%`]);
  return registros;
}

export async function buscaPorNome(nome) {
  const comando = `
         SELECT nome, endereco, categoria
             FROM ongs
                 WHERE nome LIKE ?;
    `;

  const [registros] = await connection.query(comando, ["%" + nome + "%"]);
  return registros;
}

export async function buscaPorCnpj(cnpj) {
  const comando = `
         SELECT nome, endereco, categoria
             FROM ongs
                 WHERE cnpj = ?;
    `;

  const [registros] = await connection.query(comando, [cnpj]);
  return registros;
}

export async function alterarImagem(caminho, id) {
  const comando = `
        UPDATE ongs
        SET url_image = ?
        WHERE id_ong = ?
  `;

  const [info] = await connection.query(comando, [caminho, id]);
  return info;
}
