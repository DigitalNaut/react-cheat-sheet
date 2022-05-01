import { ReactComponent as HackademyLogo } from "./assets/logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Cheat Sheet</h1>
      <p>
        Snippets de código para los diferentes aspectos de la librería de React
      </p>
      <HackademyLogo width={64} height={64} />
    </div>
  );
}

export default App;
