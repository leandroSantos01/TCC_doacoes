import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"
import OngListada from "../../components/ongListada/ongListada"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { Toaster, toast } from "react-hot-toast"

import { FaSearch } from "react-icons/fa";

import api from "../../api"

import { useState, useEffect } from "react"
import ModalOngs from "../../components/modalOng/Index"


import Cao from '/src/assets/images/cao.png'



export default function Ongs() {
  const [modalOngs, setModalOngs] = useState(false)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contato, setContato] = useState("");
  const [listaOng, setListaOng] = useState([]);
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



  async function Cadastrar() {

    let body = {
      nome,
      email,
      endereco,
      cnpj,
      categoria,
      contato
    };


    if (nome.length <= 1 && email.length <= 1 && endereco.length <= 1 && cnpj.length <= 1 && categoria.length <= 1) {
      toast.error('Preencha todos os campos corretamente!');
      return;
    }

    if (nome.length <= 1) {
      toast.error('Nome inválido!');
      return;
    }

    if (email.length <= 1) {
      toast.error('Email inválido!');
      return;
    }

    if (endereco.length <= 1) {
      toast.error('Endereço inválido!');
      return;
    }

    if (cnpj.length <= 1) {
      toast.error('CNPJ inválido!');
      return;
    }

    if (categoria.length <= 1) {
      toast.error('Categoria inválida!');
      return;
    }

    if (categoria.length <= 1) {
      toast.error('Contato inválida!');
      return;
    }

    try {
      await api.post("/cadastro/ong", body)
      toast.success('Ong criada com sucesso.')
      setNome("");
      setEmail("");
      setEndereco("");
      setCnpj("");
      setCategoria("");
      setContato("");
      setModalOngs(false)
    }

    catch (e) {
      toast.error(e.response?.data?.error || 'Erro ao cadastrar ong ');
    }
  }

  return (
    <div>
      {logado ? null : null}
      <Cabecalho />

      <main className="page_ongs">

        <div className="central_ongs">

          <div className="btn">
            <div className="pesquisa">
              <input type="text" placeholder="Digite o nome ou categoria " />
              <hr />
              <button className="btn_pesquisa"><FaSearch /></button>
            </div>

            <button className="cadastrar_ong" onClick={() => { if (!logado) { toast.error('Você precisa estar logado!'); return; } setModalOngs(true); }}>Cadastrar Ongs</button>

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

      <Rodape />

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
              <input name="email" type="email" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
              <label>Endereço</label>
              <input type="text" placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)} />
            </div>


          </div>
        }

        conteudo2={
          <div>

            <div>
              <label>Contato (telefone, email ou link do site)</label>
              <input type="text" placeholder='Contato' value={contato} onChange={e => setContato(e.target.value)} />
            </div>

            <div>
              <label>CNPJ (sem pontos e barras)</label>
              <input type="text" placeholder='CNPJ' value={cnpj} onChange={e => setCnpj(e.target.value)} />
            </div>

            <div>
              <label>Categoria</label>
              <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="" disabled hidden>Selecione uma categoria</option>
                <option>Ambiental</option>
                <option>Assistência social</option>
                <option>Educação</option>
                <option>Saúde</option>
                <option>Causa animal</option>
              </select>
            </div>

          </div>
        } />


      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </div>
  )

}