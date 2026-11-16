import { ref } from 'vue'
import { defineStore } from 'pinia'

export const GuardarStoreUsuarios = defineStore('usuario', () => {

  const usuarios = ref([]);
  const Cargando = ref(false);
  const error = ref(null)
  const usuariosFavoritos = ref([]);
  
  async function ObtenerUsuariosAPI() {
    Cargando.value = true;
    error.value = null;
    try {
      const respuestaAPI = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!respuestaAPI.ok){
        throw new Error("No se puedieron encontrar los usuarios"); 
      }

      usuarios.value = await respuestaAPI.json();
    } catch (e) {
      error.value = ("Ocurrio un error al consultar la api" + e.message); 
    }finally{
      Cargando.value = false;
    }

  }

  function agregarFavoritos(id){
      const usuarioEncontrado = usuarios.value.find(usuario => usuario.id = id)

      if (usuarioEncontrado){
        usuariosFavoritos.value.push(usuarioEncontrado)
      }
  }

  return {ObtenerUsuariosAPI, usuarios,Cargando,error,agregarFavoritos, usuariosFavoritos }
})
