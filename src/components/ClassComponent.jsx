import React, { Component } from "react";

import styles from "./ClassComponent.module.css";

export default class MiComponenteClase extends Component {
  constructor(props) {
    super(props);
    console.log("Componente Clase construido");
  }

  componentDidMount() {
    console.log("Componente Clase montado");
  }
  componentDidUpdate() {
    console.log("Componente Clase actualizado");
  }
  componentWillUnmount() {
    console.log("Componente Clase desmontado");
  }
  componentDidCatch(error, info) {
    console.log("Componente Clase capturó un error");
  }

  componerNombre(nombre = "???") {
    return `Este es mi ${nombre} renderizado con sus props y children`;
  }

  render() {
    return (
      <div className={styles.container}>
        {this.componerNombre(this.props.nombre)}
        {this.props.children}
      </div>
    );
  }
}
