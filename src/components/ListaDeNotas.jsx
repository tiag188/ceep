import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Estudos", "Pessoal").map((categoria, index) => {
          return (
            <li key={index}>
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
