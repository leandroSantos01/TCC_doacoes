import "./cards.scss";
import { Link } from "react-router";

export default function CardsDev({ imagem, desc, nome, conteudo1 }) {
  return (
    <div>
      <main className="conteiner-dev">
        <div className="conteiner-card ">
          <img className="fotos" src={imagem} />
          <div className="desc">
            <h3>{nome}</h3>
            <p>{desc}</p>

            <div className="links">{conteudo1}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
