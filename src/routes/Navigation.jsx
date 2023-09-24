import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown-logo.svg";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../components/CartIcon/CartIcon";
import CartDropdown from "../components/CartDropdown/CartDropdown";
import { CartContext } from "../contexts/cartContext";
import { LogoContainer, NavLink, NavLinkSpan, NavLinks, NavigationContainer } from "./Navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinks >
          <NavLink to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLinkSpan onClick={signOutHandler} className="navigation__link">
              Sign Out
            </NavLinkSpan>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>  
      <Outlet />
    </>
  );
};

export default Navigation;