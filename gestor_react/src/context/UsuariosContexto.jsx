import { createContext, useContext, useState } from 'react'
import {ObtenerUsuariosAPI} from '../services/UsuariosAPID.js'

const UsuariosContexto = createContext(null)

export function UsuariosProvider ({children}){
    const [usuarios, setUsuarios] = useState([])
    const [errores, setErrores] = useState(null)
    const [EstaCargando, setCargando] = useState(false)


    async function subirUsuariosAPI() {
        
        setCargando(true)
        setErrores(null)

        try {
            const usuariosObtenidos = await ObtenerUsuariosAPI()
            setUsuarios(usuariosObtenidos)
            
        } catch (e) {
            
            setErrores ("Se produjo un error: " + e.message)

        }finally{
            setCargando(false)
        }

    }


    return (
        <UsuariosContexto.Provider value={{ usuarios, EstaCargando, errores, subirUsuariosAPI }}>
            {children}
        </UsuariosContexto.Provider>
    )

}

    export function usarDatosUsuarios(){
        return useContext(UsuariosContexto)
    }
