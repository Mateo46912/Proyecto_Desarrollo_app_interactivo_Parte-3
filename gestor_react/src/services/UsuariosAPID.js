
export async function ObtenerUsuariosAPI() {
  const respuestaAPI = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!respuestaAPI.ok) {
    throw new Error("No se puedieron encontrar los usuarios");
  }

  return respuestaAPI.json();
}
