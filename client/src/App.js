import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* inyecta propiedades a nuesto componente para acceder al historial de navegacion */}
  <div className="App">
     <Switch> {/* permite navegar de ruta a ruta es buena practica aplicarlo*/}
    <Route exact path="/" component={Home} /> {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
     </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
