import './ongListada.scss';


export default function ongListada({imagem, nome, endereço, contato, mensagem}) {
    return (
        <li className='lista'>
            <div className='card'>
                <img src={imagem}/>

                <div className='texto'>
                    <h2>{nome}</h2>
                    <p>{endereço}</p>
                    <p>{contato}</p>
                    <p style={{fontSize:"13px"}}>{mensagem}</p>
                </div>
            </div>
        </li>
    );
}