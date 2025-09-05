



   // Puma.js
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Puma.css"

const categories = [
  { 
    name: "T-Shirts", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/52/71/5271b1df7b6a1f3c1f6ed60a923b6dbd40f7b24d.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Shirts", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/a4/23/a42346ef03443c2ac5f15d52c35a20a3e7a39fa7.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Hoodies", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/41/9f/419f5c58fa6b01a08dc6dbf9c5ef0c0a4d8dd3f6.jpg],origin[dam],category[men_hoodiessweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Jackets & Coats", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/6d/9c/6d9c5c03f787ffedc69a2e17cf9d98a55b07c16a.jpg],origin[dam],category[men_jacketscoats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Jeans", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/4c/16/4c16b653c947fd05a2d4a0fca8cfcf90aa86ed61.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Track Pants", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/1a/86/1a86fcd5cb4d95e4e0a2f878c7bb3edbbd5b3c0e.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Sneakers", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/ef/c0/efc0dbd4c3a5b214c9e5f5dff9b46f879d5c1c7d.jpg],origin[dam],category[men_shoes_sneakers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Bags", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/31/59/3159a2285f5b6a29a20f73d885dc85a2a8f5ef74.jpg],origin[dam],category[ladies_shoes_sandals],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  
  { 
    name: "Caps", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/69/20/692061e65a5b0ff6326b29c86c4ff6c14318bd6f.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },

];

// --- PRODUCTS (your existing list stays as-is) ---
export const nikeproducts = [


  // Tops & T-Shirts
{
    id: 1,
    name: "Nike Dri-FIT Legend Training Top",
    category: "T-Shirts",
    price: "₹2,495",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wbzgrdcg9zft8o1m3p1a/dri-fit-legend-mens-fitness-t-shirt-CcH5RB.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/avoypbtpm5htjupux4zo/dri-fit-legend-mens-fitness-t-shirt-CcH5RB.png"
    ],
    description: "A lightweight training tee built with sweat-wicking fabric.",
    reviews: [{ user: "Rahul", rating: 5, comment: "Perfect for workouts!" }],
    faq: [{ q: "Is it stretchable?", a: "Yes, it has 4-way stretch." }],
    discount: "10% Off"
  },
  {
    id: 2,
    name: "Nike Court Victory Polo",
    category: "T-Shirts",
    price: "₹3,295",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-polo.png"
    ],
    description: "Stay cool with this breathable tennis polo.",
    reviews: [{ user: "Suresh", rating: 5, comment: "Stylish and comfy." }],
    faq: [{ q: "Is this unisex?", a: "Yes." }],
    discount: "15% Off"
  },
  {
    id: 3,
    name: "Nike Pro Compression Tee",
    category: " T-Shirts",
    price: "₹2,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-pro-compression.png"],
    description: "Compression fit for performance and mobility.",
    reviews: [{ user: "Arjun", rating: 4, comment: "Great for gym training." }],
    faq: [{ q: "Does it absorb sweat?", a: "Yes, Dri-FIT tech." }]
  },

  // ---------------- SNEAKERS ----------------
  {
    id: 4,
    name: "Nike Air Force 1 '07",
    category: "Sneakers",
    price: "₹8,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-force-1-07.png"],
    description: "Classic leather sneakers with modern cushioning.",
    reviews: [{ user: "Teja", rating: 5, comment: "All-time favorite sneakers!" }],
    faq: [{ q: "Are these unisex?", a: "Yes." }]
  },
  {
    id: 5,
    name: "Nike Air Zoom Pegasus 40",
    category: "Sneakers",
    price: "₹11,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pegasus-40.png"],
    description: "High-performance running shoes with Air Zoom cushioning.",
    reviews: [{ user: "Aman", rating: 4, comment: "Great for long runs." }],
    faq: [{ q: "Is it lightweight?", a: "Yes." }],
    discount: "20% Off"
  },
  {
    id: 6,
    name: "Nike Dunk Low Retro",
    category: "Sneakers",
    price: "₹9,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-dunk-low.png"],
    description: "Streetwear classic with timeless style.",
    reviews: [{ user: "Sneha", rating: 5, comment: "Looks amazing with jeans." }]
  },
  {
    id: 7,
    name: "Nike Blazer Mid '77",
    category: "Sneakers",
    price: "₹8,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-blazer-mid.png"],
    description: "Retro-inspired basketball shoes.",
    reviews: [{ user: "Karthik", rating: 4, comment: "Old school and stylish." }]
  },
  {
    id: 8,
    name: "Nike React Infinity Run 3",
    category: "Sneakers",
    price: "₹12,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-react-infinity.png"],
    description: "Engineered for long-distance comfort.",
    reviews: [{ user: "Varun", rating: 5, comment: "Best running shoes I’ve tried." }],
    discount: "25% Off"
  },

  // ---------------- T-SHIRTS ----------------
  {
    id: 9,
    name: "Nike Sportswear Club Tee",
    category: "T-Shirts",
    price: "₹1,895",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-club-tshirt.png"],
    description: "Everyday comfort with Nike’s signature logo.",
    reviews: [{ user: "Neha", rating: 5, comment: "Perfect daily wear." }]
  },
  {
    id: 10,
    name: "Nike ACG Graphic Tee",
    category: "T-Shirts",
    price: "₹2,195",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-acg-tee.png"],
    description: "Outdoor-inspired tee with bold graphics."
  },
  {
    id: 11,
    name: "Nike Jordan Flight Tee",
    category: "T-Shirts",
    price: "₹2,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-flight-tee.png"],
    description: "Jordan tee with premium cotton feel."
  },

  // ---------------- TRACK PANTS ----------------
  {
    id: 12,
    name: "Nike Dri-FIT Academy Pants",
    category: "Track Pants",
    price: "₹3,295",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-trackpants.png"],
    description: "Slim-fit track pants with breathable mesh panels."
  },
  {
    id: 13,
    name: "Nike Club Fleece Joggers",
    category: "Track Pants",
    price: "₹3,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-club-fleece.png"],
    description: "Soft fleece joggers for everyday wear."
  },
  {
    id: 14,
    name: "Nike Jordan Essentials Pants",
    category: "Track Pants",
    price: "₹4,295",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-trackpants.png"],
    description: "Stylish Jordan joggers with iconic logo."
  },

  // ---------------- HOODIES ----------------
  {
    id: 15,
    name: "Nike Club Fleece Hoodie",
    category: "Hoodies",
    price: "₹4,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-hoodie.png"],
    description: "Soft fleece hoodie for casual comfort."
  },
  {
    id: 16,
    name: "Nike Tech Fleece Hoodie",
    category: "Hoodies",
    price: "₹7,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-tech-fleece.png"],
    description: "Lightweight hoodie with modern design."
  },
  {
    id: 17,
    name: "Nike Jordan Jumpman Hoodie",
    category: "Hoodies",
    price: "₹6,295",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-hoodie.png"],
    description: "Jordan hoodie with Jumpman branding."
  },

  // ---------------- JACKETS ----------------
  {
    id: 18,
    name: "Nike Windrunner Jacket",
    category: "Jackets",
    price: "₹6,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-windrunner.png"],
    description: "Iconic windbreaker with water-repellent finish."
  },
  {
    id: 19,
    name: "Nike Therma-FIT Training Jacket",
    category: "Jackets",
    price: "₹5,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-therma-fit.png"],
    description: "Warm training jacket with Therma-FIT fabric."
  },
  {
    id: 20,
    name: "Nike Jordan Varsity Jacket",
    category: "Jackets",
    price: "₹9,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-varsity.png"],
    description: "Premium Jordan varsity jacket."
  },

  // ---------------- ACCESSORIES ----------------
  {
    id: 21,
    name: "Nike Performance Wristbands",
    category: "Accessories",
    price: "₹795",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-wristband.png"],
    description: "Sweat-absorbing wristbands for training."
  },
  {
    id: 22,
    name: "Nike Headband",
    category: "Accessories",
    price: "₹995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-headband.png"],
    description: "Elastic sports headband."
  },
  {
    id: 23,
    name: "Nike Training Gloves",
    category: "Accessories",
    price: "₹1,595",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-gloves.png"],
    description: "Lightweight gloves for workouts."
  },

  // ---------------- BAGS ----------------
  {
    id: 24,
    name: "Nike Brasilia Training Duffel Bag",
    category: "Bags",
    price: "₹2,495",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-bag.png"],
    description: "Spacious duffel bag with multiple compartments."
  },
  {
    id: 25,
    name: "Nike Heritage Backpack",
    category: "Bags",
    price: "₹2,195",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-backpack.png"],
    description: "Durable everyday backpack."
  },
  {
    id: 26,
    name: "Nike Jordan Crossbody Bag",
    category: "Bags",
    price: "₹1,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-crossbody.png"],
    description: "Compact Jordan side bag."
  },

  // ---------------- CAPS ----------------
  {
    id: 27,
    name: "Nike Heritage Cap",
    category: "Caps",
    price: "₹1,295",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-cap.png"],
    description: "Adjustable cotton cap with embroidered logo."
  },
  {
    id: 28,
    name: "Nike AeroBill Running Cap",
    category: "Caps",
    price: "₹1,695",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-running-cap.png"],
    description: "Breathable lightweight running cap."
  },
  {
    id: 29,
    name: "Nike Jordan Pro Cap",
    category: "Caps",
    price: "₹1,895",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jordan-cap.png"],
    description: "Flat-bill Jordan cap."
  },
  {
    id: 30,
    name: "Nike Club Camo Cap",
    category: "Caps",
    price: "₹1,995",
    images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/nike-camo-cap.png"],
    description: "Stylish camo design adjustable cap."
  }
];



const NikePage = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredProducts = selectedCategory
    ? nikeproducts.filter((p) => p.category === selectedCategory)
    : nikeproducts;

 

  return (
    <Container className="my-4">
      {/* Categories (Desktop) */}
      <div className="category-nav d-none d-md-flex justify-content-center mb-4">
        {categories.map((cat, idx) => (
          <Button
            key={idx}
            variant={selectedCategory === cat.name ? "dark" : "outline-dark"}
            className="mx-2"
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </Button>
        ))}
        {selectedCategory && (
          <Button
            variant="secondary"
            className="mx-2"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
        )}
      </div>

      {/* Mobile Category Cards */}
      <div className="d-md-none category-cards mb-4">
        {!selectedCategory ? (
          <Row>
            {categories.map((cat, idx) => (
              <Col xs={6} key={idx} className="mb-3">
                <Card
                  className="category-card text-center"
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <Card.Img variant="top" src={cat.image} />
                  <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Button
            variant="secondary"
            className="mb-3"
            onClick={() => setSelectedCategory(null)}
          >
            ← Back to Categories
          </Button>
        )}
      </div>

      {/* Products */}
      {(isDesktop || selectedCategory) && (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
              <Card className="h-100 products-card">
                <Card.Img
                  variant="top"
                  src={product.images[0]}
                  className="product-img"
                />
                <Card.Body>
                  <Card.Title className="card-title">{product.name}</Card.Title>
                  <Card.Text className="card-text">{product.price}</Card.Text>
                  <Link to={`/nike/product/${product.id}`}>
                    <Button variant="dark">View</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};



export default NikePage;
