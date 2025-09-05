import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Best.css";
import CartButton from "../components/CartButton";

const Product7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const product = {
    id: 7,
    name: "Nike Air JORDAN 1",
    price: 3999,
    oldPrice: 7999,
    discount: "50% OFF",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d961942a-1382-4c2b-ba47-c74bdd854beb/WMNS+AIR+JORDAN+1+MM+LOW+V3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/84eff391-b6ff-49ed-8f9f-f70c65c9beb0/WMNS+AIR+JORDAN+1+MM+LOW+V3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3846f8a9-a36b-4033-922e-d03c356f6ab0/WMNS+AIR+JORDAN+1+MM+LOW+V3.png",
    ],
  };

  // Handle carousel selection
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="product-page">
      {/* Left Side: Sticky Carousel */}
      <div className="product-left">
        <div className="sticky-carousel">
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={3000}>
            {product.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 product-image"
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Right Side: Product Info */}
      <div className="product-right">
        <h1>{product.name}</h1>
        <p>
          Step into comfort and style with the latest Nike Air Zoom Sneakers. 
          Designed with advanced cushioning and breathable fabric, these shoes 
          are perfect for everyday wear, gym sessions, or casual outings. With 
          Nike’s trusted durability and lightweight design, they keep you 
          looking sharp while feeling comfortable all day long.
        </p>

        {/* Price Section */}
        <div className="price-section">
          <span className="old-price">₹{product.oldPrice}</span>
          <span className="new-price">₹{product.price}</span>
          <span className="discount">({product.discount})</span>
        </div>

        {/* Features */}
        <h2>Highlights</h2>
        <ul className="product-features">
          <li>✔ Lightweight and breathable mesh upper</li>
          <li>✔ Air Zoom cushioning for maximum comfort</li>
          <li>✔ Rubber outsole for excellent grip</li>
          <li>✔ Sleek Nike branding and modern design</li>
          <li>✔ Suitable for casual wear and workouts</li>
        </ul>

        {/* Reviews */}
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <div className="review-card">
            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>
            <p>
              “These Nike shoes are super comfortable and look amazing. Totally worth it!” – Arjun
            </p>
          </div>
          <div className="review-card">
            <h4>⭐ ⭐ ⭐ ⭐</h4>
            <p>
              “I wear them daily, and they still feel brand new. Great quality!” – Rahul
            </p>
          </div>
          <div className="review-card">
            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>
            <p>
              “Best sneakers I’ve bought in years. Stylish and durable.” – Priya
            </p>
          </div>
        </div>

        {/* FAQs */}
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h4>Q: Are these shoes good for running?</h4>
          <p>A: Yes, they have cushioning suitable for light running and workouts.</p>

          <h4>Q: Is this the original Nike brand?</h4>
          <p>A: Absolutely! 100% genuine Nike product with warranty.</p>

          <h4>Q: Do they come in different sizes?</h4>
          <p>A: Yes, available from size 6 to 12.</p>
        </div>

        {/* Cart Button */}
        <div className="visit-store">
          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product7;
