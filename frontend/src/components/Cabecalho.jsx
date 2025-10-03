import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logos.png'



export default function Cabecalho(){
    return(
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

    )
}