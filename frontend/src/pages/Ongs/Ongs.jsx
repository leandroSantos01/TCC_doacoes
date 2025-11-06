import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"
import OngListada from "../../components/ongListada/ongListada"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { FaSearch } from "react-icons/fa";

import api from "../../api"

import { useState } from "react"
import ModalOngs from "../../components/modalOng/Index"


import Cao from '/src/assets/images/cao.png'



export default function Ongs() {
    const [modalOngs, setModalOngs] = useState(false)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [categoria, setCategoria] = useState("");
    const [listaOng, setListaOng] = useState([]);
  

    async function Cadastrar() {
      if(!nome|| !email || !endereco || !cnpj ||!categoria){
        alert('Preencha todos os campos.')
      }

       let body = {
        "nome":nome,
        "email":email,
        "endereco":endereco,
        "cnpj":cnpj,
        "categoria":categoria
       }
       try {
        const resp = await api.post("/cadastro/ong", body)
        .then(() => setListaOng([...listaOng, novoItem]), alert('ONG Cadastrada'))
        .catch((e) => e.resp.error)

        
      } catch (e) {
        alert(e.response?.data?.erro || "Erro ao cadastrar ONG.");
      }
    }
      
    
      
    


    return (
        <div>
            <Cabecalho />
            
            <main className="page_ongs">
            
                <div className="central_ongs">

                <div className="btn">
                    <div className="pesquisa">
                    <input type="text" placeholder="Digite o nome ou categoria "   />
                    <hr />
                    <button className="btn_pesquisa"><FaSearch /></button>
                    </div>  

                    <button className="cadastrar_ong" onClick={()=>setModalOngs(true)}>Cadastrar Ongs</button>

                </div>

                <div className="ongs">

                <ul>
                  <OngListada
                    imagem={Cao}
                  />

                </ul>

                </div>

                </div>
            </main>
           
            <Rodape/>

<ModalOngs
  aberto={modalOngs}
  titulo={'Cadastro de Ongs'}
  fechado={() => setModalOngs(false)}
  cadastrar={Cadastrar}
  conteudo={
    <div>
        
      <div>
        <label>Nome</label>
        <input placeholder='Nome' type='text' value={nome} onChange={e => setNome(e.target.value)} />
      </div>

      <div>
        <label>Email</label>
        <input placeholder='Email' type='email' value={email} onChange={e=> setEmail(e.target.value)}/>
      </div>

       <div>
        <label>Endereço</label>
        <input type="text" placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}/>
      </div>


    </div>
  }

conteudo2={
    <div>
       
      <div>
        <label>CNPJ</label>
        <input type="text" placeholder='CNPJ' value={cnpj} onChange={e => setCnpj(e.target.value)}/>
      </div>
      <div>
        <label>Categoria</label>
        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option disabled selected hidden>Selecione uma categoria</option>
          <option>Ambiental</option>
          <option>Assistência social</option>
          <option>Educação</option>
          <option>Saúde</option>
          <option>Causa animal</option>
        </select>
      </div>

    </div>
    }/>

  </div>
  )

}