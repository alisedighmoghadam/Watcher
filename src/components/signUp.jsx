import React from "react";

const SignUp = () => {
  return (
    <div className="sign-up-container container-fluid ">
      <h2>Sign up</h2>
      <form>
        <div className="col container d-flex field-container">
          <label for="fname" className="col-sm-4">
            First Name:
          </label>
          <input type="text" id="fname" name="fname" className="col" />
        </div>
        <div className="col container d-flex field-container">
          <label htmlFor="lname" className="col-sm-4">
            Last Name:
          </label>
          <input type="text" id="lname" name="lname" className="col" />
        </div>
        <div className="col container d-flex field-container">
          <label htmlFor="email" className="col-sm-4">
            Email:
          </label>
          <input type="email" name="email" id="email" className="col" />
        </div>
        <div className="col container d-flex field-container">
          <label htmlFor="pass" className="col-sm-4">
            Password:
          </label>
          <input type="password" name="pass" id="pass" className="col" />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
