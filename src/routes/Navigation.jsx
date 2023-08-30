import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown-logo.svg";
import "./Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null)
  };

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
            <span onClick={signOutHandler} className="navigation__link">
              Sign Out
            </span>
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
