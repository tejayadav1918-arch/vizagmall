// Puma.js
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Puma.css"

const categories = [
  { name: "Shoes", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/312790/01/sv01/fnd/IND/fmt/png/ProFoam-Women's-Running-Shoes" },
  { name: "Sneakers", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/399844/01/sv01/fnd/IND/fmt/png/Court-Shatter-Low-Sneakers" },
  { name: "T-Shirts", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/630706/02/mod01/fnd/IND/fmt/png/PUMA-x-Squid-Game-Men's-Graphic-Glow-T-shirt" },
  { name: "Track Pants", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/631533/03/mod01/fnd/IND/fmt/png/Evostripe-Core-Men's-Slim-Fit-Pants" },
  { name: "Hoodies", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/dt01/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie" },
  { name: "Jackets", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/846666/99/mod01/fnd/IND/fmt/png/Zippered-Full-Zip-Men's-Slim-Fit-Jacket" },
  { name: "Accessories", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/041772/04/fnd/IND/fmt/png/Knit-Winter-Gloves" },
  { name: "Bags", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/091261/01/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-Race-Motorsport-Waist-Bag" },
  { name: "Caps", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/021735/01/fnd/IND/fmt/png/STYLE-Fabric-Cap" }
];

// --- PRODUCTS (your existing list stays as-is) ---
export const products = [
    {
    id: 1,
    name: "Puma Running Shoes",
    price: "₹4,999",
    category: "Shoes",
    description: "Lightweight running shoes designed for comfort and speed.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376676/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376676/01/sv03/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376676/01/fnd/IND/w/600/h/600"
    ],
    faqs: ["Are they water resistant?", "Do they have arch support?"],
    reviews: [
      { user: "Teja", rating: 5, comment: "Very comfortable and stylish!" },
      { user: "Aditi", rating: 4, comment: "Good grip but a bit pricey." }
    ]
  },
  {
    id: 2,
    name: "Puma Training Shoes",
    price: "₹3,499",
    category: "Shoes",
    description: "Durable training shoes perfect for workouts.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/378283/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/378283/01/sv03/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/378283/01/fnd/IND/w/600/h/600"
    ],
    faqs: ["Do they come with warranty?", "Are they slip resistant?"],
    reviews: [{ user: "Ravi", rating: 4, comment: "Good for gym and casual use." }]
  },
  {
    id: 3,
    name: "Puma Classic Sneakers",
    price: "₹5,499",
    category: "Sneakers",
    description: "Iconic Puma sneakers for casual style.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/02/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/02/sv03/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/02/fnd/IND/w/600/h/600"
    ],
    faqs: ["Do they run true to size?", "Are they unisex?"],
    reviews: [{ user: "Karan", rating: 5, comment: "Best sneakers I’ve owned!" }]
  },
  {
    id: 4,
    name: "Puma Sports T-Shirt",
    price: "₹1,999",
    category: "T-Shirts",
    description: "Breathable t-shirt ideal for sports and casual wear.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/527078/01/mod01/fnd/IND/fmt/png/Train-All-Day-Women's-Crew-Neck-Slim-Fit-Training-T-shirt",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527078/01/mod02/fnd/IND/fmt/png/Train-All-Day-Women's-Crew-Neck-Slim-Fit-Training-T-shirt",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527078/01/mod04/fnd/IND/fmt/png/Train-All-Day-Women's-Crew-Neck-Slim-Fit-Training-T-shirt"
    ],
    faqs: ["Is the material stretchable?", "Does it shrink after wash?"],
    reviews: [{ user: "Sana", rating: 4, comment: "Nice fit and lightweight." }]
  },
  {
    id: 5,
    name: "Puma Track Pants",
    price: "₹2,499",
    category: "Track Pants",
    description: "Comfortable track pants for everyday wear.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/586704/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/586704/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/586704/01/sv03/fnd/IND/w/600/h/600"
    ],
    faqs: ["Does it have zipper pockets?", "Is it slim fit?"],
    reviews: [{ user: "Rahul", rating: 5, comment: "Perfect fit and very comfy!" }]
  },
  {
    id: 6,
    name: "Puma Sports Cap",
    price: "₹999",
    category: "Caps",
    description: "Stylish Puma cap for sports and casual outings.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/023456/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/023456/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/023456/01/sv02/fnd/IND/w/600/h/600"
    ],
    faqs: ["Is it adjustable?", "Is it washable?"],
    reviews: [{ user: "Megha", rating: 5, comment: "Looks cool and fits well!" }]
  },
  {
    id: 7,
    name: "Puma Sports Bag",
    price: "₹2,199",
    category: "Bags",
    description: "Durable sports bag with spacious compartments.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/079137/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/079137/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/079137/01/sv03/fnd/IND/w/600/h/600"
    ],
    faqs: ["Is it waterproof?", "Can it fit a laptop?"],
    reviews: [{ user: "Arjun", rating: 4, comment: "Very useful for gym and travel." }]
  },
  {
    id: 8,
    name: "Puma Hoodie",
    price: "₹3,299",
    category: "Apparel",
    description: "Cozy hoodie with Puma logo design.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/535428/61/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/bv/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/dt01/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie"
    ],
    faqs: ["Is it warm enough for winters?", "Does it have front pockets?"],
    reviews: [{ user: "Ishita", rating: 5, comment: "Super warm and stylish!" }]
  },
  {
    id: 9,
    name: "Puma Flip Flops",
    price: "₹899",
    category: "Footwear",
    description: "Lightweight flip flops for everyday comfort.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395229/04/sv01/fnd/IND/fmt/png/Leadcat-2.0-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395229/04/bv/fnd/IND/fmt/png/Leadcat-2.0-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395229/04/sv06/fnd/IND/fmt/png/Leadcat-2.0-Slides"
    ],
    faqs: ["Are they washable?", "Do they have good grip?"],
    reviews: [{ user: "Nikhil", rating: 4, comment: "Very light and comfortable." }]
  },
  {
    id: 10,
    name: "Puma Backpack",
    price: "₹2,999",
    category: "Bags",
    description: "Stylish backpack with multiple compartments.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/092597/01/fnd/IND/fmt/png/Core-Washed-Women's-Durable-Everyday-Backpack",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092597/01/mod01/fnd/IND/fmt/png/Core-Washed-Women's-Durable-Everyday-Backpack",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092597/01/mod02/fnd/IND/fmt/png/Core-Washed-Women's-Durable-Everyday-Backpack"
    ],
    faqs: ["Can it carry a laptop?", "Is it water-resistant?"],
    reviews: [{ user: "Sneha", rating: 5, comment: "Very stylish and useful." }]
  },
  {
    id: 11,
    name: "Puma Slides",
    price: "₹1,499",
    category: "Footwear",
    description: "Comfortable Puma slides for casual wear.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/397511/03/sv01/fnd/IND/fmt/png/Softride-Super-Men's-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397511/03/bv/fnd/IND/fmt/png/Softride-Super-Men's-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397511/03/sv02/fnd/IND/fmt/png/Softride-Super-Men's-Slides"
    ],
    faqs: ["Do they come in half sizes?", "Are they unisex?"],
    reviews: [{ user: "Ajay", rating: 4, comment: "Good quality and comfy." }]
  },
  {
    id: 12,
    name: "Puma Training Jacket",
    price: "₹3,799",
    category: "Apparel",
    description: "Training jacket made with breathable fabric.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/521680/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/521680/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/521680/01/sv03/fnd/IND/w/600/h/600"
    ],
    faqs: ["Does it have a zipper pocket?", "Is it water resistant?"],
    reviews: [{ user: "Pooja", rating: 5, comment: "Light and perfect for workouts!" }]
  },
  {
    id: 13,
    name: "Puma Running Shorts",
    price: "₹1,299",
    category: "Track Pants",
    description: "Lightweight shorts designed for running.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/518387/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/518387/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/518387/01/sv03/fnd/IND/w/600/h/600"
    ],
    faqs: ["Is it stretchable?", "Does it have pockets?"],
    reviews: [{ user: "Anil", rating: 4, comment: "Very comfortable for running." }]
  },
  {
    id: 14,
    name: "Puma Polo T-Shirt",
    price: "₹1,799",
    category: "T-Shirts",
    description: "Classic polo t-shirt for casual wear.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/680817/08/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/680817/08/mod03/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/680817/08/mod02/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt"
    ],
    faqs: ["Does it shrink?", "Is it slim fit?"],
    reviews: [{ user: "Vikram", rating: 5, comment: "Very classy look." }]
  },
  {
    id: 15,
    name: "Puma Sports Socks",
    price: "₹499",
    category: "Accessories",
    description: "Comfortable cotton blend socks for sports.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/688721/01/fnd/IND/fmt/png/Sneaker-Socks-Pack-of-3",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/688721/01/dt01/fnd/IND/fmt/png/Sneaker-Socks-Pack-of-3",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/688721/01/dt02/fnd/IND/fmt/png/Sneaker-Socks-Pack-of-3"
    ],
    faqs: ["Is it ankle length?", "Do they come in pack of 3?"],
    reviews: [{ user: "Deepak", rating: 4, comment: "Soft and good quality." }]
  },
  {
    id: 16,
    name: "Puma Sports Gloves",
    price: "₹1,199",
    category: "Accessories",
    description: "Training gloves for better grip and comfort.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/041466/01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/041466/01/sv01/fnd/IND/w/600/h/600",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/041466/01/sv03/fnd/IND/w/600/h/600"
    ],
    faqs: ["Are they padded?", "Do they have wrist support?"],
    reviews: [{ user: "Farhan", rating: 5, comment: "Perfect for gym workouts." }]
  },
  {
  id: 17,
  name: "Puma White Running Shoes",
  price: "₹4,299",
  category: "Shoes",
  description: "Classic white running shoes for versatile performance.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/312075/05/sv01/fnd/IND/fmt/png/Darter-Pro-Running-Shoes",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312075/05/fnd/IND/fmt/png/Darter-Pro-Running-Shoes",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312075/05/bv/fnd/IND/fmt/png/Darter-Pro-Running-Shoes"
  ],
  faqs: ["Do they stain easily?", "Are they washable?"],
  reviews: [{ user: "Teja", rating: 5, comment: "Super stylish and comfy!" }]
},
{
  id: 18,
  name: "Puma Ignite Sneakers",
  price: "₹5,499",
  category: "Sneakers",
  description: "Sneakers with Ignite foam for maximum cushioning.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/190503/01/sv01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/190503/01/sv02/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/190503/01/sv04/fnd/IND/w/600/h/600"
  ],
  faqs: ["Do they provide arch support?", "Unisex fit?"],
  reviews: [{ user: "Karan", rating: 4, comment: "Perfect for everyday wear." }]
},
{
  id: 19,
  name: "Puma Graphic T-Shirt",
  price: "₹1,799",
  category: "T-Shirts",
  description: "Soft cotton tee with bold Puma graphics.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/630092/34/mod01/fnd/IND/fmt/png/PUMA-x-HARRY-POTTER-Oversized-Graphic-Tee",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/630092/34/mod02/fnd/IND/fmt/png/PUMA-x-HARRY-POTTER-Oversized-Graphic-Tee",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/630092/34/mod04/fnd/IND/fmt/png/PUMA-x-HARRY-POTTER-Oversized-Graphic-Tee"
  ],
  faqs: ["Does print fade after wash?", "Slim or regular fit?"],
  reviews: [{ user: "Sana", rating: 5, comment: "Great quality cotton!" }]
},
{
  id: 20,
  name: "Puma Polo Collar T-Shirt",
  price: "₹2,199",
  category: "T-Shirts",
  description: "Smart polo tee with dryCELL moisture control.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/634138/91/mod01/fnd/IND/fmt/png/Essentials-Men's-Jacquard-Collar-Polo-Tee",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/634138/91/mod02/fnd/IND/fmt/png/Essentials-Men's-Jacquard-Collar-Polo-Tee",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/634138/91/mod04/fnd/IND/fmt/png/Essentials-Men's-Jacquard-Collar-Polo-Tee"
  ],
  faqs: ["Can it be worn for office casuals?", "Stretchable fabric?"],
  reviews: [{ user: "Ravi", rating: 4, comment: "Good for sports and casual." }]
},
{
  id: 21,
  name: "Puma Slim Fit Track Pants",
  price: "₹2,799",
  category: "Track Pants",
  description: "Tapered slim fit track pants with zipper pockets.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586718/03/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586718/03/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586718/03/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Do they shrink?", "Are they stretchable?"],
  reviews: [{ user: "Rahul", rating: 5, comment: "Super comfy for gym!" }]
},
{
  id: 22,
  name: "Puma Training Track Pants",
  price: "₹2,499",
  category: "Track Pants",
  description: "Lightweight training pants with breathable fabric.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586709/01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586709/01/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586709/01/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Does it have adjustable waist?", "Slim or relaxed fit?"],
  reviews: [{ user: "Megha", rating: 4, comment: "Very good material." }]
},
{
  id: 23,
  name: "Puma Hooded Sweatshirt",
  price: "₹3,999",
  category: "Hoodies",
  description: "Stylish hoodie with kangaroo pocket and logo print.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/535428/61/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/bv/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/dt01/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie"
  ],
  faqs: ["Is it fleece lined?", "Machine washable?"],
  reviews: [{ user: "Teja", rating: 5, comment: "Warm and stylish hoodie." }]
},
{
  id: 24,
  name: "Puma Essentials Hoodie",
  price: "₹3,499",
  category: "Hoodies",
  description: "Casual hoodie made with cotton blend fabric.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586690/01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586690/01/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/586690/01/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Does it shrink after wash?", "Good for winters?"],
  reviews: [{ user: "Aditi", rating: 4, comment: "Perfect for layering." }]
},
{
  id: 25,
  name: "Puma Training Jacket",
  price: "₹4,499",
  category: "Jackets",
  description: "Full zip training jacket with mesh lining.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/526911/69/mod01/fnd/IND/fmt/png/PUMA-x-HYROX-ULTRAWEAVE-Men's-Training-Jacket",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526911/69/mod02/fnd/IND/fmt/png/PUMA-x-HYROX-ULTRAWEAVE-Men's-Training-Jacket",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526911/69/mod04/fnd/IND/fmt/png/PUMA-x-HYROX-ULTRAWEAVE-Men's-Training-Jacket"
  ],
  faqs: ["Water resistant?", "Good for outdoor running?"],
  reviews: [{ user: "Arjun", rating: 5, comment: "Love the sporty design." }]
},
{
  id: 26,
  name: "Puma Padded Jacket",
  price: "₹5,999",
  category: "Jackets",
  description: "Lightweight padded jacket for chilly weather.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/687459/13/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Reversible-Padded-Jacket",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/687459/13/mod02/fnd/IND/fmt/png/Men's-Slim-Fit-Reversible-Padded-Jacket",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/687459/13/mod03/fnd/IND/fmt/png/Men's-Slim-Fit-Reversible-Padded-Jacket"
  ],
  faqs: ["Can it be packed into bag?", "Windproof?"],
  reviews: [{ user: "Sana", rating: 4, comment: "Keeps me really warm!" }]
},
{
  id: 27,
  name: "Puma Gym Duffel Bag",
  price: "₹2,499",
  category: "Bags",
  description: "Spacious duffel bag for gym and travel.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079312/01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079312/01/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079312/01/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Does it have shoe compartment?", "Waterproof?"],
  reviews: [{ user: "Ravi", rating: 5, comment: "Very useful for travel." }]
},
{
  id: 28,
  name: "Puma Backpack",
  price: "₹2,199",
  category: "Bags",
  description: "Durable backpack with laptop sleeve.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079614/01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079614/01/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/079614/01/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Is it padded?", "How many liters capacity?"],
  reviews: [{ user: "Rahul", rating: 4, comment: "Good for office and gym." }]
},
{
  id: 29,
  name: "Puma Sports Cap",
  price: "₹999",
  category: "Accessories",
  description: "Adjustable sports cap with embroidered logo.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto/global/023456/01/fnd/IND/w/600/h/600",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/023456/01/fnd/IND/w/600/h/600?angle=side",
    "https://images.puma.com/image/upload/f_auto,q_auto/global/023456/01/fnd/IND/w/600/h/600?angle=back"
  ],
  faqs: ["Washable?", "Unisex size?"],
  reviews: [{ user: "Megha", rating: 5, comment: "Perfect for sunny days!" }]
},
{
  id: 30,
  name: "Puma Sports Socks (Pack of 3)",
  price: "₹699",
  category: "Accessories",
  description: "Comfortable and breathable ankle-length socks.",
  images: [
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/689138/01/fnd/IND/fmt/png/Half-Terry-Ankle-Length-Socks-Pack-of-3",
    "hhttps://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/689138/01/dt01/fnd/IND/fmt/png/Half-Terry-Ankle-Length-Socks-Pack-of-3",
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/689138/01/dt02/fnd/IND/fmt/png/Half-Terry-Ankle-Length-Socks-Pack-of-3"
  ],
  faqs: ["Do they shrink?", "Suitable for running?"],
  reviews: [{ user: "Kiran", rating: 4, comment: "Very durable socks." }]
}

];


const Puma = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

 

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
                  <Link to={`/puma/product/${product.id}`}>
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

export default Puma;
