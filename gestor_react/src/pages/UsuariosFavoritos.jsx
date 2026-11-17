import { usarDatosUsuarios } from "../context/UsuariosContexto";
import TarjetaUsuario from "../components/TarjetaUsuario";
import { Link } from "react-router-dom";

export function UsuariosFavoritos() {
  const datosUsuarios = usarDatosUsuarios();
  const errores = datosUsuarios.errores;
  const EstaCargando = datosUsuarios.EstaCargando;
  const usuariosFavoritos = datosUsuarios.usuariosFavoritos;
  const eliminarFavorito = datosUsuarios.eliminarFavorito;

  return (
    <div>
      <h1>Usuarios Favoritos</h1>

      <span id="contadorFavs">
        Usuarios Favoritos: {' '}{usuariosFavoritos.length}
      </span>

      <Link to="/">Volver al listado de usuarios</Link>

      {EstaCargando && <p>Cargando Usuarios...</p>}

      {errores && <p>{errores}</p>}

      <div id="instanciaTarjeta">
        {usuariosFavoritos.map((usuario) => (
          <TarjetaUsuario key={usuario.id} 
          usuario={usuario} 
          esFavorito={eliminarFavorito} />
        ))}
      </div>
    </div>
  );
}
