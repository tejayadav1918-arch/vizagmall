import React from "react";
import { Container, Row, Col, Card, Button,  } from "react-bootstrap";
import { Link } from "react-router-dom";

import './NewArrivals.css';

export const newTShirts = [
  {
    id: 1,
    name: "Puma Graphic Tee",
    price: "₹1,799",
    description: "Soft cotton tee with bold Puma graphics, perfect for casual outings.",
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/c/cc6f86263517075_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/c/cc6f86263517075_2.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/c/cc6f86263517075_3.jpg?rnd=20200526195200&tr=w-256"
    ],
    faqs: ["Does it shrink after wash?", "Is it unisex?"],
    reviews: [
      { user: "Teja", rating: 5, comment: "Great quality and fits well!" },
      { user: "Aditi", rating: 4, comment: "Nice graphic design, soft fabric." }
    ]
  },
  {
    id: 2,
    name: "Nike Dri-FIT T-Shirt",
    price: "₹1,799 (10% off)",
    description: "Breathable Dri-FIT material to keep you dry during workouts.",
    images: [
      "https://nedlohsports.co.uk/cdn/shop/files/56_92671042-ae3f-4040-8064-a6d95fe2725f.jpg?v=1750080975&width=1100",
      "https://nedlohsports.co.uk/cdn/shop/files/NikeDri-FitMiler-Black_3.jpg?v=1750080975&width=1100",
      "https://nedlohsports.co.uk/cdn/shop/files/NikeDri-FitMiler-Black.jpg?v=1750080975&width=1100"
    ],
    faqs: ["Is it stretchable?", "Machine washable?"],
    reviews: [
      { user: "Ravi", rating: 5, comment: "Perfect for gym and casual wear." }
    ]
  },
  {
    id: 3,
    name: "Adidas Essentials Tee",
    price: "₹1,599",
    description: "Classic Adidas tee with 3-stripes design, soft cotton fabric.",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9574a08e2c504bacb00dd79025c7217a_9366/Essentials_MOD_Tee_Black_JN3820_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46ba70f87f3044298896eb34657f7f0e_9366/Essentials_MOD_Tee_Black_JN3820_22_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3989ad4c9a74620b0fddac20ad18e12_9366/Essentials_MOD_Tee_Black_JN3820_25_model.jpg"
    ],
    faqs: ["Is it slim fit?", "Does it fade after wash?"],
    reviews: [
      { user: "Sana", rating: 4, comment: "Very comfortable and stylish." }
    ]
  },
  {
    id: 4,
    name: "Reebok Classic Tee",
    price: "₹1,399 (5% off)",
    description: "Simple and classic tee from Reebok, lightweight and breathable.",
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/4/14a0355NK_REEAA00030375_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/4/14a0355NK_REEAA00030375_2.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/4/14a0355NK_REEAA00030375_3.jpg?rnd=20200526195200&tr=w-256"
    ],
    faqs: ["Is it true to size?", "Does it wrinkle easily?"],
    reviews: [
      { user: "Anil", rating: 5, comment: "Soft material, fits perfectly." }
    ]
  },
  {
    id: 5,
    name: "Under Armour Graphic T-Shirt",
    price: "₹1,499 (10% off)",
    description: "High-performance tee with moisture-wicking fabric.",
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/7/772fce21326849-001_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/7/772fce21326849-001_2.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/7/772fce21326849-001_4.jpg?rnd=20200526195200&tr=w-256"
    ],
    faqs: ["Does it dry quickly?", "Is it suitable for running?"],
    reviews: [
      { user: "Megha", rating: 4, comment: "Perfect for workouts and running." }
    ]
  },
  {
    id: 6,
    name: "Puma Logo Tee",
    price: "₹1,699",
    description: "Classic Puma logo printed tee, perfect for everyday wear.",
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQte6UNoKGT9kCQVJUfD2K4Ql818pXDn21DFvMUQj-BGb5K8utEkqeWX1pytpmnm14-kB-jCz3R1mjr-9fj40e-B_urzhgFPUzrnDzVLwc",
 "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGIbJZOxtmdhH04s2QZZicgrNirxjLcm7Kp5B6vFvT4gYSL_xiMDkogq56r6uIPMGGbAQvbW2XgBirbzuL6c644gipc6d4D-eZxhenHFw",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ54l_04rWFZSE9cT5_uStsR9CA21dLXQr2LBds4Xl9D1kS1owANDc80d5Be97jpMWEn9dh2Ed9qx_MwUbFr_bX7f7gohpOqRJ7dE0JadOX"
      
    ],
    faqs: ["Is it lightweight?", "Machine washable?"],
    reviews: [
      { user: "Rohit", rating: 5, comment: "Love the logo design and fabric." }
    ]
  },
  {
    id: 7,
    name: "Nike Sports Graphic Tee",
    price: "₹1,899 (15% off)",
    description: "Stylish sports tee with Nike logo and breathable fabric.",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed5e8992-ab16-46f0-8143-cf74c33a6e3c/M+J+BRK+SBB+OVSZ+GFX+SS+CRW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e15f3f64-faf6-40ba-8336-0784c813c770/M+J+BRK+SBB+OVSZ+GFX+SS+CRW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f9fe9886-8876-4878-ad8e-97bee24ccedf/M+J+BRK+SBB+OVSZ+GFX+SS+CRW.png"
    ],
    faqs: ["Suitable for sports?", "Does it shrink?"],
    reviews: [
      { user: "Karan", rating: 4, comment: "Fits great and feels comfy." }
    ]
  },
  {
    id: 8,
    name: "Adidas Climalite Tee",
    price: "₹1,499",
    description: "Climalite technology keeps you dry during workouts.",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1bd24802d9d74c8699be1b34675b7454_9366/National_Geographic_Graphic_Short_Sleeve_Tee_Black_KC2352_01_laydown.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/91395752c5d9455a94d96022ea3f18a6_9366/National_Geographic_Graphic_Short_Sleeve_Tee_Black_KC2352_41_detail.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a3bf4d2f6b749048a2f50b29e73a1bf_9366/National_Geographic_Graphic_Short_Sleeve_Tee_Black_KC2352_23_model.jpg"
    ],
    faqs: ["Is it breathable?", "Good for outdoor activities?"],
    reviews: [
      { user: "Sana", rating: 5, comment: "Excellent for jogging and gym." }
    ]
  },
  {
    id: 9,
    name: "Reebok Training Tee",
    price: "₹1,299 (10% off)",
    description: "Lightweight training tee with sweat-wicking technology.",
    images: [
      "https://m.media-amazon.com/images/I/91bzEY6FwkL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71cYiBi8y1L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71fFHRXvdXL._SY741_.jpg"
    ],
    faqs: ["Does it dry fast?", "Is it stretchable?"],
    reviews: [
      { user: "Ajay", rating: 4, comment: "Comfortable for gym sessions." }
    ]
  },
  {
    id: 10,
    name: "Under Armour Loose Fit Tee",
    price: "₹1,599",
    description: "Loose fit tee for full range of motion and comfort.",
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvP5C7Yyuv2LsXrGUymh_JhCreGN2zybxxV5zYWyaPkjD5QyXWmlZQpzenwtHITOLDulMikd6r8OPq5B8NKI2ng-hRyfqNYW9YgNjgVeyeiZSLOpeYFkNHdA",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1bfhquI_swYrpSdA52NSovVIgbd6bgoYIPqN0DZL1GxpT8aFNrZpI-lObfHgilCkATcn6CVGYjeRkLrjZ4qwiugu5xq900LCU2eFG4pCVctCAaI7cvlRw",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStddxrI9e6z77RSni5ulJG-eQYYMUJgLOtpv9aFwlZ7egdrIJWUPAMMGOKbxOwHgYgw6ein6cvzbapvPs636KFAnsvDRrvDHbWSR_J1dP3XV0orZv4FOJiLQ"
    ],
    faqs: ["Is it breathable?", "Suitable for sports?"],
    reviews: [
      { user: "Vikram", rating: 5, comment: "Very comfy and lightweight." }
    ]
  },
  // You can continue to 20+ products similarly by copying this structure and changing name, images, description, price, etc.
];



const ProductPage1 = () => {
return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">NEW ARRIVALS - SHIRTS</h2>

      {/* Carousel */}


      {/* Product Grid */}
      <Row>
        {newTShirts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 product-card">
              <Card.Img
                variant="top"
                src={product.images[0]}
                className="product-img"
              />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/Tshirt/product/${product.id}`}>
                  <Button variant="dark">View</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage1;
