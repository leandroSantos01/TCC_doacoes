import Cabecalho from '../../components/cabecalho/Cabecalho'
import CardsDev from '../../components/CardsDev/cards'
import Rodape from '../../components/Rodape/Rodape'



import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'


import cao from '/src/assets/images/cao.png'


export default function Dev() {
    return (
        <div>
            <Cabecalho />

            <div className="Card">
                <CardsDev
                    imagem={cao}
                    nome={"Lenadro Patricio Santos "}
                    desc={"Responsável pelo FrontEnd e design do site"}

                />


                <CardsDev
                    imagem={cao}
                    nome={"Livia da Silva Pererira"}
                    desc={"Responsável pelo FrontEnd e design do site"}
             
                />

                <CardsDev
                    imagem={cao}
                    nome={"Eduardo"}
                    desc={"Responsável pelo FrontEnd e design do site"}
                />

                <CardsDev
                    imagem={cao}
                    nome={"Emily"}
                    desc={"Responsável pelo BackEnd e Responsividade do site"}
                
                />


                 <CardsDev
                    imagem={cao}
                    nome={"Fabricio"}
                    desc={"Responsável pelo BackEnd e Responsividade do site"}

                />


            </div>

            <Rodape />

        </div>
    )
}