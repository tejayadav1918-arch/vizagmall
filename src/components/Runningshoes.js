import React from 'react'
import CartButton from "../components/CartButton";
import './Product.css'


const Runningshoes = () => {
  // ✅ Define the product object for this page
  const product = {
    id: "running-shoes-01",
    name: "Men's Performance Running Shoes",
    price: "₹7499",
    image: require('./closeup-jogger-man-near-sea.jpg'),
    description: " Designed for speed, comfort, and endurance, our Men's Performance Running Shoes  give you the perfect balance between cushioning and responsiveness. Whether you're  hitting the treadmill, training outdoors, or preparing for a marathon, these shoes  are built to support every stride. With breathable mesh, shock-absorbing soles, and a sleek design, they ensure peak performance and all-day comfort. "
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
          <CartButton product={product} />
            </div>
            </div>
            </div>

            
          
        


        
        </div>
    
    
  
  );
}

export default Runningshoes
