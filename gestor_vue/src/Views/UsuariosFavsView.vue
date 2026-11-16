<script setup>
import TarjetaUsuario from "../components/TarjetaUsuario.vue";
import { GuardarStoreUsuarios } from "../stores/UsuariosStore.js";

const storeUsuarios = GuardarStoreUsuarios();
</script>

<template>
    <h1>Usuarios Favoritos</h1>
    <p>Tienes {{storeUsuarios.contadorFavs}} usuarios favoritos</p>

    <RouterLink to = "/">Volver a todos los usuarios</RouterLink>

    <TarjetaUsuario 
    v-for="favorito in storeUsuarios.usuariosFavoritos"
    key="favorito.id"
    :usuario = "favorito"
    @favorito = "storeUsuarios.quitarFavoritos"/>
</template>
