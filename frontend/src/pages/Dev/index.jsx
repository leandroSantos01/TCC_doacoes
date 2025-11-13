import Cabecalho from "../../components/cabecalho/Cabecalho";
import CardsDev from "../../components/CardsDev/cards";
import Rodape from "../../components/Rodape/Rodape";

import { useEffect } from "react";

import Git from "/src/assets/images/github.png";
import Linkedin from "/src/assets/images/linkedin.png";

import "./index.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";

import Emily from "/src/assets/images/emily.jpg";
import Leandro from "/src/assets/images/leandro.jpg";
import Livia from "/src/assets/images/livia.png";
import Eduardo from "/src/assets/images/eduardo.png";
import Fabricio from "/src/assets/images/fabricio.jpg";

export default function Dev() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Cabecalho />

      <div className="Card">
        <h1>DESENVOLVEDORES</h1>
        <CardsDev
          imagem={Leandro}
          nome={"Leandro Patricio "}
          desc={"Responsável pelo FrontEnd e Design do site."}
          conteudo1={
            <div>
              <a
                style={{ margin: "0 30px" }}
                href="https://github.com/leandroSantos01"
              >
                <img src={Git} height={"50px"} width={"50px"} />
              </a>
              <a href="https://www.linkedin.com/in/leandro-patricio-santos-260504346/?trk=opento_sprofile_topcard">
                <img src={Linkedin} height={"50px"} width={"50px"} />
              </a>
            </div>
          }
        />

        <CardsDev
          imagem={Livia}
          nome={"Lívia da Silva Pereira"}
          desc={"Responsável pelo FrontEnd e Design do site."}
          conteudo1={
            <div>
              <img
                style={{ margin: "0 30px" }}
                src={Git}
                height={"50px"}
                width={"50px"}
              />
            </div>
          }
        />

        <CardsDev
          imagem={Eduardo}
          nome={"Eduardo Luiz Oliveira"}
          desc={"Responsável pelo FrontEnd e Design do site."}
          conteudo1={
            <div>
              <a
                style={{ margin: "0 30px" }}
                href="https://github.com/duduardim1"
              >
                <img src={Git} height={"50px"} width={"50px"} />
              </a>
              <a href="https://www.linkedin.com/in/eduardo-luiz-a978b82b6/">
                <img src={Linkedin} height={"50px"} width={"50px"} />
              </a>
            </div>
          }
        />

        <CardsDev
          imagem={Emily}
          nome={"Emilly Pinheiro"}
          desc={"Responsável pelo BackEnd e Responsividade do site."}
          conteudo1={
            <div>
              <a
                style={{ margin: "0 30px" }}
                href="https://github.com/ambrosiavortex meu"
              >
                <img src={Git} height={"50px"} width={"50px"} />
              </a>
            </div>
          }
        />

        <CardsDev
          imagem={Fabricio}
          nome={"Fabricio Henry"}
          desc={"Responsável pelo BackEnd e Responsividade do site."}
          conteudo1={
            <div>
              <a
                style={{ margin: "0 30px" }}
                href="https://github.com/cookieceleste fabricio"
              >
                <img src={Git} height={"50px"} width={"50px"} />
              </a>
            </div>
          }
        />
      </div>

      <Rodape />
    </div>
  );
}
