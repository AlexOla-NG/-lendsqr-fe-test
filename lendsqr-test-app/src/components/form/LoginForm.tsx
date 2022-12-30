import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserAuth } from "./interface";

const LoginForm = ({ userAuth }: IUserAuth) => {
  const intialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(intialValues);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };

  const handleToggle = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    userAuth();
    navigate("/users");
  };

  return (
    <div className="form-wrapper">
      <div className="title-wrapper">
        <h1>Welcome!</h1>
        <h2>Enter details to login.</h2>
      </div>

      <form>
        <div className="form-content">
          <div className="input-wrapper">
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-wrapper password">
            <input
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              required
            />
            <button className="btn text-btn" onClick={handleToggle}>
              {showPassword ? "hide" : "show"}
            </button>
          </div>
          <button className="btn text-btn" onClick={handleForgotPassword}>
            forgot password
          </button>
        </div>
        <button className="btn" onClick={handleSubmit}>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
