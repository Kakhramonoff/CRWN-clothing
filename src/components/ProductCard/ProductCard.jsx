import { useContext } from "react";
import Button from "../button/Button";
import "./ProductCard.styles.scss";
import { CartContext } from "../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  
  const handleAddToCard = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleAddToCard} buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
