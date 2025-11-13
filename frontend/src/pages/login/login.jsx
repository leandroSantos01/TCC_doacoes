import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../components/Rodape/Rodape.jsx";

import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../api.js";

import boneco from "/src/assets/images/boneco.png";

import "/src/scss/global.scss";
import "/src/scss/fonts.scss";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("USUARIO");
    if (usuarioLogado != null || usuarioLogado != undefined) {
      setUsuario(usuarioLogado);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData };

    try {
      if (formData.email.length <= 1 && formData.senha.length <= 1) {
        toast.error("Credenciais inválidas");
        return;
      }

      if (formData.email.length <= 1) {
        toast.error("Email invalido");
        return;
      }

      if (formData.senha.length <= 1) {
        toast.error("Senha invalida");
        return;
      }

      let response = await api.post("/login", dataToSend);
      localStorage.setItem("TOKEN", response.data.token);
      localStorage.setItem("USUARIO", response.data.usuario);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Usuário não encontrado ");
    }
  };

  return (
    <div>
      <Cabecalho />

      <main>
        <div className="container-login">
          <div className="irmas-login">
            <form className="caixa_form" onSubmit={handleSubmit}>
              <div className="container-filha1-login">
                <h1>Login</h1>
                <p>Venha fazer parte da nossa comunidade.</p>

                <div className="container-input-login">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="container-input-login">
                  <label>Senha</label>
                  <input
                    type="password"
                    placeholder="Inserir senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p>
                    Caso não tenha uma conta!
                    <Link to={"/cadastro"}> Cadastrar-se</Link>
                  </p>
                </div>

                <button type="submit" className="cadastrar-se">
                  ENTRAR
                </button>
              </div>
            </form>

            <div className="container-filha2-login">
              <img src={boneco} alt="" />
            </div>
          </div>
        </div>
      </main>
      <Rodape />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
