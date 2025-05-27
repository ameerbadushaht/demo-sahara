import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [removedImages, setRemovedImages] = useState([]);
  const [isSaving, setIsSaving] = useState(false);


  const [product, setProduct] = useState(
    location.state?.product || {
      title: "",
      productFullName: "",
      description: "",
      features: [],
      img: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      brand: "",
    //   connectivity: "",
    //   printingTechnology: "",
      functions: "",
    //   color: "",
      makeModel: "",
      output: "",
      speed: "",
    //   maxPrintSpeedMonochrome: "",
    //   itemWeight: "",
      colorPrint: "",
      colorPrice: "",
      blackPrint: "",
      blackPrice: "",
      itemPrice: "",
      slideRange: "",
      customOrder: "",
    }
  );


  const imageLabels = {
  img: "Main Image",
  img1: "Banner Image",
  img2: "Slider Image 2",
  img3: "Slider Image 3",
  img4: "Slider Image 4",
  img5: "Slider Image 5",
  img6: "Slider Image 6",
};

  const [tempProduct, setTempProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTempProduct((prev) => {
      const updated = { ...prev, [name]: value };

    //   const dcp = parseFloat(updated.dcp) || 0;
    //   const dcpPrice = parseFloat(updated.dcpPrice) || 0;
    //   const dbp = parseFloat(updated.dbp) || 0;
    //   const dbpPrice = parseFloat(updated.dbpPrice) || 0;

    //   if (["dcp", "dcpPrice", "dbp", "dbpPrice"].includes(name)) {
    //     updated.itemPrice = (dcp * dcpPrice + dbp * dbpPrice).toFixed(2);
    //   }

      return updated;
    });
  };

//   const handleImageChange = (key) => (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setTempProduct((prev) => ({
//         ...prev,
//         [key]: file,
//       }));
//     }
//   };

const renderImage = (key, index) => {
    const value = tempProduct[key];
    const isFile = value instanceof File;
  const label = imageLabels[key] || `Image ${index + 1}`; 
    return (
     <div className="product-image-block" key={key}>
      <div className="image-number">{label}</div>

      {value && (
        <img
          src={isFile ? URL.createObjectURL(value) : value}
          alt={key}
          className="product-preview-image"
        />
      )}

      {isEditing && (
        <div className="image-controls">
          <label>
            <span className="upload-label">Change {label}:</span>
            <input
              type="file"
              onChange={(e) =>
                setTempProduct((prev) => ({
                  ...prev,
                  [key]: e.target.files[0],
                }))
              }
            />
          </label>
          {value && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => {
                setTempProduct((prev) => ({
                  ...prev,
                  [key]: "",
                }));
                setRemovedImages((prev) => [...prev, key]);
              }}
            >
              Remove
            </button>
          )}
        </div>
      )}
    </div>
    );
  };
  
  

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      for (const key in tempProduct) {
        if (["features"].includes(key)) {
          formData.append(key, JSON.stringify(tempProduct[key]));
        } else if (tempProduct[key] instanceof File) {
          formData.append(key, tempProduct[key]);
        } else {
          formData.append(key, tempProduct[key] || "");
        }
      }
      // Add removedImages if any
    if (removedImages.length > 0) {
        formData.append("removedImages", JSON.stringify(removedImages));
      }

    //   const response = await fetch(
    //     `http://localhost:5000/api/update/${product._id}`,
    //     {
    //       method: "PUT",
    //       body: formData,
    //     }
    //   );

      
      const response = await fetch(
        `https://saharaoffice-backend.onrender.com/api/update/${product._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update product");

      setProduct(data);
      setIsEditing(false);
      alert("Product updated successfully!");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(
        `https://saharaoffice-backend.onrender.com/api/delete/${product._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete product");

      alert("Product deleted successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  const handleCancel = () => {
    setTempProduct(product);
    setIsEditing(false);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save"}
            </button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>✎ Edit</button>
            <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
          </>
        )}
      </div>

      {/* Product Images */}
      {/* <div className="product-image-gallery">
        {["img", "img1", "img2", "img3", "img4"].map(renderImage)}
      </div> */}

        <div className={`product-image-gallery ${isEditing ? "editing" : ""}`}>
        {["img", "img1", "img2", "img3", "img4" ,"img5"].map((key, index) => (
            <div key={key}>{renderImage(key, index)}</div>  
        ))}
        </div>

 

      <div className="product-details-list">
        {/* General Info */}
        <div className="product-section">
          <h3>🗂️ General Info</h3>
          {[
            { label: "Product Name", key: "title" },
            { label: "Full Name", key: "productFullName" },
            { label: "Customer Order Number", key: "customOrder" },
          ].map(({ label, key }) => (
            <div key={key} className="product-detail-item">
              <strong>{label}:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={tempProduct[key]}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{tempProduct[key] || "N/A"}</span>
              )}
            </div>
          ))}

          <div className="product-detail-item description">
            <strong>Description:</strong>
            {isEditing ? (
              <textarea name="description" value={tempProduct.description} onChange={handleInputChange} />
            ) : (
              <span>{tempProduct.description || "N/A"}</span>
            )}
          </div>

          <div className="product-detail-item features">
            <strong>Features:</strong>
            {isEditing ? (
              <>
                {tempProduct.features.map((feature, index) => (
                  <div key={index} className="feature-edit-container">
                    <input
                      type="text"
                      placeholder="Title"
                      value={feature.title}
                      onChange={(e) => {
                        const updated = [...tempProduct.features];
                        updated[index].title = e.target.value;
                        setTempProduct((prev) => ({ ...prev, features: updated }));
                      }}
                    />
                    <textarea
                      placeholder="Detail"
                      value={feature.detail}
                      onChange={(e) => {
                        const updated = [...tempProduct.features];
                        updated[index].detail = e.target.value;
                        setTempProduct((prev) => ({ ...prev, features: updated }));
                      }}
                    />
                    <button onClick={() => {
                      const updated = tempProduct.features.filter((_, i) => i !== index);
                      setTempProduct((prev) => ({ ...prev, features: updated }));
                    }}>❌ Remove</button>
                  </div>
                ))}
                <button onClick={() =>
                  setTempProduct((prev) => ({
                    ...prev,
                    features: [...prev.features, { title: "", detail: "" }],
                  }))
                }>➕ Add Feature</button>
              </>
            ) : (
              <ul>
                {Array.isArray(tempProduct.features) && tempProduct.features.length > 0 ? (
                  tempProduct.features.map((f, i) => (
                    <li key={i}>
                      {typeof f === "string" ? f : `${f.title}: ${f.detail}`}
                    </li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Printer Details */}
        <div className="product-section">
          <h3>🖨️ Printer Details</h3>
          {[
            "brand", "functions", "makeModel", "output", "speed",
          ].map((key) => (
            <div key={key} className="product-detail-item">
              <strong>{key.replace(/([A-Z])/g, " $1")}</strong>
              {isEditing ? (
                <input type="text" name={key} value={tempProduct[key] || ""} onChange={handleInputChange} />
              ) : (
                <span>{tempProduct[key] || "N/A"}</span>
              )}
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="product-section">
          <h3>💰 Price Details</h3>
          {[
            "colorPrint", "colorPrice", "blackPrint", "blackPrice", "slideRange", "itemPrice"
          ].map((key) => (
            <div key={key} className="product-detail-item">
              <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>
              {isEditing ? (
                <input type="text" name={key} value={tempProduct[key] || ""} onChange={handleInputChange} />
              ) : (
                <span>{tempProduct[key] || "N/A"}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
