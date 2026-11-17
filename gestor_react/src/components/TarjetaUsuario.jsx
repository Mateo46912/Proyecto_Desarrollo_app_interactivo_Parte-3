function TarjetaUsuario({usuario, esFavorito}){
    return(
        <div className = "TarjetaUsuario"> 
            <h2>{usuario.name}</h2>
            <p>Correo: {usuario.email}</p>
            <p>Ciudad: {usuario.address.city}</p>
            <button onClick={() => esFavorito(usuario.id)}>Agregar/Quitar a Favoritos</button>
        </div> 
    )   
}

export default TarjetaUsuario