import Cabecalho from "../../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../../components/Rodape/Rodape.jsx";

import "/src/scss/index_Ongs.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import amigosdobem from "../../../assets/images/amigos.png";

export default function AmigosDoBem() {
  return (
    <div>
      <Cabecalho />

      <div className="div-mae">
        <div className="div-card">
          <div className="img">
            <img src={amigosdobem} style={{ width: "300px" }} />
          </div>
          <div className="parte-direita">
            <div className="conteudo">
              <div className="titulo">
                <h1>Amigos do Bem</h1>
              </div>
              <div className="descricao">
                <p>
                  Somos uma organização não-governamental sem fins lucrativos, fundada e conduzida por mulheres comprometidas com a transformação social. Atuamos desde 2010 desenvolvendo projetos contínuos de apoio às comunidades mais vulneráveis: programas de inclusão social, capacitação profissional, atendimento emergencial e ações educativas que promovem autonomia e dignidade.

                  Nosso trabalho combina atendimento direto às pessoas com iniciativas de fortalecimento comunitário — formando parcerias com escolas, pequenos comércios e instituições locais para gerar oportunidades sustentáveis. Priorizamos transparência, responsabilidade financeira e monitoramento de resultados; todos os projetos passam por avaliação periódica e relatórios públicos.

                  Valorizamos o voluntariado e a colaboração: recebemos doações, parcerias institucionais e apoio em forma de tempo, habilidades ou recursos materiais. Cada contribuição é usada para ampliar o alcance dos programas e garantir impacto duradouro na vida das famílias atendidas. Se você quer ajudar, saber mais sobre nossos projetos ou se envolver como voluntário, entre em contato — juntos podemos potencializar mudanças reais na comunidade.
                </p>
              </div>

              <div className="meio-contato">
                <a href="https://www.amigosdobem.org/" style={{ fontSize: '30px' }}>Website Amigos do Bem</a>
                <p>Email: informacoes@amigosdobem.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
