import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import { useState } from "react";
import api from '../../api.js';

import './cadastro.scss';
import boneco from '/src/assets/images/boneco.png';
import Rodape from "../../components/Rodape/Rodape.jsx";
import { Link, useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";


export default function Cadastro() {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        senha: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
        };
        try {
            if (formData.email.length <= 1 && formData.senha.length <= 1) {
                toast.error('Credenciais inválidas')
                return
            }

            if (formData.email.length <= 1) {
                toast.error('Email inválido')
                return
            }
            if (formData.username.length <= 1) {
                toast.error('Organização inválido')
                return
            }

            if (formData.senha.length <= 1) {
                toast.error('Senha inválida')
                return
            }

            if (check == false) {
                toast.error('Você deve aceitar os termos de uso!')
                return
            }




            let response = await api.post('/cadastro/conta', dataToSend);
            localStorage.setItem("TOKEN", response.data.token)
            localStorage.setItem("USUARIO", response.data.usuario)

            navigate('/')
            console.log(formData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>

            <Cabecalho />


            <main>
                <div className="container-mae">
                    <div className="irmas">
                        <div className="container-filha1">
                            <form onSubmit={handleSubmit}>

                                <h1>Cadastro</h1>
                                <p>Venha fazer parte da nossa comunidade.</p>

                                <div className="container-input">
                                    <label>Email</label>
                                    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="container-input">
                                    <label>Organização</label>
                                    <input type="text" placeholder='Organizacao' name='username' value={formData.username} onChange={handleChange} />
                                </div>

                                <div className="container-input">
                                    <label>Senha</label>
                                    <input type="password" placeholder='Inserir senha' name='senha' value={formData.senha} onChange={handleChange} />
                                </div>

                                <div className="container-check">
                                    <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                                    <label>Declaro que li e concordo com os <a href="">Termos de Uso.</a></label>
                                </div>
                                <p>Caso ja possua uma conta! <Link to={'/login'}> Entrar</Link></p>

                                <button type="submit" className="cadastrar-se">CADASTRAR-SE</button>
                            </form>

                        </div>

                        <div className="container-filha2">
                            <img src={boneco} alt="" />

                        </div>

                    </div>

                </div>

            </main>

            <Rodape />

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    )

}