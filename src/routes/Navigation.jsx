import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown-logo.svg";
import "./Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser)

  return (
    <>
      <div className="navigation">
        <Link className="navigation__logo" to="/">
          <CrwnLogo />
        </Link>

        <div className="navigation__links">
          <Link className="navigation__link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <Link className="navigation__link" to="/auth">
              Sign Out
            </Link>
          ) : (
            <Link className="navigation__link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
