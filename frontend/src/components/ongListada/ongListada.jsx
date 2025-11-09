import './ongListada.scss';

import Cao from '/src/assets/images/cao.png'

export default function ongListada({imagem, nome, endereço, contato}) {
    return (
        <li className='lista'>
            <div className='card'>
                <img src={imagem} style={{
                    objectFit:"cover",width:'200px', height:"200px"}}/>

                <div className='texto'>
                    <h2>{nome}</h2>
                    <p>{endereço}</p>
                    <p>{contato}</p>
                </div>
            </div>
        </li>
    );
}