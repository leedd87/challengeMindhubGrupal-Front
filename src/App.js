import React from 'react'
<<<<<<< HEAD
import '../src/styles/App.css'
import Shoop from './pages/Shop';
import CardsShop from './components/CardsShop'

=======
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import ShopCart from './components/ShopCart';
import Carrito from './components/Carrito2';
>>>>>>> 1ce739c11e829fa5e6fb1ff3624a5e855d85d8a3

function App() {

  return (
<<<<<<< HEAD
    // <div className="App">
    //   <h1>Hola</h1>
   
    // </div>

    <Shoop />
    // <CardsShop />

=======
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/shopcart' element={<ShopCart/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
    </div>
>>>>>>> 1ce739c11e829fa5e6fb1ff3624a5e855d85d8a3

  );
}

export default App;
