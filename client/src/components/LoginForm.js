import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginform( {onLogin} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
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
            <label>Password</label>
            <input
             type="password" 
             className="form-control mt-1" 
             placeholder="Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Not a Member? <span>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
