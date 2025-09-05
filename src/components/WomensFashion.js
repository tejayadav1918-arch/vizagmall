import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import CartButton from "../components/CartButton";
import { useContext } from 'react';
const product = {
    id: "Saree01",
    name: "Elegant Designer Saree",
    price: "₹4999",
    
     description: "This elegant maroon saree is crafted with fine embroidery and traditional detailing. Perfect for weddings, festive occasions, and cultural celebrations.The fabric is lightweight, breathable, and designed to bring out your inner grace. Its intricate zari work adds a timeless touch to your style, making it perfect for both day and evening functions.",
 image: require('./young-indian-woman-wearing-sari.jpg'),
    };
const womensfashion = () => {
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
            <div className="product-features">
    <h3>Key Features</h3>
    <ul>
      <li>✅ Premium Silk & Cotton Blend for all-day comfort</li>
      <li>✅ Handcrafted embroidery with fine detailing</li>
      <li>✅ Lightweight & breathable fabric</li>
      <li>✅ Perfect for weddings, parties & festive occasions</li>
      <li>✅ Available in multiple colors & designs</li>
    </ul>
  </div>

            <p>
    Each saree is woven with love and care by skilled artisans, ensuring the highest 
    quality and comfort. Its lightweight texture makes it easy to carry for long hours, 
    while the vibrant colors and elegant patterns perfectly balance modern fashion with 
    traditional aesthetics.
  </p>

             <h3>Customer Reviews</h3>
            <div className="reviews">
              <div className="review-card">
               
          <div className="review-card">
            <p>⭐⭐⭐⭐⭐ - "Absolutely stunning saree, worth every penny!"</p>
            <span>- Kasturi</span>
          </div>
          <div className="review-card">
            <p>⭐⭐⭐⭐ - "Loved the embroidery, delivery was quick."</p>
            <span>- Priya</span>
          </div>
          <div className="review-card">
            <p>
              ⭐⭐⭐⭐⭐ - "The material is soft and comfortable, looks regal!"
            </p>
            <span>- Bhavana</span>
          </div>
             <div className="review-card">
            <p>
              ⭐⭐⭐⭐⭐ - "The material is soft and comfortable, looks regal!"
            </p>
            <span>- Lakshmi</span>
          </div>
              <div className="review-card">
                <p>⭐⭐⭐⭐ - "Great quality, but the color was slightly different."</p>
                <span>- Anjali</span>
              </div>
              
            </div>

            <h3>FAQs</h3>
            <div className="faq">
              <p><strong>Q:</strong> Is this saree machine washable?<br/> 
              <strong>A:</strong> Yes, it is machine-wash safe with cold water.</p>

              <p><strong>Q:</strong> Does it come with a blouse piece?<br/>
              <strong>A:</strong> Yes, it includes a matching blouse piece.</p>

              <p><strong>Q:</strong> What is the length of the saree?<br/>
              <strong>A:</strong> The saree is approximately 6.5 meters long.</p>
          </div>
            </div>

            
          
          </div>
         <CartButton product={product} />
      
      </div>
    </div>
  )
}

export default womensfashion