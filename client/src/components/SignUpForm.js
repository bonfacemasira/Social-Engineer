import React, { useState } from "react";

function SignUpForm({onLogin}) {
  const [full_name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [license_number, setLicenseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        contact,
        license_number,
        password,
        password_confirmation,
        experience,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user)=> onLogin(user));
      } else {
        r.json().then((err)=> onLogin(err.errors));
      }
    });
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
              id="full_name"
              placeholder="Jane Doe"
              value={full_name}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              id='email'
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
              id="contact"
              className="form-control mt-1"
              placeholder="2547xxxxxxxxx"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>License Number</label>
            <input
              type="text"
              id="licenseNumber"
              className="form-control mt-1"
              placeholder="License Number"
              value={license_number}
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
            <label>Password Confirmation</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Experience</label>
            <input
              type="number"
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
