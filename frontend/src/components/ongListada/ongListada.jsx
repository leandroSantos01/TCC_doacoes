import './ongListada.scss';

import Cao from '/src/assets/images/cao.png'

export default function ongListada({imagem, nome, endereço, numero}) {
    return (
        <li className='lista'>
            <div className='card'>
                <img src={imagem}/>

                <div className='texto'>
                    <h2>{nome}</h2>
                    <p>{endereço}</p>
                    <p>{numero}</p>
                </div>
            </div>
        </li>
    );
}