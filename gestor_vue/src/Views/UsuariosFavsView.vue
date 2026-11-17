<script setup>
import TarjetaUsuario from "../components/TarjetaUsuario.vue";
import { GuardarStoreUsuarios } from "../stores/UsuariosStore.js";

const storeUsuarios = GuardarStoreUsuarios();
</script>

<template>
    <h1>Usuarios Favoritos</h1>
     <span id = "contadorFavs">Usuarios Favoritos: <String>{{storeUsuarios.usuariosFavoritos.length}}</String></span>

    <RouterLink to = "/">Volver a todos los usuarios</RouterLink>

    <div id="instanciaTarjeta">
        <TarjetaUsuario id = "tarjetaIND"
        v-for="favorito in storeUsuarios.usuariosFavoritos"
        key="favorito.id"
        :usuario = "favorito"
        @favorito = "storeUsuarios.quitarFavoritos"/>
    </div>

</template>
