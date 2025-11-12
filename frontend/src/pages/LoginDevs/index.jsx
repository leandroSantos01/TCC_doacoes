import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";

import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../components/Rodape/Rodape.jsx";
import api from "../../api.js";
import Boneco from "/src/assets/images/boneco.png";

import "/src/scss/global.scss";
import "/src/scss/fonts.scss";
import "./index.scss";

export default function LoginDevs() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");

    // Verifica se já há usuário logado
    useEffect(() => {
        const usuarioLogado = localStorage.getItem("USUARIO");
        if (usuarioLogado != null || usuarioLogado != undefined) {
            setUsuario(usuarioLogado);
            navigate("/");
        }
    }, []);

    // Faz o scroll pro topo ao carregar
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
                toast.error("Email inválido");
                return;
            }

            if (formData.senha.length <= 1) {
                toast.error("Senha inválida");
                return;
            }


            const response = await api.post("/login/administrador", formData);

            console.log(response.data)
            localStorage.setItem("TOKEN", response.data.token);
            localStorage.setItem("ADMIN", response.data.admin);
            navigate("/");

        } catch (err) {
            console.log(err);
            toast.error("Usuário não encontrado");
        }
    };

    return (
        <div className="maior">
            <div className="Container-Cabecalho">
                <Cabecalho />
            </div>

            <div className="Container-Mae">
                <div className="Container-Cards">
                    <form className="filha1" onSubmit={handleSubmit}>
                        
                        <h1>Login Devs</h1>
                        <p>Venha fazer parte da nossa comunidade.</p>
                        <div>
                        <label className="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        </div>


                        <div>
                        <label className="senha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            placeholder="Inserir senha"
                            value={formData.senha}
                            onChange={handleChange}
                        />
                        </div>

                        <p>
                            Caso não tenha uma conta!
                            <Link to="/cadastro"> Cadastrar-se</Link>
                        </p>

                        <button type="submit">Entrar</button>
                    </form>

                    <div className="filha2">
                        <img src={Boneco} alt="Boneco Login" height={"500px"} />
                    </div>
                </div>
            </div>

            <Rodape />

            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
