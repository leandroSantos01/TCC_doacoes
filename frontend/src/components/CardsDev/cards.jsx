
import './cards.scss'


export default function CardsDev({ imagem, desc, nome, virar }) {
    return (
        <div>
            <main className='conteiner-dev'>
            <div className="conteiner-card ">

                <img src={imagem} className={`img ${virar ? "virar" : ''} `}/>
                    
                    <div className="desc">
                        <h3>{nome}</h3>
                        <p>{desc}</p>
                    </div>

            </div>
            </main>
        </div>
    )
}