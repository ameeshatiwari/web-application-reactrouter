import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../dashboard.css";

export default function Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to toggle drawer
  const [isSection1Open, setIsSection1Open] = useState(false);
  const [isSection2Open, setIsSection2Open] = useState(false);
  const [formColor, setFormColor] = useState("#ffffff"); // Default form color
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen); // Toggle drawer visibility
  const toggleSection1 = () => setIsSection1Open(!isSection1Open);
  const toggleSection2 = () => setIsSection2Open(!isSection2Open);

  const handleButtonClick = (color) => {
    setFormColor(color);
  };

  const handleLogout = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="dashboard-layout">
      {/* Hamburger Menu */}
      <button className="hamburger-menu" onClick={toggleDrawer}>
        ☰
      </button>

      {/* Drawer Section */}
      <div className={`drawer ${isDrawerOpen ? "open" : "closed"}`}>
        <h2 className="drawer-title">Dashboard</h2>
        <div className="collapsible-section">
          <button className="collapsible-toggle" onClick={toggleSection1}>
            {isSection1Open ? "Collapse Section 1" : "Expand Section 1"}
          </button>
          {isSection1Open && (
            <div className="section-content">Content for Section 1</div>
          )}
        </div>
        <div className="collapsible-section">
          <button className="collapsible-toggle" onClick={toggleSection2}>
            {isSection2Open ? "Collapse Section 2" : "Expand Section 2"}
          </button>
          {isSection2Open && (
            <div className="section-content">Content for Section 2</div>
          )}
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area of the dashboard.</p>

        {/* Buttons to change form color */}
        <div className="button-group">
          <button
            className="color-button"
            onClick={() => handleButtonClick("#ffcccc")}
          >
            Button 1
          </button>
          <button
            className="color-button"
            onClick={() => handleButtonClick("#ccffcc")}
          >
            Button 2
          </button>
          <button
            className="color-button"
            onClick={() => handleButtonClick("#ccccff")}
          >
            Button 3
          </button>
          <button
            className="color-button"
            onClick={() => handleButtonClick("#ffffcc")}
          >
            Button 4
          </button>
        </div>

        {/* Form with dynamic background color */}
        <form
          className="dynamic-form"
          style={{ backgroundColor: formColor }}
        >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}