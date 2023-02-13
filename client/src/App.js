import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home/Home";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* inyecta propiedades a nuesto componente para acceder al historial de navegacion */}
      <div className="App">
        <Routes>
          {" "}
          {/* permite navegar de ruta a ruta es buena practica aplicarlo*/}
          <Route exact path="/" element={<Home />} />{" "}
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
