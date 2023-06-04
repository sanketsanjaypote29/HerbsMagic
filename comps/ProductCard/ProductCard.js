"use client";
import "./ProductCard.css";
import { FaPen } from "react-icons/fa";
import React, { useState } from "react";

const ProductCard = () => {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="product_container">
      <div className="product-card">
        <div className="product-image">
          <img src="product1.png" alt="product_image" />
        </div>
        <div className="product-details">
          <div className="product-info">
            <span className="label">ID : </span>
            <span>12</span>
            <button className="minus-button" onClick={handleMinusClick}>
              -
            </button>
            <span className="count_button"> Count : </span>

            <span className="count">{count}</span>
            <button className="plus-button" onClick={handlePlusClick}>
              +
            </button>
          </div>
          <div className="product-info">
            <span className="label">Name : </span>
            <span>Haldi chandan facewash</span>
          </div>
          <div className="product-info">
            <span className="label">Domain : </span>
            <span>Facecare</span>
          </div>
          <div className="product-info">
            <span className="label">Type : </span>
            <span>Facewash</span>{" "}
            <button className="edit-button">
              <FaPen />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
