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

// Tests
// import Contador from './components/Tests/Contador'
// import Listado from './components/Tests/Listado'
// import Temperatura from './components/Tests/Temperatura'
// import Formulario from './components/Tests/Formulario'
// import ListadoNombres from './components/Tests/ListadoNombres'
// import Usuarios from './components/Tests/Usuarios'

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

      </Switch>
    </Router>
  );
}

export default App;
