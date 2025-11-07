import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../components/Rodape/Rodape.jsx";

import "./pagOng.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import amparaanimal from "../../assets/images/animal.png";

export default function pagOng() {
  return (
    <div>
      <Cabecalho />

      <div className="div-mae">
        <div className="div-card">
          <div className="img">
            <img src={amparaanimal} />
          </div>
          <div className="conteudo">
            <div className="titulo">
              <h1>Ampara Animal</h1>
            </div>
            <div className="descricao">
              <p>
                Somos uma organização não-governamental sem fins lucrativos,
                100% brasileira, fundada e dirigida por mulheres visionárias.
                Nascemos em 2010 e em 2013 recebemos do Ministério da Justiça o
                título de OSCIP (organização da sociedade civil de interesse
                público), comprovando nossa seriedade e transparência.
              </p>
            </div>

            <div className="meio-contato">
              <a href="https://institutoamparanimal.org.br/">Site da ampara animal</a>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
