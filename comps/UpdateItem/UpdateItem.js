"use client";
import "../AddProduct/AddProduct.css";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useState } from "react";
import { useEffect } from "react";

const UpdateItem = ({item , toggleItemEdit}) => {

  const [productId, setProductId] = useState("");
  const [name, setName] = useState(item.Name);
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [mrp, setMrp] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const openSection = (section) => {
    section === "details";
    setActiveSection(section);
  };
  useEffect(() => {
    setActiveSection("details");
  }, []);

  const isSectionActive = (section) => {
    return activeSection === section;
  };

  const closeSection = () => {
    setActiveSection("");
  };
  const [status, setStatus] = useState("Inactive");
  const [recyclable, setRecyclable] = useState("No");

  const handleStatusToggle = () => {
    setStatus((prevStatus) =>
      prevStatus === "Inactive" ? "Active" : "Inactive"
    );
  };

  const handleRecyclableToggle = () => {
    setRecyclable((prevRecyclable) => (prevRecyclable === "No" ? "Yes" : "No"));
  };

  const sections = ["details", "features", "others"];
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const handleBack = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };
  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex >= 0) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  return (
    <div>
      {/* <h2>UpdateItem</h2> */}
      <div className="form-container">
          <div className="form-header">
            <button className="back-button" onClick={handleBack}>
              <FaArrowLeft />
            </button>

            <div className="product-navbar">
              <nav className="nav">
                <ul className="links">
                  <li
                    className={`dashboard ${
                      isSectionActive("details") ? "active" : ""
                    }`}
                    onClick={() => openSection("details")}
                  >
                    <a href="#">Details</a>
                  </li>
                  <li
                    className={`features ${
                      isSectionActive("features") ? "active" : ""
                    }`}
                    onClick={() => openSection("features")}
                  >
                    <a href="#">Features</a>
                  </li>
                  <li
                    className={`others ${
                      isSectionActive("others") ? "active" : ""
                    }`}
                    onClick={() => openSection("others")}
                  >
                    <a href="#">Others</a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="close-button" onClick={()=>toggleItemEdit(false)}>
              <FaTimes />
            </button>
          </div>
          {isSectionActive("details") && (
            <div className="details-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="type" className="details_product_text">
                  Product Image
                </label>
                <div className="details-image-upload">
                  <div className="details-upload-container">
                    <label
                      htmlFor="file-upload"
                      className="details-upload-label"
                    >
                      <FaCloudUploadAlt />
                      Upload
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className="upload-input"
                    />
                  </div>
                </div>

                <div className="details-form-fields">
                  <div className="details-form-row">
                    <label htmlFor="type">Product ID</label>
                    <input
                      type="text"
                      id="productId"
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                    />
                  </div>
                  <div className="details-form-row">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="details-form-row">
                    <label htmlFor="type">Type</label>
                    <select
                      id="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">Select Type</option>
                      {/* Add options as needed */}
                    </select>
                  </div>
                  <div className="details-form-row">
                    <label htmlFor="domain">Domain</label>
                    <select
                      id="domain"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                    >
                      <option value="">Select Domain</option>
                      {/* Add options as needed */}
                    </select>
                  </div>
                  <div className="details-form-row">
                    <label htmlFor="mrp">MRP</label>
                    <input
                      type="text"
                      id="mrp"
                      value={mrp}
                      onChange={(e) => setMrp(e.target.value)}
                    />
                  </div>
                  <div className="details-form-row">
                    <label htmlFor="gstNo">GST No</label>
                    <input
                      type="text"
                      id="gstNo"
                      value={gstNo}
                      onChange={(e) => setGstNo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <button
                    type="button"
                    className="close-button"
                    onClick={toggleForm}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="next-button"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}
          {isSectionActive("features") && (
            <form onSubmit={handleSubmit}>
              <div className="features-form-fields">
                <div className="features-form-row">
                  <label htmlFor="domain">Skin Type</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>{" "}
                <div className="features-form-row">
                  <label htmlFor="domain">Gender Target</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>{" "}
                <div className="features-form-row">
                  <label htmlFor="domain">Age Group</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>
                <div className="features-form-row">
                  <label htmlFor="name">Description</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="features-form-row">
                  <label htmlFor="name">Direction</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="features-form-row">
                  <label htmlFor="name">Recommended Uses</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="features-form-footer">
                <button
                  type="button"
                  className="features-back-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="features-next-button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {isSectionActive("others") && (
            <form onSubmit={handleSubmit}>
              <div className="others-form-fields">
                <div className="others-form-row">
                  <label htmlFor="domain">Material Type Free</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>{" "}
                <div className="others-form-row">
                  <label htmlFor="domain">Special Features</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>{" "}
                <div className="others-form-row">
                  <label htmlFor="domain">Approved By</label>
                  <select
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value="">Select Domain</option>
                    {/* Add options as needed */}
                  </select>
                </div>
                <div className="others-form-row">
                  <label htmlFor="name">Benefits</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="others-form-row">
                  <label htmlFor="name">Special Ingredients</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="toggle-switch-container">
                  <label
                    className={`toggle-label ${
                      status === "Active" ? "active" : ""
                    }`}
                  >
                    <span className="toggle-label-top">Status</span>
                    <br />
                    <input
                      className="toggle-checkbox"
                      type="checkbox"
                      onChange={handleStatusToggle}
                    />
                    <div className="toggle-switch"></div>
                    <span className="toggle-label">{status}</span>
                  </label>
                  <br />
                  <br />
                  <br />
                  <span className="toggle-label-top">Recyclable</span>
                  <br />
                  <label
                    className={`toggle-label ${
                      recyclable === "Yes" ? "active" : ""
                    }`}
                  >
                    <input
                      className="toggle-checkbox"
                      type="checkbox"
                      onChange={handleRecyclableToggle}
                    />
                    <div className="toggle-switch"></div>
                    <span className="toggle-label">{recyclable}</span>
                  </label>
                </div>
              </div>

              <div className="others-form-footer">
                <button
                  type="button"
                  className="others-back-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button type="submit" className="others-next-button">
                  Submit
                </button>
              </div>
            </form>
          )}{" "}
        </div>

    </div>
  )
}

export default UpdateItem