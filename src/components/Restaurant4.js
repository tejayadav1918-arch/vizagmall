import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Resto.css';

const categories = [
  "All",
  "Jerseys",
  "T-Shirts",
  "Tracks / Track Pants",
  "Shorts",
  "Shoes",
  "Sports Bags",
  "Hoodies",
  
];export const products = [
  // 1. Jerseys
  {
    id: 1,
    name: "Manchester United Home Jersey",
    category: "Jerseys",
    price: "₹3,499",
    images: [
      "https://mufc-live.cdn.scayle.cloud/images/c0e6ddceed74af2077f7e715d7c97e72.jpg?brightness=1&width=576&height=768&quality=70&bg=ffffff",
      "https://mufc-live.cdn.scayle.cloud/images/139fbaa87bc74a30fa9de0bb0c14cd9d.jpg?brightness=1&width=576&height=768&quality=70&bg=ffffff",
      "https://mufc-live.cdn.scayle.cloud/images/e49b70b289f698fe7063303ac0cedb61.jpg?brightness=1&width=922&height=1230&quality=70&bg=ffffff"
    ],
    description: "Official Manchester United home jersey with breathable fabric for comfort during matches and workouts.",
    faqs: [
      "Is this an official licensed jersey?",
      "Can I machine wash it?",
      "Does it come with player name printing?"
    ],
    reviews: [
      { user: "Ravi", rating: 5, comment: "Superb quality, feels authentic!" },
      { user: "Ananya", rating: 4, comment: "Good fit but slightly expensive." },
      { user: "Kiran", rating: 5, comment: "Exactly like the one in the stadium shop." }
    ]
  },
  {
    id: 2,
    name: "Real Madrid Away Jersey",
    category: "Jerseys",
    price: "₹3,299",
    images: [
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F7Kz93Q0LjMfoIawQ4rXEz%2F070c767fe8bf72c4d43c4af961cc5cef%2F0.png&w=256&q=75",
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0919_01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1920&q=75",
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0919_02.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=640&q=75"
    ],
    description: "Premium Real Madrid away jersey made from sweat-wicking material to keep you cool.",
    faqs: [
      "Does it have the official sponsor logo?",
      "Is this slim-fit?",
      "Can I wear it casually?"
    ],
    reviews: [
      { user: "Manoj", rating: 4, comment: "Great quality but delivery was late." },
      { user: "Sneha", rating: 5, comment: "Bought for my brother, he loved it." },
      { user: "Rohit", rating: 5, comment: "Perfect material, very comfortable." }
    ]
  },

  // 2. T-Shirts
  {
    id: 3,
    name: "Adidas Performance T-Shirt",
    category: "T-Shirts",
    price: "₹1,199",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/45a30f7cb4aa404c941e673f0d2278c4_9366/adidas_Z.N.E._Tee_Black_JE3069_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b46c45494447406d9ad198878cb9772e_9366/adidas_Z.N.E._Tee_Black_JE3069_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c056387e6b341a9b4e02a285267a344_9366/adidas_Z.N.E._Tee_Black_JE3069_01_laydown.jpg"
    ],
    description: "Lightweight Adidas performance tee, perfect for running and gym workouts.",
    faqs: [
      "Does it stretch?",
      "Is it quick-dry?",
      "Suitable for outdoor runs?"
    ],
    reviews: [
      { user: "Rahul", rating: 5, comment: "Super light and airy." },
      { user: "Priya", rating: 4, comment: "Loved the fit, could be softer." },
      { user: "Varun", rating: 5, comment: "Perfect for gym sessions." }
    ]
  },
  {
    id: 4,
    name: "Nike Dri-FIT Sports Tee",
    category: "T-Shirts",
    price: "₹1,499",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/835c0849-7dae-4268-99a0-1ad606e8970f/AS+M+NK+DF+TEE+RUN+ENERGY+SP25.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e00729a5-1aa4-4125-aa2e-605d748dde13/AS+M+NK+DF+TEE+RUN+ENERGY+SP25.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9cda1f2c-e7b7-4060-8dbc-cb07d1b3a393/AS+M+NK+DF+TEE+RUN+ENERGY+SP25.png"
    ],
    description: "Nike Dri-FIT tee designed to keep sweat away and enhance your performance.",
    faqs: [
      "Can it be worn daily?",
      "Does the color fade?",
      "How does the size run?"
    ],
    reviews: [
      { user: "Suresh", rating: 5, comment: "Cool and comfy!" },
      { user: "Aditi", rating: 4, comment: "Size runs a little small." },
      { user: "Nikhil", rating: 5, comment: "Worth every rupee." }
    ]
  },

  // 3. Tracks & Joggers
  {
    id: 5,
    name: "Puma Training Track Pants",
    category: "Tracks & Joggers",
    price: "₹2,199",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527573/70/mod02/fnd/IND/fmt/png/HYROX-Cloudspun-Men's-Regular-Fit-Training-Pants",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527573/70/mod04/fnd/IND/fmt/png/HYROX-Cloudspun-Men's-Regular-Fit-Training-Pants",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527573/70/mod03/fnd/IND/fmt/png/HYROX-Cloudspun-Men's-Regular-Fit-Training-Pants"
    ],
    description: "Puma slim-fit training pants with adjustable waist and ankle cuffs.",
    faqs: [
      "Are they stretchable?",
      "Can I use them for jogging?",
      "Does it have zip pockets?"
    ],
    reviews: [
      { user: "Gaurav", rating: 5, comment: "Best track pants I own!" },
      { user: "Meena", rating: 4, comment: "Comfortable but pricey." },
      { user: "Ashwin", rating: 5, comment: "Looks premium." }
    ]
  },

  // 4. Shoes
  {
    id: 6,
    name: "Nike Air Zoom Pegasus",
    category: "Shoes",
    price: "₹7,499",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/310598/02/sv01/fnd/IND/fmt/png/Razz-Women's-Running-Shoes",
       "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/310598/02/fnd/IND/fmt/png/Razz-Women's-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/310598/02/sv05/fnd/IND/fmt/png/Razz-Women's-Running-Shoes"
    ],
    description: "Nike Air Zoom Pegasus running shoes with responsive cushioning for daily runs.",
    faqs: [
      "Are these good for marathon training?",
      "Is it waterproof?",
      "Do they run true to size?"
    ],
    reviews: [
      { user: "Karthik", rating: 5, comment: "Excellent for running long distance." },
      { user: "Shalini", rating: 5, comment: "Super comfortable, love them." },
      { user: "Deepak", rating: 4, comment: "Bit expensive but quality is top notch." }
    ]
  },
  
  // 5. Sports Bags
  {
    id: 7,
    name: "Adidas Duffle Gym Bag",
    category: "Sports Bags",
    price: "₹2,499",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/090780/01/fnd/IND/fmt/png/Active-Training-Essentials-Women%E2%80%99s-Duffel-Gym-Bag-24L",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/090780/01/mod01/fnd/IND/fmt/png/Active-Training-Essentials-Women%E2%80%99s-Duffel-Gym-Bag-24L",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/090780/01/mod02/fnd/IND/fmt/png/Active-Training-Essentials-Women%E2%80%99s-Duffel-Gym-Bag-24L"
    ],
    description: "Spacious Adidas duffle bag with multiple compartments for gym and sports.",
    faqs: [
      "Does it have a shoe compartment?",
      "Is it water-resistant?",
      "How many liters capacity?"
    ],
    reviews: [
      { user: "Naveen", rating: 5, comment: "Fits all my gear perfectly." },
      { user: "Pooja", rating: 4, comment: "Stylish and functional." },
      { user: "Ravi", rating: 5, comment: "Durable material, happy with it." }
    ]
  },// Continuing Sportswear.js

  // 6. Jerseys (more)
  {
    id: 8,
    name: "Argentina National Team Jersey",
    category: "Jerseys",
    price: "₹3,199",
    images: [
      "https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJersey%25201-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%2C%2522tenantId%2522%3A%2522FIFA%2522%257D&w=256&q=50",
      "https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJersey%25202.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%2C%2522tenantId%2522%3A%2522FIFA%2522%257D&w=256&q=50",
      "https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJF2641_6_APPAREL_On%2520Model_Detail%2520View%25201_white.png%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%2C%2522tenantId%2522%3A%2522FIFA%2522%257D&w=256&q=50"
    ],
    description: "Official Argentina national football team jersey with lightweight polyester.",
    faqs: ["Is it unisex?", "Does it include Messi print?", "What material is it?"],
    reviews: [
      { user: "Aman", rating: 5, comment: "Messi fan must-have!" },
      { user: "Harsh", rating: 4, comment: "Good quality but delivery slow." },
      { user: "Ishita", rating: 5, comment: "Amazing design!" }
    ]
  },

  // 7. T-Shirts (more)
  {
    id: 9,
    name: "Under Armour Training Tee",
    category: "T-Shirts",
    price: "₹1,299",
    images: [
      "https://via.placeholder.com/400x400?text=UA+Tee+1",
      "https://via.placeholder.com/400x400?text=UA+Tee+2",
      "https://via.placeholder.com/400x400?text=UA+Tee+3"
    ],
    description: "Under Armour quick-dry sports tee designed for high performance training.",
    faqs: ["Is it slim fit?", "Does it breathe well?", "Available in large sizes?"],
    reviews: [
      { user: "Tarun", rating: 5, comment: "Light and breathable." },
      { user: "Simran", rating: 5, comment: "Perfect for gym workouts." },
      { user: "Akash", rating: 4, comment: "Good but color fades slightly." }
    ]
  },

  // 8. Tracks & Joggers (more)
  {
    id: 10,
    name: "Nike Training Joggers",
    category: "Tracks & Joggers",
    price: "₹2,799",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f9f00cb-7396-433b-9c88-cedb23b6e4ee/AS+W+NK+ONE+DF+HR+7%2F8+JOGGER.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/786515df-729e-4d0a-84a8-bf027db4d52c/AS+W+NK+ONE+DF+HR+7%2F8+JOGGER.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b8d872-ddb4-4fc1-8229-cb3d1d3cf7a6/AS+W+NK+ONE+DF+HR+7%2F8+JOGGER.png"
    ],
    description: "Nike joggers made with sweat-wicking fabric and slim-fit design.",
    faqs: ["Do they shrink?", "Can I wear casually?", "Are they stretchable?"],
    reviews: [
      { user: "Neha", rating: 5, comment: "Stylish and comfy." },
      { user: "Rahul", rating: 4, comment: "Good but bit tight at ankle." },
      { user: "Kavya", rating: 5, comment: "Excellent quality fabric." }
    ]
  },

  {
    id: 11,
    name: "Adidas Climalite Tracks",
    category: "Tracks & Joggers",
    price: "₹2,499",
    images: [
      "hhttps://mythriftkart.com/wp-content/uploads/2025/08/IMG_9859.jpeg",
      "https://mythriftkart.com/wp-content/uploads/2025/08/IMG_9860.jpeg",
      "https://mythriftkart.com/wp-content/uploads/2025/08/IMG_9862.jpeg"
    ],
    description: "Adidas tracks with Climalite technology for moisture control during sports.",
    faqs: ["Suitable for winter?", "Is waistband adjustable?", "Does it fade?"],
    reviews: [
      { user: "Aakash", rating: 5, comment: "Very good quality fabric." },
      { user: "Sunita", rating: 4, comment: "Length was a little long." },
      { user: "Rohan", rating: 5, comment: "Comfortable for jogging." }
    ]
  },

  // 9. Shoes (more)
  {
    id: 12,
    name: "Adidas Ultraboost 22",
    category: "Shoes",
    price: "₹9,999",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men's-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/379988/02/fnd/IND/fmt/png/Scorch-Runner-V2-Men's-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/379988/02/bv/fnd/IND/fmt/png/Scorch-Runner-V2-Men's-Running-Shoes"
    ],
    description: "Adidas Ultraboost running shoes with energy-return cushioning.",
    faqs: ["Best for long runs?", "Does sole last long?", "Lightweight?"],
    reviews: [
      { user: "Vikram", rating: 5, comment: "Ultimate comfort for running." },
      { user: "Sneha", rating: 5, comment: "Super premium feel." },
      { user: "Harshita", rating: 4, comment: "Expensive but worth it." }
    ]
  },

  {
    id: 13,
    name: "Puma Velocity Nitro",
    category: "Shoes",
    price: "₹6,499",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/311849/01/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-3-Men's-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/311849/01/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-3-Men's-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311849/01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-3-Men's-Running-Shoes"
    ],
    description: "Puma Velocity Nitro with responsive midsole for training and races.",
    faqs: ["Are these good for gym?", "Does sole grip well?", "How is the cushioning?"],
    reviews: [
      { user: "Rajeev", rating: 5, comment: "Perfect for everyday runs." },
      { user: "Divya", rating: 4, comment: "Good grip but design simple." },
      { user: "Kunal", rating: 5, comment: "Very light on feet." }
    ]
  },

  // 10. Sports Bags (more)
  {
    id: 14,
    name: "Nike Brasilia Training Bag",
    category: "Sports Bags",
    price: "₹2,899",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c64557ec-21b3-42f2-a6c5-092a986d6ffa/NK+BRSLA+M+BKPK+-+9.5+AOP+SP25.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/04ec6758-4524-4aee-8e94-8b901513c804/NK+BRSLA+M+BKPK+-+9.5+AOP+SP25.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4843b01-4b49-42bd-8440-dc52e67b5ec6/NK+BRSLA+M+BKPK+-+9.5+AOP+SP25.png"
    ],
    description: "Durable Nike duffle bag with spacious compartments.",
    faqs: ["Does it have laptop section?", "Waterproof?", "Easy to carry?"],
    reviews: [
      { user: "Sahil", rating: 5, comment: "Tough and stylish." },
      { user: "Ramesh", rating: 4, comment: "Bit bulky but worth it." },
      { user: "Pallavi", rating: 5, comment: "Good quality fabric." }
    ]
  },

  {
    id: 15,
    name: "Under Armour Gym Sack",
    category: "Sports Bags",
    price: "₹1,299",
    images: [
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1381925-120250602092616357.jpeg",
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1381925-220250602092617695.jpeg",
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1381925-320250602092618130.jpg"
    ],
    description: "Lightweight Under Armour drawstring gym sack for carrying essentials.",
    faqs: ["Does it fit shoes?", "Is it washable?", "Durable straps?"],
    reviews: [
      { user: "Rekha", rating: 5, comment: "Perfect for daily gym use." },
      { user: "Amit", rating: 4, comment: "Straps thin but okay." },
      { user: "Nidhi", rating: 5, comment: "Good for light carry." }
    ]
  },

  // 11. Jackets
  {
    id: 16,
    name: "Nike Windrunner Jacket",
    category: "Jackets",
    price: "₹4,499",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/012932e9-3ea7-484f-b6f4-f8c488abd744/K+NSW+RPL+WR+HD+JKT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/065f356f-b16a-4565-b497-463a55b45596/K+NSW+RPL+WR+HD+JKT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d6e8cf3-97f9-41f0-a64f-74a63f8ad247/K+NSW+RPL+WR+HD+JKT.png"
    ],
    description: "Nike Windrunner lightweight sports jacket for training in all weather.",
    faqs: ["Is it waterproof?", "Does it fold easily?", "Good for winters?"],
    reviews: [
      { user: "Shyam", rating: 5, comment: "Very stylish and light." },
      { user: "Preeti", rating: 4, comment: "Good for light rain." },
      { user: "Rohit", rating: 5, comment: "Love the design." }
    ]
  },

  {
    id: 17,
    name: "Adidas Z.N.E. Hoodie Jacket",
    category: "Jackets",
    price: "₹3,999",
    images: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/42a00940d36c4767b92572f9664d325e_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_White_JF2443_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8dfd9f16455f4ae3b0ddb5f84d837b1b_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_White_JF2443_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6e6a5e023f04aa6b37e52def3d6b61a_9366/Z.N.E._Full-Zip_Hooded_Track_Jacket_White_JF2443_25_model.jpg"
    ],
    description: "Adidas Z.N.E. hoodie jacket made for athletes to stay warm pre-game.",
    faqs: ["Does it have pockets?", "Is it heavy?", "Can I wear casually?"],
    reviews: [
      { user: "Arjun", rating: 5, comment: "Super comfy hoodie jacket." },
      { user: "Kritika", rating: 4, comment: "Good but slightly oversized." },
      { user: "Dev", rating: 5, comment: "Warm and stylish." }
    ]
  },

  // 12. Hoodies
  {
    id: 18,
    name: "Puma Training Hoodie",
    category: "Hoodies",
    price: "₹2,499",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/526678/30/mod01/fnd/IND/fmt/png/CLOUDSPUN-Branded-Men's-Training-Hoodie",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526678/30/mod02/fnd/IND/fmt/png/CLOUDSPUN-Branded-Men's-Training-Hoodie",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526678/30/mod03/fnd/IND/fmt/png/CLOUDSPUN-Branded-Men's-Training-Hoodie"
    ],
    description: "Soft Puma hoodie for workouts and casual wear.",
    faqs: ["Is it fleece inside?", "Does it shrink?", "Good for winters?"],
    reviews: [
      { user: "Mohan", rating: 5, comment: "Comfortable fabric." },
      { user: "Ritika", rating: 4, comment: "Sleeves a bit long." },
      { user: "Sagar", rating: 5, comment: "Perfect hoodie." }
    ]
  },

  {
    id: 19,
    name: "Under Armour Rival Hoodie",
    category: "Hoodies",
    price: "₹2,799",
    images: [
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1379757-120250826105615142.jpg",
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1379757-220250826105615736.jpg",
      "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1379757-520250826105616493.jpg"
    ],
    description: "Classic Under Armour Rival hoodie for training and post-workout wear.",
    faqs: ["Does it have zipper?", "Heavy fabric?", "Best for daily wear?"],
    reviews: [
      { user: "Jatin", rating: 5, comment: "Love the quality." },
      { user: "Nandini", rating: 4, comment: "Bit heavy but warm." },
      { user: "Sonia", rating: 5, comment: "Stylish and durable." }
    ]
  },

  {
    id: 20,
    name: "Reebok Sport Hoodie",
    category: "Hoodies",
    price: "₹2,199",
    images: [
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100253525_F_Model_eCom.jpg?v=1755800391",
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100253525_Sid_Model_eCom.jpg?v=1755800391",
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100253525_B_Model_eCom.jpg?v=1755800391"
    ],
    description: "Reebok sports hoodie designed for comfort and casual style.",
    faqs: ["Does it stretch?", "Machine washable?", "Is it breathable?"],
    reviews: [
      { user: "Suhani", rating: 5, comment: "Lightweight and stylish." },
      { user: "Vivek", rating: 4, comment: "Good but color options limited." },
      { user: "Anil", rating: 5, comment: "Very comfy hoodie." }
    ]
  }
];

  


const Restaurant4 = () => {
 
 const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-5">
       
      <h1 className="mb-3">SPORTS WEAR</h1>
      {/* Categories */}
      <Nav variant="pills" className="mb-4 flex-nowrap overflow-auto">
        {categories.map((cat, idx) => (
          <Nav.Item key={idx} className="me-2">
            <Nav.Link
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Products Grid */}
      <Row>
        
             {filteredProducts.map((product , idx) => (
                      <Col
                  key={product.id}
                  xs={idx === 0 ? 12 : 6}   // ✅ first card full-width, rest half-width in mobile
                  md={4}             
                  sm={6}
                  lg={3}      // ✅ normal 3 per row in desktop
                  className="mb-4"
                >
            <Card className="h-100">
              <Card.Img
  variant="top"
  src={product.images[0]}   // 👈 pick first image
  style={{ height: '350px', objectFit: 'cover' }}
/>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-danger fw-bold">{product.price}</Card.Text>
                <Button
                  variant="danger"
                  className="mt-auto"
                  onClick={() => navigate(`/sports/product/${product.id}`)}
                >
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
}

export default Restaurant4