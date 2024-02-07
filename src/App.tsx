import { useState } from "react";
import "./App.css";
import Event from "./components/Event";

function App() {
  const [nome, setNome] = useState<string | null>("");

  function mudar() {
    const novoNome: string | null = prompt("Digite um nome");
    if(novoNome === "") {
      setNome("Informe um nome")
      return
    }
    setNome(novoNome);
  }

  return (
    <div className="container">
      <h1>{nome}</h1>
      <button onClick={mudar}>Alterar Nome</button>

      <hr/><br />
      <Event/>
    </div>
  );
}

export default App;
