import "./index.scss";

export default function ModalOngs({
  aberto,
  fechado,
  titulo,
  conteudo,
  conteudo2,
  cadastrar,
}) {
  if (aberto)
    return (
      <div className="caixa_blur">
        <div className="central_modal">
          <div className="titulo_modal">
            <h2>{titulo}</h2>
          </div>

          <div className="central_cadastro">
            <div className="conteudo">{conteudo}</div>

            <div className="conteudo2">{conteudo2}</div>
          </div>

          <div className="btn">
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={fechado} className="diferente">
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
}
