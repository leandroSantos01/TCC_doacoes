import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '/src/assets/images/logo.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FaBars, FaTimes } from 'react-icons/fa'
import Perfil from '../perfil/perfil'



export default function Cabecalho() {
  const [user, setUser] = useState('');
  const [logado, setLogado] = useState(false);
  const [modal, setModal] = useState(false)
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("USUARIO")
    navigate('/login')
    setModal(false)
  }

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
            {menuAberto ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <nav className={`Area_link ${menuAberto ? 'ativo' : ''}`}>

          {logado && (
            <div>
              <Link to={'/ongs'} onClick={fecharMenu}>ONGS</Link>
              <button onClick={() => setModal(true)}>PERFIL</button>
            </div>
          )}

          {!logado && (

            <div>
              <Link to={'/ongs'} onClick={fecharMenu}>ONGS</Link>
              <Link to={'/login'} onClick={fecharMenu}> LOGIN </Link>
              <Link to={'/cadastro'} onClick={fecharMenu}> CADASTRO </Link>

            </div>

          )}


        </nav>

      </div>
      <Perfil
        aberto={modal}
        fechado={() => setModal(false)}
        conteudo={user}
        logout={Logout}
      />

    </header>
  )
}