import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Resto.css';

const categories = [
    "All","Men","Women","Kids"
]
export const Shoeproducts = [
  // ---------------- Women Footwear ----------------
   {
    id: 1,
    name: "Classic Black Pumps",
    price: "₹1,499",
    category: "Women",
    gender: "Women",
    images: [
      "https://admin.mochishoes.com/product/31-4833/660/31-4833M11.jpg",
      "https://admin.mochishoes.com/product/31-4833/660/31-4833O11.jpg",
      "https://admin.mochishoes.com/product/31-4833/660/31-4833S11.jpg"
    ],
    description: "Elegant black pumps perfect for office and formal occasions.",
    faqs: [
      { q: "Heel height?", a: "3 inches" },
      { q: "Material?", a: "Synthetic leather" },
      { q: "Sizes available?", a: "35-41" }
    ],
    reviews: [
      { user: "Ananya", rating: 5, comment: "Super comfortable!" },
      { user: "Priya", rating: 4, comment: "Looks classy." },
      { user: "Sneha", rating: 5, comment: "Perfect for office wear." }
    ]
  },
  {
    id: 2,
    name: "White Sneakers",
    price: "₹1,299",
    category: "Women",
    gender: "Women",
    images: [
      "https://th.bing.com/th/id/OPAC.JMxYc9MgRNhLaA474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/387544/02/fnd/IND/fmt/png/Slipstream-Leather-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/387544/02/sv02/fnd/IND/fmt/png/Slipstream-Leather-Sneakers"
    ],
    description: "Comfortable white sneakers for casual and everyday wear.",
    faqs: [
      { q: "Material?", a: "Canvas and rubber" },
      { q: "Sizes available?", a: "35-42" },
      { q: "Suitable for jogging?", a: "Light jogging fine" }
    ],
    reviews: [
      { user: "Tina", rating: 5, comment: "Super comfy!" },
      { user: "Radhika", rating: 5, comment: "Love the look." },
      { user: "Sakshi", rating: 4, comment: "Good for casual wear." }
    ]
  },
  {
    id: 3,
    name: "Brown Ankle Boots",
    price: "₹2,199",
    category: "Women",
    gender: "Women",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250312/qOKt/67d1623859f835398031c4e1/-473Wx593H-701133073-brown-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250312/c6km/67d1623859f835398031c476/-473Wx593H-701133073-brown-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250312/CntP/67d1623e59f835398031c52a/-473Wx593H-701133073-brown-MODEL5.jpg"
    ],
    description: "Stylish brown ankle boots perfect for winters and casual wear.",
    faqs: [
      { q: "Material?", a: "PU leather" },
      { q: "Waterproof?", a: "Yes, light rain resistant" },
      { q: "Heel height?", a: "2.5 inches" }
    ],
    reviews: [
      { user: "Megha", rating: 5, comment: "Looks trendy and warm." },
      { user: "Anu", rating: 4, comment: "Comfortable for short walks." },
      { user: "Kiran", rating: 5, comment: "Very stylish boots." }
    ]
  },
  {
    id: 4,
    name: "Beige Flats",
    price: "₹899",
    category: "Women",
    gender: "Women",
    images: [
      "https://www.tresmode.com/cdn/shop/files/Rauma_Beige_1000x1000_6326be01-e503-4e55-ac21-d64840117760_800x.jpg?v=1755686727",
      "https://www.tresmode.com/cdn/shop/files/249-RAUMA-BEIGE-_2_800x.jpg?v=1755686727",
      "https://www.tresmode.com/cdn/shop/files/249-RAUMA-BEIGE-_1_800x.jpg?v=1755686727"
    ],
    description: "Comfortable beige flats for everyday office and casual wear.",
    faqs: [
      { q: "Material?", a: "PU leather" },
      { q: "Sizes available?", a: "35-42" },
      { q: "Heel height?", a: "Flat" }
    ],
    reviews: [
      { user: "Divya", rating: 5, comment: "Very comfy!" },
      { user: "Tanvi", rating: 4, comment: "Good for daily wear." },
      { user: "Ritika", rating: 5, comment: "Perfect office wear." }
    ]
  },
  {
    id: 5,
    name: "Silver Party Sandals",
    price: "₹1,799",
    category: "Women",
    gender: "Women",
    images: [
      "https://silvertoes.in/cdn/shop/files/MAP04755_800x.jpg?v=1747727966",
      "https://silvertoes.in/cdn/shop/files/MAP04754_800x.jpg?v=1747727966",
      "https://silvertoes.in/cdn/shop/files/MAP04753_800x.jpg?v=1747727966"
    ],
    description: "Shiny silver sandals perfect for weddings and evening parties.",
    faqs: [
      { q: "Heel height?", a: "3 inches" },
      { q: "Material?", a: "Synthetic leather" },
      { q: "Sizes available?", a: "36-40" }
    ],
    reviews: [
      { user: "Alia", rating: 5, comment: "Looks gorgeous!" },
      { user: "Sana", rating: 4, comment: "Comfortable for few hours." },
      { user: "Rhea", rating: 5, comment: "Perfect for parties." }
    ]
  },
  {
    id: 6,
    name: "Women’s Slippers",
    price: "₹499",
    category: "Women",
    gender: "Women",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/aHnD/67267fd5260f9c41e8af645a/-1117Wx1400H-700661138-beige-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/ZLQZ/67267fd5260f9c41e8af645c/-78Wx98H-700661138-beige-MODEL2.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/2P0Z/67267fd5260f9c41e8af6470/-473Wx593H-700661138-beige-MODEL3.jpg"
    ],
    description: "Comfortable slippers for home and casual wear.",
    faqs: [
      { q: "Material?", a: "Rubber" },
      { q: "Sizes available?", a: "36-41" },
      { q: "Indoor/Outdoor?", a: "Both" }
    ],
    reviews: [
      { user: "Anjali", rating: 5, comment: "Very comfortable!" },
      { user: "Isha", rating: 4, comment: "Good for home use." },
      { user: "Shreya", rating: 5, comment: "Perfect fit." }
    ]
  },

  // ---------------- Men Footwear ----------------
  {
    id: 7,
    name: "Men’s Formal Black Shoes",
    price: "₹1,999",
    category: "Men",
    gender: "Men",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230602/z4Vu/647994f342f9e729d718cdd5/-1117Wx1400H-462685264-black-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230602/dXIL/647994f342f9e729d718cdf3/-473Wx593H-462685264-black-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230602/5e9H/647994f342f9e729d718cded/-473Wx593H-462685264-black-MODEL6.jpghttps://source.unsplash.com/400x500/?office-shoes"
    ],
    description: "Classic black formal shoes suitable for office and events.",
    faqs: [
      { q: "Material?", a: "Leather" },
      { q: "Sizes available?", a: "40-45" },
      { q: "Heel height?", a: "1 inch" }
    ],
    reviews: [
      { user: "Rohit", rating: 5, comment: "Very classy!" },
      { user: "Anil", rating: 4, comment: "Good quality leather." },
      { user: "Karan", rating: 5, comment: "Perfect for office." }
    ]
  },
  {
    id: 8,
    name: "Men’s Brown Loafers",
    price: "₹1,799",
    category: "Men",
    gender: "Men",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230717/ZXhP/64b57042a9b42d15c95b9b20/-473Wx593H-463982163-brown-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230717/yUAi/64b56d66eebac147fc7422ca/-473Wx593H-463982163-brown-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230717/5BC1/64b55978eebac147fc734392/-473Wx593H-463982163-brown-MODEL6.jpg"
    ],
    description: "Comfortable brown loafers for casual and semi-formal occasions.",
    faqs: [
      { q: "Material?", a: "Synthetic leather" },
      { q: "Sizes available?", a: "40-44" },
      { q: "Slip-on?", a: "Yes" }
    ],
    reviews: [
      { user: "Vikram", rating: 5, comment: "Very comfortable." },
      { user: "Sahil", rating: 4, comment: "Looks great." },
      { user: "Rakesh", rating: 5, comment: "Good fit." }
    ]
  },
  {
    id: 9,
    name: "Men’s White Sneakers",
    price: "₹1,299",
    category: "Men",
    gender: "Men",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250304/bk2x/67c6c9532960820c49cb510f/-1117Wx1400H-465654605-white-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240514/Ogiu/6643454616fd2c6e6a04127f/-473Wx593H-465654605-white-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240514/fEbV/6643454c16fd2c6e6a041324/-473Wx593H-465654605-white-MODEL6.jpg"
    ],
    description: "Stylish white sneakers for everyday casual wear.",
    faqs: [
      { q: "Material?", a: "Canvas" },
      { q: "Sizes available?", a: "40-45" },
      { q: "Suitable for sports?", a: "Light sports ok" }
    ],
    reviews: [
      { user: "Aditya", rating: 5, comment: "Very comfortable." },
      { user: "Rohit", rating: 4, comment: "Stylish for casual wear." },
      { user: "Vivek", rating: 5, comment: "Love the design." }
    ]
  },
  {
    id: 10,
    name: "Men’s Sports Running Shoes",
    price: "₹2,199",
    category: "Men",
    gender: "Men",
    images: [
      "hhttps://assets-jiocdn.ajio.com/medias/sys_master/root/20241014/F51D/670ceabff9b8ef490bb76e4d/-473Wx593H-466829259-blue-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241014/wvDU/670ceabaf9b8ef490bb76d32/-473Wx593H-466829259-blue-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241014/XB9w/670ceaf1260f9c41e87602d6/-473Wx593H-466829259-blue-MODEL8.jpg"
    ],
    description: "Lightweight running shoes ideal for gym and outdoor activities.",
    faqs: [
      { q: "Material?", a: "Mesh & rubber" },
      { q: "Sizes available?", a: "40-46" },
      { q: "Breathable?", a: "Yes" }
    ],
    reviews: [
      { user: "Sahil", rating: 5, comment: "Great for running." },
      { user: "Rohan", rating: 4, comment: "Very comfortable." },
      { user: "Kunal", rating: 5, comment: "Good grip and fit." }
    ]
  },
  {
    id: 11,
    name: "Men’s Black Boots",
    price: "₹2,499",
    category: "Men",
    gender: "Men",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250318/Y6nn/67d94b972960820c49f76655/-473Wx593H-701352775-black-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250318/eZnn/67d94b972960820c49f765f6/-473Wx593H-701352775-black-MODEL3.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250318/KzQi/67d94ba22960820c49f766d8/-473Wx593H-701352775-black-MODEL4.jpg"
    ],
    description: "Durable black boots for casual and winter wear.",
    faqs: [
      { q: "Material?", a: "Synthetic leather" },
      { q: "Sizes available?", a: "40-45" },
      { q: "Waterproof?", a: "Yes, light rain resistant" }
    ],
    reviews: [
      { user: "Ramesh", rating: 5, comment: "Looks rugged and stylish." },
      { user: "Vikram", rating: 4, comment: "Very comfortable." },
      { user: "Sanjay", rating: 5, comment: "Perfect winter boots." }
    ]
  },
  {
    id: 12,
    name: "Men’s Slippers",
    price: "₹399",
    category: "Men",
    gender: "Men",
    images: [
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20221215/ZLN5/639b64e0aeb269659ced6a5b/-473Wx593H-469250207-black-MODEL.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20221215/V4Ke/639b3008aeb269659cec5983/-473Wx593H-469250207-black-MODEL2.jpg",
      "https://assets-jiocdn.ajio.com/medias/sys_master/root/20221215/TWYh/639b5b7daeb269659ced38f5/-473Wx593H-469250207-black-MODEL4.jpg"
    ],
    description: "Comfortable slippers for home and casual wear.",
    faqs: [
      { q: "Material?", a: "Rubber" },
      { q: "Sizes available?", a: "40-45" },
      { q: "Indoor/Outdoor?", a: "Both" }
    ],
    reviews: [
      { user: "Rohit", rating: 5, comment: "Very comfy!" },
      { user: "Vivek", rating: 4, comment: "Good for home use." },
      { user: "Aditya", rating: 5, comment: "Perfect fit." }
    ]
  },
  // ---------------- Men Footwear ----------------
{
  id: 13,
  name: "Men’s Casual Sneakers",
  price: "₹1,499",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241106/QzVb/672b9d5c260f9c41e8c3d5d8/-473Wx593H-700710447-white-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241106/Y946/672b9d5c260f9c41e8c3d56c/-473Wx593H-700710447-white-MODEL10.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241106/dRcB/672b9d5c260f9c41e8c3d573/-473Wx593H-700710447-white-MODEL4.jpg"
  ],
  description: "Comfortable sneakers perfect for casual outings and daily wear.",
  faqs: [
    { q: "Material?", a: "Canvas" },
    { q: "Sizes available?", a: "40-45" },
    { q: "Machine washable?", a: "Yes" }
  ],
  reviews: [
    { user: "Amit", rating: 5, comment: "Very comfortable!" },
    { user: "Rohit", rating: 4, comment: "Perfect for daily use." },
    { user: "Sanjay", rating: 5, comment: "Looks stylish too." }
  ]
},
{
  id: 14,
  name: "Men’s Running Shoes",
  price: "₹1,899",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250812/eZcq/689b19868bfb9009ac7c3805/-473Wx593H-469759338-blackgrey-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250812/611G/689b244b3d468c61ab6668a2/-473Wx593H-469759338-blackgrey-MODEL3.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250812/0rXv/689b226d8bfb9009ac7cde1e/-473Wx593H-469759338-blackgrey-MODEL4.jpg"
  ],
  description: "Lightweight running shoes suitable for jogging and gym workouts.",
  faqs: [
    { q: "Material?", a: "Mesh & rubber sole" },
    { q: "Sizes available?", a: "40-46" },
    { q: "Breathable?", a: "Yes, mesh design" }
  ],
  reviews: [
    { user: "Vikram", rating: 5, comment: "Great for running!" },
    { user: "Rahul", rating: 4, comment: "Very comfortable and light." },
    { user: "Karan", rating: 5, comment: "Good support for gym." }
  ]
},
{
  id: 15,
  name: "Men’s Loafers",
  price: "₹1,299",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240718/MzCe/66996cd31d763220faf538a4/-473Wx593H-464629672-black-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240718/r65z/66996cd31d763220faf5382c/-473Wx593H-464629672-black-MODEL3.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240718/7bCA/66996cd31d763220faf5382b/-473Wx593H-464629672-black-MODEL5.jpg"
  ],
  description: "Stylish and comfortable loafers for casual or semi-formal occasions.",
  faqs: [
    { q: "Material?", a: "PU leather" },
    { q: "Sizes available?", a: "40-45" },
    { q: "Slip-resistant?", a: "Yes" }
  ],
  reviews: [
    { user: "Deepak", rating: 5, comment: "Very comfortable!" },
    { user: "Ramesh", rating: 4, comment: "Stylish look." },
    { user: "Suresh", rating: 5, comment: "Perfect fit." }
  ]
},
{
  id: 16,
  name: "Men’s Sandals",
  price: "₹799",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240124/h984/65b1214516fd2c6e6abd6b87/-473Wx593H-450155942-black-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240124/jECo/65b1235d8cdf1e0df5cc3b94/-473Wx593H-450155942-black-MODEL3.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240124/tdSK/65b12a628cdf1e0df5cc7ca7/-473Wx593H-450155942-black-MODEL2.jpg"
  ],
  description: "Comfortable open-toe sandals perfect for casual and outdoor wear.",
  faqs: [
    { q: "Material?", a: "Synthetic leather" },
    { q: "Sizes available?", a: "40-46" },
    { q: "Indoor/Outdoor?", a: "Both" }
  ],
  reviews: [
    { user: "Manoj", rating: 5, comment: "Perfect for summers." },
    { user: "Rakesh", rating: 4, comment: "Very comfortable." },
    { user: "Ajay", rating: 5, comment: "Good quality." }
  ]
},
{
  id: 17,
  name: "Men’s Formal Brown Shoes",
  price: "₹2,099",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240717/kVuL/669716af1d763220facecfef/-473Wx593H-462268764-brown-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240717/VUYA/669716af1d763220facecf7f/-473Wx593H-462268764-brown-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240717/GFx3/669716af1d763220facecf81/-473Wx593H-462268764-brown-MODEL4.jpg"
  ],
  description: "Elegant brown leather formal shoes for office and formal events.",
  faqs: [
    { q: "Material?", a: "Leather" },
    { q: "Sizes available?", a: "40-45" },
    { q: "Waterproof?", a: "Light rain resistant" }
  ],
  reviews: [
    { user: "Vijay", rating: 5, comment: "Looks classy and comfortable." },
    { user: "Siddharth", rating: 4, comment: "Good quality leather." },
    { user: "Arjun", rating: 5, comment: "Perfect for office wear." }
  ]
},
{
  id: 18,
  name: "Men’s Winter Boots",
  price: "₹2,499",
  category: "Men",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250129/DPMl/679a2853bc78b543a90729a4/-473Wx593H-465792017-grey-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250129/WHn7/679a2853bc78b543a907293f/-473Wx593H-465792017-grey-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250129/iAam/679a2853bc78b543a9072942/-473Wx593H-465792017-grey-MODEL6.jpg"
  ],
  description: "Warm and durable boots ideal for winter and outdoor activities.",
  faqs: [
    { q: "Material?", a: "PU leather & rubber sole" },
    { q: "Sizes available?", a: "40-46" },
    { q: "Waterproof?", a: "Yes" }
  ],
  reviews: [
    { user: "Sanjay", rating: 5, comment: "Keeps my feet warm." },
    { user: "Rajesh", rating: 4, comment: "Comfortable but slightly heavy." },
    { user: "Amit", rating: 5, comment: "Durable and stylish." }
  ]
},
{
  id: 19,
  name: "Men’s Flip Flops",
  price: "₹399",
  category: "Footwear",
  gender: "Men",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/hsYE/67271e94260f9c41e8b1b080/-473Wx593H-700678608-brown-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/EbY0/67271e94260f9c41e8b1b008/-473Wx593H-700678608-brown-MODEL4.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241103/yymp/67271e94260f9c41e8b1b00b/-473Wx593H-700678608-brown-MODEL5.jpg"
  ],
  description: "Lightweight flip flops perfect for indoor and outdoor casual wear.",
  faqs: [
    { q: "Material?", a: "Rubber" },
    { q: "Sizes available?", a: "40-46" },
    { q: "Indoor/Outdoor?", a: "Both" }
  ],
  reviews: [
    { user: "Rohit", rating: 5, comment: "Super comfortable!" },
    { user: "Anil", rating: 4, comment: "Good for casual wear." },
    { user: "Vikram", rating: 5, comment: "Perfect for summers." }
  ]
},
// ---------------- Kids Footwear ----------------
{
  id: 20,
  name: "Kids Running Shoes",
  price: "₹799",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250528/RAuV/68371e437a6cd4182f6242fa/-473Wx593H-467195215-white-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250528/NOIX/68371e487a6cd4182f624319/-473Wx593H-467195215-white-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250528/PIeS/68371e487a6cd4182f62431b/-473Wx593H-467195215-white-MODEL5.jpg"
  ],
  description: "Lightweight running shoes for kids, perfect for school and playtime.",
  faqs: [
    { q: "Material?", a: "Synthetic & mesh" },
    { q: "Sizes available?", a: "20-30" },
    { q: "Easy to clean?", a: "Yes" }
  ],
  reviews: [
    { user: "Ria", rating: 5, comment: "Very comfortable for my child." },
    { user: "Anaya", rating: 4, comment: "Good quality and fit." }
  ]
},
{
  id: 21,
  name: "Kids Casual Sandals",
  price: "₹499",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250526/swQJ/68349d397a6cd4182f5350ce/-473Wx593H-701624487-beige-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250526/1xKI/68349d397a6cd4182f53507a/-473Wx593H-701624487-beige-MODEL3.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250526/xdxE/68349d397a6cd4182f53507b/-473Wx593H-701624487-beige-MODEL5.jpg"
  ],
  description: "Open-toe casual sandals for daily wear, soft and flexible.",
  faqs: [
    { q: "Material?", a: "Synthetic leather" },
    { q: "Sizes available?", a: "20-30" },
    { q: "Indoor/Outdoor?", a: "Both" }
  ],
  reviews: [
    { user: "Vivaan", rating: 5, comment: "Perfect for summers." },
    { user: "Ishaan", rating: 4, comment: "Soft and light." }
  ]
},
{
  id: 22,
  name: "Kids School Shoes",
  price: "₹699",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20220624/R9U8/62b5cceaaeb26921af45d526/-473Wx593H-469194827-black-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20220624/DoJd/62b5cc5daeb26921af45cb6b/-473Wx593H-469194827-black-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20220624/1LFB/62b5d5bef997dd03e29e0419/-473Wx593H-469194827-black-MODEL4.jpg"
  ],
  description: "Durable and comfortable shoes for school uniforms.",
  faqs: [
    { q: "Material?", a: "PU leather" },
    { q: "Sizes available?", a: "22-32" },
    { q: "Slip-resistant?", a: "Yes" }
  ],
  reviews: [
    { user: "Anika", rating: 5, comment: "Great for school." },
    { user: "Kaira", rating: 4, comment: "Good quality leather." }
  ]
},
{
  id: 23,
  name: "Kids Sports Sneakers",
  price: "₹799",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240619/VqB6/6672082c1d763220facae1fa/-473Wx593H-700102432-black-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240619/PnEw/6672082c1d763220facae18a/-473Wx593H-700102432-black-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240619/BuCn/6672082c1d763220facae189/-473Wx593H-700102432-black-MODEL3.jpg"
  ],
  description: "Breathable sports sneakers ideal for kids’ outdoor activities and sports.",
  faqs: [
    { q: "Material?", a: "Mesh & rubber sole" },
    { q: "Sizes available?", a: "21-32" },
    { q: "Machine washable?", a: "Yes" }
  ],
  reviews: [
    { user: "Kabir", rating: 5, comment: "Lightweight and perfect for running." },
    { user: "Vihaan", rating: 4, comment: "Kids love them!" }
  ]
},
{
  id: 24,
  name: "Kids Flip Flops",
  price: "₹299",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241007/loXi/6703da70f9b8ef490ba03dbd/-473Wx593H-450162216-red-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241007/oeXY/6703e07c260f9c41e85f64f6/-473Wx593H-450162216-red-MODEL2.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241007/rMmd/6703dadff9b8ef490ba03ede/-473Wx593H-450162216-red-MODEL4.jpg"
  ],
  description: "Easy slip-on flip flops for casual wear and home use.",
  faqs: [
    { q: "Material?", a: "Rubber" },
    { q: "Sizes available?", a: "20-30" },
    { q: "Indoor/Outdoor?", a: "Both" }
  ],
  reviews: [
    { user: "Rohan", rating: 5, comment: "Super comfy and light." },
    { user: "Aarav", rating: 4, comment: "Perfect for summer." }
  ]
},
{
  id: 25,
  name: "Kids Booties",
  price: "₹599",
  category: "Kids",
  gender: "Kids",
  images: [
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241209/MCIt/675661530f47f80c87e37bd4/-473Wx593H-700562951-blue-MODEL.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241209/nihZ/675661530f47f80c87e37b5d/-473Wx593H-700562951-blue-MODEL3.jpg",
    "https://assets-jiocdn.ajio.com/medias/sys_master/root/20241209/muTX/675661530f47f80c87e37b5b/-473Wx593H-700562951-blue-MODEL6.jpg"
  ],
  description: "Warm booties for kids, suitable for winter and outdoor play.",
  faqs: [
    { q: "Material?", a: "Synthetic & fleece lining" },
    { q: "Sizes available?", a: "21-30" },
    { q: "Waterproof?", a: "Yes, water-resistant" }
  ],
  reviews: [
    { user: "Tanish", rating: 5, comment: "Keeps feet warm and cozy." },
    { user: "Arnav", rating: 4, comment: "Good for winter playtime." }
  ]
}


];

const Offershoes = () => {
const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? Shoeproducts
      : Shoeproducts.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-5">
       
      <h1 className="mb-3" style={{textAlign:"center"}}>FOOTWEAR OFFER PAGE</h1>
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
                  onClick={() => navigate(`/footwear/product/${product.id}`)}
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

export default Offershoes