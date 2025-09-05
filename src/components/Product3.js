import React from "react";
import { Container, Row, Col, Card, Button,  } from "react-bootstrap";
import { Link } from "react-router-dom";

import './NewArrivals.css';
export const newShoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus 39",
    price: "₹8,999",
    offer: "15% Off",
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-1.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-2.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-3.jpg"
    ],
    description: "The Nike Air Zoom Pegasus 39 is built for speed and comfort with lightweight cushioning and superior breathability, making it a go-to for daily runs and training sessions.",
    faqs: [
      { q: "Is this good for running?", a: "Yes, it is designed specifically for runners with responsive cushioning." },
      { q: "Can I use it for gym workouts?", a: "Yes, though it is primarily a running shoe, it also works well for gym sessions." },
      { q: "Is it durable?", a: "Built with Nike's strong outsole and mesh, it’s durable for long-term use." }
    ],
    reviews: [
      { user: "Amit", comment: "Super comfortable for my 10k runs.", rating: 5 },
      { user: "Priya", comment: "Stylish and fits well!", rating: 4 },
      { user: "Rahul", comment: "Bit pricey, but worth it for performance.", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    price: "₹12,999",
    offer: "10% Off",
    images: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-22-1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-22-2.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-22-3.jpg"
    ],
    description: "Adidas Ultraboost 22 delivers plush cushioning, energy return, and a Primeknit upper for all-day comfort whether running or casual wear.",
    faqs: [
      { q: "Are these shoes washable?", a: "Yes, but only with gentle hand wash or mild cleaning." },
      { q: "Does it provide arch support?", a: "Yes, it comes with built-in arch support for comfort." }
    ],
    reviews: [
      { user: "Sneha", comment: "The cushioning feels like walking on clouds.", rating: 5 },
      { user: "Vikas", comment: "Good for long walks and gym too.", rating: 4 }
    ]
  },
  {
    id: 3,
    name: "Puma Velocity Nitro 2",
    price: "₹7,499",
    offer: "20% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Puma Velocity Nitro 2 offers lightweight foam cushioning and durable outsole grip for speed and endurance.",
    faqs: [
      { q: "Can I use them for marathons?", a: "Yes, they are well suited for long-distance running." },
      { q: "How is the grip?", a: "The outsole provides excellent traction on multiple surfaces." }
    ],
    reviews: [
      { user: "Arjun", comment: "Excellent shoe for my daily running routine.", rating: 5 },
      { user: "Neha", comment: "Breathable and super light.", rating: 4 }
    ]
  },
  {
    id: 4,
    name: "Reebok Nano X2",
    price: "₹6,999",
    offer: "25% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Reebok Nano X2 is designed for cross-training and intense workouts, offering stability, grip, and flexibility.",
    faqs: [
      { q: "Good for weightlifting?", a: "Yes, its flat sole is perfect for lifting." },
      { q: "Is it lightweight?", a: "Yes, but with added durability." }
    ],
    reviews: [
      { user: "Karan", comment: "Best for my gym sessions.", rating: 5 },
      { user: "Manish", comment: "Strong build but a little stiff.", rating: 4 }
    ]
  },
  {
    id: 5,
    name: "Under Armour HOVR Sonic 5",
    price: "₹9,499",
    offer: "12% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The UA HOVR Sonic 5 is lightweight, cushioned, and offers energy return technology with breathable mesh upper.",
    faqs: [
      { q: "Can I connect to the UA app?", a: "Yes, it comes with built-in chip connectivity for tracking." },
      { q: "Good for everyday wear?", a: "Yes, comfortable enough for casual use." }
    ],
    reviews: [
      { user: "Ravi", comment: "Perfect balance between tech and comfort.", rating: 5 },
      { user: "Anjali", comment: "Sleek design and comfortable fit.", rating: 4 }
    ]
  },
  {
    id: 6,
    name: "Asics Gel-Kayano 29",
    price: "₹13,499",
    offer: "18% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Asics Gel-Kayano 29 is a stability shoe built with FlyteFoam cushioning and GEL technology for overpronators.",
    faqs: [
      { q: "Is this good for flat feet?", a: "Yes, it offers excellent support for overpronation." },
      { q: "How durable is it?", a: "Highly durable with strong sole construction." }
    ],
    reviews: [
      { user: "Sunil", comment: "Best shoe for stability running.", rating: 5 },
      { user: "Megha", comment: "Really helps with my flat feet issue.", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "New Balance 1080v12",
    price: "₹11,499",
    offer: "14% Off",
    images: [
       "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The New Balance 1080v12 is cushioned for long runs with Fresh Foam X midsole, ensuring smooth and soft transitions.",
    faqs: [
      { q: "Is this lightweight?", a: "Yes, despite the cushioning, it feels very light." },
      { q: "Is it good for marathon training?", a: "Yes, highly recommended for long distances." }
    ],
    reviews: [
      { user: "Deepak", comment: "Very comfortable and responsive.", rating: 5 },
      { user: "Ruchi", comment: "Stylish and smooth running experience.", rating: 4 }
    ]
  },
  {
    id: 8,
    name: "Skechers GO RUN Razor 4",
    price: "₹9,999",
    offer: "20% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "Skechers GO RUN Razor 4 features Hyper Burst cushioning and carbon-infused plate for speed and performance.",
    faqs: [
      { q: "Good for racing?", a: "Yes, it’s designed for competitive running." },
      { q: "Is it flexible?", a: "Yes, it has a very flexible sole." }
    ],
    reviews: [
      { user: "Pooja", comment: "Really fast and lightweight.", rating: 5 },
      { user: "Rohit", comment: "One of the best shoes I’ve owned.", rating: 5 }
    ]
  },
    {
    id: 9,
    name: "Mizuno Wave Rider 26",
    price: "₹10,499",
    offer: "15% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg",],
    description: "Mizuno Wave Rider 26 combines wave plate technology with cushioned midsoles, providing responsive energy return for everyday runners.",
    faqs: [
      { q: "Is this shoe suitable for daily jogging?", a: "Yes, it’s perfect for everyday running and jogging." },
      { q: "Does it have arch support?", a: "Yes, it provides excellent midfoot and arch support." }
    ],
    reviews: [
      { user: "Ramesh", comment: "Amazing cushioning, feels smooth on roads.", rating: 5 },
      { user: "Alok", comment: "Solid shoe, but takes a little time to break in.", rating: 4 }
    ]
  },
  {
    id: 10,
    name: "Salomon Speedcross 6",
    price: "₹11,999",
    offer: "18% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Salomon Speedcross 6 is a trail running shoe with aggressive grip, precise fit, and excellent stability on rugged terrain.",
    faqs: [
      { q: "Good for mountain trails?", a: "Yes, it’s built specifically for trail running." },
      { q: "Is it waterproof?", a: "It comes with a water-resistant upper, not fully waterproof." }
    ],
    reviews: [
      { user: "Harsha", comment: "My go-to shoes for trekking.", rating: 5 },
      { user: "Neel", comment: "Great grip on muddy terrain.", rating: 4 }
    ]
  },
  {
    id: 11,
    name: "Hoka Clifton 8",
    price: "₹9,999",
    offer: "10% Off",
    images: [
       "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
   
    ],
    description: "Hoka Clifton 8 is known for maximum cushioning with lightweight foam, providing comfort for long runs and recovery days.",
    faqs: [
      { q: "Good for recovery runs?", a: "Yes, it is perfect for slow and easy runs." },
      { q: "Does it feel bulky?", a: "Despite the cushioning, it feels surprisingly light." }
    ],
    reviews: [
      { user: "Sonia", comment: "Love the comfort, feels like pillows on my feet.", rating: 5 },
      { user: "Naveen", comment: "Great for long-distance training.", rating: 4 }
    ]
  },
  {
    id: 12,
    name: "Brooks Ghost 15",
    price: "₹12,499",
    offer: "12% Off",
    images: [
       "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Brooks Ghost 15 offers a smooth ride with DNA Loft cushioning and balanced support for neutral runners.",
    faqs: [
      { q: "Can it handle marathons?", a: "Yes, ideal for long distances and races." },
      { q: "Is it breathable?", a: "Yes, with an engineered mesh upper." }
    ],
    reviews: [
      { user: "Dev", comment: "Reliable and cushioned for my half marathons.", rating: 5 },
      { user: "Ritu", comment: "Perfect for everyday wear too.", rating: 4 }
    ]
  },
  {
    id: 13,
    name: "Saucony Endorphin Speed 3",
    price: "₹13,999",
    offer: "20% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "Saucony Endorphin Speed 3 brings nylon plate propulsion, lightweight cushioning, and comfort for speed training and races.",
    faqs: [
      { q: "Is it a racing shoe?", a: "Yes, it’s designed for races and speed training." },
      { q: "Can beginners use it?", a: "Yes, but it’s better for intermediate/advanced runners." }
    ],
    reviews: [
      { user: "Imran", comment: "Super responsive and light, perfect for tempo runs.", rating: 5 },
      { user: "Gayathri", comment: "Takes my running game up a notch.", rating: 5 }
    ]
  },
  {
    id: 14,
    name: "Fila Disruptor II",
    price: "₹6,499",
    offer: "25% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
      
    ],
    description: "The Fila Disruptor II is a chunky lifestyle sneaker with bold aesthetics and retro styling for casual fashion wear.",
    faqs: [
      { q: "Good for sports?", a: "No, it’s mainly for casual wear." },
      { q: "Is it heavy?", a: "It’s slightly bulky but comfortable." }
    ],
    reviews: [
      { user: "Akshay", comment: "Love the street style vibe.", rating: 4 },
      { user: "Mahi", comment: "Looks amazing with jeans.", rating: 5 }
    ]
  },
  {
    id: 15,
    name: "Converse Chuck Taylor All Star",
    price: "₹4,499",
    offer: "15% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "Converse Chuck Taylor All Star is an iconic sneaker with timeless design, canvas upper, and rubber outsole for casual everyday wear.",
    faqs: [
      { q: "Is it durable?", a: "Yes, lasts long with proper care." },
      { q: "Can it be used for workouts?", a: "Not recommended, it’s more for lifestyle use." }
    ],
    reviews: [
      { user: "Rohini", comment: "Classic style that never goes out of trend.", rating: 5 },
      { user: "Suresh", comment: "Simple and iconic.", rating: 4 }
    ]
  },
  {
    id: 16,
    name: "Vans Old Skool",
    price: "₹5,999",
    offer: "20% Off",
    images: [
      "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Vans Old Skool features durable suede and canvas uppers, iconic side stripe, and classic vulcanized sole for skate and casual wear.",
    faqs: [
      { q: "Can I use it for skating?", a: "Yes, it’s a skateboarding shoe." },
      { q: "Does it fit true to size?", a: "Yes, it runs true to size." }
    ],
    reviews: [
      { user: "Aditya", comment: "My everyday casual sneakers.", rating: 5 },
      { user: "Rhea", comment: "Super comfortable and stylish.", rating: 4 }
    ]
  },
  {
    id: 17,
    name: "Jordan Air 1 Mid",
    price: "₹11,999",
    offer: "10% Off",
    images: [
       "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "Jordan Air 1 Mid offers premium leather design, iconic style, and comfort cushioning for sneaker lovers.",
    faqs: [
      { q: "Is it limited edition?", a: "Some colors are limited releases." },
      { q: "Is it good for basketball?", a: "Yes, though it’s now more of a lifestyle shoe." }
    ],
    reviews: [
      { user: "Kartik", comment: "Stylish and eye-catching!", rating: 5 },
      { user: "Anu", comment: "Expensive but worth the style.", rating: 4 }
    ]
  },
  {
    id: 18,
    name: "Nike Air Max 270",
    price: "₹9,499",
    offer: "15% Off",
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-1.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-2.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-zoom-pegasus-39-3.jpg"
    ],
    description: "Nike Air Max 270 features a visible air unit for maximum cushioning and a modern sporty look for everyday wear.",
    faqs: [
      { q: "Is it comfortable for walking?", a: "Yes, it’s extremely cushioned." },
      { q: "Is it lightweight?", a: "Yes, despite the large sole." }
    ],
    reviews: [
      { user: "Snehal", comment: "Feels like walking on air!", rating: 5 },
      { user: "Rajat", comment: "Stylish and super comfy.", rating: 5 }
    ]
  },
  {
    id: 19,
    name: "Yeezy Boost 350 V2",
    price: "₹21,999",
    offer: "8% Off",
    images: [
       "https://images.puma.com/image/upload/velocity-nitro-2-1.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-2.jpg",
      "https://images.puma.com/image/upload/velocity-nitro-2-3.jpg"
    ],
    description: "The Yeezy Boost 350 V2 features Primeknit upper, Boost midsole, and iconic lifestyle sneaker aesthetics.",
    faqs: [
      { q: "Is it limited stock?", a: "Yes, Yeezys are often released in limited quantities." },
      { q: "Is it comfortable?", a: "Yes, one of the most cushioned lifestyle sneakers." }
    ],
    reviews: [
      { user: "Shivam", comment: "Exclusive and super stylish.", rating: 5 },
      { user: "Ananya", comment: "Expensive but unique.", rating: 4 }
    ]
  },
  {
    id: 20,
    name: "Balenciaga Triple S",
    price: "₹59,999",
    offer: "5% Off",
    images: [
      "https://balenciaga.com/images/triple-s-1.jpg",
      "https://balenciaga.com/images/triple-s-2.jpg"
    ],
    description: "The Balenciaga Triple S is a luxury sneaker with oversized sole, premium build, and bold streetwear styling.",
    faqs: [
      { q: "Why so expensive?", a: "It’s a luxury designer sneaker with premium craftsmanship." },
      { q: "Is it heavy?", a: "Yes, it has a chunky, heavy sole." }
    ],
    reviews: [
      { user: "Rahul", comment: "The king of fashion sneakers.", rating: 5 },
      { user: "Isha", comment: "Not practical, but very stylish.", rating: 4 }
    ]
  }
];

  // Continue similarly up to 20 shoes...


const Product3 = () => {
return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">NEW ARRIVALS  - SHOES</h2>

      {/* Carousel */}


      {/* Product Grid */}
      <Row>
        {newShoes.map((product) => (
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
                <Link to={`/Shoes/product/${product.id}`}>
                  <Button variant="dark">View</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Product3