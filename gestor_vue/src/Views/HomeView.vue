<script setup>
import TarjetaUsuario from "../components/TarjetaUsuario.vue";
import { GuardarStoreUsuarios } from "../stores/UsuariosStore.js";
import { computed, ref } from "vue";
import { onMounted } from "vue";

const textoIngresado = ref("");
const storeUsuarios = GuardarStoreUsuarios();



onMounted(() => {
  storeUsuarios.ObtenerUsuariosAPI();
});

const usuariosBuscados = computed(()=>{
  return storeUsuarios.usuarios.filter(usuario =>
    usuario.name.toLowerCase().startsWith(textoIngresado.value.toLowerCase())
  )
});

</script>

<template>
  <h1>Lista de Usuarios</h1>

  <div class="buscadorCli">
  <label for="buscarCli">Buscar Usuario: </label>
  <input id = "buscarCli" type = "text" placeholder="Ejm. Ervin"  v-model = "textoIngresado"></input>
  </div>
 
  <span id = "contadorFavs">Usuarios Favoritos: <String>{{storeUsuarios.usuariosFavoritos.length}}</String></span>

  <RouterLink to="/usuarios/favs">Ver Favoritos</RouterLink>

   <p v-if="storeUsuarios.Cargando">Cargando Usuarios...</p>

   <p v-else-if="storeUsuarios.error">
    {{ storeUsuarios.error }}
   </p>

   <h3 v-else-if="usuariosBuscados.length ===0"> <string>No se encontraron usuarios</string></h3>

  <div v-else id="instanciaTarjeta">
    <TarjetaUsuario class ="tarjetaIND" v-for="usuario in usuariosBuscados" 
    :key="usuario.id" 
    :usuario="usuario"
    @favorito="storeUsuarios.agregarFavoritos"/>
  </div>
</template>

<style scoped></style>
