
import './cards.scss'


export default function CardsDev({ imagem, desc, nome, virar }) {
    return (
        <div>
            <main className='conteiner-dev'>
            <div className="conteiner-card ">

               
                    
                    <div className="desc">
                         <img src={imagem} className={`img ${virar ? "virar" : ''} `}/>
                        <h3>{nome}</h3>
                        <p>{desc}</p>
                    </div>

            </div>
            </main>
        </div>
    )
}