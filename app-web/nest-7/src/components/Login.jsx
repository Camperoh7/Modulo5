import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import Home from "./Home";




const iniSesion = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
//    const [isSubmitted] = useState(false)



    const login = async () => {

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
                <Home/>
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <div className='justify-content-center'>
                <img src="src/assets/bg-street-login3.jpg" className="card-img" alt="Background" height="550px" />
                <div className='card-img-overlay d-flex flex-column justify-content-center'>
                    <div className='d-flex justify-content-center text-light '>
                        <h2>Inicia Sesión</h2>
                    </div>
                    <form className='form d-flex justify-content-center mb-5 pb-5 text-white '>
                        <div className="form-group">
                            <label>Correo Electrónico</label>
                            <input type="email" className="form-control me-5" placeholder="hola.6@gmail.com" onChange={(event) => setLoginEmail(event.target.value)} />

                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control me-4" placeholder="hola123" autoComplete="current-password" onChange={(event) => setLoginPassword(event.target.value)} />
                            <button className='btn btn-outline-dark bg-dark text-light ' type="submit" onClick={login}>
                                Ingresar
                            </button><hr />
                            

                            <NavLink to="register"><button className='btn btn-outline-dark bg-dark text-light ' type="submit">
                                Crear Cuenta
                            </button></NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
    /* const renderForm = (
            <>
            <div className='justify-content-center'>
            <img src="src/assets/bg-street-login3.jpg" class="card-img" alt="Background" height="550px" />
            <div className='card-img-overlay d-flex flex-column justify-content-center'>
            <div className='d-flex justify-content-center text-light '>
                <h2>Inicia Sesión</h2>
            </div>
            <form className='form d-flex justify-content-center mb-5 pb-5 text-white ' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" className="form-control me-5" aria-describedby="emailHelp" placeholder="hola.6@gmail.com" name="email" required/> {renderErrorMessage("email")}
                        
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control me-4" placeholder="hola123" name="pass" required/>
                    {renderErrorMessage("pass")}
                <button className='btn btn-outline-dark bg-dark text-light ' type="submit" >
                    Ingresar
                </button><hr />
    
                <button className='btn btn-outline-dark bg-dark text-light ' type="submit"  >
                    Crear Cuenta
                </button>
                </div>      
                
            </form>
            </div>
            </div>
            </>
        );
    
        return(
            <>
            {isSubmitted ? <Home/> : renderForm}
            </>
        )*/
}

export default iniSesion