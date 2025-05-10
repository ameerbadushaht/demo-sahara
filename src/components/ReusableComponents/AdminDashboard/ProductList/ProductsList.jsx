import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

function ProductsList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://sahara-backend-tubt.onrender.com/api/getallproducts")
      .then(response => {
        setProducts(response.data.products || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  const handleProductClick = (product) => {
    navigate(`/dashboard/product/${product._id}`, { state: { product } });
  };

  return (
    <section className="admin-products-container">
      <div className="admin-products-wrapper">
        <div className="admin-products-header">
          <h2>Product Management</h2>
        </div>
        
        {loading ? (
          <div className="admin-products-loading">
            <p>Loading products...</p>
          </div>
        ) : error ? (
          <div className="admin-products-error">
            <p>Error: {error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="admin-products-empty">
            <p>No products available</p>
          </div>
        ) : (
          <div className="admin-products-grid">
            {products.map((product) => (
              <div 
                className="admin-product-card" 
                key={product._id} 
                onClick={() => handleProductClick(product)}
              >
                <div className="admin-product-image-container">
                  <img 
                    className="admin-product-image"
                    src={product.img} 
                    alt={product.title} 
                    onError={(e) => e.target.src = "/assets/default-product.png"} 
                  />
                </div>
                <div className="admin-product-info">
                  <h3 className="admin-product-title">{product.title}</h3>
                  <p className="admin-product-description">
                    {product.description || "No description available"}
                  </p>
                  <div className="admin-product-meta">
                    <span className="admin-product-price">
                      {product.itemPrice ? `${product.itemPrice} DHS` : "Price not set"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsList;