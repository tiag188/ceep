import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css"

class ListDeNotas extends Component {
  render() {
    return (
      <ul class="lista-notas">
        {Array.of("Trabalho", "Estudos", "Pessoal",1,5,4,4,8,4,1,58,7,4,25,5,1).map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
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
