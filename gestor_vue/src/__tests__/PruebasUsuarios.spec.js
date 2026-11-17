import { describe, it, expect } from "vitest";
import TarjetaUsuario from "../components/TarjetaUsuario.vue";
import { mount } from "@vue/test-utils";

describe("Pruebas unitarias del listado de usuarios", () => {

  it("Comprobar que la terjeta muestra correctamente los datos que recibe", () => {

    const usuarioDePrueba = {
      id: 1,
      name: "Mateo Cordero",
      email: "mateo.cord45@gmail.com",
      address: {
        city: "Azogues",
      },
    };

    const wrapper = mount(TarjetaUsuario, {
        props:{
            usuario: usuarioDePrueba
        }

    });

    expect(wrapper.text()).toContain("Mateo Cordero")
    expect(wrapper.text()).toContain("mateo.cord45@gmail.com");
    expect(wrapper.text()).toContain("Azogues");
  });
});
    