import HomePage from './pages/HomePage.jsx'
import {Route, Routes, Navigate} from 'react-router-dom'
import {UsuariosFavoritos} from './pages/UsuariosFavoritos.jsx'


export function App() {
  return(
    <Routes>
       <Route path = "/" element = {<Navigate to =  "/usuarios" replace/>} />
      <Route path = "/usuarios" element = {<HomePage/>} />
      <Route path = "/usuarios/favs" element = {<UsuariosFavoritos/>} />
    </Routes>
    
  )
  
}
export default App;
