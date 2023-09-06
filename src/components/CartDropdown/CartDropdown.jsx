import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')  
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
