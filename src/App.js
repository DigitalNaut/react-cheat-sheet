import { ReactComponent as HackademyLogo } from "./assets/logo.svg";

import "./App.css";
import MiComponenteFuncional from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <MiComponenteFuncional nombre="Componente Funcional">
        {<HackademyLogo width={45} height={45} />}
      </MiComponenteFuncional>

      <p className="footnote">
        Revisa los eventos en la consola con la tecla <code>F12</code>
      </p>
    </div>
  );
}

export default App;
