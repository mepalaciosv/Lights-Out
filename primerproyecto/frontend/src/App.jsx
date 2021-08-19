//  Importaciones de estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones para enrutar
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

// Importación de componentes
import Inicio  from './components/Inicio'
import Estadisticas from './components/Estadisticas'
import Desarrolladores from './components/Desarrolladores'
import Login from './components/Login'
import Register from './components/Register'
import Reglas from './components/Reglas'
import Success from './components/Success'
import Fail from './components/Fail'
import Account from './components/Account'

function App() {
  return (
    <Router>
      <Switch>
        {/* Página de Inicio */}
        <Route exact path = "/"> 
          <Inicio />
        </Route>

        {/* Página de Estadisticas */}
        <Route exact path = "/Estadisticas"> 
          <Estadisticas />
        </Route>

        {/* Página de Desarrolladores */}
        <Route exact path = "/Desarrolladores"> 
          <Desarrolladores />
        </Route>

        {/* Página de Login */}
        <Route exact path = "/Login"> 
          <Login />
        </Route>

        {/* Página de Registro */}
        <Route exact path = "/Register"> 
          <Register />
        </Route>

        {/* Página de Reglas */}
        <Route exact path = "/Reglas"> 
          <Reglas />
        </Route>

        {/* Página de Success */}
        <Route exact path = "/Success"> 
          <Success />
        </Route>

        {/* Página de Fail */}
        <Route exact path = "/Fail"> 
          <Fail />
        </Route>

        {/* Página de Account */}
        <Route exact path = "/Account"> 
          <Account />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
