import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form action='' className="App">
      <header className='App-header'>
      <h1 className='Elementos'>MI PRIMER APP</h1>
      <img src={"android_logo.png"} alt="caut" className='App-imagen'/>
      <br></br>
      <fieldset className='App-header2'>
        <legend>Nombre:</legend>
        <input name="Nombre" placeholder='Ingresa tus datos'></input>
      </fieldset>
      <br></br>
      <fieldset className='App-header2'>
        <legend>Contraseña:</legend>
        <input name="Contraseña" placeholder='Ingresa tus datos' type={"password"}></input>
      </fieldset>
      <br></br>
      <label className='checkbox'>Acepta terminos y condiciones <input type={"checkbox"}></input></label>
      <br></br>
      <input type={"submit"} className="boton"></input>
      <br></br>
      </header>
    </form>
  );
}
export default App;
