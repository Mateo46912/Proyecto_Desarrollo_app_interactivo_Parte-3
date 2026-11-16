<script setup>

defineProps({
  usuario: Object,
});
const emit = defineEmits(["favorito"])
function devolverUsuarioFavorito(id){
    emit("favorito",id)
}
</script>

<template>
    <div class="tarjetaUsuario">
      <h2>{{ usuario.name }}</h2>
      <p>Correo: {{ usuario.email }}</p>
      <p>Ciudad: {{ usuario.address.city }}</p>
      <button @click = "devolverUsuarioFavorito (usuario.id)">Favorito</button>
    </div>
</template>
