import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Pages/Login"
import Detail from "./components/Detail/Detail";
import Register from "./components/Pages/Register"
import { Reset } from "./components/Pages/Reset";
import { NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./components/Services/Services";
import Create from "./components/Create/Create";
import { NotFound } from "./components/NotFound/NotFound";
import Landing from "./components/Landing/Landing";



function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      {" "}
      {/* inyecta propiedades a nuesto componente para acceder al historial de navegacion */}
      <div className="App">
        <Routes>
          {" "}
          {/* permite navegar de ruta a ruta es buena practica aplicarlo*/}
          <Route exact path ="/" element={<Landing/>}/>
          <Route  path="/home" element={<Home />} />{" "}
          <Route  path="/Services" element={<Services />} />{" "}
           <Route path='/Detail/:id' element ={<Detail/>}/>
           <Route path='/Create' element ={<Create/>}/>
          <Route path='*' element={<NotFound/>}/> 
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
          <Route path = "/login" element={<Login/>} />
          <Route path = "/detail:id" element={<Detail/>} />
          <Route path= "/register" element={<Register/>} />
          <Route path= "/reset" element={<Reset/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
