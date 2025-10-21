import './rodape.scss'
import Imagem from '/src/assets/images/logos.png'

export default function Rodape() {

  return (
    <>

    
      <footer >
        <div className="rodape">
        <nav>
          <img src={Imagem}/>
          <div className="inicio">
            <h2>Início</h2>
            <a>Home</a>
            <a>Cadastro</a>
            <a>Sobre</a>
          </div>

          <div className="sobre">
            <h2>Sobre Nós</h2>
            <a>Informações do site</a>
            <a>Quem Somos</a>
          </div>

          <div className="contatos">
            <h2>Contato</h2>
            <a>Telefone/WhatsApp: (11) 91234-5678</a>
            <a>E-mail: contato@seuprojeto.org</a>
            </div>
        </nav>

        
        </div>
        <p>© 2024 Curso Info. Todos os direitos reservados.</p>

      </footer>

    </>
  )
}
