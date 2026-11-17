function TarjetaUsuario({usuario}){
    return(
        <div className = "TarjetaUsuario"> 
            <h2>{usuario.name}</h2>
            <p>Correo: {usuario.email}</p>
            <p>Ciudad: {usuario.address.city}</p>
            <button>Agregar/Quitar a Favoritos</button>
        </div> 
    )   
}

export default TarjetaUsuario