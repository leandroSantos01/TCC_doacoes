import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logo.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'



export default function Cabecalho() {
  const [user, setUser] = useState('');
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();





  useEffect(() => {
    let nomeUser = localStorage.getItem("USUARIO")
    if (nomeUser == undefined || nomeUser == null) {
      setLogado(false)

    }
    else {
      setLogado(true)
      setUser(nomeUser)
    }
  })



  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => { setMenuAberto(!menuAberto) }
  const fecharMenu = () => { setMenuAberto(false) }


  return (
    /* <header>
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
                */

    <header>
      <div className="cabecalho">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>

        <button
          className={`menu-icon ${menuAberto ? 'aberto' : ''}`}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          onClick={toggleMenu}
        >
          {menuAberto ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>  
        </div>

        <nav className={`Area_link ${menuAberto ? 'ativo' : ''}`}>

          {logado && (
            <div>
              <Link to={'/ongs'} onClick={fecharMenu}>ONGS</Link>
            </div>
          )}

          {!logado && (
            <div>
              <Link to={'/login'} onClick={fecharMenu}>LOGIN</Link>
              <Link to={'/cadastro'} onClick={fecharMenu}>CADASTRO</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}