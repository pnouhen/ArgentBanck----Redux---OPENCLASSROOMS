import { useRef } from "react";

import Footer from "../structures/Footer";
import Header from "../structures/Header";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function Login(e) {
    e.preventDefault();

    const login = {
      email: emailRef.current.value,  // correspond à ce que ton backend attend
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

    if (!response.ok) {
      alert("Email/Mot de passe incorrect. Veuillez réessayer ")
    }
    const data = await response.json();
    window.location.href = "./user";
    console.log(data);
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
