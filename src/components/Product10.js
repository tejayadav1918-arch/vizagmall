import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Best.css";
import CartButton from "../components/CartButton";

const Product10 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
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
                src="https://byblos-shop.com/cdn/shop/files/Nouveau_T_shirt_Caves_2024_1.jpg?v=1717672852&width=990"
                alt="Front View T-Shirt"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://byblos-shop.com/cdn/shop/files/Nouveau_T_shirt_Caves_2024_3.jpg?v=1717672852&width=990"
                alt="Side View T-Shirt"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://byblos-shop.com/cdn/shop/files/NewTshirt2024-Blanc_57d35732-b5c3-4084-ae8e-6e85173ad75e.jpg?v=1729153485&width=990"
                alt="Back View T-Shirt"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-image"
                src="https://byblos-shop.com/cdn/shop/files/NewTshirt2024-Blanc2_4c8ecd54-5958-4327-8e19-c957036d70a3.jpg?v=1729153485&width=990"
                alt="Full Style T-Shirt"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="product-right">
        <h2>NEW CAVES DU ROY T-SHIRT</h2>
        <div className="price-section">
          <span className="old-price">₹1000</span>
          <span className="new-price">₹900</span>
          <span className="discount">(10% OFF)</span>
        </div>
        <p>
          Experience ultimate comfort with the Everyday Comfort Cotton T-Shirt,
          made from 100% pure, breathable cotton. Soft on the skin and
          lightweight, this T-shirt is perfect for daily wear, casual outings,
          or lounging at home.
        </p>
        <p>
          Featuring a classic crew neck, short sleeves, and a relaxed fit, it
          offers easy movement and all-day comfort. Its versatile design makes
          it easy to pair with jeans, shorts, or joggers, making it a wardrobe
          essential for any casual look.
        </p>

        <h3>Highlights</h3>
        <ul className="Product-features">
          <li>✔ Soft, breathable cotton for all-day comfort</li>
          <li>✔ Classic crew neck and short sleeves</li>
          <li>✔ Versatile and easy-to-style casual essential</li>
        </ul>

        <h3>Customer Reviews</h3>
        <div className="reviews">
          <div className="review-card">
            <p>
              <strong>Pandu S.</strong> ⭐⭐⭐⭐⭐
            </p>
            <p>
              Super soft and comfortable! Perfect for daily wear and washes
              really well without shrinking.
            </p>
          </div>
          <div className="review-card">
            <p>
              <strong>Aravind M.</strong> ⭐⭐⭐⭐☆
            </p>
            <p>
              Great fit and very breathable. I wear it at home and outdoors,
              it’s my new go-to casual T-shirt.
            </p>
          </div>
          <div className="review-card">
            <p>
              <strong>Shiva K.</strong> ⭐⭐⭐⭐⭐
            </p>
            <p>
              Comfortable and lightweight, but I wished the sleeves were
              slightly longer. Overall, very happy.
            </p>
          </div>
        </div>

        <h3>FAQs</h3>
        <div className="faq">
          <p>
            <strong>Q: Can it be worn for sports or workouts?</strong>
          </p>
          <p>
            A: It’s primarily a casual T-shirt. For intense workouts, a
            moisture-wicking performance T-shirt is recommended.
          </p>

          <p>
            <strong>Q: Will it shrink after washing?</strong>
          </p>
          <p>
            A: No, it’s designed to retain its size and fit with proper care.
          </p>

          <p>
            <strong>Q: How should I care for this T-shirt?</strong>
          </p>
          <p>
            A: Machine wash in cold water, tumble dry on low, and iron on medium
            heat. Avoid bleach to maintain the fabric quality.
          </p>
        </div>

        <button className="visit-btn">Add To Your Cart</button>
      </div>
    </div>
  );
};

export default Product10;
