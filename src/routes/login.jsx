import { Form, redirect, useActionData } from "react-router-dom";
import "../App.css";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email"); // Fixed missing quotes
  const password = formData.get("password");

  if (email === "ABC@gmail.com" && password === "ABC@gmail.com") {
    return redirect("/dashboard");
  }
  return {
    error: "Invalid Credentials",
  };
}

export default function LoginPage() {
  const actionData = useActionData();
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <Form method="post">
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
          {actionData?.error && (
            <p className="error-message">{actionData.error}</p> // Display error
          )}
          <button type="submit" className="login-button">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
