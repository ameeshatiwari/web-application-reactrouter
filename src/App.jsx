import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Link to="/login" className="login-link">
          Go to Login Page
        </Link>
      </div>
    </>
  );
}

export default App;
