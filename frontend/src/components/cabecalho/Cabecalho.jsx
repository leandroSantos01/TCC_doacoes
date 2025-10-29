import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logo.png'



export default function Cabecalho(){
    return(
        <header>
        <div className="cabecalho">
        <Link to={"/"}>
            <img src={logo}alt="logo" className='logo' />
        </Link>

        <div className="Area_link">
            <Link to={'/ongs'} > ONGS</Link>
            <Link to={'/login'} >LOGIN</Link>
            <Link to={'/cadastro'}>CADASTRO</Link>





        </div>
        </div>

        </header>

    )
}