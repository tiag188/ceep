import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListDeNotas from "./components/ListaDeNotas";

class App extends Components {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListDeNotas />
      </section>
    );
  }
}

export default App;
