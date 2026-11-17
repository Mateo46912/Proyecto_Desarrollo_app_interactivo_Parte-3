import { usarDatosUsuarios } from "../context/UsuariosContexto.jsx";
import { useEffect, useState } from "react";
import TarjetaUsuario from "../components/TarjetaUsuario.jsx";

function HomePage() {
  const datosUsuarios = usarDatosUsuarios();
  const usuarios = datosUsuarios.usuarios;
  const errores = datosUsuarios.errores;
  const EstaCargando = datosUsuarios.EstaCargando;
  const subirUsuariosAPI = datosUsuarios.subirUsuariosAPI;
  const obtenerFavorito = datosUsuarios.obtenerFavorito;
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const usuariosFavs = datosUsuarios.usuariosFavoritos;
  useEffect(() => {
    subirUsuariosAPI();
  }, []);

  const usuariosBuscados = usuarios.filter((usuario) => {
    return usuario.name.toLowerCase().startsWith(textoBusqueda.toLowerCase());
  });

  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <label htmlFor="buscadorUsuario">Buscar usuario:</label>
      <input
        id="buscadorUsuario"
        type="text"
        placeholder="Ejm. Ervin"
        value={textoBusqueda}
        onChange={(textoEsc) => setTextoBusqueda(textoEsc.target.value)}
      ></input>
      
      <p>Usuarios Favoritos: {usuariosFavs.length}</p>

      {EstaCargando && <p>Cargando Usuarios...</p>}
      {errores && <p>{errores}</p>}

      {usuariosBuscados.map((usuario) => (
        <TarjetaUsuario key={usuario.id} usuario={usuario} esFavorito={obtenerFavorito} />
      ))}
    </div>
  );
}

export default HomePage;