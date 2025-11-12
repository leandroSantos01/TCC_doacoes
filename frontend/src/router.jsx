import {Route,Routes,BrowserRouter} from 'react-router'
import Index from './pages/home/index.jsx'
import Cadastro from './pages/cadastro/cadastro.jsx'
import Login from './pages/login/login.jsx'
import Ongs from './pages/Ongs/Ongs.jsx'
import Dev from './pages/Dev/index.jsx'
import PaginasOngs from './pages/pagOng/pagOng.jsx'

import CaoSemDono from './pages/especificas/CaoSemDono/CaoSemDono.jsx'
import AmigosDoBem from './pages/especificas/AmigosDoBem/AmigosDoBem.jsx'
import CriancaEsperanca from './pages/especificas/CriancaEsperanca/CriancaEsperanca.jsx'
import InstitutoCaramelo from './pages/especificas/InstitutoCaramelo/InstitutoCaramelo.jsx'
import ParaQuemDoar from './pages/especificas/ParaQuemDoar/ParaQuemDoar.jsx'


import LoginDevs from './pages/LoginDevs/index.jsx'
import PagAdm from './pages/pagPrincipaAdm/pagAdm.jsx'
import OrgsAdmin from './pages/OrgsAdm/orgsAdm.jsx'


export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/ongs' element={<Ongs/>}/>
            <Route path='/desenvolvedores' element={<Dev/>}/>
            <Route path='/paginasOngs' element={<PaginasOngs/>}/>
            
            <Route path='/caoSemDono' element={<CaoSemDono/>}/>
            <Route path='/amigosDoBem' element={<AmigosDoBem/>}/>
            <Route path='/criancaEsperanca' element={<CriancaEsperanca/>}/>
            <Route path='/institutoCaramelo' element={<InstitutoCaramelo/>}/>
            <Route path='/paraQuemDoar' element={<ParaQuemDoar/>}/>


            <Route path='/LoginDev' element={<LoginDevs/>}/>
            <Route path='/pageDev' element={<PagAdm/>}/>
            <Route path='/orgsDev' element={<OrgsAdmin/>}/>
            



            
        </Routes>
        </BrowserRouter>
    )
}