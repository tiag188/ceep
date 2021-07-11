import React, { Component } from "react";
import CardNota from "../components/CardNota";

class ListDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Estudos", "Pessoal").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListDeNotas;
