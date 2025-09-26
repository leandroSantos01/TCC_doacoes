import {Link} from 'react-router'

import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import logo from '/src/assets/images/logos.png'



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

        <main className="container_central">
       
        <div className="container_img">
            <img src="" alt="" />
        </div>
        <div className="container_infromacao">
        <h1></h1>

        <p>
        
        </p>



        </div>

   



        </main>

        <main className="container_conteudo">
            

        <div className="conteudo">


        </div>


        </main >

        


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