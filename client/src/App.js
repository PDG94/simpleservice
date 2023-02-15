import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";

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
          <Route path='*' component={NotFound}/>
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
