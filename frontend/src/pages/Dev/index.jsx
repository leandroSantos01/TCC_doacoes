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
                    nome={"Leandro"}
                    desc={"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOloremloremlooass099999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999OOOOOOOOOOO"}

                />


                <CardsDev
                    imagem={cao}
                    nome={"Leandro"}
                    desc={"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOloremloremlooass099999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999OOOOOOOOOOO"}
                    virar
                />

                <CardsDev
                    imagem={cao}
                    nome={"Leandro"}
                    desc={"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOloremloremlooass099999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999OOOOOOOOOOO"}
                />

                <CardsDev
                    imagem={cao}
                    nome={"Leandro"}
                    desc={"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOloremloremlooass099999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999OOOOOOOOOOO"}
                    virar
                />


            </div>

            <Rodape />

        </div>
    )
}