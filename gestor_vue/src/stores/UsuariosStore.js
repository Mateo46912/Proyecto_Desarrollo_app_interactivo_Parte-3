import { ref } from "vue";
import { defineStore } from "pinia";

export const GuardarStoreUsuarios = defineStore("usuario", () => {
  const usuarios = ref([]);
  const Cargando = ref(false);
  const error = ref(null);
  const usuariosFavoritos = ref([]);

  async function ObtenerUsuariosAPI() {
    Cargando.value = true;
    error.value = null;
    try {
      const respuestaAPI = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!respuestaAPI.ok) {
        throw new Error("No se puedieron encontrar los usuarios");
      }

      usuarios.value = await respuestaAPI.json();
    } catch (e) {
      error.value = "Ocurrio un error al consultar la api: " + e.message;
    } finally {
      Cargando.value = false;
    }
  }

  function agregarFavoritos(id) {
    const posicion = usuariosFavoritos.value.findIndex((usuario) => usuario.id === id);

    if (posicion >= 0) {
      usuariosFavoritos.value.splice(posicion, 1);
    } else {
      const usuarioEncontrado = usuarios.value.find((usuario) => usuario.id === id);

      if (usuarioEncontrado) {
        usuariosFavoritos.value.push(usuarioEncontrado);
      }
    }
  }

  function quitarFavoritos(id) {
    const usuarioEncontrado = usuarios.value.find((usuario) => usuario.id === id);

    if (usuariosFavoritos) {
      const posicion = usuariosFavoritos.value.indexOf(usuarioEncontrado);
      usuariosFavoritos.value.splice(posicion, 1);
    }
  }

  return { ObtenerUsuariosAPI, usuarios, Cargando, error, agregarFavoritos, usuariosFavoritos, quitarFavoritos };
});
