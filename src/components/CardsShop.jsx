import React from "react";
import "../styles/cardShop.css";
import {Link as LinkRouter} from 'react-router-dom';

const CardsShop = ({ shoes }) => {
	return (
		<div id="container">

			<div className="wrapper">
				<div className="card">
					<div className="front">
						<h1>Adidas</h1>
						<p>{shoes.name}</p>
						<h2 className="price">U$S {shoes.price}</h2>
					</div>

					<div className="right">
						<h2>Adidas</h2>
						<p>Runing start</p>
						<h2 className="price">U$S {shoes.price}</h2>
						<ul>
							<li>talles : 12 12</li>
							<li>Colors:	⚪⚫</li>


						</ul>
						<LinkRouter to={`/details/${shoes._id}`} >
						<button>Detail</button>
						</LinkRouter>
						
						
					</div>

				</div>
				<div className="img-wrapper">
					<img src={shoes.image[0]} alt='' />
				</div>
			</div>
			
		</div>
	);
};

export default CardsShop;
