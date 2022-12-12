import React from "react";
import ButtonCard from "./ButtonCard";
import { cardbuttons } from "../constants";

const ProductCard = (props: any) => {
	const {
		srcimage,
		altimage,
		labelname,
		headingname,
		description,
		price,
		pricedefault,
	} = props;
	return (
		<div
			{...props}
			className='flex flex-col sm:mt-4 md:flex-row md:max-w-xl rounded-lg bg-netral-white shadow-lg'
		>
			<img
				src={srcimage}
				alt={altimage}
				className='w-full md:h-96 md:h-auto object-cover md:w-[275px] rounded-t-lg md:rounded-none md:rounded-l-lg'
			/>
			<div className='p-6 flex flex-col justify-start'>
				<p className='text-netral-d-g-blue tracking-[5px] text-paragraph font-body uppercase mb-2'>
					{labelname}
				</p>
				<h5 className='text-netral-v-d-blue font-bold sm:text-[30px] md:text-[35px] leading-none font-headline mb-2'>
					{headingname}
				</h5>
				<p className='text-netral-d-g-blue text-paragraph font-body mb-4'>
					{description}
				</p>
				<div className='flex justify-between mb-2'>
					<div className='text-[32px] font-headline font-bold text-primary-dark-cyan'>
						{price}
					</div>
					<div className='self-center sm:pr-20 md:pr-10 line-through text-netral-d-g-blue'>
						{pricedefault}
					</div>
				</div>
				<div>
					{cardbuttons.map((card) => (
						<ButtonCard
							id={card.id}
							type={card.type}
							labelbutton={card.name}
							srcicon={card.icon}
							alticon={card.altIcon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
