import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Resto.css';
const categories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Shorts",
  "Dresses",
  "Ethnic Wear",
  "Footwear",
  "Accessories",
  "Winter Wear"
];
export const offerproducts1 = [
   {
    id: 1,
    name: "Kids Cotton T-Shirt",
    price: "₹499",
    category: "T-Shirts",
    images: [
      "https://static.zara.net/assets/public/d21e/1399/3bef4cdfa699/47e4d4e142c1/07878705807-e1/07878705807-e1.jpg?ts=1752227331360&w=1024",
      "https://static.zara.net/assets/public/0793/48e4/0a1e4d74bcbd/5d835415ef3f/07878705807-e2/07878705807-e2.jpg?ts=1752227330133&w=1125",
      "https://static.zara.net/assets/public/5617/4b0a/d5c74ba2a15b/cc7222386e3c/07878705807-e4/07878705807-e4.jpg?ts=1752227329863&w=750"
    ],
    description: "Soft cotton t-shirt perfect for daily wear. Comfortable and breathable.",
    faqs: ["Is the fabric shrink-free?", "Can this be machine washed?", "Does it come in multiple colors?"],
    reviews: [
      { user: "Anita", rating: 5, comment: "My son loved it, super soft!" },
      { user: "Ravi", rating: 4, comment: "Sizes run small, but great quality." },
      { user: "Neha", rating: 5, comment: "Perfect for summer wear." }
    ]
  },
  {
    id: 2,
    name: "Boys Denim Jeans",
    price: "₹999",
    category: "Jeans",
    images: [
      "https://static.zara.net/assets/public/e3bf/9ce5/78b740389a31/8a3b23b37d11/01879704400-e1/01879704400-e1.jpg?ts=1754904306870&w=1024",
      "https://static.zara.net/assets/public/5a3e/8095/859b499f8a4a/8917a1d0d05f/01879704400-e2/01879704400-e2.jpg?ts=1754904307179&w=1125",
      "https://static.zara.net/assets/public/58ef/9652/5f61407e9e9c/f9c8d6252a5f/01879704400-e3/01879704400-e3.jpg?ts=1754904307068&w=750"
    ],
    description: "Durable denim jeans with adjustable waist. Stylish and long-lasting.",
    faqs: ["Is the waist stretchable?", "Are these jeans fade-resistant?", "Suitable for winter wear?"],
    reviews: [
      { user: "Manoj", rating: 5, comment: "Great fit and tough fabric!" },
      { user: "Priya", rating: 4, comment: "Nice quality but a little heavy." },
      { user: "Vikas", rating: 5, comment: "Looks very smart on my boy." }
    ]
  },
  {
    id: 3,
    name: "Girls Floral Dress",
    price: "₹1299",
    category: "Dresses",
    images: [
      "https://static.zara.net/assets/public/ad90/8e86/8bf444ff9f62/6de5e9da3d79/06280321610-e1/06280321610-e1.jpg?ts=1753686047237&w=1024",
      "https://static.zara.net/assets/public/36f1/2d8a/7ca84672b9fb/0ab1aaee93eb/06280321610-e2/06280321610-e2.jpg?ts=1753686042152&w=1125",
      "https://static.zara.net/assets/public/be72/7af0/69b3476dbcae/1b8579796cd8/06280321610-p/06280321610-p.jpg?ts=1754909716502&w=1420"
    ],
    description: "Beautiful floral dress for birthdays and parties. Light, flowy fabric.",
    faqs: ["Is this dress machine washable?", "Does it come with a belt?", "What sizes are available?"],
    reviews: [
      { user: "Anjali", rating: 5, comment: "My daughter loved it for her birthday!" },
      { user: "Meera", rating: 4, comment: "Good quality, but slightly pricey." },
      { user: "Rohit", rating: 5, comment: "Looks elegant and comfy." }
    ]
  },
  {
    id: 4,
    name: "Boys Checked Shirt",
    price: "₹799",
    category: "Shirts",
    images: [
      "https://static.zara.net/assets/public/28cf/4def/4cff49c2a072/b62cd638f603/05854521400-e1/05854521400-e1.jpg?ts=1756466895213&w=1024",
      "https://static.zara.net/assets/public/6be5/01e8/49154384973d/a3a0b71fbef9/05854521400-e2/05854521400-e2.jpg?ts=1756466897304&w=1125",
      "https://static.zara.net/assets/public/ec13/b26b/ba0f47b7a0ce/883f04f61c7f/05854521400-e3/05854521400-e3.jpg?ts=1756466895385&w=750"
    ],
    description: "Trendy checked shirt for boys. Can be styled for parties or casual wear.",
    faqs: ["Is this pure cotton?", "Does the color bleed?", "Is it slim fit?"],
    reviews: [
      { user: "Deepak", rating: 5, comment: "Looks super stylish!" },
      { user: "Pooja", rating: 4, comment: "Fabric is good but wrinkles easily." },
      { user: "Kiran", rating: 5, comment: "Perfect for family outings." }
    ]
  },
  {
    id: 5,
    name: "Kids Cargo Shorts",
    price: "₹599",
    category: "Shorts",
    images: [
      "https://static.zara.net/assets/public/86b0/29d3/4b764ea29559/55fce747cb3a/01879703400-p/01879703400-p.jpg?ts=1748962793974&w=1420",
      "https://static.zara.net/assets/public/a495/943c/d0604208a858/d2bb8ce4e0c6/01879703400-e1/01879703400-e1.jpg?ts=1747903003853&w=1420",
      "https://static.zara.net/assets/public/f51d/dc7c/bec0406d976c/7fbad9c4dc00/01879703400-e2/01879703400-e2.jpg?ts=1747903004397&w=1420"
    ],
    description: "Comfortable cargo shorts with multiple pockets. Best for summer wear.",
    faqs: ["Is it stretchable?", "Does it shrink?", "Is it good for sports?"],
    reviews: [
      { user: "Shalini", rating: 5, comment: "Very comfy for my kid." },
      { user: "Arun", rating: 4, comment: "Colors faded a little after wash." },
      { user: "Sneha", rating: 5, comment: "My son wears them daily." }
    ]
  },
  {
    id: 6,
    name: "Girls Party Dress",
    price: "₹1599",
    category: "Dresses",
    images: [
      "https://static.zara.net/assets/public/fd18/4e5b/c2f2415ebd13/195ab6ff45d8/06091125623-e1/06091125623-e1.jpg?ts=1751876573270&w=1024",
      "https://static.zara.net/assets/public/b48d/b37d/031a42cba0dd/642b0cd8d0e3/06091125623-e2/06091125623-e2.jpg?ts=1751876572781&w=1125",
      "https://static.zara.net/assets/public/c862/54a9/1dc0452b9e12/2e32bc8ae659/06091125623-e3/06091125623-e3.jpg?ts=1751876573370&w=750"
    ],
    description: "Elegant party dress with frills and bow. Perfect for special occasions.",
    faqs: ["Is it suitable for 10-year-old?", "Does it include accessories?", "Can it be dry-cleaned?"],
    reviews: [
      { user: "Simran", rating: 5, comment: "So pretty! My girl looked like a princess." },
      { user: "Rajesh", rating: 4, comment: "Good but needs better stitching." },
      { user: "Ritika", rating: 5, comment: "Worth the price." }
    ]
  },
  {
    id: 7,
    name: "Kids Winter Jacket",
    price: "₹1999",
    category: "Winter Wear",
    images: [
      "https://static.zara.net/assets/public/a505/5a58/0cc34111870b/c2cc813664bc/03411550642-e1/03411550642-e1.jpg?ts=1753182673019&w=1024",
      "https://static.zara.net/assets/public/bc8b/9d9a/2a21407399be/d0447e137e4d/03411550642-e2/03411550642-e2.jpg?ts=1753182673031&w=1125",
      "https://static.zara.net/assets/public/14f8/cd83/bc484e60bd50/d278531f6682/03411550642-e5/03411550642-e5.jpg?ts=1753182672593&w=750"
    ],
    description: "Warm padded winter jacket to keep kids cozy during cold days.",
    faqs: ["Is it waterproof?", "Can it handle snow?", "Is it lightweight?"],
    reviews: [
      { user: "Rahul", rating: 5, comment: "Super warm and stylish!" },
      { user: "Preeti", rating: 4, comment: "A little bulky but good quality." },
      { user: "Amit", rating: 5, comment: "Best winter purchase." }
    ]
  },
  {
    id: 8,
    name: "Boys Sports Shoes",
    price: "₹1299",
    category: "Footwear",
    images: [
      "https://static.zara.net/assets/public/c1b2/94b0/d2ec42a5b50f/5d045cd68201/13334430627-e1/13334430627-e1.jpg?ts=1738919968318&w=1024",
      "https://static.zara.net/assets/public/1bf8/95a5/8bd9483998ca/570469cdf4c7/13334430627-e2/13334430627-e2.jpg?ts=1738919969240&w=1125",
      "https://static.zara.net/assets/public/1081/4b25/10204eb89f7a/612d8303d950/13334430627-e4/13334430627-e4.jpg?ts=1738919966697&w=750"
    ],
    description: "Lightweight sports shoes with anti-slip sole. Great for running and play.",
    faqs: ["Are these washable?", "Is the sole durable?", "Good for football?"],
    reviews: [
      { user: "Snehal", rating: 5, comment: "Perfect for my son's sports day!" },
      { user: "Vivek", rating: 4, comment: "Good grip but takes time to dry." },
      { user: "Anu", rating: 5, comment: "Stylish and comfy." }
    ]
  },
  {
  id: 9,
  name: "Girls Ethnic Lehenga",
  price: "₹1899",
  category: "Ethnic Wear",
  images: [
    "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014196445-Green-GREEN-1000014196445_01-2100.jpg",
    "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014196445-Green-GREEN-1000014196445_02-2100.jpg",
    "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014196445-Green-GREEN-1000014196445_04-2100.jpg"
  ],
  description: "Traditional lehenga with embroidery work. Perfect for festive occasions.",
  faqs: ["Is it heavy?", "Does it come with a dupatta?", "Is it suitable for 5-year-olds?"],
  reviews: [
    { user: "Pallavi", rating: 5, comment: "My daughter looked gorgeous!" },
    { user: "Nisha", rating: 4, comment: "Good, but a little loose fit." },
    { user: "Suresh", rating: 5, comment: "Value for money." }
  ]
},
{
  id: 10,
  name: "Kids Woolen Sweater",
  price: "₹799",
  category: "Winter Wear",
  images: [
    "https://static.zara.net/assets/public/79d7/3491/205e49c7a324/e25cb1536344/09874712809-e1/09874712809-e1.jpg?ts=1755181892739&w=1024",
    "https://static.zara.net/assets/public/a74d/dc94/f6ca4e61b6b2/977602243f10/09874712809-e2/09874712809-e2.jpg?ts=1755181891592&w=1125",
    "https://static.zara.net/assets/public/d68e/4e48/f72e4b059c78/341b368d5ac5/09874712809-e3/09874712809-e3.jpg?ts=1755181890933&w=750"
  ],
  description: "Soft woolen sweater for extra warmth in winter. Stretchable and cozy.",
  faqs: ["Does it shrink after wash?", "Is it unisex?", "What sizes are available?"],
  reviews: [
    { user: "Ramesh", rating: 5, comment: "So soft and warm." },
    { user: "Priya", rating: 4, comment: "Nice but hand wash only." },
    { user: "Sneha", rating: 5, comment: "Best sweater for kids." }
  ]
},
{
  id: 11,
  name: "Boys Polo T-Shirt",
  price: "₹649",
  category: "T-Shirts",
  images: [
    "https://static.zara.net/assets/public/f16e/c0d0/41b348feabb6/ed8f5eb143a6/01887653403-e1/01887653403-e1.jpg?ts=1753107614483&w=1024",
    "https://static.zara.net/assets/public/4edc/af77/4f5f4e94a6cc/776e35299055/01887653403-e2/01887653403-e2.jpg?ts=1753107614930&w=1125",
    "https://static.zara.net/assets/public/a751/b315/27fb490389a2/990774d17501/01887653403-e3/01887653403-e3.jpg?ts=1753107614329&w=750"
  ],
  description: "Classic polo t-shirt for boys with collar design. Perfect for casual outings.",
  faqs: ["Is it slim fit?", "Does it fade?", "Is it cotton?"],
  reviews: [
    { user: "Aarti", rating: 5, comment: "Looks very smart!" },
    { user: "Mahesh", rating: 4, comment: "Good but tight around neck." },
    { user: "Divya", rating: 5, comment: "Nice quality material." }
  ]
},
{
  id: 12,
  name: "Girls Hair Accessories Set",
  price: "₹399",
  category: "Accessories",
  images: [
    "https://g.sdlcdn.com/imgs/k/1/l/LYKAA-12-Pcs-Baby-Girl-SDL976830453-1-1f3b8.jpg",
    "https://g.sdlcdn.com/imgs/k/1/l/LYKAA-12-Pcs-Baby-Girl-SDL976830453-3-1223c.jpg",
    "https://g.sdlcdn.com/imgs/k/1/l/LYKAA-12-Pcs-Baby-Girl-SDL976830453-4-97bdd.jpg"
  ],
  description: "Pack of colorful hair bands, clips, and pins for daily styling.",
  faqs: ["Are they metal-free?", "Do they break easily?", "Is it suitable for toddlers?"],
  reviews: [
    { user: "Rekha", rating: 5, comment: "My daughter loves them!" },
    { user: "Vinod", rating: 4, comment: "Good variety, but some are small." },
    { user: "Komal", rating: 5, comment: "Super cute designs." }
  ]
},
{
  id: 13,
  name: "Boys Sneakers",
  price: "₹1499",
  category: "Footwear",
  images: [
    "https://static.zara.net/assets/public/e5dc/b16d/71b8486aaa01/89f1409f489e/13233330002-e1/13233330002-e1.jpg?ts=1727000644390&w=1024",
    "https://static.zara.net/assets/public/a8ca/165f/a974412d834f/962295c0b5bc/13233330002-e3/13233330002-e3.jpg?ts=1706194315127&w=1125",
    "https://static.zara.net/assets/public/8bb7/e181/b4d94249938b/4e7a1b830e07/13233330002-e5/13233330002-e5.jpg?ts=1706194315126&w=750"
  ],
  description: "Trendy sneakers with strong sole for everyday wear.",
  faqs: ["Is it lightweight?", "Does it have laces?", "Is it washable?"],
  reviews: [
    { user: "Ravi", rating: 5, comment: "Looks very stylish!" },
    { user: "Kavita", rating: 4, comment: "A bit heavy for small kids." },
    { user: "Alok", rating: 5, comment: "Durable and comfy." }
  ]
},
{
  id: 14,
  name: "Girls Denim Jacket",
  price: "₹1299",
  category: "Winter Wear",
  images: [
    "https://static.zara.net/assets/public/1551/a50a/bcae4b6a8951/d966cac49e68/04433557400-p/04433557400-p.jpg?ts=1754489280575&w=1024",
    "https://static.zara.net/assets/public/bf50/3baa/a56041cfae05/69ecb3f22c02/04433557400-e1/04433557400-e1.jpg?ts=1753103132902&w=1125",
    "https://static.zara.net/assets/public/cae5/74ef/406741909fb5/89e27f8320b3/04433557400-e3/04433557400-e3.jpg?ts=1753103132976&w=1420"
  ],
  description: "Stylish denim jacket for girls. Great for layering in cool weather.",
  faqs: ["Does it stretch?", "Is it washable?", "Does it come in pink?"],
  reviews: [
    { user: "Poonam", rating: 5, comment: "Super fashionable!" },
    { user: "Meera", rating: 4, comment: "Fabric is stiff but good." },
    { user: "Ruchi", rating: 5, comment: "My daughter loves it." }
  ]
},
{
  id: 15,
  name: "Boys Cotton Shorts",
  price: "₹549",
  category: "Shorts",
  images: [
    "https://static.zara.net/assets/public/ec6d/664a/e08948e48380/3613be797d68/01880694800-031-e1/01880694800-031-e1.jpg?ts=1741794696076&w=1024",
    "https://static.zara.net/assets/public/41ca/141f/fd1c4ab8ae85/5bb3b8031a1b/01880694800-031-e2/01880694800-031-e2.jpg?ts=1741794696021&w=1125",
    "https://static.zara.net/assets/public/2dd3/60be/dd28427dad48/eb87ed8eed78/01880694800-e4/01880694800-e4.jpg?ts=1738844653128&w=750"
  ],
  description: "Soft cotton shorts for boys. Best for hot weather and playtime.",
  faqs: ["Is the fabric soft?", "Do they shrink?", "Elastic waistband included?"],
  reviews: [
    { user: "Anand", rating: 5, comment: "Great fit and comfort." },
    { user: "Maya", rating: 4, comment: "Color faded slightly." },
    { user: "Kiran", rating: 5, comment: "Perfect daily wear shorts." }
  ]
},
{
  id: 16,
  name: "Girls Cotton Frock",
  price: "₹1099",
  category: "Dresses",
  images: [
    "https://static.zara.net/assets/public/3424/f186/929342d1a474/cdb36f1685bf/06097123251-e1/06097123251-e1.jpg?ts=1749132001434&w=1024",
    "https://static.zara.net/assets/public/e450/6ecc/d35641728a25/f578cb7dce2e/06097123251-e2/06097123251-e2.jpg?ts=1749131998357&w=1125",
    "https://static.zara.net/assets/public/5c34/b5d2/cb77416ebbd2/df0b74d5caed/06097123251-e3/06097123251-e3.jpg?ts=1749131999763&w=750"
  ],
  description: "Cute cotton frock with floral prints. Light and breathable.",
  faqs: ["Is it stretchable?", "Does it shrink?", "Can it be hand washed?"],
  reviews: [
    { user: "Sunita", rating: 5, comment: "Perfect summer frock!" },
    { user: "Anil", rating: 4, comment: "Nice but size runs big." },
    { user: "Deepa", rating: 5, comment: "My kid looks adorable in it." }
  ]
},
{
  id: 17,
  name: "Kids Woolen Cap",
  price: "₹299",
  category: "Accessories",
  images: [
    "https://static.zara.net/assets/public/6fea/bdff/c35d4298b995/d66624b9ee04/05665698620-e1/05665698620-e1.jpg?ts=1755614616473&w=1024",
    "https://static.zara.net/assets/public/fb04/93ad/91834301a85e/5daacab43ae7/05665698620-e2/05665698620-e2.jpg?ts=1755614617442&w=1125",
    "https://static.zara.net/assets/public/fbcd/6768/1c274dc4943a/603984d06c29/05665698620-e3/05665698620-e3.jpg?ts=1755614617890&w=750"
  ],
  description: "Warm woolen cap to protect kids during winter. Stretchable and soft.",
  faqs: ["Is it unisex?", "Does it cover ears?", "Is it hand-knit?"],
  reviews: [
    { user: "Tarun", rating: 5, comment: "Very warm and soft." },
    { user: "Asha", rating: 4, comment: "Okay but a little tight." },
    { user: "Renu", rating: 5, comment: "Good for winter outings." }
  ]
},
{
  id: 18,
  name: "Boys Formal Shirt",
  price: "₹899",
  category: "Shirts",
  images: [
    "https://image.hm.com/assets/hm/be/43/be43cf6f06a129fae5fdf59492764f7973733b1f.jpg?imwidth=1260",
    "https://image.hm.com/assets/hm/27/53/2753d605bb98b4b30ba1c8956f64154939d06ff4.jpg?imwidth=1260",
    
  ],
  description: "Formal shirt for boys. Ideal for school functions and parties.",
  faqs: ["Is it slim fit?", "Does it shrink?", "Can it be ironed easily?"],
  reviews: [
    { user: "Aman", rating: 5, comment: "Perfect for school events." },
    { user: "Shreya", rating: 4, comment: "Nice but a bit pricey." },
    { user: "Gaurav", rating: 5, comment: "Looks like mini gentleman." }
  ]
},
{
    id: 19,
    name: "Boys Casual Shorts Pack",
    category: "Bottomwear",
    price: "₹799",
    images: [
      "https://static.zara.net/assets/public/c37b/46d2/3f8a4bb79496/31105124622e/00722825401-e1/00722825401-e1.jpg?ts=1749550338252&w=1024",
      "https://static.zara.net/assets/public/2c1f/b2b9/d5d446508d79/c5a9374fbdc1/00722825401-e2/00722825401-e2.jpg?ts=1749550338786&w=1125",
      "https://static.zara.net/assets/public/2a1b/349e/315449b99fbf/2af958490a46/00722825401-e3/00722825401-e3.jpg?ts=1749550340022&w=1420"
    ],
    description: "Comfortable cotton shorts, perfect for summer playtime. Pack of 2 in different colors.",
    faqs: [
      "Is this pack machine washable? → Yes, easy wash.",
      "Does it come with an elastic waist? → Yes.",
      "How many shorts in the pack? → 2 shorts."
    ],
    reviews: [
      { user: "Pradeep", rating: 5, comment: "Superb quality for kids." },
      { user: "Savita", rating: 4, comment: "Good fit, colors are nice." },
      { user: "Deepak", rating: 5, comment: "My son loves them!" }
    ]
  },
  {
    id: 20,
    name: "Girls Summer Dress",
    category: "Dresses",
    price: "₹1,099",
    images: [
      "https://static.zara.net/assets/public/cb76/a85b/812c45748817/2de04200eba6/06189222620-e1/06189222620-e1.jpg?ts=1750079886453&w=1024",
      "https://static.zara.net/assets/public/07a8/b892/806d40a4a004/9199b0cd8369/06189222620-e2/06189222620-e2.jpg?ts=1750079890470&w=1125",
      "https://static.zara.net/assets/public/b351/dd5c/c2d14c3cb79e/63f0445edbe3/06189222620-e3/06189222620-e3.jpg?ts=1750079887386&w=1420"
    ],
    description: "Bright floral printed dress with a bow design. Breathable cotton fabric.",
    faqs: [
      "Is the fabric soft? → Yes, 100% cotton.",
      "Does it come with lining? → Yes.",
      "Can it be worn daily? → Absolutely."
    ],
    reviews: [
      { user: "Manisha", rating: 5, comment: "Perfect for summer outings!" },
      { user: "Ravi", rating: 4, comment: "Nice but a bit loose." },
      { user: "Alok", rating: 5, comment: "Bought for my niece, she loves it." }
    ]
  },
  {
    id: 21,
    name: "Kids School Backpack",
    category: "Accessories",
    price: "₹899",
    images: [
      "https://static.zara.net/assets/public/e948/cdba/6229498a8200/a1a130441ba9/11412630800-e1/11412630800-e1.jpg?ts=1746782176240&w=1024",
      "hhttps://static.zara.net/assets/public/4089/3ca4/d4bc4568b32c/f6e3cf07573e/11412630800-e2/11412630800-e2.jpg?ts=1746782176322&w=1125",
      "https://static.zara.net/assets/public/213a/4e5e/c7c9482a8560/fbb8fd3da13c/11412630800-e4/11412630800-e4.jpg?ts=1746782176468&w=1420"
    ],
    description: "Lightweight school backpack with multiple compartments. Fun cartoon design.",
    faqs: [
      "Is it waterproof? → Water-resistant, not fully waterproof.",
      "Can it fit lunch box + books? → Yes.",
      "Is it suitable for 5–10 years? → Yes."
    ],
    reviews: [
      { user: "Shalini", rating: 5, comment: "Very cute and strong." },
      { user: "Ramesh", rating: 4, comment: "Zips are a little tight." },
      { user: "Ankita", rating: 5, comment: "My kid is excited to take it to school." }
    ]
  },
  {
    id: 22,
    name: "Boys Formal Blazer",
    category: "Topwear",
    price: "₹1,999",
    images: [
      "https://static.zara.net/assets/public/d412/df31/f8f74ee6a65a/af03553262a1/01608806401-e1/01608806401-e1.jpg?ts=1753087880672&w=1024",
      "https://static.zara.net/assets/public/146e/1196/3d4a42a99aee/efc098723774/01608806401-e2/01608806401-e2.jpg?ts=1753087880192&w=1125",
      "https://static.zara.net/assets/public/a4fd/08fd/30424dc382e2/fcb0105590fd/01608806401-e3/01608806401-e3.jpg?ts=1753087880682&w=750"
    ],
    description: "Stylish navy blazer for kids. Perfect for parties and family events.",
    faqs: [
      "Is it stretchable? → Slightly stretch fabric.",
      "Does it come with pockets? → Yes, two pockets.",
      "Is it heavy? → No, lightweight fabric."
    ],
    reviews: [
      { user: "Varun", rating: 5, comment: "Looks premium on my son." },
      { user: "Sowmya", rating: 4, comment: "Good but sleeves a bit long." },
      { user: "Rahul", rating: 5, comment: "Loved it for birthday photoshoot." }
    ]
  },
  {
    id: 23,
    name: "Girls Party Gown",
    category: "Dresses",
    price: "₹2,499",
    images: [
      "https://static.zara.net/assets/public/ad0f/0389/35184f4689ec/ae38bcdf3c0a/06522445701-e1/06522445701-e1.jpg?ts=1754908978438&w=1024",
      "https://static.zara.net/assets/public/0d6a/6f6a/4fa9447fb586/7e3c7e27320c/06522445701-e2/06522445701-e2.jpg?ts=1754908979706&w=1125",
      "https://static.zara.net/assets/public/1151/e164/017a404ea2fa/928996ab8c88/06522445701-e3/06522445701-e3.jpg?ts=1754908977108&w=750"
    ],
    description: "Elegant satin gown with floral embroidery and layered net. Perfect for weddings.",
    faqs: [
      "Does it come with lining? → Yes.",
      "Is it heavy? → Medium weight.",
      "Is it washable? → Dry clean recommended."
    ],
    reviews: [
      { user: "Anjali", rating: 5, comment: "My daughter looked like a princess." },
      { user: "Siddharth", rating: 5, comment: "Great quality gown." },
      { user: "Neha", rating: 4, comment: "Color was slightly lighter than shown." }
    ]
  },
  {
    id: 24,
    name: "Boys Sneakers",
    category: "Footwear",
    price: "₹1,299",
    images: [
      "https://static.zara.net/assets/public/b961/0664/36a448a1adcb/69fade6d13ca/16419230808-e1/16419230808-e1.jpg?ts=1723186295528&w=1125",
      "https://static.zara.net/assets/public/5f66/f8ec/79ff4c18860f/b1834e8dbab9/16419230808-e4/16419230808-e4.jpg?ts=1723186533119&w=750",
      "https://static.zara.net/assets/public/5073/9683/1a874a2aaac9/be9be5eef77c/16419230808003-p/16419230808003-p.jpg?ts=1700050032805&w=1024"
    ],
    description: "Trendy sneakers with anti-slip sole. Lightweight and breathable.",
    faqs: [
      "Are these washable? → Yes, surface washable.",
      "Do they have lace or velcro? → Velcro closure.",
      "Is the sole soft? → Yes, cushioned sole."
    ],
    reviews: [
      { user: "Amar", rating: 5, comment: "Comfortable and stylish." },
      { user: "Farhan", rating: 4, comment: "Good for casual wear." },
      { user: "Diksha", rating: 5, comment: "Looks very cool!" }
    ]
  },
  {
    id: 25,
    name: "Kids Sunglasses",
    category: "Accessories",
    price: "₹499",
    images: [
      "https://static.zara.net/assets/public/0088/052e/354f45d79a09/b31f75d0bd29/00009699800-e1/00009699800-e1.jpg?ts=1745833212649&w=1024",
      "https://static.zara.net/assets/public/e5d4/b2db/85c7443ba8cb/1c73ed822b70/00009699800-e2/00009699800-e2.jpg?ts=1745833212267&w=1125",
      "https://static.zara.net/assets/public/bc35/2b4b/e7d94753a3b8/90c090a22143/00009699800-e5/00009699800-e5.jpg?ts=1745833212301&w=750"
    ],
    description: "UV-protected sunglasses with fun cartoon frames.",
    faqs: [
      "Are they polarized? → No, UV-protection only.",
      "Do they fit toddlers? → Suitable for 3–10 years.",
      "Is the frame durable? → Yes, flexible plastic."
    ],
    reviews: [
      { user: "Sneha", rating: 5, comment: "Very cute and safe for kids." },
      { user: "Kapil", rating: 4, comment: "Frame is nice, lens is okay." },
      { user: "Tanu", rating: 5, comment: "My son loves wearing them." }
    ]
  },
  {
    id: 26,
    name: "Girls Denim Jacket",
    category: "Topwear",
    price: "₹1,399",
    images: [
      "https://static.zara.net/assets/public/8de6/727d/b60641eb9d55/2928465bf86b/05854523406-e1/05854523406-e1.jpg?ts=1746601412056&w=1024",
      "https://static.zara.net/assets/public/ebe2/944d/66a34b7eba20/2fc81237b026/05854523406-e2/05854523406-e2.jpg?ts=1746601411785&w=1125",
      "https://static.zara.net/assets/public/ece5/20b1/29bb49469194/fc9c9b144667/05854523406-e3/05854523406-e3.jpg?ts=1746601412309&w=750"
    ],
    description: "Trendy denim jacket with floral embroidery. A must-have for girls.",
    faqs: [
      "Is it stretch denim? → Slight stretch.",
      "Does it have pockets? → Yes.",
      "Is it machine washable? → Yes."
    ],
    reviews: [
      { user: "Lakshmi", rating: 5, comment: "So stylish and comfy!" },
      { user: "Meera", rating: 4, comment: "Good but sleeves are a bit long." },
      { user: "Ashok", rating: 5, comment: "Daughter loved it." }
    ]
  },
  {
    id: 27,
    name: "Boys Kurta Pajama Set",
    category: "Ethnic Wear",
    price: "₹1,799",
    images: [
      "https://manyavar.scene7.com/is/image/manyavar/CDES939-328+(5)_26-08-2024-14-27:100x125?&dpr=on,2",
      "https://manyavar.scene7.com/is/image/manyavar/CDES939-328+(4)_26-08-2024-14-27:650x900?&dpr=on,2",
      "https://manyavar.scene7.com/is/image/manyavar/CDES939-328+(7)_26-08-2024-14-29:650x900"
    ],
    description: "Traditional cotton kurta pajama set with elegant embroidery.",
    faqs: [
      "Is it stitched or unstitched? → Stitched.",
      "Is it suitable for festivals? → Yes.",
      "Does it shrink? → No, pre-washed fabric."
    ],
    reviews: [
      { user: "Anand", rating: 5, comment: "Perfect for puja and weddings." },
      { user: "Geeta", rating: 5, comment: "Fabric is very soft." },
      { user: "Kiran", rating: 4, comment: "Nice design but color faded slightly." }
    ]
  },
  {
    id: 28,
    name: "Girls Ethnic Lehenga",
    category: "Ethnic Wear",
    price: "₹2,199",
    images: [
      "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3dbea9f9/images/aw23/kw5610aw23fuspnk_1.jpg?sw=74&sh=111",
      "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwe91b62e8/images/aw23/kw5610aw23fuspnk_2.jpg?sw=502&sh=753&q=100&strip=false",
      "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwc8abae59/images/aw23/kw5610aw23fuspnk_5.jpg?sw=502&sh=753&q=100&strip=false"
    ],
    description: "Vibrant lehenga with dupatta. Lightweight and festive design.",
    faqs: [
      "Does it have elastic waistband? → Yes.",
      "Is it heavy? → No, lightweight fabric.",
      "Can it be machine washed? → Dry clean preferred."
    ],
    reviews: [
      { user: "Pooja", rating: 5, comment: "She looked adorable in this lehenga." },
      { user: "Manoj", rating: 4, comment: "Good quality but dupatta is small." },
      { user: "Ritu", rating: 5, comment: "Perfect festive outfit." }
    ]
  },
  {
    id: 29,
    name: "Kids Sports Shoes",
    category: "Footwear",
    price: "₹1,499",
    images: [
      "https://static.zara.net/assets/public/8a49/a692/be154083aeed/a16f54b201c7/13334430802-e1/13334430802-e1.jpg?ts=1738919967265&w=1024",
      "https://static.zara.net/assets/public/fdd4/0015/7bdc4dd8ba12/034540e10523/13334430802-e2/13334430802-e2.jpg?ts=1738919964731&w=1125",
      "https://static.zara.net/assets/public/8a5f/83b5/c93245e7b651/f581028b0619/13334430802-e4/13334430802-e4.jpg?ts=1738919964467&w=750"
    ],
    description: "Durable sports shoes with non-slip sole. Great for running and outdoor play.",
    faqs: [
      "Are they washable? → Yes.",
      "Do they have velcro? → Yes.",
      "Suitable for both boys and girls? → Yes."
    ],
    reviews: [
      { user: "Ramesh", rating: 5, comment: "Sturdy and comfortable." },
      { user: "Harshita", rating: 5, comment: "My daughter wears them daily." },
      { user: "Suman", rating: 4, comment: "Slightly heavy but good." }
    ]
  },
  {
    id: 30,
    name: "Kids Winter Sweater",
    category: "Winter Wear",
    price: "₹1,199",
    images: [
      "https://static.zara.net/assets/public/4bdf/03ba/2b82456da3dd/655958aa3fad/02756589481042-p/02756589481042-p.jpg?ts=1753267132719&w=1024",
      "https://static.zara.net/assets/public/5031/63d6/ab1c4d98a497/3c46dfcf809b/02756589481-e2/02756589481-e2.jpg?ts=1752740624867&w=750",
      "https://static.zara.net/assets/public/1bfd/8883/1cbc4fb7bf06/48e53a1c2b42/02756589481-e4/02756589481-e4.jpg?ts=1752740624700&w=750"
    ],
    description: "Warm wool sweater with cute design. Perfect for chilly weather.",
    faqs: [
      "Is it hand knit? → Machine knit.",
      "Is it itchy? → No, soft wool blend.",
      "Does it shrink? → No, pre-shrunk fabric."
    ],
    reviews: [
      { user: "Aarti", rating: 5, comment: "Keeps my son warm." },
      { user: "Vinay", rating: 5, comment: "Great quality sweater." },
      { user: "Priya", rating: 4, comment: "Little thick but warm." }
    ]
  }

  // Continue until id: 30

];
const Offerkids = () => {
   const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    // Filter products based on selected category
    const filteredProducts =
      selectedCategory === 'All'
        ? offerproducts1
        : offerproducts1.filter((p) => p.category === selectedCategory);
  
    return (
      <Container className="my-5">
         
        <h1 className="mb-3" style={{textAlign:"center"}}>KIDS OFFER PAGE</h1>
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
                    onClick={() => navigate(`/kidsoffer/product/${product.id}`)}
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

export default Offerkids