import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../components/Rodape/Rodape.jsx";

import "./pagOng.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import amparaanimal from "../../assets/images/animal.png";
import { useLocation } from "react-router";

export default function pagOng() {

  const location = useLocation();
  console.log(location, 'tem dado')

  return (
    <div>
          <Cabecalho />
    
          <div className="div-mae">
            <div className="div-card">
              <div className="img">
                <img src={'http://localhost:3010'+ location.state.url_image} />
              </div>
              <div className="parte-direita">
                <div className="conteudo">
                  <div className="titulo">
                    <h1>{location.state.nome}</h1>
                  </div>
                  <div className="descricao">
                    <p>
                      Fundada em 2012 por um pequeno grupo de voluntários locais, a
                      Cão sem Dono é uma organização dedicada a resgatar, tratar e
                      realocar cães em situação de abandono e vulnerabilidade. Nossa
                      missão é promover bem‑estar animal por meio de resgate
                      humanitário, atendimento veterinário, castração em massa e
                      programas de adoção responsável.
                      <br />
                      <br />
                      Desde a criação, já resgatamos mais de 4.200 animais e, em
                      média, promovemos 350 adoções por ano. Mantemos um abrigo com
                      capacidade para 180 cães e uma rede de mais de 120 voluntários
                      que atuam em resgates emergenciais, transporte, acolhimento
                      temporário (lar de passagem) e divulgação para adoção.
                      <br />
                      <br />
                      Entre nossos programas permanentes estão a clínica móvel de
                      atendimento (consultas básicas e vacinas), campanhas de
                      castração comunitária — mais de 6.000 procedimentos realizados
                      desde 2015 — e programas de reabilitação para animais vítimas
                      de maus‑tratos ou acidentes. Também oferecemos acompanhamento
                      comportamental para que os adotantes tenham sucesso na
                      integração do animal ao novo lar.
                      <br />
                      <br />
                      Atuamos em parceria com escolas e creches para promover
                      educação sobre posse responsável e respeito aos animais, e
                      mantemos um “pet food bank” para famílias em situação de
                      vulnerabilidade que desejam manter seus animais. Trabalhamos
                      de forma transparente: publicamos relatórios anuais com
                      receitas e despesas e detalhamos o destino das doações.
                      <br />
                      <br />
                      Toda contribuição — financeira, em ração, materiais de
                      higiene, medicamentos ou tempo como voluntário — é usada para
                      ampliar nossa capacidade de atendimento, custear tratamentos
                      veterinários, transporte e infraestrutura do abrigo. Se quiser
                      visitar, adotar, apadrinhar um animal ou doar, entre em
                      contato: cada ajuda faz diferença para salvar vidas.
                    </p>
                  </div>
    
                  <div className="meio-contato">
                    <a className="href" href="https://www.caosemdono.com.br/">
                      Website Cão sem Dono
                    </a>
                    <p>Telefone: (11) 95471-2195</p>
                    <p>Pix: 10.157.938/0001-73 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <Rodape />
        </div>
  );
}
