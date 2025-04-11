import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/userSlice";
import { useRef } from "react";

import Header from "../structures/Header";
import Footer from "../structures/Footer";

export default function SignIn() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

  async function Login(e) {
    e.preventDefault();

    const login = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    if (response.ok) {
      const replogin = await response.json();
      const { token } = replogin.body;
      dispatch(setToken(token));
      navigate("/user")
    } else {
      alert("Email/Mot de passe incorrect. Veuillez réessayer");
    }
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={Login}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input type="email" id="email" ref={emailRef} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordRef} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
