export const Dish = ({ name, price, image}) => {
    return (
        <div className="dish">
            <h3>{name}</h3>
            <p>{price}</p>
            <img src={image} alt={name} />
        </div>
        );
}