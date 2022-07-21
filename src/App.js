import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import ShopCart from "./components/ShopCart";
import Carrito from "./components/Carrito2";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/login" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/shopcart" element={<ShopCart />} />
				<Route path="/carrito" element={<Carrito />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
