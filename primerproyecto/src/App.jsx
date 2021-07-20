import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio  from './components/Inicio'
import Estadisticas from './components/Estadisticas'
import Desarrolladores from './components/Desarrolladores'
import Login from './components/Login'

// Tests
// import Contador from './components/Contador'
// import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
// import Formulario from './components/Formulario'
import ListadoNombres from './components/ListadoNombres'

function App() {
  return (
    <div className="App">

        <Inicio />
        {/* <Contador></Contador> */}
        {/* <Listado></Listado> */}
        <Temperatura></Temperatura>
        {/* <Formulario></Formulario> */}

        <h3> f </h3>
        <ListadoNombres />
      {/* <Login> </Login> */}
      {/* <Estadisticas> </Estadisticas>*/}
      {/* <Desarrolladores> </Desarrolladores> */}

    </div>
  );
}

export default App;
