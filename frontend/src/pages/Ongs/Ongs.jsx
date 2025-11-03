import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { useState } from "react"
import ModalOngs from "../../components/modalOng/Index"



export default function Ongs() {
    const [salvaongs,setSalvarongs] =useState()
    const [modalOngs, setModalOngs] = useState(false)


    return (
        <div>
            <Cabecalho />
            <main className="page_ongs">
            
                <div className="central_ongs">

                <div className="btn">
                    <button onClick={()=>setModalOngs(true)}>Cadastrar Ongs</button>

                </div>


                    
                </div>
            </main>
           
            <Rodape/>

<ModalOngs
  aberto={modalOngs}
  titulo={'Cadastro de Ongs'}
  fechado={() => setModalOngs(false)}
  cadastrar={'ola'}
  conteudo={
    <div>
        
      <div>
        <label>Nome</label>
        <input placeholder='nome' type='text' />
      </div>

      <div>
        <label>Email</label>
        <input placeholder='email' type='email' />
      </div>

      <div>
        <label>Senha</label>
        <input type="password" placeholder='senha' />
      </div>

       <div>
        <label>Endereço</label>
        <input type="text" placeholder='endereço' />
      </div>


    </div>
  }

conteudo2={
    <div>
       
      <div>
        <label>CNPJ</label>
        <input type="text" placeholder='CNPJ' />
      </div>
  <div>
        <label>Categoria</label>
        <select>
          <option disabled selected hidden>Selecione um tipo</option>
          <option>Ambiental</option>
          <option>Assistência social</option>
          <option>Educação</option>
          <option>Saúde</option>
          <option>Proteção animal</option>
        </select>
      </div>

      </div>
}/>





        </div>
    )
}