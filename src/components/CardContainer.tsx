import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { cards } from "../constants";

const CardContainer = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className='container'>
			{cards.map((card) => (
				<ProductCard
					srcimage={windowWidth >= 376 ? card.imageDesktop : card.imageMobile}
					altimage={card.altImage}
					labelname={card.label}
					headingname={card.name}
					description={card.description}
					price={card.price}
					pricedefault={card.defaultPrice}
				/>
			))}
		</div>
	);
};

export default CardContainer;
