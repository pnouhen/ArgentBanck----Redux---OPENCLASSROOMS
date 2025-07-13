import { useSelector } from "react-redux";
import { clearToken } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const token = useSelector((state) => state.user.token);
  const data = useSelector((state) => state.user.data)
  const dispatch = useDispatch();

  function SignOut() {
    dispatch(clearToken(token));
  }

  return (
    <header className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src="/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
          loading="lazy"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {!token ? (
        <NavLink to="/sign-in" className="main-nav main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p> Sign In</p>
        </NavLink>
      ) : (
        <div className="main-nav">
        <NavLink to="/user" className="main-nav main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>{data?.userName}</p>
        </NavLink>
        <NavLink to="/" className="main-nav main-nav-item" onClick={SignOut}>
          <i className="fa fa-sign-out"></i>
          <p>Sign Out</p>
        </NavLink>
        </div>
      )}
    </header>
  );
}
