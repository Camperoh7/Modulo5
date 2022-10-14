import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
//import Login from './Login';
//import { NavLink } from 'react-router-dom';




export default function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        }catch (error) {
            console.log(error.message);
        }

        
    };

    

    return (

        <>
            <div className='register justify-content-center'>
                <img src="src/assets/bg-street-register2.jpg" className="card-img" alt="Background" height="550px" />
                <div className='card-img-overlay d-flex flex-column justify-content-center'>
                    <div className='d-flex justify-content-center text-light '>
                        <h2>Crear Cuenta</h2>

                    </div>
                    <div className='d-flex justify-content-center text-warning'>
                    <span>¡Registrate y compra nuestra línea de productos!</span>
                    </div>
                    <form className='form d-flex justify-content-center mb-5 pb-5 text-white '>
                        <div className="form-group">
                            <label>Correo Electrónico</label>
                            <input type="email" className="form-control" placeholder="hola.6@gmail.com" onChange={(event)=>setRegisterEmail(event.target.value)}/>

                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" placeholder="hola123" onChange={(event)=>setRegisterPassword(event.target.value)}/>

                            <div className="form-group">

                                
                                <button className='btn btn-outline-dark bg-dark text-light ' onClick={register}>
                                    Crear Cuenta 
                                </button>
                                

                            </div>
                            <h4>Hola</h4>
                            
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}