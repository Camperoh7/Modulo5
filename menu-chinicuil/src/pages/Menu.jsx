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
            <p>- Omelette de Espinaca con Queso de Cabra <strong>$150</strong></p>
            <p>- Omelette de Hongos con Quesillo <strong>$150</strong></p>
            <p>- Omelette de Huitlacoche <strong>$150</strong></p>
            <p>- Omelette de Jamón con Quesillo <strong>$150</strong></p>
            <p>- Chilaquiles con Pollo o Huevo (Verdes o Rojos) <strong>$150</strong>. Con extra de huevo <strong>+$25</strong>, con extra de cecina <strong>+$60</strong>, con extra de pollo <strong>+$50</strong>, con extra de chorizo <strong>+$30</strong></p>
            <p>- Fruta de Temporada <strong>$75</strong></p>
            <p>- Huevos Rancheros <strong>$150</strong></p>
            <p>- Huevos con Mole Poblano <strong>$150</strong></p>
            <p>- Huevos a la Mexicana <strong>$150</strong></p><hr/>
            <h4>Jueves</h4>
            <p>- Pozole <strong>$</strong></p><hr/>
            <h4>Sábado y Domingo</h4>
            <p>- Taco de Barbacoa <strong>$45</strong></p>
            <p>- Taco de Pancita <strong>$55</strong></p>
            <p>- Flautas de Barbacoa (Orden de 3pz) <strong>$150</strong></p>
            <p>- Quesadilla de Barbacoa <strong>$140</strong></p>
            <p>- Consome con carne <strong>90</strong></p>
            <p>- Consome sin carne <strong>50</strong></p>
        </div>
        <div className='encabezado parte_derecha'>
            <h4>Platillos</h4>
            <p>- Molcajete Mar y Tierra <strong>$720</strong></p>
            <p>- Tlacoyos (Orden de 3pz) <strong>$60</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Sopes (Orden de 3pz) <strong>$90</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Taco de Cecina <strong>$45</strong></p>
            <p>- Taco de Arrachera <strong>$65</strong></p>
            <p>- Caldo de Pollo <strong>$100</strong></p>
            <p>- Sopa de Tortilla <strong>$130</strong></p><hr/>
            <h4>Vegano</h4>
            <p>- Quesadilla de Hongos <strong>$110</strong></p>
            <p>- Quesadilla de Huitlacoche <strong>$130</strong></p>
            <p>- Tostadas de Flor de Jamaica <strong>$120</strong></p>
            <p>- Flautas de Tinga de Zanahoria <strong>$150</strong></p><hr/>
            <h4>Bebidas</h4>
        </div>
        </div>
        </>
    )
}

export default Menu