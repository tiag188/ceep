import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListDeNotas />
      </section>
    );
  }
}

export default App;
