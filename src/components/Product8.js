import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Best.css";
import CartButton from "../components/CartButton";

const Product8 = () => {
  const [index, setIndex] = useState(0);

  const product = {
    id: 108,
    name: "Elegant Designer Saree",
    price: 2999,
    oldPrice: 5999,
    discount: "30% OFF",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-purple-threadwork-chiffon-designer-saree-saus0038518_purple_1_2.jpg?v=1748424959&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-purple-threadwork-chiffon-designer-saree-saus0038518_purple_1_1.jpg?v=1748424959&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-purple-threadwork-chiffon-designer-saree-saus0038518_purple_1_5.jpg?v=1748424959&width=1800",
    ],
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="product-page">
      {/* Left - Image Carousel */}
      <div className="product-left">
        <div className="sticky-carousel">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 product-image"
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="product-right">
        <h2>{product.name}</h2>

        <div className="price-section">
          <span className="old-price">₹{product.oldPrice}</span>
          <span className="new-price">₹{product.price}</span>
          <span className="discount">({product.discount})</span>
        </div>

        <p>
          Elevate your wardrobe with this elegant designer saree, crafted with luxurious fabric
          and intricate embroidery. Perfect for weddings, parties, and festive occasions, this
          saree blends tradition with modern elegance.
        </p>
        
        <h3>Highlights</h3>
        <ul className="Product-features">
          <li>✔ Fabric: Premium Silk Blend</li>
          <li>✔ Color: Rich Maroon with Golden Border</li>
          <li>✔ Occasion: Weddings, Festivals, Parties</li>
          <li>✔ Included: Saree with Blouse Piece</li>
        </ul>

        <h3>Customer Reviews</h3>
        <div className="reviews">
          <div className="review-card">
            <p><strong>Priya S.</strong> ⭐⭐⭐⭐⭐</p>
            <p>Absolutely loved the fabric and embroidery. Perfect for festive wear!</p>
          </div>
          <div className="review-card">
            <p><strong>Anjali M.</strong> ⭐⭐⭐⭐☆</p>
            <p>The saree is elegant and comfortable. The blouse piece is good quality too.</p>
          </div>
          <div className="review-card">
            <p><strong>Neha K.</strong> ⭐⭐⭐⭐⭐</p>
            <p>Looked stunning at my cousin’s wedding. Got so many compliments!</p>
          </div>
        </div>

        <h3>FAQs</h3>
        <div className="faq">
          <p><strong>Q: Does it come with a blouse?</strong><br/>A: Yes, it includes a matching blouse piece.</p>
          <p><strong>Q: Is it lightweight?</strong><br/>A: Yes, it’s designed to be lightweight yet luxurious.</p>
          <p><strong>Q: Can it be dry cleaned?</strong><br/>A: Yes, dry cleaning is recommended for long-lasting use.</p>
        </div>
       
        {/* Cart Button */}
        <div className="visit-store">
          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product8;
