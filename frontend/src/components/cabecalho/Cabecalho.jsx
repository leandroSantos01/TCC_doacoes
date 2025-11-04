import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logo.png'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'



export default function Cabecalho(){
    const [user,setUser] = useState('');
    const [logado,setLogado] = useState(false);
    const navigate = useNavigate();





    useEffect(()=>{
        let nomeUser  = localStorage.getItem("USUARIO")
        if(nomeUser ==undefined || nomeUser ==null){
            setLogado(false)

        }
        else{
            setLogado(true)
            setUser(nomeUser)
        }
    })




    return(
        <header>
        <div className="cabecalho">
        <Link to={"/"}>
            <img src={logo}alt="logo" className='logo' />
        </Link>

        <div className="Area_link">

            {logado ? 'logado':''}

            {logado && <div>
                <Link to={'/ongs'} > ONGS</Link>    
            </div>}

            {!logado && 
            <div>
                <Link to={'/login'} >LOGIN</Link>
                <Link to={'/cadastro'}>CADASTRO</Link>
            </div>}
            





        </div>
        </div>

        </header>

    )
}