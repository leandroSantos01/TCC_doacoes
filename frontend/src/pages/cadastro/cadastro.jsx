import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import { useState } from "react";
import api from '../../api.js';

import boneco from '/src/assets/images/boneco.png';
import './cadastro.scss';
import Rodape from "../../components/Rodape/Rodape.jsx";

export default function Cadastro() {

    const [formData, setFormData] = useState({
        email: '',
        usuario: '',
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
            await api.post('/cadastro/conta', dataToSend);
            alert('Logado!');
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
                                    <label>Usuário</label>
                                    <input type="text" placeholder='Usuário' name='usuario' value={formData.usuario} onChange={handleChange} />
                                </div>

                                <div className="container-input">
                                    <label>Senha</label>
                                    <input type="password" placeholder='Inserir senha' name='senha' value={formData.senha} onChange={handleChange} />
                                </div>

                                <div className="container-check">
                                    <input type="checkbox" name="" id="" />
                                    <label>Declaro que li e concordo com os <a href="">Termos de Uso.</a></label>
                                </div>

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
        </div>
    )

}