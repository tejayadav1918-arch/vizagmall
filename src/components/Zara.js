

import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Puma.css"

export const categories = [
    { name: "Jackets", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/312790/01/sv01/fnd/IND/fmt/png/ProFoam-Women's-Running-Shoes" },
  { name: "Casual Shirts", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/399844/01/sv01/fnd/IND/fmt/png/Court-Shatter-Low-Sneakers" },
  { name: "T-Shirts", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/630706/02/mod01/fnd/IND/fmt/png/PUMA-x-Squid-Game-Men's-Graphic-Glow-T-shirt" },
  { name: "Jeans & Trousers", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/631533/03/mod01/fnd/IND/fmt/png/Evostripe-Core-Men's-Slim-Fit-Pants" },
  { name: "Sneakers", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/535428/61/dt01/fnd/IND/fmt/png/CLUB-Graphic-Men's-Relaxed-Fit-Hoodie" },
  { name: "Boots", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/846666/99/mod01/fnd/IND/fmt/png/Zippered-Full-Zip-Men's-Slim-Fit-Jacket" },
  { name: "Accessories", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/041772/04/fnd/IND/fmt/png/Knit-Winter-Gloves" },
  { name: "Shirts & Blouses", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/091261/01/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-Race-Motorsport-Waist-Bag" },
  { name: "Sweaters & Hoodies", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/021735/01/fnd/IND/fmt/png/STYLE-Fabric-Cap" },
    { name: "Skirts", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/021735/01/fnd/IND/fmt/png/STYLE-Fabric-Cap" },

  { name: "Dresses", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/021735/01/fnd/IND/fmt/png/STYLE-Fabric-Cap" },


];

// --- PRODUCTS (your existing list stays as-is) ---

export const zaraproducts = [
  {
    id: 1,
    name: "Zara Premium Leather Jacket",
    category: "Jackets",
    price: "₹8,999",
    off: "20% Off",
    images: [
      "https://static.zara.net/assets/public/b9f1/69df/8fee4633b643/14c07e8d2224/04027400800-p/04027400800-p.jpg?ts=1751615003976&w=1024",
      "https://static.zara.net/assets/public/6baf/f375/d6874a379e51/70c54c068306/04027400800-a3/04027400800-a3.jpg?ts=1751615003710&w=750",
      "https://static.zara.net/assets/public/551f/9477/b0eb4331ae69/20f2bb763d69/04027400800-a4/04027400800-a4.jpg?ts=1751615003809&w=750",
    ],
    description:
      "A timeless leather jacket crafted for durability and modern style.",
    reviews: [
      { user: "Arjun", rating: 5, comment: "Amazing quality leather!" },
      { user: "Megha", rating: 4, comment: "Stylish and comfortable." },
    ],
    faqs: [
      { q: "Is this waterproof?", a: "No, it is not waterproof." },
      { q: "Is it heavy?", a: "No, it is lightweight and comfortable." },
    ],
  },
  {
    id: 2,
    name: "Zara Slim Fit Casual Shirt",
    category: "Casual Shirts",
    price: "₹2,499",
    off: "10% Off",
    images: [
     "https://static.zara.net/assets/public/a75d/d8a6/002b4018828d/bc6cd37c302d/04408147250-p/04408147250-p.jpg?ts=1742374806823&w=1024",
      "https://static.zara.net/assets/public/b86f/c22f/86e5439e8529/6d0386020064/04408147250-a2/04408147250-a2.jpg?ts=1742374803159&w=750",
      "https://static.zara.net/assets/public/9fe8/b589/20c644159ea7/0902eee28b35/04408147250-000-e3/04408147250-000-e3.jpg?ts=1754985866085&w=750"
    ],
    description:
      "Premium cotton casual shirt perfect for everyday wear.",
    reviews: [
      { user: "Rohit", rating: 5, comment: "Fits perfectly." },
      { user: "Anjali", rating: 4, comment: "Good material." },
    ],
    faqs: [
      { q: "Is it stretchable?", a: "No, it's 100% cotton." },
      { q: "Can I wash it at home?", a: "Yes, machine washable." },
    ],
  },
  {
    id: 3,
    name: "Zara Oversized Graphic T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    off: "15% Off",
    images: [
      "https://static.zara.net/assets/public/bd82/b025/55784a16a70a/cd8f60fcdc00/05643801620-e1/05643801620-e1.jpg?ts=1752564171706&w=1024",
      "https://static.zara.net/assets/public/cb58/c1e5/e03448d3bd98/037720322fc7/05643801620-e2/05643801620-e2.jpg?ts=1752564171610&w=1125",
      "https://static.zara.net/assets/public/7997/7749/723b40aea6ea/00c0c2b99cce/05643801620-e3/05643801620-e3.jpg?ts=1752564172852&w=750"
    ],
    description:
      "Trendy oversized T-shirt with modern graphic prints.",
    reviews: [
      { user: "Kabir", rating: 5, comment: "Super cool look." },
      { user: "Sneha", rating: 4, comment: "Slightly large fit." },
    ],
    faqs: [
      { q: "Does it shrink?", a: "No, preshrunk fabric." },
      { q: "Is it unisex?", a: "Yes, suitable for both men & women." },
    ],
  },
  {
    id: 4,
    name: "Zara Slim Fit Jeans",
    category: "Jeans & Trousers",
    price: "₹3,499",
    images: [
     "https://static.zara.net/assets/public/dc76/182b/dd2a4f3fa916/489022c9d08a/08062305407-a1/08062305407-a1.jpg?ts=1753346067375&w=1420",
      "https://static.zara.net/assets/public/51bd/f216/1c604171b9c9/9a24bbbb756a/08062305407-a2/08062305407-a2.jpg?ts=1753346066682&w=1420",
      "https://static.zara.net/assets/public/9137/dcee/d57a4f05bea6/07c0eaaad745/08062305407-e3/08062305407-e3.jpg?ts=1753352013262&w=1420"
    ],
    description:
      "Classic slim-fit jeans designed for comfort and durability.",
    reviews: [
      { user: "Nikhil", rating: 5, comment: "Perfect fit and color." },
      { user: "Pooja", rating: 4, comment: "Comfortable material." },
    ],
    faqs: [
      { q: "Does it fade?", a: "No, color stays intact after washes." },
      { q: "Is it stretchable?", a: "Yes, slightly stretchable." },
    ],
  },
  {
    id: 5,
    name: "Zara White Sneakers",
    category: "Sneakers",
    price: "₹4,999",
    off: "25% Off",
    images: [
     "https://static.zara.net/assets/public/133b/5215/02eb46378e58/0b1735d44a69/12290529001-e2/12290529001-e2.jpg?ts=1743492507216&w=750",
      "https://static.zara.net/assets/public/dc71/76ed/f6854f4da1e5/4ae4bd9f493c/12290529001-e3/12290529001-e3.jpg?ts=1743492507338&w=750",
      "https://static.zara.net/assets/public/b398/6eec/f74b4cf49852/5146cb617238/12290529001-e4/12290529001-e4.jpg?ts=1743492506877&w=750"
    ],
    description:
      "Minimalist sneakers suitable for both men & women.",
    reviews: [
      { user: "Vikram", rating: 5, comment: "Super comfortable!" },
      { user: "Sara", rating: 4, comment: "Love the clean design." },
    ],
    faqs: [
      { q: "Are these unisex?", a: "Yes, suitable for men & women." },
      { q: "Can I use for running?", a: "Not recommended, lifestyle only." },
    ],
  },
  {
    id: 6,
    name: "Zara Wool Blend Sweater",
    category: "Sweaters & Hoodies",
    price: "₹2,999",
    images: [
     "https://static.zara.net/assets/public/39c6/2c98/28ea48069b17/e62a5948a2fe/02632316800-200-e1/02632316800-200-e1.jpg?ts=1756392360923&w=1024",
      "https://static.zara.net/assets/public/8c1d/d442/72aa44d8b42d/cade799bde25/02632316800-200-e2/02632316800-200-e2.jpg?ts=1756392360625&w=1125",
      
    ],
    description:
      "Soft wool blend sweater for cozy winter days.",
    reviews: [
      { user: "Neha", rating: 5, comment: "Super warm and stylish." },
      { user: "Rahul", rating: 4, comment: "Slightly loose fit." },
    ],
    faqs: [
      { q: "Is it itchy?", a: "No, soft wool blend fabric." },
      { q: "Can I dry-clean?", a: "Yes, recommended." },
    ],
  },
  {
    id: 7,
    name: "Zara Midi Dress",
    category: "Dresses",
    price: "₹4,299",
    images: [
      "https://static.zara.net/assets/public/a8ac/ce6b/7a6f42ec8a9d/c18bc91f8864/05029187700-p/05029187700-p.jpg?ts=1756313890240&w=1024",
      "https://static.zara.net/assets/public/e9ae/3f8e/a39541e9b335/268c9adfa20d/05029187700-a1/05029187700-a1.jpg?ts=1756313885400&w=1125",
      "https://static.zara.net/assets/public/c3a1/32fe/48544fcd926a/9bfe5a9e1cef/05029187700-a3/05029187700-a3.jpg?ts=1756313885718&w=750"
    ],
    description:
      "Elegant midi dress perfect for parties and formal wear.",
    reviews: [
      { user: "Ishita", rating: 5, comment: "Very elegant design." },
      { user: "Simran", rating: 4, comment: "Fabric is smooth and comfy." },
    ],
    faqs: [
      { q: "Is it body-hugging?", a: "No, relaxed fit." },
      { q: "Is lining included?", a: "Yes, fully lined." },
    ],
  },
  {
    id: 8,
    name: "Zara Pleated Skirt",
    category: "Skirts",
    price: "₹2,799",
    images: [
      "https://static.zara.net/assets/public/67bb/33b5/4c9944639514/9179bc86e556/04387235712-p/04387235712-p.jpg?ts=1753951137929&w=1024",
      "https://static.zara.net/assets/public/d7ca/9ba0/0b1c460aab05/cced4c90d0b8/04387235712-a1/04387235712-a1.jpg?ts=1753806682704&w=1125",
      "https://static.zara.net/assets/public/c75f/fd79/cb94477e9ddf/973903181c38/04387235712-a2/04387235712-a2.jpg?ts=1753806682733&w=750"
    ],
    description:
      "Trendy pleated skirt for modern feminine style.",
    reviews: [
      { user: "Ayesha", rating: 5, comment: "Perfect for office wear." },
      { user: "Karishma", rating: 4, comment: "Nice but runs large." },
    ],
    faqs: [
      { q: "Does it come with lining?", a: "Yes, has inner lining." },
      { q: "Is it stretchable?", a: "No, regular fabric." },
    ],
  },
{
    id: 9,
    name: "Zara Classic Straight Jeans",
    category: "Jeans & Trousers",
    price: "₹3,299",
    discountPrice: "₹2,799",
    images: [
      "https://static.zara.net/assets/public/49d2/ec8e/6c0240b493de/28ef33cdd5c5/04083224445-p/04083224445-p.jpg?ts=1755011933752&w=1024",
      "https://static.zara.net/assets/public/4580/af2f/ce3d4ccba221/9341e03313a1/04083224445-a1/04083224445-a1.jpg?ts=1755011934791&w=1125",
      "https://static.zara.net/assets/public/ec30/7877/a89c47ab8f1c/eff0d8d69d65/04083224445-a2/04083224445-a2.jpg?ts=1755011934578&w=750"
    ],
    description: "Timeless straight fit jeans made with premium cotton denim.",
    faqs: [
      { q: "Are they stretchable?", a: "Minimal stretch for durability." },
      { q: "Best for casual wear?", a: "Yes, versatile style." }
    ],
    reviews: [
      { user: "Ritika P.", rating: 5, comment: "Perfect everyday jeans." },
      { user: "Aditya R.", rating: 4, comment: "Runs slightly big, but great quality." }
    ]
  },
  {
    id: 10,
    name: "Zara Cropped Denim Jacket",
    category: "Jackets & Outerwear",
    price: "₹4,499",
    images: [
      "https://static.zara.net/assets/public/8105/3dea/133b4e429ee8/af7ae45e908c/05252274400-p/05252274400-p.jpg?ts=1753953580038&w=1024",
      "https://static.zara.net/assets/public/c6aa/cd06/078a4cea9e11/17f98b219221/05252274400-a1/05252274400-a1.jpg?ts=1753953580830&w=1125",
      "https://static.zara.net/assets/public/1e16/e4ca/35024c67968f/32d55dce3458/05252274400-a2/05252274400-a2.jpg?ts=1753953580813&w=750"
    ],
    description: "Trendy cropped denim jacket with a vintage washed finish.",
    faqs: [
      { q: "Does it fade?", a: "Slightly with washes, adds character." },
      { q: "Good for layering?", a: "Yes, works well over tees and dresses." }
    ],
    reviews: [
      { user: "Neha M.", rating: 5, comment: "Love the cropped fit, super chic!" }
    ]
  },
  {
    id: 11,
    name: "Zara Slim Fit Chinos",
    category: "Jeans & Trousers",
    price: "₹2,799",
    discountPrice: "₹2,299",
    images: [
     "https://static.zara.net/assets/public/9fbc/2142/56924b9992f7/626930089b19/02342302052-p/02342302052-p.jpg?ts=1755791712144&w=1024",
      "https://static.zara.net/assets/public/f533/f7c3/657c482bb954/c427109a422b/02342302052-a3/02342302052-a3.jpg?ts=1755791712060&w=750",
      "https://static.zara.net/assets/public/07f2/9794/687347aa9bd1/26dee9822d87/02342302052-e1/02342302052-e1.jpg?ts=1755775361320&w=750"
    ],
    description: "Smart slim-fit chinos suitable for both casual and office wear.",
    faqs: [
      { q: "Do they shrink?", a: "No, made with pre-shrunk fabric." },
      { q: "Can they be ironed?", a: "Yes, warm iron recommended." }
    ],
    reviews: [
      { user: "Sanjay T.", rating: 5, comment: "Very comfortable and stylish." }
    ]
  },
  {
    id: 12,
    name: "Zara Pleated Midi Skirt",
    category: "Skirts & Dresses",
    price: "₹3,999",
    images: [
      "https://static.zara.net/assets/public/2b21/1276/a62647879769/6b9cd3b3043e/03067505250-p/03067505250-p.jpg?ts=1752835394165&w=1024",
      "https://static.zara.net/assets/public/8635/79ac/c1d4422585d5/872d8eb73e57/03067505250-a2/03067505250-a2.jpg?ts=1752835394347&w=750",
      "https://static.zara.net/assets/public/ba7c/e25f/0908472b98fd/b610e96dd801/03067505250-a1/03067505250-a1.jpg?ts=1752835394080&w=1125"
    ],
    description: "Elegant pleated midi skirt crafted from lightweight fabric.",
    faqs: [
      { q: "Is it see-through?", a: "No, fully lined." },
      { q: "Best for formal occasions?", a: "Yes, works for office and events." }
    ],
    reviews: [
      { user: "Megha K.", rating: 5, comment: "Super flowy and classy." }
    ]
  },
  {
    id: 13,
    name: "Zara Oversized Hoodie",
    category: "Hoodies & Sweatshirts",
    price: "₹2,499",
    discountPrice: "₹1,999",
    images: [
      "https://static.zara.net/assets/public/5e90/1a6e/e3a345478153/14265a7f4168/01437361800-p/01437361800-p.jpg?ts=1756457749926&w=1024",
      "https://static.zara.net/assets/public/bc56/8f9a/0b794df0b738/21614dfad584/01437361800-a3/01437361800-a3.jpg?ts=1756457749960&w=1125",
     
    ],
    description: "Relaxed oversized hoodie in soft cotton blend fabric.",
    faqs: [
      { q: "Is it warm?", a: "Yes, medium-thick material." },
      { q: "Unisex?", a: "Yes, suitable for both men and women." }
    ],
    reviews: [
      { user: "Arjun S.", rating: 5, comment: "Cozy and stylish." }
    ]
  },
  {
    id: 14,
    name: "Zara Leather Ankle Boots",
    category: "Footwear",
    price: "₹6,999",
    images: [
  "https://static.zara.net/assets/public/cc3f/d5ec/391f4afbb8c8/a5f17584acf7/12004429800-a1/12004429800-a1.jpg?ts=1749458603182&w=1024",
      "https://static.zara.net/assets/public/011d/bf1e/83a04a5fbcb5/c249f1dea1cc/12004429800-a2/12004429800-a2.jpg?ts=1749458603117&w=1125",
      "https://static.zara.net/assets/public/f2b3/f56b/f95446c29e4a/687a9b7166b1/12004429800-e2/12004429800-e2.jpg?ts=1749458690617&w=750"
    ],
    description: "Premium leather ankle boots with side zipper closure.",
    faqs: [
      { q: "Are they waterproof?", a: "Not fully, but water-resistant." },
      { q: "Do they run true to size?", a: "Yes, standard fit." }
    ],
    reviews: [
      { user: "Sneha D.", rating: 5, comment: "Chic and durable boots!" }
    ]
  },
  {
    id: 15,
    name: "Zara Knit Sweater",
    category: "Hoodies & Sweatshirts",
    price: "₹2,299",
    images: [
     "https://static.zara.net/assets/public/6717/32cc/46ee46a3bb82/137426070cb6/03332300401-p/03332300401-p.jpg?ts=1753685477065&w=1024",
      "https://static.zara.net/assets/public/1f01/d136/e99e4d3e80a8/46b824475de9/03332300401-a1/03332300401-a1.jpg?ts=1753685472799&w=1125",
      "https://static.zara.net/assets/public/3b88/37ac/333b4ee2b2ec/dbe38810c8ed/03332300401-a2/03332300401-a2.jpg?ts=1753685473919&w=750"
    ],
    description: "Classic knit sweater for everyday comfort and style.",
    faqs: [
      { q: "Can it be washed in machine?", a: "Yes, gentle wash." },
      { q: "Does it shrink?", a: "No, retains shape." }
    ],
    reviews: [
      { user: "Rahul V.", rating: 5, comment: "Soft fabric, great fit." }
    ]
  },
  {
    id: 16,
    name: "Zara Double-Breasted Blazer",
    category: "Jackets & Outerwear",
    price: "₹5,799",
    discountPrice: "₹4,999",
    images: [
    "https://static.zara.net/assets/public/33ea/dc6b/4e9f40e592bd/a71485df46a0/01564305422-p/01564305422-p.jpg?ts=1753787403117&w=1420",
      "https://static.zara.net/assets/public/c3cb/3800/5cf24c8ba40c/844032340a5c/01564305422-a2/01564305422-a2.jpg?ts=1753787403378&w=1420",
      "https://static.zara.net/assets/public/1365/f6cf/7da3440ca337/4c175826fc08/01564305422-a3/01564305422-a3.jpg?ts=1753787403203&w=1420"
    ],
    description: "Tailored blazer with sharp lapels and a modern fit.",
    faqs: [
      { q: "Is it formal?", a: "Yes, perfect for office and meetings." },
      { q: "Dry clean only?", a: "Yes, recommended." }
    ],
    reviews: [
      { user: "Kavya L.", rating: 5, comment: "Very classy, worth the price." }
    ]
  },
  {
    id: 17,
    name: "Zara Cargo Trousers",
    category: "Jeans & Trousers",
    price: "₹3,499",
    discountPrice: "₹2,999",
    images: [
      "https://static.zara.net/assets/public/aaa9/c139/3c8f42b68959/8294f63c8e32/09252310806-p/09252310806-p.jpg?ts=1755612678177&w=1024",
      "https://static.zara.net/assets/public/3c57/689d/c9f34d5082bf/6be07891ddd4/09252310806-a2/09252310806-a2.jpg?ts=1755612672770&w=750",
      "https://static.zara.net/assets/public/d019/b39a/efd346d7935c/6388b481b6f1/09252310806-a3/09252310806-a3.jpg?ts=1755612675452&w=750"
    ],
    description: "Trendy cargo trousers with multiple utility pockets for a streetwear vibe.",
    faqs: [
      { q: "Does it have stretch?", a: "Minimal stretch, durable cotton." },
      { q: "Are the pockets real?", a: "Yes, all are functional." }
    ],
    reviews: [
      { user: "Rohit K.", rating: 5, comment: "Perfect cargos, love the style!" }
    ]
  },
  {
    id: 18,
    name: "Zara Satin Slip Dress",
    category: "Skirts & Dresses",
    price: "₹4,299",
    images: [
      "https://static.zara.net/assets/public/1a14/4787/261947f8b9ba/06cd2831a006/T1333161004-p/T1333161004-p.jpg?ts=1746688298277&w=1024",
      "https://static.zara.net/assets/public/ed0e/4b9e/06a74930b314/12408d97d913/01223105800-e1/01223105800-e1.jpg?ts=1746443751343&w=1125",
      "https://static.zara.net/assets/public/753a/6611/db1f4190966c/d7d47818c5c5/01223105800-e3/01223105800-e3.jpg?ts=1746443753029&w=1420"
    ],
    description: "Elegant satin slip dress designed for evenings and parties.",
    faqs: [
      { q: "Is it body-hugging?", a: "Yes, slim fit with flowy bottom." },
      { q: "Does it need dry cleaning?", a: "Preferable, to maintain sheen." }
    ],
    reviews: [
      { user: "Pooja S.", rating: 4, comment: "Beautiful but a little delicate." }
    ]
  },
  {
    id: 19,
    name: "Zara Puffer Jacket",
    category: "Jackets & Outerwear",
    price: "₹5,999",
    discountPrice: "₹4,999",
    images: [
      "https://static.zara.net/assets/public/5a4e/a0bb/d08c463dbc35/22f36fb71f98/08073257800-p/08073257800-p.jpg?ts=1754653071238&w=1024",
      "https://static.zara.net/assets/public/59e7/0833/59b0431285c0/bd2e0ecd4b7d/08073257800-a3/08073257800-a3.jpg?ts=1754653071040&w=750",
      "https://static.zara.net/assets/public/4b5d/3ba1/ec4f4b22a32c/97a405bba385/08073257800-a4/08073257800-a4.jpg?ts=1754653071207&w=750"
    ],
    description: "Warm padded puffer jacket with zip closure and side pockets.",
    faqs: [
      { q: "Is it water resistant?", a: "Yes, light water resistance." },
      { q: "Best for winters?", a: "Absolutely, very cozy." }
    ],
    reviews: [
      { user: "Akash B.", rating: 5, comment: "Super warm and stylish!" }
    ]
  },
  {
    id: 20,
    name: "Zara Graphic T-Shirt",
    category: "T-Shirts & Tops",
    price: "₹1,499",
    images: [
      "https://static.zara.net/assets/public/663a/b57a/a8a44f369d3b/982755a2c0ed/04374311612-a1/04374311612-a1.jpg?ts=1755789366078&w=1125",
      "https://static.zara.net/assets/public/95df/289d/51d1442ca752/ba2ca48ea56a/04374311612-a2/04374311612-a2.jpg?ts=1755789365399&w=750",
      "https://static.zara.net/assets/public/4fb2/afae/2f6545ec99b3/455ee2339f89/04374311612-e1/04374311612-e1.jpg?ts=1755764331625&w=750"
    ],
    description: "Casual cotton t-shirt with a stylish graphic print.",
    faqs: [
      { q: "Does print fade?", a: "No, high-quality screen print." },
      { q: "Unisex?", a: "Yes, suitable for all." }
    ],
    reviews: [
      { user: "Sonal G.", rating: 5, comment: "Trendy and comfy." }
    ]
  },
  {
    id: 21,
    name: "Zara High-Waist Wide Jeans",
    category: "Jeans & Trousers",
    price: "₹3,799",
    images: [
     "https://static.zara.net/assets/public/49d2/ec8e/6c0240b493de/28ef33cdd5c5/04083224445-p/04083224445-p.jpg?ts=1755011933752&w=1024",
      "https://static.zara.net/assets/public/f809/2232/5f364c8686a7/5dff221c9d96/04083224445-a3/04083224445-a3.jpg?ts=1755011934073&w=750",
      "https://static.zara.net/assets/public/3343/0e11/c3764bb8b260/34921303d794/04083224445-a5/04083224445-a5.jpg?ts=1755011935764&w=750"
    ],
    description: "Wide-leg high-waisted jeans in a vintage-inspired look.",
    faqs: [
      { q: "Do they stretch?", a: "No, pure cotton." },
      { q: "Good for casual outfits?", a: "Yes, very trendy." }
    ],
    reviews: [
      { user: "Mitali R.", rating: 5, comment: "Fits perfectly, love the cut!" }
    ]
  },
  {
    id: 22,
    name: "Zara Chunky Sneakers",
    category: "Footwear",
    price: "₹5,299",
    discountPrice: "₹4,599",
    images: [
    "https://static.zara.net/assets/public/c12c/1c36/57854fbc8488/5a29e8fa904c/12272529202-000-e2/12272529202-000-e2.jpg?ts=1744022909039&w=750",
      "https://static.zara.net/assets/public/7873/be9e/5d6f4555846c/e65c16885a23/12272529202-000-e1/12272529202-000-e1.jpg?ts=1744022909108&w=750",
      "https://static.zara.net/assets/public/9a50/b244/52144fd1bc66/a997a3f55aee/12272529202-000-e4/12272529202-000-e4.jpg?ts=1744022909367&w=750"
    ],
    description: "Trendy unisex chunky sneakers for daily wear.",
    faqs: [
      { q: "Are they heavy?", a: "Slightly bulky but comfortable." },
      { q: "Can both men and women wear?", a: "Yes, unisex design." }
    ],
    reviews: [
      { user: "Naveen P.", rating: 5, comment: "Super stylish sneakers!" }
    ]
  },
  {
    id: 23,
    name: "Zara Knitted Midi Dress",
    category: "Skirts & Dresses",
    price: "₹3,999",
    images: [
      "https://static.zara.net/assets/public/362b/a70a/89aa4980a534/c0cc22120eca/08779637066-p/08779637066-p.jpg?ts=1751983324246&w=1024",
      "https://static.zara.net/assets/public/b186/d1c9/71d74f7abef0/7f44f4ca297e/08779637066-a1/08779637066-a1.jpg?ts=1751983325047&w=1420"
    ],
    description: "Chic knitted midi dress perfect for day-to-night looks.",
    faqs: [
      { q: "Is it stretchable?", a: "Yes, bodycon fit." },
      { q: "Machine washable?", a: "Yes, delicate cycle." }
    ],
    reviews: [
      { user: "Anjali K.", rating: 5, comment: "Hugs the body beautifully." }
    ]
  },
  {
    id: 24,
    name: "Zara Classic White Shirt",
    category: "T-Shirts & Tops",
    price: "₹2,199",
    discountPrice: "₹1,799",
    images: [
      "https://static.zara.net/assets/public/81b1/57b8/007c494698f9/9f83af6a85f5/05588320250-p/05588320250-p.jpg?ts=1730632663972&w=1024",
      "https://static.zara.net/assets/public/d3a0/44f0/772644f8a8d6/36a218c0fc2d/05588320250-a1/05588320250-a1.jpg?ts=1730632662217&w=1125"
    ],
    description: "Essential cotton shirt for a clean, polished look.",
    faqs: [
      { q: "Does it wrinkle?", a: "Yes, needs light ironing." },
      { q: "Can be tucked in?", a: "Yes, versatile for styling." }
    ],
    reviews: [
      { user: "Prakash N.", rating: 4, comment: "Nice fit but slightly sheer." }
    ]
  },
  {
    id: 25,
    name: "Zara Faux Leather Jacket",
    category: "Jackets & Outerwear",
    price: "₹6,499",
    images: [
      "https://static.zara.net/assets/public/7b40/7cf3/29194063ac1b/9a3441848189/03046314529-p/03046314529-p.jpg?ts=1755790381121&w=1024",
      "https://static.zara.net/assets/public/8b27/a197/95d24daea2e4/b1f8c6168ed4/03046314529-a2/03046314529-a2.jpg?ts=1755790378298&w=750"
    ],
    description: "Edgy faux leather biker jacket with zipper details.",
    faqs: [
      { q: "Looks real leather?", a: "Yes, premium finish." },
      { q: "Heavy?", a: "No, lightweight faux leather." }
    ],
    reviews: [
      { user: "Yash P.", rating: 5, comment: "Gives perfect biker vibes." }
    ]
  },
  {
    id: 26,
    name: "Zara Flared Trousers",
    category: "Jeans & Trousers",
    price: "₹3,299",
    images: [
      "https://static.zara.net/assets/public/95ce/349f/0ac3419bbafb/2e52c241dac8/00108319700-p/00108319700-p.jpg?ts=1755684142048&w=1024",
      "https://static.zara.net/assets/public/6f8b/d1fe/14694f1f9a1f/5fc210bcb179/00108319700-a2/00108319700-a2.jpg?ts=1755684142249&w=750"
    ],
    description: "Retro-inspired flared trousers for chic everyday styling.",
    faqs: [
      { q: "Do they stretch?", a: "Yes, slim-fit stretch fabric." },
      { q: "Best for tall heights?", a: "Yes, flares elongate legs." }
    ],
    reviews: [
      { user: "Ritika C.", rating: 5, comment: "Perfect fit, love the flare." }
    ]
  },
  {
    id: 27,
    name: "Zara Ribbed Crop Top",
    category: "T-Shirts & Tops",
    price: "₹1,299",
    images: [
      "https://static.zara.net/assets/public/dddb/7f16/08b240928245/4a921c5b8283/01044152676-p/01044152676-p.jpg?ts=1741802678972&w=1024",
      "https://static.zara.net/assets/public/d703/ca62/21494f1ea6c1/3eced66a7c64/01044152676-a1/01044152676-a1.jpg?ts=1741802678755&w=1125"
    ],
    description: "Trendy ribbed crop top in soft stretch fabric.",
    faqs: [
      { q: "Does it shrink?", a: "No, retains shape." },
      { q: "Good for layering?", a: "Yes, pairs with jackets." }
    ],
    reviews: [
      { user: "Tanya V.", rating: 5, comment: "Cute and comfy crop top!" }
    ]
  },
  {
    id: 28,
    name: "Zara Linen Blend Shirt",
    category: "T-Shirts & Tops",
    price: "₹2,599",
    discountPrice: "₹2,099",
    images: [
      "https://static.zara.net/assets/public/9a0f/28a0/1ee84dae93ba/3569221a5cc8/01063305420-p/01063305420-p.jpg?ts=1749725482266&w=1024",
      "https://static.zara.net/assets/public/345b/2cda/95f64a74a067/4eb3e4716f98/01063305420-a2/01063305420-a2.jpg?ts=1749725482125&w=750"
    ],
    description: "Lightweight breathable linen-blend shirt for warm weather.",
    faqs: [
      { q: "Does it wrinkle?", a: "Yes, typical of linen." },
      { q: "Summer-friendly?", a: "Yes, perfect for heat." }
    ],
    reviews: [
      { user: "Farhan Z.", rating: 4, comment: "Cool and airy, slightly wrinkly." }
    ]
  },
  {
    id: 29,
    name: "Zara Denim Mini Skirt",
    category: "Skirts & Dresses",
    price: "₹2,499",
    images: [
      "https://static.zara.net/assets/public/4177/50c2/b14442f18b5a/e9f3cb2212f0/04730092441-p/04730092441-p.jpg?ts=1752827835231&w=1024",
      "https://static.zara.net/assets/public/5fee/d9ab/3e454cb8803d/60f1039fc690/04730092441-a3/04730092441-a3.jpg?ts=1752827830602&w=750"
    ],
    description: "Classic denim mini skirt with frayed hem.",
    faqs: [
      { q: "Does it stretch?", a: "No, pure denim." },
      { q: "Is it high waist?", a: "Yes, flattering fit." }
    ],
    reviews: [
      { user: "Sana P.", rating: 5, comment: "Love this mini skirt!" }
    ]
  },
  {
    id: 30,
    name: "Zara Striped Cardigan",
    category: "Hoodies & Sweatshirts",
    price: "₹2,899",
    images: [
      "https://static.zara.net/assets/public/83e1/979d/00d84c18a665/6135c2c84207/08779620251-p/08779620251-p.jpg?ts=1751888838692&w=1024",
      "https://static.zara.net/assets/public/bb8e/2a59/a42a4909aa4c/7ce5f532d476/08779620251-a1/08779620251-a1.jpg?ts=1751888834762&w=1125",
      "https://static.zara.net/assets/public/37d4/2a14/fdfd41d891c0/4e662fdcce30/08779620251-a2/08779620251-a2.jpg?ts=1751888837491&w=750"
    ],
    description: "Soft knitted striped cardigan for layering.",
    faqs: [
      { q: "Does it have buttons?", a: "Yes, full button closure." },
      { q: "Can it be worn open?", a: "Yes, works both ways." }
    ],
    reviews: [
      { user: "Krishna M.", rating: 5, comment: "Cozy and stylish!" }
    ]
  }

  // ... Continue the rest of Zara 20+ products in the same format with updated categories
];




const Zara = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredProducts = selectedCategory
    ? zaraproducts.filter((p) => p.category === selectedCategory)
    : zaraproducts;

 

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
                  <Link to={`/zara/product/${product.id}`}>
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


export default Zara