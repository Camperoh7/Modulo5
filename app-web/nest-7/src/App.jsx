import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import LogReg from './components/LogReg';
//import './App.css'




function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={< Login />}/>
    <Route path="/register" element={< Register />}/>



    <Route path="/home" element={< Home />} />
    <Route path="/products" element={< Products />}/>
    <Route path="/products/:id" element={< Product />}/>
    <Route path="/cart" element={< Cart />}/>
    <Route path="/logreg" element={< LogReg />}/>
    

  
    </Routes>
    </>
  )
}

export default App
