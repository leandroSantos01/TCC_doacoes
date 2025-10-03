import Cabecalho from "../../components/Cabecalho";
import './cadastro.scss';

export default function Cadastro(){
    return(
        <div>
            <Cabecalho/>

        <main>

        <div className="container-mae">

  
<div className="container-filha1">
<h1>Cadastro</h1>
<p>Venha fazer parte da nossa comunidade.</p>

<div className="container-input">
    <label>Email</label>
    <input type="email" id="" />
</div>


<div className="container-input">
    <label>Usuario</label>
        <input type="text" name="" id="" />
</div>





<div className="container-input">
    <label>Senha</label>
    <input type="email" id="" />
</div>





<div className="container-check">
    
    <input type="checkbox" name="" id="" />
    <label>Declaro que li e concordo com os <a href="">Termos de Uso.</a></label>
</div>

<button className="cadastrar-se">Cadastrar</button>



</div>



<div className="container-filha2">


</div>



        </div>

        </main>
        </div>
    )
}