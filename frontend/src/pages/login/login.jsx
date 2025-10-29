import Cabecalho from "../../components/cabecalho/Cabecalho.jsx";
import { useState } from "react";
import * as api from '../../api.js';

import boneco from '/src/assets/images/boneco.png';
import './login.scss';

export default function Cadastro(){

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
            await api.post('/login', dataToSend);
            alert('Logado!');
            console.log(formData);
        } catch (err) {
            console.log(err);
        }
    };

return(
    <div>
        
        <Cabecalho />
     

        <main>
            <div className="container-login">
                <div className="irmas-login">
                <div className="container-filha1-login">
                    <form onSubmit={handleSubmit}>

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

                   

                        <button type="submit" className="cadastrar-se">LOGAR</button>
                    </form>

                </div>

                <div className="container-filha2">
                    <img src={boneco} alt="" />
                    
                </div>

                </div>

            </div>

        </main>
    </div>
)

}