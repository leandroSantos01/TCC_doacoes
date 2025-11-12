import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { Toaster, toast } from "react-hot-toast"
import axios from "axios"
import { FaSearch } from "react-icons/fa";

import api from "../../api"

import { useState, useEffect, use } from "react"
import ModalOngs from "../../components/modalOng/Index"
import OngListada from "../../components/ongListada/ongListada"
import { Link, unstable_setDevServerHooks } from "react-router"

export default function Ongs() {
  
  const [modalOngs, setModalOngs] = useState(false)
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contato, setContato] = useState("");
  const [descricao, setDescricao] = useState("");

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

  const [user, setUser] = useState('');
  const [logado, setLogado] = useState(false);

  const [ongs, setOngs] = useState([]);
  const [buscarOngs, setBuscarOngs] = useState('');

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [postPorPagina, setPostPorPagina] = useState(8);

  // async function acharCategoria() {
    
  //   try {
  //     const resp = await api.get(`/listar/ongs/categoria/${pesquisa}`);
  //     console.log(resp.data);
  //     setOngs(resp.data);
  //   } 
  //   catch (error) {
  //     console.error(error);
  
  //   }
  // }

  

  useEffect(() => {
    
    let nomeUser = localStorage.getItem("USUARIO")

    if (nomeUser == undefined || nomeUser == null) {
      setLogado(false)

    }
    else {
      setLogado(true)
      setUser(nomeUser)
    } 

    async function listar() {
      try {
        const resp = await api.get('/listar/ongs');
        setOngs(resp.data);
      } catch (e) {
        console.error('Erro ao listar ongs', e);
        setOngs([]);
      }
    }
    listar();
  }, []);

  async function Cadastrar() {

    let body = {
      nome,
      email,
      endereco,
      cnpj,
      categoria,
      contato,
      descricao
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

    if (cnpj.length != 14) {
      toast.error('CNPJ inválido!');
      return;
    }

    if (categoria.length <= 1) {
      toast.error('Categoria inválida!');
      return;
    }

    if (descricao.length > 200) {
      toast.error('Descrição muito grande!');
      return;
    }

    try {
      const resp = await api.post("/cadastro/ong", body);
      const novoId = resp.data?.novoId;

      if (novoId && arquivoSelecionado) {
        const form = new FormData();
        form.append('file', arquivoSelecionado);
        await api.put(`/upload/${novoId}/image`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      toast.success('Ong criada com sucesso.');
      setNome("");
      setEmail("");
      setEndereco("");
      setCnpj("");
      setCategoria("");
      setContato("");
      setDescricao("");
      setModalOngs(false);
      setArquivoSelecionado(null);

      listar();
    }

    catch (e) {
      toast.error(e.response?.data?.error || 'Erro ao cadastrar ong ');
    }
  }

  async function pesquisarOng() {
    let url = 'http://localhost:3010/listar/ongs';

    let resp = await axios.get(url);
    let ongsEncontradas = resp.data;
    setOngs(ongsEncontradas);
  }

  const lastPostIndex = paginaAtual * postPorPagina;
  const firstPostIndex = lastPostIndex - postPorPagina;
  const currentPosts = ongs.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {logado ? null : null}
      <Cabecalho />

      <main className="page_ongs">

        <div className="central_ongs">

          <div className="btn">
            <div className="pesquisa">
              <input type="text" placeholder="Digite o nome ou categoria " value={buscarOngs} onChange={e=>setBuscarOngs(e.target.value)} />
              <hr />
              <button onClick={pesquisarOng} className="btn_pesquisa"><FaSearch /></button>
            </div>

            <button className="cadastrar_ong" onClick={() => { if (!logado) { toast.error('Você precisa estar logado!'); return; } setModalOngs(true); }}>Cadastrar Ongs</button>

          </div>

          <div className="ongs">

            <ul>
              
              {ongs.map((registros, id) => {
                const fallback = 'https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-vector-40343347.jpg';
                let imageUrl = fallback;

                if (registros.url_image) {
                  if (/^https?:\/\//.test(registros.url_image)) {
                    imageUrl = registros.url_image;
                  } else {
                    const apiBase = (api && api.defaults && api.defaults.baseURL) ? api.defaults.baseURL.replace(/\/$/, '') : window.location.origin;
                    imageUrl = `${apiBase}${registros.url_image}`;
                  }
                }

                return (
                  <Link
                    key={id}
                    to={`/ongs/${registros.nome}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <OngListada
                      imagem={imageUrl}
                      nome={registros.nome}
                      endereço={registros.endereco}
                      contato={registros.contato}
                      descricao={registros.descricao}
                    />
                  </Link>
                )
              })}
              
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

            <div>
              <label>Imagem de exibição</label>
              <input type="file" accept="image/*" onChange={e => setArquivoSelecionado(e.target.files?.[0] ?? null)}/>
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

            <div>
              <label>Breve descrição sobre a ONG:</label>
              <input type="text" placeholder='Descrição' value={descricao} onChange={e => setDescricao(e.target.value)} />
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