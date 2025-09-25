import {Route,Routes,BrowserRouter} from 'react-router'
import Index from './pages/home/index.jsx'

export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
        </Routes>
        </BrowserRouter>
    )
}