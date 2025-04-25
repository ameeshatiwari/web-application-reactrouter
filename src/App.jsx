import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to the App</h1>
      <Link to="/login" className="login-link">
        Go to Login Page
      </Link>
    </div>
  );
}

export default App;
