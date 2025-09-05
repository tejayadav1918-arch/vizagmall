import React from "react";
import { Container, Row, Col, Card, Button,  } from "react-bootstrap";
import { Link } from "react-router-dom";

import './NewArrivals.css';

export const Shirts = [

  {
    id: 1,
    name: "Louis Philippe Slim Fit Formal Shirt",
    price: "₹2,299 (20% OFF)",
    images: [
      "https://image.hm.com/assets/hm/16/d6/16d68b959c6003acc2195274adcc21e3871b6f31.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/21/08/210841859ce7c4c72a239922d29a302ac9e6e2ae.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/58/83/5883e8fe3c0d27f6b4b2aafc7f589c0a54b38696.jpg?imwidth=1260"
    ],
    description:
      "Crafted from premium cotton, this slim-fit shirt ensures all-day comfort with a polished look. Perfect for office wear or formal occasions, featuring a crisp collar and refined stitching.",
    faqs: [
      { q: "Is this shirt wrinkle-free?", a: "Yes, it is made with wrinkle-resistant fabric." },
      { q: "Can I machine wash this?", a: "Yes, gentle machine wash is recommended." },
      { q: "Does it come with cufflinks?", a: "No, but it has cufflink-friendly sleeves." }
    ],
    reviews: [
      { user: "Arjun", comment: "Perfect fit for my office wear. Very comfortable!", rating: 5 },
      { user: "Rahul", comment: "Fabric is smooth and premium. Totally worth it.", rating: 4 },
      { user: "Sneha", comment: "Gifted it to my brother, he loved it!", rating: 5 }
    ]
  },
  {
    id: 2,
    name: "Van Heusen Classic White Shirt",
    price: "₹1,899 (15% OFF)",
    images: [
      "https://image.hm.com/assets/hm/8f/31/8f31f90f9e907e1646bd216bc68bd1fa618c48ed.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/06/31/06312b8d4aaa806c69ba4078df7d460f6280ef66.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/aa/8f/aa8feb22d0472f8a7b4f726e5a00574890920512.jpg?imwidth=1260"
    ],
    description:
      "A timeless piece every wardrobe needs. This Van Heusen classic white shirt is versatile, breathable, and perfect for formal as well as semi-formal occasions.",
    faqs: [
      { q: "Does it shrink after wash?", a: "No, it maintains its shape after multiple washes." },
      { q: "Is it see-through?", a: "No, the fabric is thick enough to avoid transparency." },
      { q: "Can women wear this?", a: "Yes, it is unisex with regular sizing." }
    ],
    reviews: [
      { user: "Kiran", comment: "Superb fabric and classy look.", rating: 5 },
      { user: "Aditya", comment: "My go-to formal shirt now!", rating: 4 },
      { user: "Deepak", comment: "Looks premium and fits great.", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Arrow Checked Casual Shirt",
    price: "₹2,499 (25% OFF)",
    images: [
      "https://image.hm.com/assets/hm/49/1c/491cebdaf1929634c34e2efe62e64d85579d3610.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/61/9c/619c953d93f3d4c1100dd53ff45ded1a16303c31.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/23/b1/23b1005147e69acc9eee85f37934ed72fb6f5673.jpg?imwidth=1260"
    ],
    description:
      "This casual checked shirt from Arrow combines style and comfort. Designed with breathable cotton and modern patterns, it’s ideal for weekend outings or casual Fridays.",
    faqs: [
      { q: "Is this slim or regular fit?", a: "It’s a modern slim fit." },
      { q: "Can I wear this in summer?", a: "Yes, the cotton fabric keeps you cool." },
      { q: "Does the color fade?", a: "No, it has color-lock technology." }
    ],
    reviews: [
      { user: "Ravi", comment: "Stylish shirt for casual outings.", rating: 4 },
      { user: "Megha", comment: "Bought it for my husband, looks smart!", rating: 5 },
      { user: "Sahil", comment: "Comfortable fabric, worth the price.", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "Peter England Linen Blend Shirt",
    price: "₹2,099 (10% OFF)",
    images: [
      "https://image.hm.com/assets/hm/ca/1f/ca1fda51e09a782112d25e85441e8b6e74af62de.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/d1/95/d1957064a3364731cea1c250c2b6245a2b79f1c8.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/db/29/db29af9f0c4cf03de87b956de7d46aa3fcb1b98b.jpg?imwidth=1260"
    ],
    description:
      "Made with a premium linen blend, this shirt offers a lightweight and breathable experience. Ideal for summer days while keeping a semi-formal look intact.",
    faqs: [
      { q: "Is this shirt summer-friendly?", a: "Yes, linen makes it breathable." },
      { q: "Does it require ironing?", a: "Light ironing is recommended for best appearance." },
      { q: "Can I wear it to office?", a: "Yes, perfect for semi-formal office looks." }
    ],
    reviews: [
      { user: "Harsha", comment: "Very light and airy, love it!", rating: 5 },
      { user: "Teja", comment: "Good fit, but wrinkles easily.", rating: 4 },
      { user: "Praveen", comment: "Great summer shirt.", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Raymond Cotton Blend Shirt",
    price: "₹2,799 (30% OFF)",
    images: [
      "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description:
      "Raymond’s premium cotton blend shirt is tailored for a sharp, confident look. The fine finish and durable material make it a wardrobe essential for professionals.",
    faqs: [
      { q: "Does this shirt have stretch?", a: "Yes, it has 2% elastane for comfort." },
      { q: "Is it machine washable?", a: "Yes, it is machine-wash friendly." },
      { q: "Can I tuck it in easily?", a: "Yes, the length is perfect for tucking." }
    ],
    reviews: [
      { user: "Rajesh", comment: "Premium feel, fits great!", rating: 5 },
      { user: "Akhil", comment: "Stylish and comfortable at the same time.", rating: 4 },
      { user: "Manoj", comment: "Perfect for office wear.", rating: 5 }
    ]
  },
  {
    id: 6,
    name: "Blackberrys Stretch Fit Shirt",
    price: "₹2,199 (18% OFF)",
    images: [
      "https://i.ibb.co/k9YpbLG/shirt6-front.jpg",
      "https://i.ibb.co/GpPV1gz/shirt6-side.jpg",
      "https://i.ibb.co/DLpRbDp/shirt6-back.jpg"
    ],
    description:
      "Designed with stretchable fabric, this Blackberrys shirt ensures maximum comfort and movement without losing its stylish slim-fit appeal.",
    faqs: [
      { q: "Does it stretch?", a: "Yes, it has elastane for added comfort." },
      { q: "Is this business casual?", a: "Yes, perfect for smart casual occasions." },
      { q: "Can I iron it?", a: "Yes, iron on low heat setting." }
    ],
    reviews: [
      { user: "Vikram", comment: "Best stretch-fit shirt I’ve bought!", rating: 5 },
      { user: "Amit", comment: "Good shirt, but bit tight on shoulders.", rating: 4 },
      { user: "Rohit", comment: "Comfortable for all-day wear.", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "Marks & Spencer Striped Shirt",
    price: "₹1,699 (22% OFF)",
    images: [
      "https://i.ibb.co/dcvrW6t/shirt7-front.jpg",
      "https://i.ibb.co/7CfZq1b/shirt7-side.jpg",
      "https://i.ibb.co/R7K6F2J/shirt7-back.jpg"
    ],
    description:
      "A modern striped shirt that combines elegance with minimalism. Crafted from soft cotton, ideal for both work and weekend wear.",
    faqs: [
      { q: "Is it soft on skin?", a: "Yes, it’s made from premium soft cotton." },
      { q: "Does it come in other colors?", a: "Yes, available in 3 color variants." },
      { q: "What fit is it?", a: "It’s a regular fit." }
    ],
    reviews: [
      { user: "Santosh", comment: "Loved the stripes, looks trendy.", rating: 5 },
      { user: "Mohan", comment: "Good shirt for daily office use.", rating: 4 },
      { user: "Chaitanya", comment: "Fabric is smooth and durable.", rating: 5 }
    ]
  },
  {
    id: 8,
    name: "Tommy Hilfiger Denim Shirt",
    price: "₹3,299 (28% OFF)",
    images: [
      "https://i.ibb.co/QMpxs9H/shirt8-front.jpg",
      "https://i.ibb.co/CMcL3dP/shirt8-side.jpg",
      "https://i.ibb.co/YLmmwbm/shirt8-back.jpg"
    ],
    description:
      "This denim shirt adds a rugged yet stylish appeal. Durable, comfortable, and designed for casual outings or layering.",
    faqs: [
      { q: "Is it heavy?", a: "No, it’s lightweight denim fabric." },
      { q: "Does it shrink?", a: "No, it maintains size after wash." },
      { q: "Can it be worn in summer?", a: "Yes, it’s breathable enough." }
    ],
    reviews: [
      { user: "Suresh", comment: "Looks very stylish with jeans.", rating: 5 },
      { user: "Rakesh", comment: "Perfect fit and quality denim.", rating: 4 },
      { user: "Kalyan", comment: "Worth the money.", rating: 5 }
    ]
  },
  {
    id: 9,
    name: "Allen Solly Casual Printed Shirt",
    price: "₹1,899 (20% OFF)",
    images: [
      "https://i.ibb.co/BGPC3Cp/shirt9-front.jpg",
      "https://i.ibb.co/5MGCK9G/shirt9-side.jpg",
      "https://i.ibb.co/DYybcZf/shirt9-back.jpg"
    ],
    description:
      "Bring fun to your wardrobe with this Allen Solly printed shirt. Made with breathable cotton, it’s perfect for casual weekends.",
    faqs: [
      { q: "Is this shirt slim fit?", a: "Yes, it’s slim fit." },
      { q: "Will the print fade?", a: "No, it is print-lock treated." },
      { q: "Can I wear it with chinos?", a: "Yes, pairs well with chinos and jeans." }
    ],
    reviews: [
      { user: "Vinay", comment: "Trendy design and comfy fabric.", rating: 5 },
      { user: "Shiva", comment: "Good for casual evenings.", rating: 4 },
      { user: "Prashanth", comment: "Very stylish and good quality.", rating: 5 }
    ]
  },
  {
    id: 10,
    name: "U.S. Polo Assn. Checked Shirt",
    price: "₹2,499 (18% OFF)",
    images: [
      "https://i.ibb.co/wKSPcGc/shirt10-front.jpg",
      "https://i.ibb.co/9T9RLtq/shirt10-side.jpg",
      "https://i.ibb.co/DkZxJ6j/shirt10-back.jpg"
    ],
    description:
      "This checked shirt by U.S. Polo Assn. is a perfect blend of sporty and casual style. Comfortable fit with long-lasting fabric.",
    faqs: [
      { q: "Is this shirt regular fit?", a: "Yes, it’s a regular fit shirt." },
      { q: "Is it suitable for college wear?", a: "Yes, great for casual and college looks." },
      { q: "Does it shrink?", a: "No, it is pre-shrunk fabric." }
    ],
    reviews: [
      { user: "Naveen", comment: "Good casual shirt, fabric is sturdy.", rating: 4 },
      { user: "Tarun", comment: "Looks smart and fits nicely.", rating: 5 },
      { user: "Akash", comment: "Really good quality.", rating: 5 }
    ]
  },
  {
    id: 11,
    name: "Levi’s Oxford Shirt",
    price: "₹2,199 (25% OFF)",
    images: [
      "https://i.ibb.co/7zV4sFS/shirt11-front.jpg",
      "https://i.ibb.co/sCPNY2P/shirt11-side.jpg",
      "https://i.ibb.co/xDGk7Lc/shirt11-back.jpg"
    ],
    description:
      "Levi’s oxford shirt offers a blend of formal and casual elegance. Its soft cotton fabric and classic styling make it versatile.",
    faqs: [
      { q: "Is it wrinkle resistant?", a: "Yes, minimal ironing required." },
      { q: "Can I wear it untucked?", a: "Yes, it has a stylish curved hem." },
      { q: "Is the color durable?", a: "Yes, it doesn’t fade easily." }
    ],
    reviews: [
      { user: "Venu", comment: "Premium and soft fabric.", rating: 5 },
      { user: "Raghav", comment: "Fits true to size.", rating: 4 },
      { user: "Lokesh", comment: "Great quality for the price.", rating: 5 }
    ]
  },
  {
    id: 12,
    name: "Park Avenue Solid Navy Shirt",
    price: "₹2,299 (15% OFF)",
    images: [
      "https://i.ibb.co/yk9FmSc/shirt12-front.jpg",
      "https://i.ibb.co/RjLXJh3/shirt12-side.jpg",
      "https://i.ibb.co/5LnvbKn/shirt12-back.jpg"
    ],
    description:
      "Park Avenue brings a solid navy shirt, a wardrobe must-have for professionals. Sharp, durable, and classy.",
    faqs: [
      { q: "Is this slim fit?", a: "Yes, it’s slim fit." },
      { q: "Does it bleed color?", a: "No, it retains its deep navy shade." },
      { q: "Can it be worn for interviews?", a: "Yes, perfect formal wear." }
    ],
    reviews: [
      { user: "Sridhar", comment: "Looks amazing with grey trousers.", rating: 5 },
      { user: "Ritesh", comment: "Great office wear option.", rating: 4 },
      { user: "Bhaskar", comment: "Comfortable fabric and premium look.", rating: 5 }
    ]
  },
  {
    id: 13,
    name: "Calvin Klein Black Formal Shirt",
    price: "₹3,499 (20% OFF)",
    images: [
      "https://i.ibb.co/pwMGtmy/shirt13-front.jpg",
      "https://i.ibb.co/XWpHJcM/shirt13-side.jpg",
      "https://i.ibb.co/x5ygnSh/shirt13-back.jpg"
    ],
    description:
      "An elegant black formal shirt from Calvin Klein. Tailored for perfection, it’s a symbol of style and sophistication.",
    faqs: [
      { q: "Does it lose color?", a: "No, it holds color well." },
      { q: "Is this a party wear shirt?", a: "Yes, perfect for formal parties and dinners." },
      { q: "Is ironing required?", a: "Minimal ironing needed." }
    ],
    reviews: [
      { user: "Sahil", comment: "Looks bold and stylish.", rating: 5 },
      { user: "Irfan", comment: "Good slim fit formal shirt.", rating: 4 },
      { user: "Harish", comment: "Loved the quality and brand feel.", rating: 5 }
    ]
  },
  {
    id: 14,
    name: "Zara Casual Relaxed Fit Shirt",
    price: "₹2,499 (30% OFF)",
    images: [
      "https://i.ibb.co/nbJGzQw/shirt14-front.jpg",
      "https://i.ibb.co/G2jPW8g/shirt14-side.jpg",
      "https://i.ibb.co/YfQX1Wc/shirt14-back.jpg"
    ],
    description:
      "A relaxed fit Zara shirt designed for casual occasions. Lightweight and stylish with a modern cut.",
    faqs: [
      { q: "Is this oversized?", a: "Yes, slightly oversized look." },
      { q: "Can I pair with shorts?", a: "Yes, works well with denim and shorts." },
      { q: "Is the fabric breathable?", a: "Yes, perfect for summers." }
    ],
    reviews: [
      { user: "Rohan", comment: "Trendy and comfortable.", rating: 5 },
      { user: "Nishant", comment: "Great casual wear.", rating: 4 },
      { user: "Varun", comment: "Loved the cut and fit.", rating: 5 }
    ]
  },
 {
  id: 15,
  name: "John Players Contemporary Fit Shirt",
  price: "₹1,799 (20% OFF)",
  images: [
    "https://johnplayers.img/contemporary-shirt-front.jpg",
    "https://johnplayers.img/contemporary-shirt-side.jpg",
    "https://johnplayers.img/contemporary-shirt-back.jpg"
  ],
  description:
    "The John Players Contemporary Fit Shirt is tailored with a modern touch, offering a stylish fit that complements both casual and semi-formal outfits. The soft cotton blend fabric ensures all-day comfort while maintaining a sharp look.",
  faqs: [
    { q: "Is this shirt slim fit?", a: "It has a contemporary fit which is slightly tapered but comfortable." },
    { q: "What occasions is this best for?", a: "Ideal for casual Fridays, evening outings, and semi-formal events." },
    { q: "Does it fade with washing?", a: "No, it is designed with fade-resistant dyes for long-lasting color." },
    { q: "Is ironing necessary?", a: "Minimal ironing required as the fabric resists creases." }
  ],
  reviews: [
    { user: "Rohit", comment: "Perfect balance of comfort and style!", rating: 5 },
    { user: "Anil", comment: "Good material but I had to size up slightly.", rating: 4 },
    { user: "Simran", comment: "Bought it for my brother, he loved the fit!", rating: 5 }
  ]
}
]




const Product1 = () => {
return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">NEW ARRIVALS - T-SHIRTS</h2>

      {/* Carousel */}


      {/* Product Grid */}
      <Row>
        {Shirts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 product-card">
              <Card.Img
                variant="top"
                src={product.images[0]}
                className="product-img"
              />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/shirt/product/${product.id}`}>
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

export default Product1;
