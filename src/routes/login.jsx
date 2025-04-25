import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "ABC@gmail.com" && password === "ABC@gmail.com") {
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input name="email" type="email" className="login-input" required />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="login-input"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
