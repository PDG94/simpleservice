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
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <NavBar/>
      {" "}
      {/* inyecta propiedades a nuesto componente para acceder al historial de navegacion */}
      <div className="App">
        <Routes>
          {" "}
          {/* permite navegar de ruta a ruta es buena practica aplicarlo*/}
          <Route exact path="/" element={<Home />} />{" "}
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
          <Route path = "/login" element={<Login/>} />
          <Route path = "/detail:id" element={<Detail/>} />
          <Route path= "/register" element={<Register/>} />
          <Route path= "/reset" element={<Reset/>} />
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
