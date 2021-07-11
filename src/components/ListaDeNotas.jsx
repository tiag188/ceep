import React, { Component } from "react";
import CardNota from "../components/CardNota";

class ListDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
      </ul>
    );
  }
}

export default ListDeNotas;
