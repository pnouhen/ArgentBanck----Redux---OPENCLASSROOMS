import { NavLink } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.webp"


export default function Header() {
    return(
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink> 
            <NavLink to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
            </NavLink>
        </header>
    )
}