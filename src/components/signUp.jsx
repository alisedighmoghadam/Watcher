import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up-container container-fluid ">
      <h2>Sign up</h2>
      <form>
        <div className="col container d-flex field-container">
          <label for="fname" className="col-sm-2">
            First Name:
          </label>
          <input type="text" id="fname" name="fname" className="col" />
        </div>
        <div className="col container d-flex field-container">
          <label htmlFor="lname" className="col-sm-2">
            Last Name:
          </label>
          <input type="text" id="lname" name="lname" className="col" />
        </div>
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
      <hr></hr>
      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
