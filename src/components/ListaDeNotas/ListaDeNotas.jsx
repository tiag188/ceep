import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
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
