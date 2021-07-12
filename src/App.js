import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.notas = [];
  }

  criarNota(titulo, descricao) {
    const novaNota = { titulo, descricao };
    this.notas.push(novaNota);
    console.log("um novo card " + titulo + " " + descricao);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListDeNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
