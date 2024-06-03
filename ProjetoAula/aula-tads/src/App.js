import "./App.css";
import Button from "./components/Button";
import Contador from "./components/Contador";

function App() {

  const handleCliqueAqui = () => {
    console.log("Botao clique aqui clicado")
  }

  const handleOutroTexto = () => {
    console.log("Botao outro texto clicado")
  }


  return (
    <div>
      <h1>Primeiro Projeto react</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto="Clique Aqui" onClickButton={handleCliqueAqui} />
      <Button texto="Outro botão" onClickButton={handleOutroTexto}/>
      <Contador/>
    </div>
  )
}

export default App;