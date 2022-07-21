import React from "react";
import styled from "styled-components";
import { Collapse, Text } from "@nextui-org/react";

function AboutUs() {
	return (
		<AboutUsConteiner>
			<div className="titlecont">About Us</div>
			
			{/* <div className="first-cont">
				<div className="a">
					DAFTLAB{" "}
					<span>
						is an American retailer of athletic footwear. It is a national
						company, which was founded in 2019. DAFTLAB has around 100
						stores in operation worldwide and it is headquartered in New
						York City, United States.
					</span>
					<br />
					<br />
					Vision:{" "}
					<span>
						to be the leading global provider of high-quality, affordable,
						and stylish products for the sports ,fitness and luxury
						community.
					</span>
					<br />
					<br />
					Mission:{" "}
					<span>
						the mission statement is “To fuel a shared passion of
						self-expression.” The company wants youngsters to express
						their personality through their clothes.
					</span>
				</div>
				<img
					// src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F03%2Ftw-nike-air-max-1-atmos-elephant-hirofumi-kojima-interview.jpg?w=960&cbr=1&q=90&fit=max"
					src="https://creativereview.imgix.net/content/uploads/2022/03/HP-Desktop.jpg?auto=compress,format&q=60&w=1920&h=947"
					alt="about-hero"
					className="cont-img"
				/>
			</div>
			<div className="second-cont">
				<img
					src="https://i0.wp.com/prettyphresh.com/wp-content/uploads/2021/11/A-Ma-Maniere-x-Air-Jordan-1-Receives-Confirmed-Release-Date-Campaign-Photos-Inside-cover.jpg?fit=1937%2C1090&ssl=1"
					alt="fq-acordion"
					className="cont-img"
				/>
				<div className="a">
					Frequently Asked Questions
					<Collapse.Group>
						<Collapse title="How I can know about my order?">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
						<Collapse title="Can I Pay with credit or debit card at your store?">
							<Text>
							Some shops and private tables are accepting credit cards, Mercado Pago etc. But just to be sure, bring enough cash with you to avoid any disappointment.
							</Text>
						</Collapse>
						<Collapse title="How Can I Track My Order?">
							<Text>
							You will receive a shipping confirmation email once the order has shipped from our warehouse. It will contain information to track your order.
							</Text>
						</Collapse>
						<Collapse title="Option D">
							<Text>

							</Text>
						</Collapse>
						<Collapse title="Option E">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
						<Collapse title="Option F">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
					</Collapse.Group>
				</div>
			</div> */}
			<div className="contenedor">
				<div className="div1">
				
				</div>
				<div className="div2">

				</div>
				<div className="div3">
					<h2>Tas tiste?</h2>
					</div>
				<div className="div4">
					
				</div>
				<div className="div5">
					<h2>pq tas tiste?</h2>
				</div>
				<div className="div6">
				
				</div>
				
			</div>
			<div className="third-cont">
				
				<img
					src="https://www.highsnobiety.com/static-assets/thumbor/6TZ_JqKDiRvcrK2twXIw6mWGfIw=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/07/05175500/vivienne-westwood-asics-gel-saga-release-date-price-051.jpg"
					alt="about-hero"
					className="cont-img"
				/>
			</div>
			<div className="four-cont">
				<div className="frame">
					<img id="img-1" src="https://wallpaperaccess.com/full/810836.png" alt="ad" className="botitas"/>
					<img id="img-2" src="https://wallpaperaccess.com/full/810836.png" alt="asd" className="botitas"/>
					<div className="street">
						<p className="textito-botita">DAFTLAB</p>
					</div>
					<div>
						<img src="http://imgfz.com/i/Sim4Uwb.png" alt="mm"/>
					</div>
				</div>
			</div>
				<div className="payments-methods">
					
					<img
						src="https://seeklogo.com/images/M/mercadopago-nuevo-logo-12208FF614-seeklogo.com.png"
						alt="mercado-pago"
						id="mercado-pago"
						className="payload"
						/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
						alt="paypal"
						id="paypal"
						className="payload"
						/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
						alt="visa"
						id="visa"
						className="payload"
						/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png"
						alt="mastercard"
						id="mastercard"
						className="payload"
						/>
				</div> 
			
		</AboutUsConteiner>
	);
}

export default AboutUs;

const AboutUsConteiner = styled.div`
	display: flex;
	flex-direction: column;
	Button {
		width: 80%;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.titlecont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		height: 20vh;
		
		/* background: linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 253, 0, 1) 100%
    ); */
		background-color: antiquewhite;
		background-image: url(https://images.squarespace-cdn.com/content/v1/5cfd417dcdc28e0001b15cd7/1643170500837-VOWDXP1ZOL3GS38J1LHK/Sneakers+banner.jpg);
		background-size: cover;
		border: 1px solid black;
		box-sizing: border-box;
		color: white;
		font-size: 4rem;
		margin-bottom: 20px;
		z-index: -1;

	}
	.first-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.a {
		padding: 1rem;
		width: 40%;
		font-weight: 500;

		@media (max-width: 1120px) {
			width: 100%;
		}
	}
	.cont-img {
		width: 45%;
		-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		@media (max-width: 1120px) {
			width: 85%;
			align-self: center;
		}
	}
	.interlude {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		color: #87cefa;
	}
	.second-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.third-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around !important;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.nextui-collapse-title-content {
		margin: 0px;
		text-align: center;
	}
	#mercado-pago {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	#paypal {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}

	}
	#visa {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	#mastercard {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	.payments-methods{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 30px;
		margin-bottom: 20px;
		padding: 1rem;
		width: 40%;
		font-weight: 500;

		@media (max-width: 1120px) {
			width: 100%;
		}
	}
	.payload{
		padding:10px
	}
	.four-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.frame {
	width: 80%;
    height: 480px;
    border-radius: 10px;
    background: #55ff;
    overflow: hidden;
    transform: translate(10px, 10px);
    align-self: center;
}

.botitas {
	top: 170px;
	left: 40%;
	position: absolute;
	width: 180px;
	z-index: 100;
}

#img-1 {
	transform: translate(-130px, -50px) rotate(45deg);
	opacity: 1;
	animation: boot-1 2s infinite linear, opacity-boot 500ms linear;
}

#img-2 {
	transform: translate(130px, -40px) rotate(-25deg);
	opacity: 1;
	animation: boot-2 2s 100ms infinite linear, opacity-boot 500ms linear;
}

.street {
	position: absolute;
	width: 100%;
	height: 200px;
	bottom: 0;
	background: #222;
	color: white;
}

@keyframes boot-1 {
	0% {
		transform: translate(-130px, -40px) rotate(45deg);
	}

	25% {
		transform: translate(0, -70px) rotate(0deg);
	}

	50% {
		transform: translate(130px, -40px) rotate(-25deg);
	}

	75% {
		transform: translate(0, 0) rotate(0deg);
	}

	100% {
		transform: translate(-130px, -40px) rotate(45deg);
	}
}

@keyframes boot-2 {
	0% {
		transform: translate(130px, -40px) rotate(-25deg);
	}

	25% {
		transform: translate(0, 0px) rotate(0deg);
	}

	50% {
		transform: translate(-130px, -40px) rotate(45deg);
	}

	75% {
		transform: translate(0, -70px) rotate(0deg);
	}

	100% {
		transform: translate(130px, -40px) rotate(-25deg);
	}
}

@keyframes opacity-boot {
	0% {
		opacity: 0;
	}
}
.textito-botita{
	text-align: center;
	font-size: 10rem;
}
.contenedor{
    display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(10, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
min-height: 100vh;
}
.div1 { 
	grid-area: 1 / 1 / 5 / 4;
	background-image: url(https://cdn.25gramos.com/wp-content/uploads/2019/07/25-Gramos-Yeezy-Kanye-West-Forbes-1.jpg);
	background-size: cover;
	background-position: center;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}
.div2 { 
	grid-area: 1 / 4 / 8 / 6; 
	background-image: url(https://pbs.twimg.com/media/E-38JjRXIAMC5C6.jpg);
	background-size: cover;
	background-position: center;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}
.div3 {
	grid-area: 5 / 1 / 6 / 4; 
	background-image: url(https://img.freepik.com/fotos-premium/fondo-grunge-papel-marron-vintage-antiguo_213524-343.jpg);
	background-size: cover;
	background-position: center;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}

.div4 { 
	grid-area: 6 / 1 / 11 / 4; 
	background-image: url(https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/uj9phqfjnlsu1mq2ruwk/air-jordan-1-1985?fimg-ssr-default);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}
.div5 {
	grid-area: 8 / 4 / 9 / 6;
	background-image: url(https://img.freepik.com/fotos-premium/fondo-grunge-papel-marron-vintage-antiguo_213524-343.jpg);
	background-size: cover;
	background-position: center;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}

.div6 { 
	grid-area: 9 / 4 / 11 / 6; 
	background-image: url(https://www.theridernews.com/wp-content/uploads/2022/04/DSC05208-780x470.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
}
div > h2{
	text-align: center;
	font-size: 2rem;
}
`;
