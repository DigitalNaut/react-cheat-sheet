import { ReactComponent as HackademyLogo } from "./assets/logo.svg";

import "./App.css";
import MiComponenteClase from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <MiComponenteClase nombre="Componente Clase">
        {<HackademyLogo width={45} height={45} />}
      </MiComponenteClase>

      <p className="footnote">
        Revisa los eventos en la consola con la tecla <code>F12</code>
      </p>
    </div>
  );
}

export default App;
