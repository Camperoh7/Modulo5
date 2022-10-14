import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const state = useSelector((state) => state.handleCart)



    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg bg-red py-3 shadow-lg">
                    <div className="container-fluid">
                        <NavLink to="home" className="btn navbar-brand text-dark me-6" >Colección</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span return className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active me-2" aria-current="page" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="products" className="nav-link me-2" >Productos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="acerca" className="nav-link me-2" >Acerca
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="contacto" className="nav-link me-2" >Contacto
                                    </NavLink>
                                </li>

                            </ul>
                            <div className='buttons'>
                                <NavLink to="/" className="btn btn-outline-dark"> <i className="fa fa-sign-in me-1"></i>Iniciar Sesión</NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark ms-2"> <i className="fa fa-user-plus me-1"></i>Registrarse</NavLink>
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Carrito ({state.length})</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar