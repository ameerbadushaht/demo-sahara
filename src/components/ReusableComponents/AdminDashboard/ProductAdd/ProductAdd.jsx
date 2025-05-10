import React, { useState } from 'react';
import axios from 'axios';
import './ProductAdd.css';

const ProductAdd = () => {
    const [product, setProduct] = useState({});
    const [features, setFeatures] = useState([{ title: "", detail: "" }]);
    const [loading, setLoading] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
const [previews, setPreviews] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedProduct = {
            ...product,
            [name]: value.trim()
        };

        if (["dcp", "dcpPrice", "dbp", "dbpPrice"].includes(name)) {
            const dcp = parseFloat(updatedProduct.dcp || 0);
            const dcpPrice = parseFloat(updatedProduct.dcpPrice || 0);
            const dbp = parseFloat(updatedProduct.dbp || 0);
            const dbpPrice = parseFloat(updatedProduct.dbpPrice || 0);
            const total = (dcp * dcpPrice) + (dbp * dbpPrice);
            updatedProduct.itemPrice = total.toFixed(2);
        }

        setProduct(updatedProduct);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(files);
    
        const previewURLs = files.map(file => URL.createObjectURL(file));
        setPreviews(previewURLs);
    };
    

    const handleFeatureChange = (index, field, value) => {
        const updated = [...features];
        updated[index][field] = value;
        setFeatures(updated);
    };

    const addFeatureField = () => {
        setFeatures([...features, { title: "", detail: "" }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (imageFiles.length > 0) {
            imageFiles.forEach((file) => {
                formData.append("images", file); // "images" matches the field expected by backend
            });
        }
        
      

        formData.append('features', JSON.stringify(features));



        const formDataObj = {};
        formData.forEach((value, key) => {
            // If key already exists (e.g., for multiple images), store as array
            if (formDataObj[key]) {
                if (!Array.isArray(formDataObj[key])) {
                    formDataObj[key] = [formDataObj[key]];
                }
                formDataObj[key].push(value);
            } else {
                formDataObj[key] = value;
            }
        });

        console.log("FormData JSON:\n", JSON.stringify(formDataObj, null, 2));

        try {
            await axios.post("https://sahara-backend-tubt.onrender.com/api/add", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // console.log("✅ Product added successfully",formData);

            // await axios.post("http://localhost:5000/api/add", formData, {
            //     headers: { "Content-Type": "multipart/form-data" },
            // });
            
            alert("✅ Product added successfully");
            window.location.reload();
        } catch (error) {
            console.error("❌ Error adding product:", error.response?.data || error.message);
            alert("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    const printerDetails = [
        { label: "Brand", name: "brand" },
        { label: "Connectivity", name: "connectivity" },
        { label: "Printing Technology", name: "printingTechnology" },
        { label: "Special Features", name: "specialFeatures" },
        { label: "Color", name: "color" },
        { label: "Model Name", name: "modelName" },
        { label: "Printer Output", name: "printerOutput" },
        { label: "Max Print Speed (Color) (in ppm)", name: "maxPrintSpeedColor" },
        { label: "Max Monochrome Speed (in ppm)", name: "maxPrintSpeedMonochrome" },
        { label: "Item Weight (in Kilograms)", name: "itemWeight" },
    ];

    const priceFields = [
        { label: "Default Color Prints", name: "dcp" },
        { label: "Color Print Unit Price", name: "dcpPrice" },
        { label: "Default Black Prints", name: "dbp" },
        { label: "Black Print Unit Price", name: "dbpPrice" },
        { label: "Default Print Price", name: "itemPrice" },
        { label: "Slide Range", name: "slideRange" },
        { label: "Custom Order", name: "customOrder" },
    ];

    return (
        <div className="admin-product-add-container">
            <h2 className="admin-product-add-title">Add New Product</h2>
            <form onSubmit={handleSubmit} className="admin-product-add-form" encType="multipart/form-data">
                
                {/* General Info */}
                <section className="admin-product-add-section">
                    <h3 className="admin-product-add-section-title">
                        <span className="admin-product-add-section-icon">📌</span> General Information
                    </h3>
                    <div className="admin-product-add-form-group">
                        {[
                            { label: "Product Name", name: "title" },
                            { label: "Full Name", name: "productFullName" }
                        ].map(({ label, name }) => (
                            <label key={name} className="admin-product-add-label">
                                {label}:
                                <input 
                                    type="text" 
                                    name={name} 
                                    onChange={handleChange} 
                                    className="admin-product-add-input"
                                    required 
                                />
                            </label>
                        ))}
                        <label className="admin-product-add-label">
                            Description:
                            <textarea
                                name="description"
                                onChange={handleChange}
                                className="admin-product-add-textarea"
                                required
                            />
                        </label>
                    </div>
                </section>

                {/* Features */}
                <section className="admin-product-add-section">
                    <h3 className="admin-product-add-section-title">
                        <span className="admin-product-add-section-icon">⭐</span> Features
                    </h3>
                    <div className="admin-product-add-features">
                        {features.map((feature, index) => (
                            <div key={index} className="admin-product-add-feature-group">
                                <label className="admin-product-add-label">
                                    Feature Title:
                                    <input
                                        type="text"
                                        value={feature.title}
                                        onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                                        className="admin-product-add-input"
                                        required
                                    />
                                </label>
                                <label className="admin-product-add-label">
                                    Feature Detail:
                                    <textarea
                                        value={feature.detail}
                                        onChange={(e) => handleFeatureChange(index, 'detail', e.target.value)}
                                        className="admin-product-add-textarea"
                                        required
                                    />
                                </label>
                            </div>
                        ))}
                        <button 
                            type="button" 
                            onClick={addFeatureField} 
                            className="admin-product-add-feature-button"
                        >
                            ➕ Add More Features
                        </button>
                    </div>
                </section>

                {/* Printer Specs */}
                <section className="admin-product-add-section">
                    <h3 className="admin-product-add-section-title">
                        <span className="admin-product-add-section-icon">🖨️</span> Printer Specifications
                    </h3>
                    <div className="admin-product-add-two-column">
                        <div className="admin-product-add-image-upload">
                            <label className="admin-product-add-label">
                                Product Image:
                                <div className="admin-product-add-file-upload">
                                <input 
                                    type="file" 
                                    name="img" 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                    className="admin-product-add-file-input"
                                    multiple  // <-- Add this
                                    required 
                                    />

                                    <span className="admin-product-add-file-button">Choose File</span>
                                    {imageFiles && (
                                        <span className="admin-product-add-file-name">{imageFiles.name}</span>
                                    )}
                                </div>
                            </label>
                            {previews.length > 0 && (
                                <div className="admin-product-add-image-preview">
                                    {previews.map((src, index) => (
                                    <img key={index} src={src} alt={`Preview ${index}`} className="admin-product-add-preview-img" />
                                    ))}
                                </div>
                                )}

                        </div>

                        <div className="admin-product-add-form-group">
                            {printerDetails.map(({ label, name }) => (
                                <label key={name} className="admin-product-add-label">
                                    {label}:
                                    <input 
                                        type="text" 
                                        name={name} 
                                        onChange={handleChange} 
                                        className="admin-product-add-input"
                                        required 
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="admin-product-add-section">
                    <h3 className="admin-product-add-section-title">
                        <span className="admin-product-add-section-icon">💰</span> Pricing Details
                    </h3>
                    <div className="admin-product-add-two-column">
                        {priceFields.map(({ label, name }) => (
                            <label key={name} className="admin-product-add-label">
                                {label}:
                                <input 
                                    type="text" 
                                    name={name} 
                                    onChange={handleChange} 
                                    className="admin-product-add-input"
                                    required 
                                    value={product[name] || ''}
                                />
                            </label>
                        ))}
                    </div>
                </section>

                {/* Submit */}
                <div className="admin-product-add-submit">
                    <button 
                        type="submit" 
                        className="admin-product-add-submit-button" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="admin-product-add-spinner">⏳</span> Adding Product...
                            </>
                        ) : (
                            <>
                                <span className="admin-product-add-check">✅</span> Add Product
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
