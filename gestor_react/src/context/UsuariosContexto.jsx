import { createContext, useContext, useState } from 'react'
import {ObtenerUsuariosAPI} from '../services/UsuariosAPID.js'

const UsuariosContexto = createContext(null)

export function UsuariosProvider ({children}){
    const [usuarios, setUsuarios] = useState([])
    const [errores, setErrores] = useState(null)
    const [EstaCargando, setCargando] = useState(false)
    const [usuariosFavoritos, setUsuariosFavoritos] = useState([])

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

    function obtenerFavorito(id) {
        const posicionFavo = usuariosFavoritos.findIndex((usuario) => usuario.id === id);

        if (posicionFavo === -1) {
            const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);

            if (usuarioEncontrado) {
                setUsuariosFavoritos((existentes) => [...existentes, usuarioEncontrado]);
            }
        } else {
            setUsuariosFavoritos((existentes) => existentes.filter((usuario) => usuario.id !== id));
        }
    }

    function eliminarFavorito(id){
        setUsuariosFavoritos((existentes) =>
            existentes.filter((usuario) => usuario.id !== id));
    }

    return (
        <UsuariosContexto.Provider value={{ usuarios, EstaCargando, errores, subirUsuariosAPI, usuariosFavoritos, obtenerFavorito, eliminarFavorito }}>
            {children}
        </UsuariosContexto.Provider>
    )

}

export function usarDatosUsuarios(){
    return useContext(UsuariosContexto)
}