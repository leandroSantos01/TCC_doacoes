import './rodape.scss'
import logo from '/src/assets/images/logo.png'

import { Link } from 'react-router';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { useState, useEffect } from 'react';


export default function Rodape() {
    const [user, setUser] = useState('');
  const [logado, setLogado] = useState(false);

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


  return (
    <>
{logado ? null : null}

      <footer >
        <div className="rodape">
          <img src={logo} />
          <nav>

            <div className="inicio">
              <h2>Início</h2>
              {logado && 
              <div> 
              <Link to={"/"} >  <a>Home</a></Link>
              </div>
          }
              {!logado && 
              <div> 
              <Link to={"/cadastro"}><a>Cadastro</a></Link>
            </div>
            }
            </div>
            

            <div className="sobre">
              <h2>Sobre Nós</h2>

              <Link to={"/desenvolvedores"}><a>Quem Somos</a></Link>
            </div>

            <div className="contatos">
              <h2>Contato</h2>
              <a>Telefone/WhatsApp: (11) 91234-5678</a>
              <a>E-mail: contato@seuprojeto.org</a>
              <div className='contatos_imgs'>

                <FaInstagram size={30} />
                <FaFacebookSquare size={30} />
                <FaSquareXTwitter size={30} />
              </div>

            </div>
          </nav>


        </div>
        <p>© 2025 Curso Info. Todos os direitos reservados.</p>

      </footer>

    </>
  )
}
