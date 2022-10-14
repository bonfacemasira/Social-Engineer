import React, { useState } from "react";

function SignUpForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(password)
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered? <span className="link-primary">Login</span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Jane Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contact</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="2547xxxxxxxxx"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>License Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Experience</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
