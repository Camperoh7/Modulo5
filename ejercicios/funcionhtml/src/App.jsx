import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import UserActive from './UserActive';

function App() {
  const [count, setCount] = useState(3);
  const [age] = useState(15);
  const [isActive] = useState(true);

  const showGreeting = numb => {

  const message = 
    numb >= 18 ? (
      <span>Hola, eres mayor de edad 🥃</span>
    ) : (
      <span>No eres mayor de edad 👶🏼</span>
    );

    return message;
};
    
  const h1ActStyle = {border: "3px solid #000", width: 250};
  const h1InactStyle = {border: "3px solid #ddd", width: 400};

  return (
    
    <div className="App">
      <h1 className={isActive ? "title-active" : "title-inactive"}>Vite + React</h1>
      <div className="card" style={isActive ? h1ActStyle : h1InactStyle}></div>
        {showGreeting(18)}
    
    {/*CONDITIONAL RENDERING */}
    {/* {validacion && html_element}*/}
    {count > 2 && < Counter/>}

      {/* {IF ELSE () --> VALIDACION ? true : false }*/}
      { isActive ? <UserActive/>  : <h4>Usuario no activo</h4>}

      {/*{IF ELSE IF ELSE --> VALIDACION ? TRUE : VALIDACION ? TRUE2 : VALIDACION3 ? TRUE3 : FALSE*/}

      { age >= 18 ? (<strong>Eres mayor de edad</strong>
      ): age < 18 && age >= 12 ? (<b>Eres un adolescente</b>
      ): 
      (<h5>ERES UN NIÑO</h5>
      )}
    
    </div>
    
  );
}

export default App
