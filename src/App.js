import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, descricao) {
    const novaNota = { titulo, descricao };
    const novoEstadoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = { notas: novoEstadoArrayNotas };
    this.setState(novoEstado);
    console.log("um novo card " + titulo + " " + descricao);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
