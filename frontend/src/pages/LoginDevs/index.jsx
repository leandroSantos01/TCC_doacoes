import './index.scss'
import Cabecalho from '../../components/cabecalho/Cabecalho.jsx'
import Boneco from '../../assets/images/boneco.png'
export default function LoginDevs(){

return(

<div className="maior">
<div className="Container-Cabecalho">
<Cabecalho/>
</div>

<div className="Container-Mae">
    
<div className="Container-Cards">
    <div className="filha1">
        <h1>LOGIN DEVS</h1>

            <label className='email' htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder='Email'/>
            <label className='senha' htmlFor="">Senha</label>
            <input type="password" name="" id="" placeholder='Inserir Senha' />
            <button>Entrar</button>

    </div>
    <div className="filha2">
<img src={Boneco} alt="" height={'500px'}/>

    </div>


</div>



</div>

</div>
)





}