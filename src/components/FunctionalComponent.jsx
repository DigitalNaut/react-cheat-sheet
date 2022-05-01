import { useEffect } from "react";

import styles from "./FunctionalComponent.module.css";

export default function MiComponenteFuncional(props) {
  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    console.log("Componente Funcional montado");

    return () => {
      console.log("Componente Funcional desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("Componente Funcional actualizado");
  });

  function componerMensaje(nombre = "???") {
    return `Este es mi ${nombre} renderizado con sus props y children`;
  }

  return (
    <div className={styles.container}>
      {componerMensaje(props.nombre)}
      {props.children}
    </div>
  );
}
