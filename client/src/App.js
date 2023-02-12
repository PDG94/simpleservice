import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
  <div className="App">
     <Switch>
    <Route exact path="/" component={Home} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
