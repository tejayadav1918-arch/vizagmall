import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Resto.css'
const categories = ['All', 'Sarees', 'Dresses', 'Western', 'Bottomwear', 'Formals', 'Kurtis','Ethnic Wear','Footwear','Bags' ];
export const womoffproducts = [
     {
    id: 1,
    name: "Red Silk Saree",
    price: "₹3,499",
    category: "Sarees",
    images: [
      "https://www.koskii.com/cdn/shop/files/SAUS0044742_MAROON_5.jpg?v=1750662648&width=540",
      "https://www.koskii.com/cdn/shop/files/SAUS0044742_MAROON_6.jpg?v=1750662648&width=540",
      "https://www.koskii.com/cdn/shop/files/SAUS0044742_MAROON_7.jpg?v=1750662648&width=120"
    ],
    description: "Elegant red silk saree with golden border, perfect for weddings and festive occasions.",
    faqs: [
      { q: "Is blouse piece included?", a: "Yes, a matching blouse piece is included." },
      { q: "What is the length?", a: "6.3 meters including blouse piece." },
      { q: "Wash care?", a: "Dry clean recommended." }
    ],
    reviews: [
      { user: "Priya", rating: 5, comment: "Got so many compliments!" },
      { user: "Megha", rating: 4, comment: "Fabric is soft, loved it." },
      { user: "Anjali", rating: 5, comment: "Perfect for weddings." }
    ]
  },
  {
    id: 2,
    name: "Designer Net Saree",
    price: "₹4,299",
    category: "Sarees",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-lavender-threadwork-net-designer-saree-saus0032720_lavender_1_1.jpg?v=1709823714&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-lavender-threadwork-net-designer-saree-saus0032720_lavender_1_7.jpg?v=1709823723&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-lavender-threadwork-net-designer-saree-saus0032720_lavender_1_3.jpg?v=1709823723&width=120"
    ],
    description: "Stunning designer net saree with heavy embroidery. Lightweight & stylish.",
    faqs: [
      { q: "Does it have lining?", a: "Yes, lining included." },
      { q: "Blouse fabric?", a: "Satin blouse included." },
      { q: "Summer friendly?", a: "Yes, lightweight." }
    ],
    reviews: [
      { user: "Rashmi", rating: 5, comment: "Looks gorgeous!" },
      { user: "Sneha", rating: 4, comment: "Embroidery is detailed." },
      { user: "Isha", rating: 5, comment: "Totally recommend." }
    ]
  },
  {
    id: 3,
    name: "Banarasi Silk Saree",
    price: "₹6,999",
    category: "Sarees",
    images: [
      "https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_6.jpg?v=1748424817&width=120",
      "https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_2.jpg?v=1748424817&width=120",
      "https://www.koskii.com/cdn/shop/products/koskii-maroon-zariwork-banarasi-designer-saree-saus0018941_maroon_5.jpg?v=1748424817&width=120"
    ],
    description: "Royal Banarasi silk saree with zari weaving, perfect for grand occasions.",
    faqs: [
      { q: "Origin?", a: "Handwoven in Banaras." },
      { q: "Fabric?", a: "Pure silk." },
      { q: "Occasion?", a: "Best for weddings & functions." }
    ],
    reviews: [
      { user: "Kiran", rating: 5, comment: "Looks regal!" },
      { user: "Deepa", rating: 5, comment: "Heavy but gorgeous." },
      { user: "Sita", rating: 4, comment: "Worth the price." }
    ]
  },
  {
    id: 4,
    name: "Georgette Party Saree",
    price: "₹2,499",
    category: "Sarees",
    images: [
      "https://www.koskii.com/cdn/shop/products/koskii-grey-sequins-shimmer-designer-saree-saus0021889_grey_5.jpg?v=1748424825&width=120",
      "https://www.koskii.com/cdn/shop/products/koskii-grey-sequins-shimmer-designer-saree-saus0021889_grey_3.jpg?v=1748424825&width=120",
      "https://www.koskii.com/cdn/shop/products/koskii-grey-sequins-shimmer-designer-saree-saus0021889_grey_6.jpg?v=1748424825&width=120"
    ],
    description: "Trendy lightweight georgette saree with sequin work.",
    faqs: [
      { q: "Is it see-through?", a: "Mildly transparent." },
      { q: "Blouse included?", a: "Yes." },
      { q: "Care?", a: "Dry clean only." }
    ],
    reviews: [
      { user: "Anu", rating: 4, comment: "Looks modern." },
      { user: "Latha", rating: 5, comment: "Loved the sequins!" },
      { user: "Monica", rating: 4, comment: "Good for parties." }
    ]
  },
  {
    id: 5,
    name: "Cotton Handloom Saree",
    price: "₹1,999",
    category: "Sarees",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-threadwork-cottonblend-designer-salwar-suit-ssus0039220_onion_pink_1_2.jpg?v=1725895934&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-threadwork-cottonblend-designer-salwar-suit-ssus0039220_onion_pink_1_3.jpg?v=1725895934&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-threadwork-cottonblend-designer-salwar-suit-ssus0039220_onion_pink_1_6.jpg?v=1725895934&width=120"
    ],
    description: "Comfortable cotton handloom saree for everyday elegance.",
    faqs: [
      { q: "Is it soft?", a: "Yes, very breathable." },
      { q: "Length?", a: "6.3 meters." },
      { q: "Occasion?", a: "Perfect for casual & office wear." }
    ],
    reviews: [
      { user: "Asha", rating: 5, comment: "Very comfortable." },
      { user: "Rekha", rating: 4, comment: "Simple & elegant." },
      { user: "Nandita", rating: 5, comment: "Loved the quality." }
    ]
  },

  // ---------------- Kurtis ----------------
  {
    id: 6,
    name: "Floral Cotton Kurti",
    price: "₹1,199",
    category: "Kurtis",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-royalblue-printed-chanderi-designer-salwar-suit-ssus0038714_royal_blue_1_1.jpg?v=1724926400&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-royalblue-printed-chanderi-designer-salwar-suit-ssus0038714_royal_blue_1_2.jpg?v=1724926400&width=120",
      "https://www.koskii.com/cdn/shop/files/koskii-royalblue-printed-chanderi-designer-salwar-suit-ssus0038714_royal_blue_1_4.jpg?v=1724926400&width=120"
    ],
    description: "Casual floral cotton kurti, breathable & stylish.",
    faqs: [
      { q: "Fabric?", a: "100% cotton." },
      { q: "Office wear?", a: "Yes, elegant style." },
      { q: "Shrink?", a: "Pre-washed, no shrinkage." }
    ],
    reviews: [
      { user: "Kavya", rating: 5, comment: "So comfortable!" },
      { user: "Nisha", rating: 4, comment: "Good fit." },
      { user: "Shruti", rating: 5, comment: "Perfect daily wear." }
    ]
  },
  {
    id: 7,
    name: "Straight Fit Kurti",
    price: "₹999",
    category: "Kurtis",
    images: [
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015308488-Purple-PURPLE-1000015308488_01-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015308488-Purple-PURPLE-1000015308488_02-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015308488-Purple-PURPLE-1000015308488_03-2100.jpg"
    ],
    description: "Minimal straight fit kurti with classy design.",
    faqs: [
      { q: "Transparent?", a: "No, fully opaque." },
      { q: "Leggings included?", a: "No." },
      { q: "Wash?", a: "Machine washable." }
    ],
    reviews: [
      { user: "Manju", rating: 5, comment: "Elegant & simple." },
      { user: "Preethi", rating: 4, comment: "Good cotton fabric." },
      { user: "Aparna", rating: 5, comment: "Worth it!" }
    ]
  },
  {
    id: 8,
    name: "Anarkali Kurti",
    price: "₹1,799",
    category: "Kurtis",
    images: [
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014190159-Pink-PINK-1000014190159_08-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014190159-Pink-PINK-1000014190159_01-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014190159-Pink-PINK-1000014190159_03-2100.jpg"
    ],
    description: "Beautiful Anarkali style kurti with flair.",
    faqs: [
      { q: "Occasion?", a: "Festive & party wear." },
      { q: "Fabric?", a: "Rayon." },
      { q: "Lining?", a: "Yes." }
    ],
    reviews: [
      { user: "Jyoti", rating: 5, comment: "Looks grand!" },
      { user: "Rupa", rating: 4, comment: "Perfect fit." },
      { user: "Geeta", rating: 5, comment: "My favorite kurti." }
    ]
  },
  {
    id: 9,
    name: "Floral Maxi Dress",
    price: "₹1,599",
    category: "Dresses",
    images: [
      "https://image.hm.com/assets/hm/87/7a/877adea1310e4b8500df42eb1652492d25f27f46.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/c6/18/c618e417220aabc87c52b4b42a39360decb7d853.jpg?imwidth=2160",
      
    ],
    description: "Lightweight floral maxi dress, perfect for summer outings.",
    faqs: [
      { q: "Fabric?", a: "Crepe blend." },
      { q: "Length?", a: "Full length." },
      { q: "Wash?", a: "Machine washable." }
    ],
    reviews: [
      { user: "Simran", rating: 5, comment: "Perfect beach wear!" },
      { user: "Ritika", rating: 4, comment: "Comfortable and flowy." },
      { user: "Tina", rating: 5, comment: "Loved the colors." }
    ]
  },
  {
    id: 10,
    name: "Bodycon Dress",
    price: "₹1,299",
    category: "Dresses",
    images: [
      "https://static.zara.net/assets/public/9776/d803/24d24802ab01/253d8f412028/05584136250-p/05584136250-p.jpg?ts=1751905063024&w=1024",
      "https://static.zara.net/assets/public/8fad/0636/24714b1d9318/56d05ef30261/05584136250-a1/05584136250-a1.jpg?ts=1751905057150&w=1125",
      "https://static.zara.net/assets/public/4f4e/dc4a/ba8f4c5dbb5e/0308a03a70a1/05584136250-a3/05584136250-a3.jpg?ts=1751905057433&w=750"
    ],
    description: "Trendy bodycon dress for party nights.",
    faqs: [
      { q: "Stretchable?", a: "Yes." },
      { q: "Neckline?", a: "Round neck." },
      { q: "Occasion?", a: "Best for parties." }
    ],
    reviews: [
      { user: "Alia", rating: 5, comment: "Looks super hot!" },
      { user: "Shreya", rating: 4, comment: "Great for clubs." },
      { user: "Varsha", rating: 5, comment: "Perfect fit." }
    ]
  },
  {
    id: 11,
    name: "A-Line Dress",
    price: "₹1,799",
    category: "Dresses",
    images: [
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013734859-Blue-BLUE-1000013734859_01-2100.jpg",
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013734859-Blue-BLUE-1000013734859_02-2100.jpg",
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000013734859-Blue-BLUE-1000013734859_04-2100.jpg"
    ],
    description: "Elegant A-line dress for formal and casual wear.",
    faqs: [
      { q: "Sleeves?", a: "Half sleeves." },
      { q: "Length?", a: "Knee length." },
      { q: "Occasion?", a: "Semi-formal events." }
    ],
    reviews: [
      { user: "Radhika", rating: 5, comment: "So chic!" },
      { user: "Poonam", rating: 4, comment: "Great for office parties." },
      { user: "Swati", rating: 5, comment: "Loved it!" }
    ]
  },
  {
    id: 12,
    name: "Wrap Dress",
    price: "₹1,499",
    category: "Dresses",
    images: [
      "https://image.hm.com/assets/hm/1a/9a/1a9a3e800001736a25ee064484a459aa522bed43.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/8b/5d/8b5ddb0361a48854d8e5530dbb4a682eed70968a.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/e5/8e/e58e326503567fca8e523cdb2c6f7210bcda6f96.jpg?imwidth=1260"
    ],
    description: "Trendy wrap dress with belt tie-up.",
    faqs: [
      { q: "Fabric?", a: "Polyester blend." },
      { q: "Fit?", a: "Relaxed fit." },
      { q: "Occasion?", a: "Casual & semi-formal." }
    ],
    reviews: [
      { user: "Sonam", rating: 4, comment: "Nice fabric." },
      { user: "Meera", rating: 5, comment: "Loved the design." },
      { user: "Jhanvi", rating: 5, comment: "Very stylish." }
    ]
  },
  {
    id: 13,
    name: "Evening Gown",
    price: "₹3,499",
    category: "Dresses",
    images: [
      "https://image.hm.com/assets/hm/87/7a/877adea1310e4b8500df42eb1652492d25f27f46.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/c6/18/c618e417220aabc87c52b4b42a39360decb7d853.jpg?imwidth=2160",
      
    ],
    description: "Graceful evening gown with flowing hemline.",
    faqs: [
      { q: "Lining?", a: "Yes." },
      { q: "Occasion?", a: "Evening & cocktail parties." },
      { q: "Neckline?", a: "V-neck." }
    ],
    reviews: [
      { user: "Ankita", rating: 5, comment: "So elegant!" },
      { user: "Niharika", rating: 5, comment: "Worth the price." },
      { user: "Seema", rating: 4, comment: "Fabric is nice." }
    ]
  },
  {
    id: 14,
    name: "Denim Jacket",
    price: "₹1,899",
    category: "Western",
    images: [
      "https://static.zara.net/assets/public/2703/b430/96ac495fa42e/b85f7e815c6e/04365271400-p/04365271400-p.jpg?ts=1755790728565&w=1024",
      "https://static.zara.net/assets/public/b59f/37e4/45e8481bb8d7/08b5c6e6913b/04365271400-a1/04365271400-a1.jpg?ts=1755790726197&w=1125",
      "https://static.zara.net/assets/public/360c/51da/f1c043699636/36b3f8ac575c/04365271400-e1/04365271400-e1.jpg?ts=1755788171521&w=1420"
    ],
    description: "Trendy denim jacket for casual outings.",
    faqs: [
      { q: "Wash?", a: "Machine washable." },
      { q: "Season?", a: "Best for winter & spring." },
      { q: "Fit?", a: "Relaxed fit." }
    ],
    reviews: [
      { user: "Renu", rating: 5, comment: "Cool and stylish." },
      { user: "Sanya", rating: 4, comment: "Bit heavy but good." },
      { user: "Tara", rating: 5, comment: "Loved the color." }
    ]
  },
  {
    id: 15,
    name: "Skinny Jeans",
    price: "₹1,299",
    category: "Western",
    images: [
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014560074-Blue-LIGHTBLUE-1000014560074_01-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014560074-Blue-LIGHTBLUE-1000014560074_02-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014560074-Blue-LIGHTBLUE-1000014560074_03-2100.jpg"
    ],
    description: "Comfortable stretchable skinny jeans.",
    faqs: [
      { q: "Stretchable?", a: "Yes." },
      { q: "Rise?", a: "Mid-rise." },
      { q: "Length?", a: "Full length." }
    ],
    reviews: [
      { user: "Maya", rating: 5, comment: "Perfect fit!" },
      { user: "Lavanya", rating: 4, comment: "Comfortable to wear." },
      { user: "Disha", rating: 5, comment: "Must have jeans." }
    ]
  },
  {
    id: 16,
    name: "Crop Top",
    price: "₹799",
    category: "Western",
    images: [
      "https://image.hm.com/assets/hm/d0/7e/d07eab6137caaa785cda42fb09bab1715f2d7053.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/94/5f/945f4d2c81abf48ea1e28438cbf29f03d3c147aa.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ee/27/ee270a86dee58f9f2f96224bec7364aa555972ad.jpg?imwidth=1260"
    ],
    description: "Trendy crop top for casual wear.",
    faqs: [
      { q: "Fabric?", a: "Cotton blend." },
      { q: "Fit?", a: "Slim fit." },
      { q: "Occasion?", a: "Casual outings." }
    ],
    reviews: [
      { user: "Neha", rating: 5, comment: "Stylish!" },
      { user: "Ritika", rating: 4, comment: "Good for summer." },
      { user: "Sara", rating: 5, comment: "Trendy look." }
    ]
  },
  {
    id: 17,
    name: "Leather Jacket",
    price: "₹3,499",
    category: "Western",
    images: [
      "https://image.hm.com/assets/hm/48/fc/48fc4d848dd309b2a7c057e78dd7aa33da6fc46f.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/7f/2f/7f2f6e63f2d21b0366d91f8ddce953848b280ae7.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/b6/ee/b6eea9caee977b2207bdafc446dab931cc738ea4.jpg?imwidth=1260"
    ],
    description: "Classic leather biker jacket.",
    faqs: [
      { q: "Material?", a: "Faux leather." },
      { q: "Season?", a: "Winter wear." },
      { q: "Occasion?", a: "Casual & parties." }
    ],
    reviews: [
      { user: "Kajal", rating: 5, comment: "So cool!" },
      { user: "Ira", rating: 5, comment: "Loved it for my trip." },
      { user: "Sona", rating: 4, comment: "Bit tight but stylish." }
    ]
  },
  {
    id: 18,
    name: "Casual T-Shirt",
    price: "₹599",
    category: "Western",
    images: [
      "https://image.hm.com/assets/hm/1c/67/1c67783a0afe9001465772fa869872563e68033c.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/73/46/73468053f62bc86d2ebd54e92415fa9f0a2b0c95.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/7d/34/7d34c93c6845de66c5efc337ec7d49da63b5b3f3.jpg?imwidth=1260"
    ],
    description: "Basic round-neck cotton t-shirt.",
    faqs: [
      { q: "Fabric?", a: "100% cotton." },
      { q: "Fit?", a: "Regular fit." },
      { q: "Wash?", a: "Machine washable." }
    ],
    reviews: [
      { user: "Divya", rating: 5, comment: "Everyday essential." },
      { user: "Alisha", rating: 5, comment: "Very comfy." },
      { user: "Tanvi", rating: 4, comment: "Nice quality." }
    ]
  },
  {
    id: 19,
    name: "Printed Maxi Dress",
    price: "₹2,399",
    category: "Dresses",
    images: [
      "https://static.zara.net/assets/public/9db6/cb90/23d74d8bb163/09bbfe2d2568/05107250800-p/05107250800-p.jpg?ts=1753290291324&w=1024",
      "https://static.zara.net/assets/public/adbb/afee/a50c4f12ab43/4e134033fa01/05107250800-e1/05107250800-e1.jpg?ts=1753695585263&w=750",
      "https://static.zara.net/assets/public/3476/63df/410a42f7b26f/d13ced154611/05107250800-a2/05107250800-a2.jpg?ts=1753290297042&w=1420"
    ],
    description: "A flowy printed maxi dress that blends comfort with chic styling. Perfect for brunch or vacation wear.",
    faqs: [
      "Is the fabric see-through?",
      "Does it come with a lining?",
      "Is it machine washable?"
    ],
    reviews: [
      { user: "Ananya", rating: 4, comment: "Very breezy and comfortable for summer." },
      { user: "Sneha", rating: 5, comment: "Loved the prints, got many compliments!" },
      { user: "Pooja", rating: 4, comment: "Good quality but needs a belt for better fitting." }
    ]
  },
  {
    id: 20,
    name: "Women’s Leather Sling Bag",
    price: "₹1,899",
    category: "Bags",
    images: [
      "https://static.zara.net/assets/public/14ae/3301/47134994a767/0acd5f64a28c/16010610718-p/16010610718-p.jpg?ts=1751901268612&w=1024",
      "https://static.zara.net/assets/public/59a9/8dc5/1e354fd89ee5/92678d5419fa/16010610718-a2/16010610718-a2.jpg?ts=1751901269781&w=750",
      "https://static.zara.net/assets/public/e061/f943/eb0e4b25823a/e8fb28eb6bcf/16010610718-e1/16010610718-e1.jpg?ts=1754321635233&w=750"
    ],
    description: "Compact leather sling bag designed for daily use. Lightweight yet spacious enough for essentials.",
    faqs: [
      "Does it have multiple compartments?",
      "Is the strap adjustable?",
      "Can it fit a tablet?"
    ],
    reviews: [
      { user: "Ishita", rating: 5, comment: "Very stylish and goes with all outfits." },
      { user: "Anjali", rating: 4, comment: "Good quality leather but strap could be sturdier." },
      { user: "Ritika", rating: 5, comment: "Perfect size for everyday use!" }
    ]
  },
  {
    id: 21,
    name: "Cotton Palazzo Pants",
    price: "₹1,299",
    category: "Bottomwear",
    images: [
      "https://static.zara.net/assets/public/c28c/4166/69d646af8a31/3fb9afb43b8b/08417803401-001-p/08417803401-001-p.jpg?ts=1756112745201&w=1024",
      "https://static.zara.net/assets/public/8e14/7c3f/f10348c0bdd7/aa66819b3c10/08417803401-e3/08417803401-e3.jpg?ts=1755790882318&w=750",
      "hhttps://static.zara.net/assets/public/567f/7120/614040a19c80/484497e5bf8d/08417803401-e2/08417803401-e2.jpg?ts=1755790883554&w=750"
    ],
    description: "Loose fit cotton palazzo pants with elastic waistband for all-day comfort.",
    faqs: [
      "Does it shrink after wash?",
      "Are there pockets?",
      "Is it stretchable?"
    ],
    reviews: [
      { user: "Divya", rating: 5, comment: "Super comfy and stylish." },
      { user: "Maya", rating: 4, comment: "Nice fabric but slightly long for me." },
      { user: "Niharika", rating: 5, comment: "Exactly as shown, love the fit." }
    ]
  },
  {
    id: 22,
    name: "Women’s Anarkali Kurta",
    price: "₹2,199",
    category: "Ethnic Wear",
    images: [
      "https://janasya.com/cdn/shop/files/JAA24ST00105_3__1080x1440_90491812-a313-4dd2-8e13-c711ce56e9cb.jpg?v=1755860659&width=800",
      "https://janasya.com/cdn/shop/files/JAA24ST00105_1.jpg?v=1755860659&width=800",
      "https://janasya.com/cdn/shop/files/JAA24ST00105_3.jpg?v=1755860660&width=800"
    ],
    description: "Graceful Anarkali kurta with intricate detailing, perfect for festive wear.",
    faqs: [
      "Does it come with leggings?",
      "What type of fabric is used?",
      "Can it be machine washed?"
    ],
    reviews: [
      { user: "Meera", rating: 5, comment: "So elegant and beautiful!" },
      { user: "Aditi", rating: 4, comment: "Good design but fabric is a little delicate." },
      { user: "Sanya", rating: 5, comment: "Loved it for family functions." }
    ]
  },
  {
    id: 23,
    name: "Women’s Formal Blazer",
    price: "₹3,499",
    category: "Formals",
    images: [
      "https://static.zara.net/assets/public/97a1/c009/29d64b1cacbf/01934146c2c9/T1333061000-p/T1333061000-p.jpg?ts=1746703831985&w=1024",
      "https://static.zara.net/assets/public/ce2e/e98c/9dc7475699de/42341227c731/03365004800-e2/03365004800-e2.jpg?ts=1746443788172&w=750",
      "https://static.zara.net/assets/public/edd1/1125/3f5d4cb7ae07/ef1d84953785/03365004800-e3/03365004800-e3.jpg?ts=1746443791575&w=1420"
    ],
    description: "Structured women’s formal blazer that elevates your professional look instantly.",
    faqs: [
      "Is it padded at the shoulders?",
      "Does it come with matching pants?",
      "What is the fabric type?"
    ],
    reviews: [
      { user: "Simran", rating: 5, comment: "Fits perfectly and looks very professional." },
      { user: "Kavya", rating: 4, comment: "Good quality but sleeves are a little long." },
      { user: "Rhea", rating: 5, comment: "Excellent fabric and finish." }
    ]
  },
  {
    id: 24,
    name: "Women’s Denim Shorts",
    price: "₹1,099",
    category: "Bottomwear",
    images: [
      "https://static.zara.net/assets/public/4aa7/c744/2987476c964c/0925ed21aca7/03607002401-p/03607002401-p.jpg?ts=1753376586070&w=1420",
      "https://static.zara.net/assets/public/eaac/7bc8/4aae4c998ddc/2c3ca3c96356/03607002401-a1/03607002401-a1.jpg?ts=1753376586283&w=1420",
      "https://static.zara.net/assets/public/15bb/c290/c9824e5b8e9c/952bf441c67b/02569003401-e1/02569003401-e1.jpg?ts=1743692855424&w=1420"
    ],
    description: "Trendy high-waist denim shorts with raw hem finish. Perfect for summer outings.",
    faqs: [
      "Is it stretchable denim?",
      "Does it fade on washing?",
      "Are pockets functional?"
    ],
    reviews: [
      { user: "Tina", rating: 4, comment: "Cute and comfy, but runs a little small." },
      { user: "Alia", rating: 5, comment: "Perfect summer shorts!" },
      { user: "Priya", rating: 5, comment: "Love the fit and style." }
    ]
  },
  {
    id: 25,
    name: "Women’s Sports Bra",
    price: "₹899",
    category: "Sportswear",
    images: [
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014666501-Black-BLACK-1000014666501_01-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014666501-Black-BLACK-1000014666501_03-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014666501-Black-BLACK-1000014666501_05-2100.jpg"
    ],
    description: "Supportive and comfortable sports bra suitable for yoga, gym, and running.",
    faqs: [
      "Is it padded?",
      "Is it sweat-wicking?",
      "Does it come in different colors?"
    ],
    reviews: [
      { user: "Anu", rating: 5, comment: "Super comfortable and gives good support." },
      { user: "Kriti", rating: 4, comment: "Nice product but straps could be wider." },
      { user: "Rashmi", rating: 5, comment: "Exactly what I needed for workouts." }
    ]
  },
  {
    id: 26,
    name: "Women’s High Heels",
    price: "₹1,799",
    category: "Footwear",
    images: [
      "https://static.zara.net/assets/public/cc21/df22/0d324ff7a76f/f69da2892480/13309519800-e1/13309519800-e1.jpg?ts=1753277920678&w=1024",
      "https://static.zara.net/assets/public/c214/5b3d/21254afab75f/36a22e495e3d/13309519800-e2/13309519800-e2.jpg?ts=1753277920798&w=1125",
      "https://static.zara.net/assets/public/647f/cfc0/4a3c41769bc3/b963880cedba/13309519800-e4/13309519800-e4.jpg?ts=1753277920917&w=750"
    ],
    description: "Elegant women’s high heels with pointed toe design, perfect for parties.",
    faqs: [
      "Is the heel comfortable for long hours?",
      "What is the heel height?",
      "Does it slip on smooth surfaces?"
    ],
    reviews: [
      { user: "Suhani", rating: 5, comment: "Looks amazing and fits perfectly!" },
      { user: "Tanvi", rating: 4, comment: "Heel is a bit high but manageable." },
      { user: "Rupal", rating: 5, comment: "Love the style, goes with many dresses." }
    ]
  },
  {
    id: 27,
    name: "Women’s Winter Jacket",
    price: "₹3,999",
    category: "Western",
    images: [
      "https://static.zara.net/assets/public/2e64/e8fe/6c9149158fab/1f371345e02a/04344655533-e1/04344655533-e1.jpg?ts=1753195728391&w=750",
      "https://static.zara.net/assets/public/484c/d32c/d9584e52bed7/f63d1a0f829e/04344655533-p/04344655533-p.jpg?ts=1755188001088&w=1024",
      "https://static.zara.net/assets/public/9889/86a9/d2b84881b53e/458319e79c19/04344655533-e3/04344655533-e3.jpg?ts=1753195729373&w=750"
    ],
    description: "Warm and stylish winter jacket with padded layers and fur hood.",
    faqs: [
      "Is it water-resistant?",
      "How warm is it for cold regions?",
      "Does it come with pockets?"
    ],
    reviews: [
      { user: "Sakshi", rating: 5, comment: "Very warm and cozy, worth the price." },
      { user: "Aarohi", rating: 4, comment: "Good jacket but a little heavy." },
      { user: "Manvi", rating: 5, comment: "Perfect for winter trips." }
    ]
  },
  {
    id: 28,
    name: "Women’s Jumpsuit",
    price: "₹2,499",
    category: "Western",
    images: [
      "https://static.zara.net/assets/public/e024/bc54/280848d6811c/76b0e7b9e23c/01165262405-p/01165262405-p.jpg?ts=1753269195669&w=1024",
      "https://static.zara.net/assets/public/b1db/e02d/714e41ccb6ce/0241224ef8ee/01165262405-e1/01165262405-e1.jpg?ts=1753108177911&w=750",
      "https://static.zara.net/assets/public/fbb7/c80a/acb442b0a41a/6fe59105ea4c/01165262405-a2/01165262405-a2.jpg?ts=1753269195274&w=750"
    ],
    description: "Trendy women’s jumpsuit with belted waist. Ideal for parties and outings.",
    faqs: [
      "Does it come with a zipper?",
      "Is the fabric stretchable?",
      "Can it be worn casually?"
    ],
    reviews: [
      { user: "Naina", rating: 5, comment: "Very stylish and comfy." },
      { user: "Reema", rating: 4, comment: "Looks good but length is a bit long." },
      { user: "Shalini", rating: 5, comment: "Got many compliments!" }
    ]
  },
  {
    id: 29,
    name: "Women’s Kurti Set",
    price: "₹2,199",
    category: "Ethnic Wear",
    images: [
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014779404-Red-RED-1000014779404_01-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014779404-Red-RED-1000014779404_02-2100.jpg",
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014779404-Red-RED-1000014779404_04-2100.jpg"
    ],
    description: "Elegant Kurti set with dupatta, designed for festive and casual wear.",
    faqs: [
      "Does it come with matching leggings?",
      "Is the fabric cotton or silk?",
      "What sizes are available?"
    ],
    reviews: [
      { user: "Ritika", rating: 5, comment: "Perfect festive wear!" },
      { user: "Pallavi", rating: 4, comment: "Good product but slightly overpriced." },
      { user: "Sonam", rating: 5, comment: "Beautiful design and comfortable." }
    ]
  },
  {
    id: 30,
    name: "Women’s Crop Top",
    price: "₹999",
    category: "Western",
    images: [
      "https://static.zara.net/assets/public/8ab2/1e2c/9ea54100b70e/b4fea9d5b871/02335353717-p/02335353717-p.jpg?ts=1750241957258&w=1024",
      "https://static.zara.net/assets/public/a485/b9f0/a0c849e8be84/aa8ada9b9653/02335353717-a1/02335353717-a1.jpg?ts=1750241958475&w=1125",
      "https://static.zara.net/assets/public/9f51/7e32/4f6b45328638/ded8a16ab067/02335353717-a4/02335353717-a4.jpg?ts=1750241958786&w=750"
    ],
    description: "Trendy crop top with half sleeves, perfect for pairing with jeans or skirts.",
    faqs: [
      "Is the fabric stretchable?",
      "Does it shrink after wash?",
      "Is it see-through?"
    ],
    reviews: [
      { user: "Anjali", rating: 5, comment: "Super stylish, love the fit." },
      { user: "Isha", rating: 4, comment: "Nice but could have been longer." },
      { user: "Shreya", rating: 5, comment: "Perfect for casual outings." }
    ]
  }
];
  
const Offerwomen = () => {
    const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? womoffproducts
      : womoffproducts.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-5">
       
      <h1 className="mb-3">OFFERS ON WOMEN WEAR.......</h1>
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
                  onClick={() => navigate(`/womens/product/${product.id}`)}
                >
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
  )
}

export default Offerwomen