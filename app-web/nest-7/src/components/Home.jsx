import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-black border-0">
                <img src="src/assets/bg-street.jpg" className="card-img" alt="Background" height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NUEVA TEMPORADA</h5>
                        <p className="card-text leads fs-2 text-warning">HECHA UN VISTAZO A LO NUEVO</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home