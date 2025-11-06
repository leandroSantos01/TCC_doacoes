import Cabecalho from '../../components/cabecalho/Cabecalho'
import CardsDev from '../../components/CardsDev/cards'
import Rodape from '../../components/Rodape/Rodape'



import Git from '/src/assets/images/github.png'
import Linkedin from '/src/assets/images/linkedin.png'

import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import Emily from '/src/assets/images/emily.jpg'
import Leandro from '/src/assets/images/lenandro.jpg'
import Livia from '/src/assets/images/livia.png'
import Eduardo from '/src/assets/images/eu.jpg'

export default function Dev() {
    return (
        <div>
            <Cabecalho />

            <div className="Card">
                <CardsDev
                    imagem={Leandro}
                    nome={"Lenadro Patricio Santos "}
                    desc={"Responsável pelo FrontEnd e design do site"}
                     conteudo1={
                        <div>

                            <a style={{margin:"0 30px"}} href="https://github.com/leandroSantos01"><img src={Git} height={"50px"} width={"50px"} /></a>
                            <a href="https://www.linkedin.com/in/leandro-patricio-santos-260504346/?trk=opento_sprofile_topcard"><img src={Linkedin} height={"50px"} width={"50px"} /></a>

                            
                        </div>
                    }

                />


                <CardsDev
                    imagem={Livia}
                    nome={"Livia da Silva Pererira"}
                    desc={"Responsável pelo FrontEnd e design do site"}
                    conteudo1={
                        <div>
                            <img style={{margin:"0 30px"}} src={Git} height={"50px"} width={"50px"} />
                            <img src={Linkedin} height={"50px"} width={"50px"} />
                        </div>
                    }
             
                />

                <CardsDev
                    imagem={Eduardo}
                    nome={"Eduardo Luiz Oliveira"}
                    desc={"Responsável pelo FrontEnd e design do site"}
                     conteudo1={
                        <div>

                            <a style={{margin:"0 30px"}} href="https://github.com/duduardim1"><img src={Git} height={"50px"} width={"50px"} /></a>
                            <a href="https://www.linkedin.com/in/eduardo-luiz-a978b82b6/"><img src={Linkedin} height={"50px"} width={"50px"} /></a>

                            
                        </div>
                    }
                />

                <CardsDev
                    imagem={Emily}
                    nome={"Emily Pinheiro"}
                    desc={"Responsável pelo BackEnd e Responsividade do site"}
                    conteudo1={

                        <div>
                            <a href="https://github.com/ambrosiavortex meu"><img src={Git} height={"50px"} width={"50px"} /></a> 
                        </div>

                        }
                   
                
                />


                 <CardsDev
                    imagem={Emily}
                    nome={"Fabricio Colombo"}
                    desc={"Responsável pelo BackEnd e Responsividade do site"}
                    conteudo1={

                        <div>
                            <a href="https://github.com/cookieceleste fabricio"><img src={Git} height={"50px"} width={"50px"} /></a>
                        </div>

                    }

                />


            </div>

            <Rodape />

        </div>
    )
}