import React from 'react'
import '../App.css'

const Menu = () => {
    return (
        <>
        <img src='images/chinicuil.jpeg'></img>
        <div className='encabezado'><h2>Menú</h2></div>
        <div className='menu'>
        <div className='encabezado parte_izquierda'>
            <h4>Desayunos</h4>
            <p>- Omelette de Espinaca con Queso de Cabra <strong>$120</strong></p>
            <p>- Omelette de Hongos con Quesillo <strong>$120</strong></p>
            <p>- Omelette de Huitlacoche <strong>$120</strong></p>
            <p>- Omelette de Jamón con Quesillo <strong>$120</strong></p>
            <p>- Chilaquiles con Pollo o Huevo (Verdes o Rojos) <strong>$150</strong>. Con extra de huevo <strong>+$25</strong>, con extra de cecina <strong>+$70</strong>, con extra de pollo <strong>+$60</strong>, con extra de chorizo <strong>+$45</strong></p>
        </div>
        <div className='encabezado parte_derecha'>
            <h4>Platillos</h4>
            <p>- Molcajete Mar y Tierra <strong>$720</strong></p>
            <p>- Tlacoyos (Orden de 3pz) <strong>$60</strong>. Con pollo <strong>+$60</strong>, con cecina <strong>+$70</strong>, con arrachera <strong>+$90</strong></p>
            <p>- Sopes (Orden de 3pz) <strong>$60</strong>. Con pollo <strong>+$60</strong>, con cecina <strong>+$70</strong>, con arrachera <strong>+$90</strong></p>
        </div>
        </div>
        </>
    )
}

export default Menu