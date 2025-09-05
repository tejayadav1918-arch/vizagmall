import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Best.css';
import CartButton from "../components/CartButton";

const Product9 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Product details for CartButton
  const product = {
    id: "flamingo-shirt",
    name: "FLAMINGO SHIRT",
    price: 1299,
    oldPrice: 1599,
    discount: "20% OFF",
    image: "https://sevendc.in/cdn/shop/products/SevenDesign_0375.jpg?v=1679565302&width=1000"
  };

  return (
    <div className="product-page">
      {/* Left - Image Carousel */}
      <div className="product-left">
        <div className="sticky-carousel">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://sevendc.in/cdn/shop/products/SevenDesign_0375.jpg?v=1679565302&width=1000"
                alt="Flamingo Shirt Front View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://sevendc.in/cdn/shop/products/SevenDesign_0367_f6af4e58-1cf5-4d46-aa30-f4ae25609e31.jpg?v=1719476618&width=1000"
                alt="Flamingo Shirt Side View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://sevendc.in/cdn/shop/products/SevenDesign_0380.jpg?v=1719476618&width=1000"
                alt="Flamingo Shirt Lifestyle View"
              />
            </Carousel.Item>
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
          Add a splash of fun to your wardrobe with this Tropical Flamingo Casual Shirt. Crafted from soft,
          breathable cotton, it’s perfect for laid-back weekends, beach outings, or casual meet-ups. 
          The vibrant flamingo print brings a playful, tropical vibe, making it a standout piece in any casual ensemble.
        </p>
        
        <h3>Highlights</h3>
        <ul className="Product-features">
          <li>✔ Fun flamingo print for a tropical feel</li>
          <li>✔ Lightweight and breathable fabric</li>
          <li>✔ Perfect for casual outings, vacations, and weekend getaways</li>
          <li>✔ Ideal for summer wear</li>
        </ul>

        <h3>Customer Reviews</h3>
        <div className="reviews">
          <div className="review-card">
            <p><strong>Rajesh K.</strong> ⭐⭐⭐⭐⭐</p>
            <p>Absolutely love this shirt! The flamingo print is vibrant and cheerful. Fits perfectly and feels very comfortable on hot days.</p>
          </div>
          <div className="review-card">
            <p><strong>Ankit M.</strong> ⭐⭐⭐⭐☆</p>
            <p>Bought this for a beach vacation and it was perfect! Lightweight, breathable, and the colors are even brighter in person.</p>
          </div>
          <div className="review-card">
            <p><strong>Vikram P.</strong> ⭐⭐⭐⭐⭐</p>
            <p>Super soft cotton and the print hasn’t faded after a couple of washes. Totally recommend for summer casual wear!</p>
          </div>
        </div>

        <h3>FAQs</h3>
        <div className="faq">
          <p><strong>Q: What material is this shirt made of?</strong></p>
          <p>A: 100% soft, breathable cotton for maximum comfort.</p>

          <p><strong>Q: What sizes are available?</strong></p>
          <p>A: S, M, L, XL (check size chart for exact measurements).</p>

          <p><strong>Q: Is the fit slim or relaxed?</strong></p>
          <p>A: Relaxed fit – perfect for casual outings and summers.</p>
        </div>

        {/* Cart Button */}
        <CartButton product={product} />
      </div>
    </div>
  );
};

export default Product9;
