import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
//import Nav from "./components/Nav";
import ShopCart from "./components/ShopCart";
import Carrito from "./components/Carrito2";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop.jsx'
import Details from "./pages/Details";
//import AboutUs from "./pages/AboutUs";
function App() {
	return (
		
		<div className="App">
			<Navbar/>
			<Routes>
				<Route path="/login" element={<SignIn/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="/shopcart" element={<ShopCart />} />
				<Route path="/carrito" element={<Carrito/>} />
				<Route path="/" element={<Home/>} />
				<Route path="/shop" element={<Shop/>} />
				<Route path="/details" element={<Details/>} />
				{/* <Route path="/about" element={<AboutUs/>} /> */}
			</Routes>
			<Footer/>
		</div>

	);
}

export default App;
