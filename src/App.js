import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"

class App extends Component {
  criarNota(titulo, descricao){
    console.log("um novo card " + titulo + " " + descricao);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListDeNotas />
      </section>
    );
  }
}

export default App;
