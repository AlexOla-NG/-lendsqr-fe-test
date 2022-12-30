import React from "react";

// TODO: stopped here
// finish styling form
// add logic to form component

const LoginForm = () => {
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
              value=""
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-wrapper password">
            <input
              type="password"
              value=""
              name="email"
              placeholder="Password"
              required
            />
            <button className="btn text-btn">show</button>
          </div>
          <button className="btn text-btn">forgot password</button>
        </div>
        <button className="btn">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
