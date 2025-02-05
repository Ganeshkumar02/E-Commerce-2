import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Logo from "./Logo";
import Slider from "./Slider";
import Category from "./Category";
import Product from "./Product";
import ContactUs from "./ContactUs";
import { ThemeContext } from "./ThemeContext";
import "./Dashboard.css";


function Dashboard() {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
    const location = useLocation();
    const { name } = location.state || {}; // Get 'name' from router state
    const [currentView, setCurrentView] = useState("Hero"); // Manage current view
    const navigate=useNavigate();
    
    //check if the token exists on component
    useEffect(()=>{
        const token=localStorage.getItem("Token");
        if(!token){
            //Redirect to login if no token is found
navigate("/")
        }
    },[navigate]);
    

    // Handle menu click to switch content
    const handleMenuClick = (view) => {
        setCurrentView(view);
    };

    // Dynamically render content
    const renderContent = () => {
        switch (currentView) {
            case "Hero":
                return <Hero />;
            case "Logo":
                return <Logo />;
            case "Slider":
                return <Slider />;
            case "Category":
                return <Category />;
            case "Product":
                return <Product />;
            case "ContactUs":
                return <ContactUs />;
            default:
                return <Hero />;
        }
    };

    const handleLogout=()=>{
        localStorage.removeItem("Token");
        navigate('/login')
    }
    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333", // Set light or dark background
                color: theme === "light" ? "#000" : "#fff", // Set contrasting text color
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div className="dashboard-container">
                {/* Sidebar */}
                <div className="sidebar">
                    <h3>Sidebar Menu</h3>
                    <ul>
                        <li onClick={() => handleMenuClick("Hero")}>Dashboard</li>
                        <li onClick={() => handleMenuClick("Logo")}>Logo</li>
                        <li onClick={() => handleMenuClick("Slider")}>Slider</li>
                        <li onClick={() => handleMenuClick("Category")}>Category</li>
                        <li onClick={() => handleMenuClick("Product")}>Product</li>
                        <li onClick={() => handleMenuClick("ContactUs")}>ContactUs</li>
                    </ul>
                </div>

                {/* Main Dashboard Area */}
                <div className="main-content">
                    {/* Header */}
                    <header className="header">
                        <div className="profile-section">
                            <h2 className="view-title">{name || "Guest"}</h2>

                            {/* Toggle Theme Button */}
                            <div className="theme-controls">
                                <button onClick={toggleTheme} className="toggle-btn">
                                    Toggle Theme
                                </button>
                            </div>

                            {/* Profile Section */}
                            <div className="profile-section">
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                                <img
                                    style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                                    src="p1.jpg"
                                    alt="profile-picture"
                                />
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="content">{renderContent()}</main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
