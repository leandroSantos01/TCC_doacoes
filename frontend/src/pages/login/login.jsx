import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import Rodape from "../../components/Rodape/Rodape.jsx";


import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from '../../api.js';

import boneco from '/src/assets/images/boneco.png';

import '/src/scss/global.scss'
import '/src/scss/fonts.scss'
import './login.scss';

export default function Cadastro() {
    const navigate = useNavigate()
    
 
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { ...formData };

        try {
            let response = await api.post('/login', dataToSend);
            localStorage.setItem("TOKEN", response.data.token);
            localStorage.setItem("USUARIO", response.data.usuario);
            navigate('/');
            console.log(formData);
        } catch (err) {
            alert("Credenciais inválidas");
            console.log(err);
        }
    };


    return (
        <div>

            <Cabecalho />


    <main>
    <div className="container-login">
        <div className="irmas-login">
<<<<<<< Updated upstream
                <div onSubmit={handleSubmit} className="container-filha1-login">
=======
            <form className="caixa_form" onSubmit={handleSubmit}>
                <div className="container-filha1-login">
>>>>>>> Stashed changes

                    <h1>Login</h1>
                    <p>Venha fazer parte da nossa comunidade.</p>
             
                    <div className="container-input-login">
                        <label>Email</label>
                        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="container-input-login">
                        <label>Senha</label>
                        <input type="password" placeholder='Inserir senha' name='senha' value={formData.senha} onChange={handleChange} />
                    </div>

                    <button type="submit" className="cadastrar-se">ENTRAR</button>
                    
                </div>
<<<<<<< Updated upstream
=======
                </form>
                
>>>>>>> Stashed changes

            <div className="container-filha2-login">
                <img src={boneco} alt="" />
            </div>
            

        </div>

    </div>

    </main>
            <Rodape />


        </div>
    )

}