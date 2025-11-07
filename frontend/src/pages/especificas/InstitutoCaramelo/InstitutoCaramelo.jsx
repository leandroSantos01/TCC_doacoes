import Cabecalho from "../../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../../components/Rodape/Rodape.jsx";

import "/src/scss/index_Ongs.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import caramelo from "../../../assets/images/caramelo.png";

export default function InstitutoCaramelo() {
  return (
    <div>
      <Cabecalho />

      <div className="div-mae">
        <div className="div-card">
          <div className="img">
            <img src={caramelo} style={{ width: '30vh' }} />
          </div>
          <div className="parte-direita">
            <div className="conteudo">
              <div className="titulo">
                <h1>Instituto Caramelo</h1>
              </div>
              <div className="descricao">
                <p>
                  O Instituto Caramelo atua desde 2010 promovendo bem‑estar animal e inclusão social por meio de projetos de acolhimento, reabilitação e adoção responsável. Nossa missão é reduzir o abandono e melhorar a qualidade de vida de animais e famílias nas comunidades onde atuamos.
                </p>
                <br />
                <p>
                  Mantemos um centro de acolhimento e atendimento veterinário que já realizou consultas, vacinas e cirurgias de esterilização para milhares de animais. Desenvolvemos também programas educativos nas escolas para incentivar a posse responsável e o respeito aos animais desde a infância.
                </p>
                <br />
                <p>
                  Trabalhamos em parceria com abrigos locais, clínicas veterinárias e redes de voluntariado para ampliar nossa capacidade de resgate e cuidado. Nossos projetos incluem castração comunitária, clínicas móveis, programas de reabilitação comportamental e ações de apadrinhamento.
                </p>
                <br />
                <p>
                  Valorizamos transparência e gestão responsável: publicamos relatórios anuais de atividades e finanças, além de atualizações regulares sobre os animais acolhidos e as campanhas em andamento. Recebemos doações financeiras, em ração, medicamentos e apoio logístico.
                </p>
                <br />
                <p>
                  Para colaborar, seja voluntário, apadrinhe um animal, organize uma campanha de arrecadação ou faça uma doação. Cada contribuição ajuda a ampliar atendimentos, salvar vidas e construir uma rede de proteção mais forte para animais e famílias.
                </p>
              </div>

              <div className="meio-contato">
                <a href="https://institutocaramelo.org/">Website do Instituto Caramelo</a>
                <p>Pix: doe@icaramelo.org</p>
                <p>Email para adotar: queroadotar@icaramelo.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
