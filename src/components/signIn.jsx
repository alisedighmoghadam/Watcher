import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in-container container-fluid ">
      <h2>Sign in</h2>
      <form>
        <div className="col container d-flex field-container">
          <label htmlFor="email" className="col-sm-2">
            Email:
          </label>
          <input type="email" name="email" id="email" className="col" />
        </div>
        <div className="col container d-flex field-container">
          <label htmlFor="pass" className="col-sm-2">
            Password:
          </label>
          <input type="password" name="pass" id="pass" className="col" />
        </div>
        <button>Continue</button>
      </form>
      <hr />
      <p>
        You don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default SignIn;
