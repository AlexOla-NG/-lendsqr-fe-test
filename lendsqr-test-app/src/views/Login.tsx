import React from "react";
import LoginForm from "../components/form/LoginForm";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import hero from "../assets/images/hero.svg";

// TODO: stopped here
// style login page
// create form component; do we need form validation?

const login = () => {
  return (
    <section className="login">
      <div className="login-hero">
        <div className="logo">
          <Logo viewBox="0 0 174 36" />
        </div>
        <div className="hero">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="login-form">
        <LoginForm />
      </div>
    </section>
  );
};

export default login;
