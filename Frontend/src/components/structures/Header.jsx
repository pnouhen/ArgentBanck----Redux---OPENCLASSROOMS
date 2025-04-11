import { useSelector } from "react-redux";
import {clearToken} from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.webp";

export default function Header() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  console.log("Token is in Header", token)

  function SignOut(){
    dispatch(clearToken(token))
  }

  return (
    <header className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to="/sign-in" className="main-nav-item" onClick={SignOut}>
      {token ? (
        <>
                <i className="fa fa-user-circle"></i>
        <p>Sign Out</p>
        </>
      ):(
        <p>Sign In</p>
      )}
      </NavLink>
    </header>
  );
}
