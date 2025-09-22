export const Dish = ({ name, price, image }) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>{price} €</p>
			<img src={image} alt={name} />
		</div>
	);
};
