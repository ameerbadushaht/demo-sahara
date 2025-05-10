import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./AdminDashboard.css";
import '../../../css/main.css';
import '../../../css/responsive.css';
import ProductsList from "./ProductList/ProductsList";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductAdd from "./ProductAdd/ProductAdd";

function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className={`admin-sidebar ${collapsed ? "admin-sidebar-collapsed" : ""}`}>
        <div className="admin-sidebar-logo">
          {!collapsed && (
            <a href="/" className="admin-logo-link">
              {/* <img src="assets/Home/logo_white.svg" alt="Logo" className="admin-logo-img" /> */}
              <div className="FtrLogo" data-aos="fade-in" data-aos-duration="1000">
                <img src="/assets/Home/logo_white.svg" className="admin-logo-img" alt=""/></div>

            </a>
          )}
          <button 
            className="admin-sidebar-toggle" 
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? '☰' : '✕'}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="admin-sidebar-nav">
          <ul className="admin-sidebar-menu">
            <li className={`admin-sidebar-item ${location.pathname === "/dashboard" ? "admin-sidebar-active" : ""}`}>
              <Link to="/dashboard" className="admin-sidebar-link">
                <span className="admin-sidebar-icon">📋</span>
                {!collapsed && <span className="admin-sidebar-text">Product List</span>}
              </Link>
            </li>
            <li className={`admin-sidebar-item ${location.pathname.startsWith("/dashboard/product/add") ? "admin-sidebar-active" : ""}`}>
              <Link to="/dashboard/products/add" className="admin-sidebar-link">
                <span className="admin-sidebar-icon">➕</span>
                {!collapsed && <span className="admin-sidebar-text">Add Product</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main-content">
        <header className="admin-content-header">
          <h1 className="admin-header-title">Dashboard</h1>
        </header>
        <div className="admin-content-area">
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products/add" element={<ProductAdd />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;