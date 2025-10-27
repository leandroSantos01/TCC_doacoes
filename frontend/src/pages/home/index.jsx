import { Link } from 'react-router'

import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'
import Cabecalho from '../../components/cabecalho/Cabecalho.jsx'
import Rodape from '../../components/Rodape/Rodape.jsx'

import caixa from '/src/assets/images/image.png'



export default function App() {
    return (
        <div>

            <Cabecalho />

            <main className='container_pagPrincipal'>

                <div className="container_central">



                    <div className="container_infromacao">
                        <h1><span className='destaque'>DonNet</span> faça do mundo um lugar melhor</h1>

                        <div className="Botoes_central">
                            <Link className='doar'>DOAR</Link>
                            <Link className='login'>LOGIN</Link>
                        </div>

                    </div>

                    <div className="container_img">
                        <img src={caixa} />
                    </div>






                </div>






            </main>

            <section >

                <div className="container_conteudo">
                    <h1>Ajude e faça alguém mais feliz!</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere  varius dolor a vehicula. Donec aliquam dictum facilisis. Suspendisse  tincidunt neque id metus varius pretium. Praesent at dignissim quam.  Aliquam semper faucibus volutpat. In at scelerisque nisi. Etiam blandit  justo in tortor dictum mollis. In ut ligula egestas, tincidunt nisl nec, consectetur neque.
                    </p>

                    <Link className='doeAqui'>Doar</Link>

                </div>
            </section>






            <Rodape />
        </div>
    )
}