import React from "react";
import styled from "styled-components";
import { Collapse, Text } from "@nextui-org/react";

function AboutUs() {
	return (
		<AboutUsConteiner>
			<div className="titlecont">About Us</div>
			
			<div className="first-cont">
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
					src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F03%2Ftw-nike-air-max-1-atmos-elephant-hirofumi-kojima-interview.jpg?w=960&cbr=1&q=90&fit=max"
					alt="about-hero"
					className="cont-img"
				/>
			</div>
			<div className="interlude">
				The most important thing is to be the best.
			</div>
			<div className="second-cont">
				<img
					src="https://i0.wp.com/prettyphresh.com/wp-content/uploads/2021/11/A-Ma-Maniere-x-Air-Jordan-1-Receives-Confirmed-Release-Date-Campaign-Photos-Inside-cover.jpg?fit=1937%2C1090&ssl=1"
					alt="fq-acordion"
					className="cont-img"
				/>
				<div className="a">
					F&Q
					<Collapse.Group>
						<Collapse title="How I can know about my order">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
						<Collapse title="Option B">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
						<Collapse title="Option C">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Text>
						</Collapse>
						<Collapse title="Option D">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
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
			</div>
			<div className="third-cont">
				<div className="a">
					Medios de pago:
					<br />
					<br />
				</div>
				<img
					src="https://www.highsnobiety.com/static-assets/thumbor/6TZ_JqKDiRvcrK2twXIw6mWGfIw=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/07/05175500/vivienne-westwood-asics-gel-saga-release-date-price-051.jpg"
					alt="about-hero"
					className="cont-img"
				/>
			</div>
		</AboutUsConteiner>
	);
}

export default AboutUs;

const AboutUsConteiner = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f3ebde;
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
		height: 10vh;
		/* background: linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 253, 0, 1) 100%
    ); */
		background-color: antiquewhite;
		color: brown !important;
		border: 1px solid black;
		box-sizing: border-box;
		color: white;
		font-size: 2rem;
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
		font-weight: 400;

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
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.nextui-collapse-title-content {
		margin: 0px;
		text-align: center;
	}
`;
