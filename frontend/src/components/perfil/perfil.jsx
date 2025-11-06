import './perfil.scss'


export default function Perfil({fechado,aberto,conteudo,logout}){
    if(aberto) return(
        <div className="fundo_user">
            <div className="modal_User">
            <div className="conteudo">

            <h1>👤  {conteudo}</h1>

             <div className="area_button">

                <button className='diferente' onClick={fechado}>Cancelar</button>

                <button onClick={logout}>Sair</button>
                
            </div>

            </div>

           
            </div>
        </div>
    )

}