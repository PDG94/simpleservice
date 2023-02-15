import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Detail from "./components/Detail/Detail"
import Create from "./components/Create/Create";
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
          <Route  path="/Services" element={<Services />} />{" "}
           <Route path='/Detail/:id' element ={<Detail/>}/>
           <Route path='/Create' element ={<Create/>}/>
          <Route path='*' element={<NotFound/>}/> 
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
