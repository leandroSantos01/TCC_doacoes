import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { Toaster, toast } from "react-hot-toast"

import { FaSearch } from "react-icons/fa";

import api from "../../api"

import { useState, useEffect, use } from "react"
import ModalOngs from "../../components/modalOng/Index"
import OngListada from "../../components/ongListada/ongListada"
import Cao from '/src/assets/images/cao.png'
import Caramelo from '/src/assets/images/caramelo.png'
import Amigos from '/src/assets/images/amigos.png'
import Doar from '/src/assets/images/doar.png'
import Crianca from '/src/assets/images/crianca.png'
import { Link } from "react-router"

export default function Ongs() {
  const [modalOngs, setModalOngs] = useState(false)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contato, setContato] = useState("");
  const [user, setUser] = useState('');
  const [logado, setLogado] = useState(false);
  const [pesquisa, setPesquisa] = useState('');

  const [ongs, setOngs] = useState([]);
  



   async function acharCate() {

  try {
    const resp = await api.get(`/listar/ongs/categoria/${pesquisa}`);
    console.log(resp.data);
    setOngs(resp.data);


    

  } catch (error) {
    console.error(error);
 
  }
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


  useEffect(() => {
    listar();
  }, []);

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

    if (cnpj.length != 14) {
      toast.error('CNPJ inválido!');
      return;
    }

    if (categoria.length <= 1) {
      toast.error('Categoria inválida!');
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
              <input type="text" placeholder="Digite o nome ou categoria " value={pesquisa} onChange={e=>setPesquisa(e.target.value)} />
              <hr />
              <button onClick={acharCate} className="btn_pesquisa"><FaSearch /></button>
            </div>

            <button className="cadastrar_ong" onClick={() => { if (!logado) { toast.error('Você precisa estar logado!'); return; } setModalOngs(true); }}>Cadastrar Ongs</button>

          </div>

          <div className="ongs">

            <ul>
              <Link to='/caosemdono' style={{ textDecoration: 'none', color: 'black' }}>
              <OngListada
                imagem={Cao}
                nome="Cão sem dono"
                endereço="Rua Vitor Emanuel, 200, Sacomã, SP"
                contato="(11) 95471-2195"
              />
              </Link>
              <Link to='/criancaEsperanca' style={{ textDecoration: 'none', color: 'black' }}>
              <OngListada
                imagem={Crianca}
                nome="Crianca Esperança"
              />
              </Link>
              <Link to='/institutoCaramelo' style={{ textDecoration: 'none', color: 'black' }}>
              <OngListada
                imagem={Caramelo}
                nome="Instituto Caramelo"
                contato="Email para adotar: queroadotar@icaramelo.org"
              />
              </Link>
              <Link to='/amigosDoBem' style={{ textDecoration: 'none', color: 'black' }}>
              <OngListada
                imagem={Amigos}
                nome="Amigos do bem"
                endereço="Rua Dr. Gabriel de Resende, 122"
                contato="(11) 3019-0107"
              />
              </Link>
              <Link to='/paraQuemDoar' style={{ textDecoration: 'none', color: 'black' }}>
              <OngListada
                imagem={Doar}
                nome="Para quem doar"
              />
              </Link>
              {ongs.map((registros, id) => (
                <Link
                  key={id}
                  to={`/ongs/${registros.nome}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <OngListada
                    imagem={'https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-vector-40343347.jpg'}
                    nome={registros.nome}
                    endereço={registros.endereco}
                    contato={registros.contato}
                    descricao={registros.descricao}
                  />
                </Link>
              ))}
              
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
              <input type="file" value={endereco} onChange={e => setEndereco(e.target.value)} />
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