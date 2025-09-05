import React from 'react';
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import './Product.css'

const Mensfashion = () => {


  const product = {
    id: 1,
    name: "Boldfit Men's Stylish Padded Jacket",
    price: "₹1,499",
    description: "Stay warm and stylish this season with the Boldfit Men's Jacket. Perfect for casual outings, parties, or daily wear.",
    image: require('./medium-shot-guy-with-red-jacket-looking-away.jpg')
  };

  return (
    <div className="product-page">
      {/* Left: Fixed Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Right: Scrollable Content */}
      <div className="product-details">
        <h1>{product.name}</h1>
        <h3 className="text-danger">{product.price}</h3>
        <p>{product.description}</p>

        <div className="extra-info">
          <h3>Product Features</h3>
          <ul>
            <li>✅ Lightweight padded bomber design</li>
            <li>✅ Premium fabric for warmth & comfort</li>
            <li>✅ Modern fit with durable stitching</li>
            <li>✅ Available in multiple sizes & colors</li>
            <li>✅ Perfect for winter outings & casual wear</li>
          </ul>

          <p>
            This padded bomber-style jacket is lightweight yet warm, making it 
            an ideal choice for winter fashion. Designed for comfort and style, 
            it features durable stitching and a modern fit. The premium quality 
            ensures long-lasting wear and easy maintenance.
          </p>

          <h3>Customer Reviews</h3>
          <div className="reviews">
            <div className="review-card">
              ⭐⭐⭐⭐☆
              <p>Great fit and quality. Worth the price!</p>
              <span>- Rahul</span>
            </div>
            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>Super warm and stylish. Highly recommend!</p>
              <span>- Priya</span>
            </div>
            <div className="review-card">
              ⭐⭐⭐⭐☆
              <p>Nice jacket but the size runs a bit small.</p>
              <span>- Arjun</span>
            </div>
            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>Exactly like shown in pictures. Loved it!</p>
              <span>- Meena</span>
            </div>
            <div className="review-card">
              ⭐⭐⭐☆
              <p>Good for mild winters, but not extreme cold.</p>
              <span>- Vivek</span>
            </div>
          </div>

          <h3>FAQs</h3>
          <div className="faq">
            <p><strong>Q:</strong> Is this jacket washable?<br/> 
            <strong>A:</strong> Yes, it is machine-wash safe with cold water.</p>

            <p><strong>Q:</strong> Does it have inside pockets?<br/>
            <strong>A:</strong> Yes, there are two inside pockets.</p>

            <p><strong>Q:</strong> Is it waterproof?<br/>
            <strong>A:</strong> No, it is not fully waterproof but can resist mild drizzle.</p>
          </div>
        </div>

        {/* Cart Button (works now) */}
        <CartButton product={product} />
      </div>
    </div>
  );
};


export default Mensfashion