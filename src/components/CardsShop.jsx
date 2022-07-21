import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "../styles/cardShop.css";
// import shoesActions from "../redux/actions/shoesActions";
import { Link as LinkRouter } from 'react-router-dom';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

let shop = []; // carrito de compras

const CardsShop = ({ shoes }) => {

	// const dispatch = useDispatch();


	const addCarrito = ({shoes}) => {
		console.log('add shop')
		// console.log(shoes)

		const data = {
			image: shoes.image[0],
			name: shoes.name,
			price: shoes.price,
			id: shoes._id,
			cant: 1
		}
		shop = [...shop, data];

		// console.log(shop)
		// console.log(carrito)

	}


	// const viewShop = () => {

		

	// }

	return (
		<div id="container">

			<div className="wrapper">
				<div className="card">
					<div className="front">
						<h1>{shoes.brand.name}</h1>
						<p>{shoes.name}</p>
						<h2 className="price">U$S {shoes.price}</h2>
					</div>

					<div className="right">
						<h2>{shoes.brand.name}</h2>
						<p>{shoes.name}</p>
						<h2 className="price">U$S {shoes.price}</h2>
						<ul>
							<li>talles : 12 12</li>
							<li>Colors:	⚪⚫</li>

						</ul>

						<LinkRouter to={'/details'} >
							<button>Detail</button>
						</LinkRouter>

						<span 
						className="cursor-pointer"
							onClick={() => addCarrito({shoes})}
						>
							<AddShoppingCartOutlinedIcon />
						</span>

					</div>

				</div>
				<div className="img-wrapper">
					<img src={shoes.image[0]} alt={shoes.name} />
				</div>
			</div>

		</div>
	);
};

export default CardsShop;
