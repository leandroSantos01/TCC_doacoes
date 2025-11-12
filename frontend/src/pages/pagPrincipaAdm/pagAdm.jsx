import Cabecalho from '../../components/cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'

import { Link } from 'react-router'

import './pagAdm.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'

import { GrOrganization } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import api from '../../api'
import { useState } from 'react'



export default function PagAdm() {


    return (
        <div>
            <Cabecalho />
            <main className='pag_devsInicio'>

                <section className='area_Devs'>

                    <h1>Ola admin seja bem Vindo</h1>

                    <div>

                        <Link to={'/orgsDev'}><GrOrganization /> Ongs Cadastradas</Link>



                        <Link to={'/usersDev'}><FaUser/> Usuarios Logados</Link>
                    </div>

                </section>


            </main>

            <Rodape />
        </div>
    )
}