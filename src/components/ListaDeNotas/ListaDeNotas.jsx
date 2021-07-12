import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListDeNotas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <div>{nota}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListDeNotas;
