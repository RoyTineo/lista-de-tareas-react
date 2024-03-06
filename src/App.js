
import './App.css';
import Logo from './components/logo';
import Tarea from './components/Tarea'

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo/>
    <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender react'/>
        
    </div>
      
    </div>
  );
}

export default App;
