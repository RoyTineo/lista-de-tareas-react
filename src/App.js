
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Logo from './components/logo';


function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo/>
    <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
    </div>
      
    </div>
  );
}

export default App;
