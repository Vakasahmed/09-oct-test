import React from "react";

function RigthUp() {
  return (
    <div className="rightUp">
      <h2>Sign Up</h2>
      <div className="output">
      <div className="input">
      <label>First Name</label>
        <input className="lastName" />
      </div>
        <div className="input">
        <label>Last Name</label>
        <input className="lastName" />
        </div>
      </div>
      <div className="input">
        <label>Email</label>
        <input />
      </div>
      <div className="input">
        <label>Password</label>
        <input />
      </div>
      <div className="input">
        <label>Re-enter password</label>
        <input />
      </div>
      <div>
        <input type={"checkbox"}/>
        <span>
          i've read and agree with Terms of <br/>Service and our privacy Policy
        </span>
      </div>
      <div>
        <button className="signUpBtn" type={"submit"}>Sign up</button>
      </div>
      <div className="or">OR</div>
    </div>
  );
}

export default RigthUp;
