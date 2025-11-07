import Cabecalho from "../../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../../components/Rodape/Rodape.jsx";

import "./CriancaEsperanca.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import crianca from "../../../assets/images/crianca.png";

export default function CriancaEsperanca() {
  return (
    <div>
      <Cabecalho />

      <div className="div-mae">
        <div className="div-card">
          <div className="img">
            <img src={crianca} />
          </div>
          <div className="parte-direita">
            <div className="conteudo">
              <div className="titulo">
                <h1>Criança Esperança</h1>
              </div>
              <div className="descricao">
                <p>
                  O Programa Criança Esperança dedica-se a promover oportunidades reais para crianças e adolescentes em situação de vulnerabilidade, combinando ações educativas, culturais e socioemocionais para fortalecer trajetórias escolares e ampliar horizontes. Nossa abordagem integral busca garantir aprendizagem de qualidade, desenvolvimento de competências e proteção contra riscos sociais.
                </p>
                <br />
                <p>
                  Entre as atividades regulares estão reforço escolar e tutorias em leitura e matemática, oficinas artísticas e esportivas, aulas de informática e laboratório de ciências, além de atendimentos psicossociais e orientação familiar. Trabalhamos em parceria com escolas públicas, agentes comunitários e organizações locais para construir percursos de formação contínua e acompanhamento individualizado.
                </p>
                <br />
                <p>
                  O programa prioriza avaliação de impacto: monitoramos o progresso escolar, assiduidade, desenvolvimento socioemocional e inserção em oportunidades de formação profissional. Nossas iniciativas já beneficiaram centenas de crianças, com relatos de melhoria de rendimento e maior engajamento escolar graças ao apoio integrado de educadores, voluntários e parceiros.
                </p>
                <br />
                <p>
                  Para participar ou apoiar: seja voluntário em atividades pedagógicas, contribua com doações de materiais e equipamentos, ou firme parcerias institucionais. Toda colaboração é importante para ampliar vagas, qualificar equipes e garantir continuidade às ações. Entre em contato para saber como envolver sua empresa, escola ou comunidade.
                </p>
              </div>

              <div className="meio-contato">
                <a href="https://doacoes.criancaesperanca.unesco.org/">Webite de doação Criança Esperança</a>
                <p>Pix: esperanca@unesco.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
