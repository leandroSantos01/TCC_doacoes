import {Link} from 'react-router'

import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import logo from '/src/assets/images/logos.png'
import caixa from '/src/assets/images/caixa.jpg'



export default function App(){
    return(
        <div>
        <header>
        <div className="cabecalho">
        <img src={logo}alt="logo" className='logo' />

        <div className="Area_link">
            <Link to={'/'} className='link'> INICIO</Link>
            <Link to={'/doar'} className='link'>DOAR</Link>
            <Link to={'/ongs'} className='link'>PARCEIRAS</Link>
            <Link to={'/sobre'}className='link'>SOBRE NÓS</Link>




        </div>
        </div>

        </header>

        <main >

        <div className="container_central">   
       
        <div className="container_img">
            <img src={caixa} />
        </div>
        <div className="container_infromacao">
        <h1>O que  é a <span className='destaque'>DonNet?</span></h1>

        <p>
        Somos um grupo movido pela <span className='destaque'>solidariedade</span> e pelo desejo genuíno de fazer a diferença. Acreditamos no poder dos gestos simples, capazes de transformar realidades e renovar esperanças.
        Nossa plataforma nasceu para conectar pessoas que querem ajudar a causas que precisam ser ouvidas. Com ética, transparência e compromisso social, criamos um ambiente seguro onde cada doação se transforma em impacto positivo.
        
        </p>



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

         <section >

            <div className="carrossel">


            </div>
        </section>


        <footer>

            <div className="contatos">



            </div>
        </footer>
        </div>
    )
}