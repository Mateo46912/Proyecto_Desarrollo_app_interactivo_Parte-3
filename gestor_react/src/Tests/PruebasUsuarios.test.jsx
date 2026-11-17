import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TarjetaUsuario from "../components/TarjetaUsuario.jsx";

const usuarioDePrueba = {
  id: 1,
  name: "Mateo Cordero",
  email: "mateo.cord45@gmail.com",
  address: {
    city: "Azogues",
  },
};

test("Se comprueba que el componente muestra los datos de usuario que recibe", () => {
  render
  (<TarjetaUsuario 
    usuario={usuarioDePrueba} 
    esFavorito={() => {}} />
  );

  expect(screen.getByText(usuarioDePrueba.name)).toBeInTheDocument();

  expect(screen.getByText(`Correo: ${usuarioDePrueba.email}`)).toBeInTheDocument();

  expect(screen.getByText(`Ciudad: ${usuarioDePrueba.address.city}`)).toBeInTheDocument();
});
