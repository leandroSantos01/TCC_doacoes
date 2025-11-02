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

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        let userName = localStorage.getItem("USUARIO")

        if (userName != undefined && userName != null) {
            navigate('/')
        }
    }, [])


    async function Login(e) {
        e.preventDefault()

        let body = {
            email: email,
            senha: senha
        }
    
        try {
            let response = await api.post("/login", body);
            let token = response.data.token;
    
            localStorage.setItem("TOKEN", token);
            localStorage.setItem("USUARIO", email); // ou apenas algo simples
            navigate('/');
        } catch (err) {
            alert("Credenciais inválidas");
        }
    }

    return (
        <div>

            <Cabecalho />


    <main>
    <div className="container-login">
        <div className="irmas-login">
            <div className="container-filha1-login">
        
                <h1>Login</h1>
                <p>Venha fazer parte da nossa comunidade.</p>

                <div className="container-input-login">
                    <label>Email</label>
                    <input type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>


                <div className="container-input-login">
                    <label>Senha</label>
                    <input type="password" placeholder='Inserir senha' name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>



                <button type="submit" className="cadastrar-se" onClick={Login}>LOGAR</button>
                </div>
                
  

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