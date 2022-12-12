const ButtonCard = (props: any) => {
	const {
		type,
		srcicon,
		alticon,
		labelbutton,
		classbutton = "inline-block w-full px-8 pt-2.5 pb-2 bg-primary-dark-cyan bg-opacity-80 text-white font-medium text-xs leading-normal rounded-lg shadow-md hover:bg-primary-dark-cyan hover:shadow-lg focus:bg-primary-dark-cyan focus:shadow-lg focus:outline-none focus:ring-0 active:bg-opacity-80 active:shadow-lg transition duration-300 ease-in-out flex justify-center",
	} = props;
	return (
		<div>
			<button type={type} className={`${classbutton}`}>
				<img className='w-4 mr-2' src={srcicon} alt={alticon} />
				<div className='text-paragraph font-bold'>{labelbutton}</div>
			</button>
		</div>
	);
};

export default ButtonCard;
