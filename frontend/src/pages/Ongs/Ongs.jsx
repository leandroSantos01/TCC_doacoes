import Cabecalho from "../../components/cabecalho/Cabecalho"
import Rodape from "../../components/Rodape/Rodape"

import './ongs.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { useState } from "react"
import ModalOngs from "../../components/modalOng/Index"



export default function Ongs() {
    const [salvaongs,setSalvarongs] =useState()
    const [modalOngs, setModalOngs] = useState(false)


    return (
        <div>
            <Cabecalho />
            <main className="page_ongs">
            
                <div className="central_ongs">

                <div className="btn">
                    <button onClick={()=>setModalOngs(true)}>Cadastrar Ongs</button>

                </div>


                    
                </div>
            </main>
           
            <Rodape/>


<ModalOngs
aberto={modalOngs}
titulo={'Cadastro de Ongs'}
fechado={()=> setModalOngs(false)}/>




        </div>
    )
}