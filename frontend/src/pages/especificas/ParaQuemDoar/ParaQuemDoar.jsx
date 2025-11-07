import Cabecalho from "../../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../../components/Rodape/Rodape.jsx";

import "./ParaQuemDoar.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import doar from "../../../assets/images/doar.png";

export default function ParaQuemDoar() {
  return (
    <div>
      <Cabecalho />

      <div className="div-mae">
        <div className="div-card">
          <div className="img">
            <img src={doar} />
          </div>
          <div className="parte-direita">
            <div className="conteudo">
              <div className="titulo">
                <h1>Para Quem Doar</h1>
              </div>
              <div className="descricao">
                <p>
                  A ação "Para Quem Doar" conecta doadores a projetos e famílias que realmente precisam, facilitando doações de recursos financeiros, alimentos, roupas, materiais escolares e serviços voluntários. Nosso objetivo é transformar solidariedade em impacto imediato e mensurável, priorizando iniciativas locais com histórico de resultado.
                </p>
                <br />
                <p>
                  Trabalhamos com uma curadoria rigorosa: avaliamos demandas, verificamos documentação e acompanhamos a destinação das doações em cada etapa. Oferecemos opções de doação pontual ou recorrente, pacotes para empresas e campanhas temáticas (emergência, educação, alimentação, saúde).
                </p>
                <br />
                <p>
                  Garantimos transparência por meio de relatórios periódicos, prestação de contas e atualização direta aos doadores sobre como os recursos foram utilizados e quais resultados foram alcançados. Sempre que possível, publicamos histórias de beneficiários e indicadores de impacto.
                </p>
                <br />
                <p>
                  Para doar ou saber mais, consulte nossas formas de contribuição no site, entre em contato por e-mail ou telefone, ou participe como voluntário nas etapas de arrecadação e distribuição. Cada apoio ajuda a ampliar alcance, acelerar atendimentos e transformar vidas na comunidade.
                </p>
              </div>

              <div className="meio-contato">
                <a href="https://www.paraquemdoar.com.br/">Site Para Quem Doar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
