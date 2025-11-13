import Cabecalho from '../../components/cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'

import { Link, Navigate } from 'react-router'

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'

import './orgsAdm.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'
import api from '../../api'






export default function OrgsAdmin(){
    const navigate = useNavigate()
    const [lista,setLista] = useState([])
       

    useEffect(() => {
        const ADM = localStorage.getItem("ADMIN");
        if (ADM == null || ADM == undefined) {

            navigate("/");

        }
    
    }, []);

   



    async function ListarOngs() {
        try{
        let resp = await api.get('/listar/ongs')
        setLista(resp.data)}
        catch(err){
            console.log(err);
            
        }
        
    }



    return(
        <div>


            <main className="Orgs_admin">

                    <div className="central_aprovar">
                        


                    </div>

            </main>


        </div>
    )
}