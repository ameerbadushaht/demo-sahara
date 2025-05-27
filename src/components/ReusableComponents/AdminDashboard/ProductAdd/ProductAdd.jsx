
import React, { useState } from 'react';
import axios from 'axios';
import './ProductAdd.css';

const ProductAdd = () => {
    const [product, setProduct] = useState({});
    const [features, setFeatures] = useState([{ title: "", detail: "" }]);
    const [loading, setLoading] = useState(false);
    // const [imageFiles, setImageFiles] = useState([]);
    // const [previews, setPreviews] = useState([]);


    const [ogPreview, setOgPreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);
    const [sliderPreviews, setSliderPreviews] = useState([]);

    const [img, setOgImg] = useState(null);
    const [bImg, setBImg] = useState(null);
    const [sliderImgs, setSliderImgs] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedProduct = {
            ...product,
            [name]: value.trim()
        };

        // if (["dcp", "dcpPrice", "dbp", "dbpPrice"].includes(name)) {
        //     const dcp = parseFloat(updatedProduct.dcp || 0);
        //     const dcpPrice = parseFloat(updatedProduct.dcpPrice || 0);
        //     const dbp = parseFloat(updatedProduct.dbp || 0);
        //     const dbpPrice = parseFloat(updatedProduct.dbpPrice || 0);
        //     const total = (dcp * dcpPrice) + (dbp * dbpPrice);
        //     updatedProduct.itemPrice = total.toFixed(2);
        // }

        setProduct(updatedProduct);
    };


   const handleOgImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setOgImg(file); // Save file to state
        setOgPreview(URL.createObjectURL(file)); // For preview
    }
};

const handleBImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setBImg(file); // Save file to state
        setBannerPreview(URL.createObjectURL(file)); // For preview
    }
};

const handleSliderImgsChange = (e) => {
    const files = Array.from(e.target.files);
    setSliderImgs(files); // Save files to state
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setSliderPreviews(previewUrls);
};


    

    // const handleImageChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setImageFiles(files);

    //     const previewURLs = files.map(file => URL.createObjectURL(file));
    //     setPreviews(previewURLs);
    // };
    

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

    // Append regular product fields
    Object.entries(product).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // Append features as stringified JSON
    formData.append("features", JSON.stringify(features));

    // Append images to "images" field (upload.array("images", 6))
    const allImages = [];
    if (img) allImages.push(img);         // img -> imagePaths[0]
    if (bImg) allImages.push(bImg);       // img1 -> imagePaths[1]
    if (sliderImgs.length > 0) {
        allImages.push(...sliderImgs);    // img2 -> imagePaths[2] onwards
    }
          
        if (allImages.length > 0) {
            // console.log("imageFiles", allImages.length);

            allImages.forEach((file) => {
                formData.append("images", file);  // "images" is the field name expected by backend
            });
        }

        //  formData.append('features', JSON.stringify(features));


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

        // console.log("FormData JSON:\n", JSON.stringify(formDataObj, null, 2));

    try {
        
            // await axios.post("https://sahara-backend-tubt.onrender.com/api/add", formData, {
            //     headers: { "Content-Type": "multipart/form-data" },
            // });
            
        await axios.post("https://saharaoffice-backend.onrender.com/api/add", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        

        alert("✅ Product added successfully");
        window.location.reload();
    } catch (error) {
        console.error("❌ Error adding product:", error.response?.data || error.message);
        alert("Failed to add product");
    } finally {
        setLoading(false);
    }
};

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     const formData = new FormData();
    //     Object.entries(product).forEach(([key, value]) => {
    //         formData.append(key, value);
    //     });

    //      // Add the images to the form data individually
    // if (img) formData.append("img", img); // OG Image
    // if (bImg) formData.append("img1", bImg); // Banner Image
    // if (sliderImgs.length > 0) {
    //     sliderImgs.forEach((file, index) => {
    //         // Map the slider images to img2, img3, img4, etc.
    //         formData.append(`img${index + 2}`, file); 
    //     });
    // }


    //     formData.append('features', JSON.stringify(features));



    //     const formDataObj = {};
    //     formData.forEach((value, key) => {
    //         // If key already exists (e.g., for multiple images), store as array
    //         if (formDataObj[key]) {
    //             if (!Array.isArray(formDataObj[key])) {
    //                 formDataObj[key] = [formDataObj[key]];
    //             }
    //             formDataObj[key].push(value);
    //         } else {
    //             formDataObj[key] = value;
    //         }
    //     });

    //     console.log("FormData JSON:\n", JSON.stringify(formDataObj, null, 2));

    //     try {
    //         // await axios.post("https://sahara-backend-tubt.onrender.com/api/add", formData, {
    //         //     headers: { "Content-Type": "multipart/form-data" },
    //         // });
    //         console.log("✅ Product added successfully",formData);

    //         await axios.post("http://localhost:5000/api/add", formData, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
            
    //         alert("✅ Product added successfully");
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("❌ Error adding product:", error.response?.data || error.message);
    //         alert("Failed to add product");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const printerDetails = [
        { label: "Brand", name: "brand" },
        // { label: "Connectivity", name: "connectivity" },
        // { label: "Printing Technology", name: "printingTechnology" },
        { label: "Functions", name: "functions" },
        // { label: "Color", name: "color" },
        { label: "Make and Model", name: "makeModel" },
        { label: "Output", name: "output" },
        { label: "Speed (in ppm)", name: "speed" },
        // { label: "Max Monochrome Speed (in ppm)", name: "maxPrintSpeedMonochrome" },
        // { label: "Item Weight (in Kilograms)", name: "itemWeight" },
    ];

    const priceFields = [
        { label: "Default Color Prints", name: "colorPrint" },
        { label: "Color Print Unit Price", name: "colorPrice" },
        { label: "Default Black Prints", name: "blackPrint" },
        { label: "Black Print Unit Price", name: "blackPrice" },
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
                        <section className="admin-product-add-section">
                            <h3 className="admin-product-add-section-title">
                                <span className="admin-product-add-section-icon">🖼️</span> Additional Images
                            </h3>
                            <div className="admin-product-add-form-group">
                                <label className="admin-product-add-label">
                                    OG Image:
                                    <input 
                                    type="file" 
                                    name="img" 
                                    accept="image/*" 
                                    onChange={handleOgImgChange} 
                                    required 
                                    />
                                </label>
                                {ogPreview && (
                                    <div className="admin-product-add-image-preview">
                                    <img src={ogPreview} alt="OG Preview" className="admin-product-add-preview-img" />
                                    </div>
                                )}

                                <label className="admin-product-add-label">
                                    Banner Image:
                                    <input 
                                    type="file" 
                                    name="bImg" 
                                    accept="image/*" 
                                    onChange={handleBImgChange} 
                                    required 
                                    />
                                </label>
                                {bannerPreview && (
                                    <div className="admin-product-add-image-preview">
                                    <img src={bannerPreview} alt="Banner Preview" className="admin-product-add-preview-img" />
                                    </div>
                                )}

                                <label className="admin-product-add-label">
                                    Slider Images ( Maximum 4 ):
                                    <input 
                                    type="file" 
                                    name="sliderImgs" 
                                    accept="image/*" 
                                    multiple 
                                    onChange={handleSliderImgsChange} 
                                    />
                                </label>
                                {sliderPreviews.length > 0 && (
                                    <div className="admin-product-add-image-preview">
                                    {sliderPreviews.map((src, index) => (
                                        <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Slider Preview ${index}`} 
                                        className="admin-product-add-preview-img" 
                                        />
                                    ))}
                                    </div>
                                )}
                                </div>

                        </section>


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

