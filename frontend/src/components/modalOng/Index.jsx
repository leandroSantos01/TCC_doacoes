import './index.scss'


export default function ModalOngs({aberto , fechado,titulo}){

    if(aberto) return(
    <div className='central_modal'>
    <div className="titulo_modal">
    <h2>{titulo}</h2>
    </div>

    <div className="central_cadastro">
   

    <div className="caixa_esquerda">
    
    <div>
    <label htmlFor="">nome</label>
    <input placeholder='nome' type='text'/>
    </div>
   

    <div>
    <label>Email</label>
    <input placeholder='emeil' type='email'  />
    </div>

    <div>
    <label>Senha</label>
    <input type="password" placeholder='senha'/>
    </div>

    <div>
    <label>Endereco</label>
    <input type="text" placeholder='endereço' />
    </div>
  
 </div>


    <div className="caixa_direita">
    <div>
    <label>CNPJ</label>
    <input type="text" placeholder='CNPJ'/>
    </div>




        <div>

        <label htmlFor="">Categoria</label>    
    <select  >
 
    <option  disabled selected hidden>Selecione um tipo</option>
    <option >Ambiental</option>
    <option > Assistencia social</option>
    <option >Educação</option>
    <option >Saude</option>
    <option >Proteção animal </option>
    </select>

    </div>

    </div>

  
    </div>
    
    <div className="btn">
        <button >Cadastrar</button>
        <button onClick={fechado} className='diferente'>Fechar</button>
    </div>

    </div>
    )
    }