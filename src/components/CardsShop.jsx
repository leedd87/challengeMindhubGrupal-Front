import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cardShop.css";
import shoesActions from "../redux/actions/shoesActions";
import {Link as LinkRouter} from 'react-router-dom';

const CardsShop = ({ shoes }) => {
	const dispatch = useDispatch();

	const handleIDshoe = async (id) => {
		// console.log(id)
		const res = await dispatch(shoesActions.getOneShoe(id));
		console.log(res.data.response);
	};

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
						<LinkRouter to={'/details'} >
						<button>Detail</button>
						</LinkRouter>
					</div>

				</div>
				<div className="img-wrapper">
					<img src={shoes.image[0]} alt='' />
				</div>
			</div>
			{/* <article id="card">
				<header>
					<img
						id="nikeLogo"
						src="https://wallpapercave.com/wp/CgjGnw0.jpg"
						alt="logo"
					/>
					<span id="nike" classNameName="subhead">
						puma
					</span>
				</header>

				<div
					style={{
						backgroundImage: `url('${shoes.image[0]}')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						width: 300,
						height: 200,
						objectFit: "cover",
					}}
				></div>

				<section>
					<div id="location">
						<span classNameName="faded-name">{shoes.name}</span>
						<span classNameName="faded">U$S {shoes.price}</span>
					</div>

					<div classNameNameName="flex items-center justify-around mb-5">
						<button classNameNameName="bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 px-7 py-2">
							buy
						</button>
						<button
							onClick={() => handleIDshoe(shoes._id)}
							classNameNameName="bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 px-7 py-2"
						>
							+ info
						</button>
					</div>
				</section>
			</article> */}
		</div>
	);
};

export default CardsShop;
