

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
export const adiproducts = [
{
    id: 1,
    name: "Adidas Ultraboost 22",
    price: "₹18,499",
    discountPrice: "₹14,799",
    category: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fc2abb5f28246c79bdf587a8b734a02_9366/Ultrarun_5_Running_Shoes_Black_IH2640_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e88b695855be4267b1483492786721a3_9366/Ultrarun_5_Running_Shoes_Black_IH2640_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/babf86df2dc34ee38ded2def60484150_9366/Ultrarun_5_Running_Shoes_Black_IH2640_HM4.jpg"
    ],
    description: "High-performance running shoes with responsive cushioning for long-distance comfort.",
    faqs: [
      { q: "Are these good for marathons?", a: "Yes, designed for long-distance running." },
      { q: "Do they fit true to size?", a: "Yes, most runners can choose their normal size." },
      { q: "Can I wash them in a machine?", a: "Hand wash recommended, avoid machine washing." }
    ],
    reviews: [
      { user: "Rohit K.", rating: 5, comment: "Super comfortable for long runs!" },
      { user: "Priya S.", rating: 4, comment: "Stylish and supportive, a bit tight initially." },
      { user: "Arjun M.", rating: 5, comment: "Best running shoes I've ever had!" }
    ]
  },
  {
    id: 2,
    name: "Adidas Superstar",
    price: "₹9,499",
    discountPrice: "₹7,599",
    category: "Sneakers",
    images: [
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a57f20797824055b52e39de67322cda_9366/superstar-ii-shoes.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a6c516af64c4832829354533392a713_9366/Superstar_II_Shoes_Black_JI0079_01_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6992f476fc514050827ad286caee8fc8_9366/Superstar_II_Shoes_Black_JI0079_03_standard.jpg"
    ],
    description: "Classic sneaker with signature shell toe, perfect for casual wear.",
    faqs: [
      { q: "Is this unisex?", a: "Yes, suitable for all genders." },
      { q: "Does it run small?", a: "Fits true to size, size up for wide feet." },
      { q: "Are the laces replaceable?", a: "Yes, standard Adidas laces work fine." }
    ],
    reviews: [
      { user: "Meena P.", rating: 5, comment: "Iconic look and very comfortable." },
      { user: "Vivek R.", rating: 4, comment: "Great sneaker, slightly stiff at first." },
      { user: "Anjali K.", rating: 5, comment: "Perfect for everyday wear!" }
    ]
  },
  {
    id: 3,
    name: "Adidas 4DFWD",
    price: "₹22,999",
    discountPrice: "₹19,499",
    category: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff60ebaf2553433694c97da7fed26528_9366/Superstar_II_Shoes_White_JI0124_01_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/af935a59c2b74f7c8035dd2a70c154a6_9366/Superstar_II_Shoes_White_JI0124_03_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e99da3074e8b452ebfb3a8903e5a8c71_9366/Superstar_II_Shoes_White_JI0124_02_standard.jpg"
    ],
    description: "Futuristic running shoes with 4D-printed midsole technology for advanced cushioning.",
    faqs: [
      { q: "Is it suitable for long runs?", a: "Yes, maximum energy return and comfort." },
      { q: "Are they heavy?", a: "Surprisingly lightweight despite 4D midsole." },
      { q: "Do they need break-in?", a: "Minimal break-in required, comfortable immediately." }
    ],
    reviews: [
      { user: "Rohan S.", rating: 5, comment: "Incredible cushioning and performance!" },
      { user: "Ananya L.", rating: 4, comment: "Expensive but worth it for runners." },
      { user: "Vikram H.", rating: 5, comment: "Feels like running on clouds!" }
    ]
  },
  {
    id: 4,
    name: "Adidas Essentials Track Jacket",
    price: "₹3,499",
    discountPrice: "₹2,799",
    category: "Track Pants",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4065bb069a54096bf8ce50f51d053f2_9366/Multi_CLIMAWARM_Fleece_Jacket_Green_JV6237_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca82e6bf68314ef1969fe974d4c1ff59_9366/Multi_CLIMAWARM_Fleece_Jacket_Green_JV6237_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28a4e3ea357e426c83821bae4f5f4811_9366/Multi_CLIMAWARM_Fleece_Jacket_Green_JV6237_01_laydown.jpg"
    ],
    description: "Comfortable track jacket with breathable fabric, ideal for workouts and casual wear.",
    faqs: [
      { q: "Is it machine washable?", a: "Yes, cold wash recommended." },
      { q: "Does it have side pockets?", a: "Yes, zippered pockets included." },
      { q: "What sizes are available?", a: "S, M, L, XL, XXL." }
    ],
    reviews: [
      { user: "Suman T.", rating: 4, comment: "Comfortable and lightweight." },
      { user: "Rakesh P.", rating: 5, comment: "Good fit and fabric quality." },
      { user: "Neha M.", rating: 4, comment: "Perfect for morning jogs." }
    ]
  },
  {
    id: 5,
    name: "Adidas Trefoil Hoodie",
    price: "₹4,999",
    discountPrice: "₹3,999",
    category: "Hoodies",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/252ac2ed3bce4e0b8fe9de6a5ab40e04_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_Purple_KB7124_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8c72bbb481344e896563d7499ab64bb_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_Purple_KB7124_23_hover_model.jpg",
      "https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/h_2000/7229fc8b3ffe44e1a0e4bb7dae55e89d_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_Purple_KB7124_01_laydown.jpg"
    ],
    description: "Classic hoodie with the iconic Trefoil logo, perfect for streetwear and casual comfort.",
    faqs: [
      { q: "Does it shrink?", a: "No, retains size after washing." },
      { q: "Is it thick enough for winter?", a: "Yes, medium-heavy fleece." },
      { q: "Are the pockets spacious?", a: "Roomy kangaroo pocket included." }
    ],
    reviews: [
      { user: "Megha K.", rating: 5, comment: "Soft, warm, and stylish!" },
      { user: "Rajat S.", rating: 4, comment: "Great for casual wear." },
      { user: "Pooja L.", rating: 5, comment: "Love the logo and fit." }
    ]
  },

  {
    id: 6,
    name: "Adidas ZX 2K Boost",
    price: "₹13,499",
    discountPrice: "₹11,999",
    category: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3ed2e9ed4964ac7b998ca466592c532_9366/Samba_OG_Shoes_Beige_JR0883_01_00_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ccce3676935453a8ffb5e10aa5060d8_9366/Samba_OG_Shoes_Beige_JR0883_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/30585f92ef4e4fcab48e3df7b891be5b_9366/Samba_OG_Shoes_Beige_JR0883_03_standard.jpgg"
    ],
    description: "Modern retro running shoes with Boost cushioning for everyday comfort.",
    faqs: [
      { q: "Is the sole cushioned enough?", a: "Yes, Boost provides excellent energy return." },
      { q: "Can it be worn casually?", a: "Absolutely, stylish for streetwear." },
      { q: "Does it run large?", a: "True to size, slightly narrow fit." }
    ],
    reviews: [
      { user: "Riya S.", rating: 5, comment: "Very comfy and looks great!" },
      { user: "Ankit P.", rating: 4, comment: "Good for daily wear." },
      { user: "Vikram J.", rating: 5, comment: "Excellent cushioning!" }
    ]
  },
  {
    id: 7,
    name: "Adidas NMD_R1",
    price: "₹14,999",
    discountPrice: "₹12,499",
    category: "Sneakers",
    images: [
     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f1fa9bd60d8149ad8472aade93e3d344_9366/M_A_SZN_FL_R_PT_Blue_JL7113_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/513ace2ecc874f8282537c491237ad1b_9366/M_A_SZN_FL_R_PT_Blue_JL7113_22_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/522ac9dbd2ab476a87c06ba3b6166e74_9366/M_A_SZN_FL_R_PT_Blue_JL7113_23_hover_model.jpg"
    ],
    description: "Urban sneakers with flexible knit upper and responsive Boost midsole.",
    faqs: [
      { q: "Is it comfortable for walking?", a: "Yes, designed for all-day comfort." },
      { q: "Are they easy to clean?", a: "Yes, wipe gently with a damp cloth." },
      { q: "Do they come in multiple colors?", a: "Yes, several colorways available." }
    ],
    reviews: [
      { user: "Meena K.", rating: 5, comment: "Perfect for city walks!" },
      { user: "Rahul D.", rating: 4, comment: "Stylish and light." },
      { user: "Priya L.", rating: 5, comment: "Love the knit upper!" }
    ]
  },
  {
    id: 8,
    name: "Adidas Adilette Slides",
    price: "₹1,999",
    category: "Sneakers",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f8ccddbc11845d5bf81afc700fc6d35_9366/Island_Club_Adilette_22_Slides_Grey_HP6522_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60b707ee13ab4065b678ef19ca471015_9366/Island_Club_Adilette_22_Slides_Grey_HP6522_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b889153f2b6c4e3db6f6afc700fc94d2_9366/Island_Club_Adilette_22_Slides_Grey_HP6522_HM5.jpg"
    ],
    description: "Classic comfy slides for casual wear, poolside, or home use.",
    faqs: [
      { q: "Do they fit true to size?", a: "Yes, choose your normal shoe size." },
      { q: "Are they water-friendly?", a: "Yes, perfect for wet areas." },
      { q: "Is the strap adjustable?", a: "No, fixed strap design." }
    ],
    reviews: [
      { user: "Arjun P.", rating: 5, comment: "Super comfy for home and pool." },
      { user: "Sonia K.", rating: 4, comment: "Lightweight and easy to wear." },
      { user: "Rakesh V.", rating: 5, comment: "Perfect slides!" }
    ]
  },
  {
    id: 9,
    name: "Adidas Predator Edge FG",
    price: "₹21,999",
    discountPrice: "₹18,499",
    category: "Shoes",
    images: [
          "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b644ae19865402b81feadef00cbbf76_9366/Predator_Edge.3_Firm_Ground_Boots_Black_GW2360_01_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ddcba1e31d04f9fac35adef00cbd2f0_9366/Predator_Edge.3_Firm_Ground_Boots_Black_GW2360_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3da961eeaba477780dfadef00cbdb4d_9366/Predator_Edge.3_Firm_Ground_Boots_Black_GW2360_03_standard.jpg" 
    ],
      
      description: "High-performance football cleats with enhanced control and grip on the field.",
    faqs: [
      { q: "Are these firm ground only?", a: "Yes, best for natural grass." },
      { q: "Do they come in kids sizes?", a: "Available only for adults." },
      { q: "Is the fit snug?", a: "Yes, designed for a secure fit." }
    ],
    reviews: [
      { user: "Rohit S.", rating: 5, comment: "Great traction and control!" },
      { user: "Vikram P.", rating: 4, comment: "Perfect for matches." },
      { user: "Ananya K.", rating: 5, comment: "Love the feel and design!" }
    ]
  },
  {
    id: 10,
    name: "Adidas Tiro 21 Track Pants",
    price: "₹2,799",
    discountPrice: "₹2,199",
    category: "Track Pants",
    images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c7f3ecaed7d46fe8c7d92377a9e166b_9366/Liverpool_FC_Tiro_25_Competition_Training_Pants_Black_JV6566_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/290121eae5014d6d97995de0035ac094_9366/Liverpool_FC_Tiro_25_Competition_Training_Pants_Black_JV6566_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c968d9c687b4453bf7c2f29eebe0b36_9366/Liverpool_FC_Tiro_25_Competition_Training_Pants_Black_JV6566_25_model.jpg"
    ],
    description: "Slim fit sports pants with ankle zippers and breathable fabric for soccer and workouts.",
    faqs: [
      { q: "Is it suitable for casual wear?", a: "Yes, comfortable for everyday use." },
      { q: "Does it have pockets?", a: "Yes, side pockets included." },
      { q: "Can it be machine washed?", a: "Yes, cold wash recommended." }
    ],
    reviews: [
      { user: "Ankit S.", rating: 5, comment: "Great for training and casual use." },
      { user: "Priya L.", rating: 4, comment: "Good fit and comfortable." },
      { user: "Ramesh K.", rating: 5, comment: "Perfect for sports!" }
    ]
  },
  {
    id: 11,
    name: "Adidas Ultraboost 22",
    price: "₹18,999",
    discountPrice: "₹16,499",
    category: "Shoes",
    images: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ff790231b7f461baee3c291e96b74af_9366/ULTRABOOST_1.0_SHOES_Black_HQ4199_HM1.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/248b016bfd024281899e335acfd561c1_9366/ULTRABOOST_1.0_SHOES_Black_HQ4199_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2477e1ac67b4362b2a10015d9bf1936_9366/ULTRABOOST_1.0_SHOES_Black_HQ4199_HM4.jpg"
    ],
    description: "Premium running shoes with Boost cushioning and Primeknit upper.",
    faqs: [
      { q: "Are they suitable for marathons?", a: "Yes, excellent cushioning and support." },
      { q: "Do they stretch over time?", a: "Primeknit adapts to foot shape, minimal stretch." },
      { q: "Can they get wet?", a: "Light drizzle is fine, but avoid soaking." }
    ],
    reviews: [
      { user: "Ria S.", rating: 5, comment: "Extremely comfortable and responsive." },
      { user: "Ankit P.", rating: 4, comment: "Great for running, stylish too." },
      { user: "Vikram J.", rating: 5, comment: "Boost feels amazing on every step." }
    ]
  },
  {
    id: 12,
    name: "Adidas Superstar Sneakers",
    price: "₹9,999",
    category: "Sneakers",
    images: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5643ea9848e94c1da869fd176bd19128_9366/Superstar_II_Shoes_White_IH8659_01_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a57f20797824055b52e39de67322cda_9366/Superstar_II_Shoes_White_IH8659_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c54e56d691cf4f3b982490a2ff603dc4_9366/Superstar_II_Shoes_White_IH8659_03_standard.jpg"
    ],
    description: "Iconic shell-toe sneakers with leather upper for timeless style.",
    faqs: [
      { q: "Are they unisex?", a: "Yes, available for men and women." },
      { q: "Do they run true to size?", a: "Yes, classic fit." },
      { q: "Are they easy to clean?", a: "Wipe with damp cloth." }
    ],
    reviews: [
      { user: "Meena K.", rating: 5, comment: "Classic style, super comfy." },
      { user: "Rahul D.", rating: 4, comment: "Fits well, great everyday shoe." },
      { user: "Priya L.", rating: 5, comment: "Love the retro vibe!" }
    ]
  },
  {
    id: 13,
    name: "Adidas Adizero Boston 11",
    price: "₹16,999",
    discountPrice: "₹14,999",
    category: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/86dc337834b846cfa10fcbe6282133a3_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM1.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a38b206c72ef4dc6802c8be157804679_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fe10fd49283495397d0a16115a98653_9366/Adizero_Boston_12_Shoes_White_JQ2552_HM4.jpg"
    ],
    description: "Lightweight racing shoes designed for speed and long-distance runs.",
    faqs: [
      { q: "Are they good for long runs?", a: "Yes, engineered for marathons." },
      { q: "Do they provide arch support?", a: "Moderate arch support provided." },
      { q: "Are they durable?", a: "Yes, high-quality outsole and material." }
    ],
    reviews: [
      { user: "Rohit S.", rating: 5, comment: "Fast and comfortable, perfect for training." },
      { user: "Vikram P.", rating: 4, comment: "Great for short and long runs." },
      { user: "Ananya K.", rating: 5, comment: "Love the lightweight feel." }
    ]
  },
  {
    id: 14,
    name: "Adidas Essentials 3-Stripes Tee",
    price: "₹1,299",
    category: "T-Shirts",
    images: [
           "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e0e6d890d1b483eb0517ec95b4a3d4e_9366/Future_Icons_3_Stripes_Tee_Black_JL8785_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a54f907e827e4d08b84dd093a8279947_9366/Future_Icons_3_Stripes_Tee_Black_JL8785_22_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/83053d213ce34b74aee6f03e14405cb1_9366/Future_Icons_3_Stripes_Tee_Black_JL8785_23_hover_model.jpg"
    ],
    description: "Casual cotton T-shirt with iconic 3-Stripes on sleeves.",
    faqs: [
      { q: "Is it unisex?", a: "Yes, classic fit for everyone." },
      { q: "Can it be machine washed?", a: "Yes, cold wash recommended." },
      { q: "Does it shrink after wash?", a: "No significant shrinkage." }
    ],
    reviews: [
      { user: "Ankit S.", rating: 5, comment: "Soft and comfortable tee." },
      { user: "Priya L.", rating: 4, comment: "Great casual wear." },
      { user: "Ramesh K.", rating: 5, comment: "Love the 3-Stripes design." }
    ]
  },
  {
    id: 15,
    name: "Adidas Hoodie Essentials",
    price: "₹2,999",
    discountPrice: "₹2,499",
    category: "Hoodies",
    images: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2fee6e376a954c03ba55c7de1f1d5fc7_9366/Santa_Monica_Hoodie_Grey_JX6132_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/894c08e585f747759747bab1b2ca3895_9366/Santa_Monica_Hoodie_Grey_JX6132_23_hover_model.jpg",
      "https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/h_2000/30f47fa0f07e4fd6904012b312515907_9366/Santa_Monica_Hoodie_Grey_JX6132_01_laydown.jpg"
    ],
    description: "Comfortable cotton hoodie with kangaroo pocket and drawstring hood.",
    faqs: [
      { q: "Is it warm for winters?", a: "Yes, medium-thick fabric." },
      { q: "Is it true to size?", a: "Yes, classic hoodie fit." },
      { q: "Are there multiple colors?", a: "Yes, black, gray, and navy available." }
    ],
    reviews: [
      { user: "Ria S.", rating: 5, comment: "Perfect for casual wear." },
      { user: "Ankit P.", rating: 4, comment: "Warm and cozy." },
      { user: "Vikram J.", rating: 5, comment: "Love the fit and quality." }
    ]
  },

  // Product 16-20
  {
    id: 16,
    name: "Adidas Predator Freak.1 FG",
    price: "₹22,999",
    discountPrice: "₹20,499",
    category: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/33d99e6f605542258a2cc938706f6af0_9366/Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Boots_White_JI1111_01_00_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42c971a114a746a68732fa89cdf824de_9366/Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Boots_White_JI1111_22_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9016efe565fc403f8de43de3d2b1c224_9366/Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Boots_White_JI1111_02_standard.jpg"
    ],
    description: "Football cleats engineered for control and speed on firm ground.",
    faqs: [
      { q: "Are these suitable for wet fields?", a: "Better on firm, dry ground." },
      { q: "Are they lightweight?", a: "Yes, designed for agility." },
      { q: "Is lacing customizable?", a: "Yes, for perfect fit." }
    ],
    reviews: [
      { user: "Rohit S.", rating: 5, comment: "Amazing control and fit!" },
      { user: "Vikram P.", rating: 4, comment: "Perfect for training sessions." },
      { user: "Ananya K.", rating: 5, comment: "Excellent grip and feel." }
    ]
  },
  {
    id: 17,
    name: "Adidas Tiro 21 Shorts",
    price: "₹1,299",
    category: "Track Pants",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/64fb2defd0f24f4daa19f17f97b35d4e_9366/Tiro_x_Common_Goal_Woven_Shorts_Pink_JL9207_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c202de66bde4f3eb4073228450b8747_9366/Tiro_x_Common_Goal_Woven_Shorts_Pink_JL9207_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/aed3194d420d42e689ef4d6792ca1b7f_9366/Tiro_x_Common_Goal_Woven_Shorts_Pink_JL9207_01_laydown.jpg"
    ],
    description: "Lightweight soccer shorts with elastic waistband and breathable fabric.",
    faqs: [
      { q: "Can they be worn casually?", a: "Yes, lightweight and comfortable." },
      { q: "Do they have pockets?", a: "No pockets, designed for sports." },
      { q: "Is fabric quick-dry?", a: "Yes, ideal for workouts." }
    ],
    reviews: [
      { user: "Ankit S.", rating: 5, comment: "Great for running and sports." },
      { user: "Priya L.", rating: 4, comment: "Comfortable and stylish." },
      { user: "Ramesh K.", rating: 5, comment: "Fits perfectly for soccer." }
    ]
  },

];

    
const Adidas = () => {

   const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredProducts = selectedCategory
    ? adiproducts.filter((p) => p.category === selectedCategory)
    : adiproducts;

 

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
                  <Link to={`/adidas/product/${product.id}`}>
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

export default Adidas;