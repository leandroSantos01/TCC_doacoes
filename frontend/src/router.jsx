import {Route,Routes,BrowserRouter} from 'react-router'
import Index from './pages/home/index.jsx'
import Cadastro from './pages/cadastro/cadastro.jsx'
import Login from './pages/login/login.jsx'
import Ongs from './pages/Ongs/Ongs.jsx'
import Dev from './pages/Dev/index.jsx'
import PaginasOngs from './pages/pagOng/pagOng.jsx'

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
            
        </Routes>
        </BrowserRouter>
    )
}