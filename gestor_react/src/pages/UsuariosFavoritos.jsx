import usarDatosUsuarios from "../context/UsuariosContexto";
import TarjetaUsuario from "../components/TarjetaUsuario";

function UsuariosFavoritos() {
  const datosUsuarios = usarDatosUsuarios();
  const usuarios = datosUsuarios.usuarios;
  const errores = datosUsuarios.errores;
  const EstaCargando = datosUsuarios.EstaCargando;
  const usuariosFavoritos = datosUsuarios.UsuariosFavoritos;  
  const eliminarFavorito = datosUsuarios.eliminarFavorito;

  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <p>Usuarios Favoritos: {usuariosFavs.length}</p>

      {EstaCargando && <p>Cargando Usuarios...</p>}

      {errores && <p>{errores}</p>}

      {usuariosFavoritos.map((usuario) => (
        <TarjetaUsuario 
        key={usuario.id}
        usuario={usuario}
        esFavorito={eliminarFavorito} />
      ))}
    </div>
  );
}
