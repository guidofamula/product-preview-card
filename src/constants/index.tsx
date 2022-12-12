import {
	IconCart,
	ImageProductDesktop,
	ImageProductMobile,
} from "../assets/indexImages";

export const cards = [
	{
		label: "Perfume",
		name: "Gabrielle Essence Eau De Parfum",
		imageDesktop: ImageProductDesktop,
		imageMobile: ImageProductMobile,
		altImage: "Header Picture Product",
		description:
			"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
		price: "$149.99",
		defaultPrice: "$169.99",
		cta: "Add to Cart",
	},
];

export const cardbuttons = [
	{
		id: "button-cart",
		type: "button",
		name: "Add to Cart",
		icon: IconCart,
		altIcon: "This is icon cart",
	},
];

export const challenge = [
	{
		id: "product-preview",
		challengeBy: "Frontend Mentor",
		linkMentor: "https://www.frontendmentor.io?ref=challenge",
		CodedBy: "Guido Famula",
		linkCoder: "https://guidofamula.com/",
	},
];
