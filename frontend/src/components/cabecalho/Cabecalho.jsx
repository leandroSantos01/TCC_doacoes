import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logos.png'



export default function Cabecalho(){
    return(
        <header>
        <div className="cabecalho">
        <Link to={"/"}>
            <img src={logo}alt="logo" className='logo' />
        </Link>

        <div className="Area_link">
            <Link to={'/'} > INICIO</Link>
            <Link to={'/doar'} >DOAR</Link>
            <Link to={'/ongs'} >PARCEIRAS</Link>
            <Link to={'/sobre'}>SOBRE NÓS</Link>





        </div>
        </div>

        </header>

    )
}