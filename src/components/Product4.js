import React from "react";
import { Container, Row, Col, Card, Button,  } from "react-bootstrap";
import { Link } from "react-router-dom";

import './NewArrivals.css';

export const newSarees = [
  {
    id: 1,
    name: "Kanchipuram Silk Saree",
    price: "₹12,999",
    offer: "20% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "A premium handwoven Kanchipuram Silk Saree with golden zari work. Ideal for weddings, festivals, and special occasions. Luxurious silk drape with authentic craftsmanship from Tamil Nadu.",
    faqs: [
      { q: "Is this saree pure silk?", a: "Yes, it's 100% pure Kanchipuram silk with silk mark certification." },
      { q: "Does it come with blouse piece?", a: "Yes, it includes an attached blouse piece." },
      { q: "How do I maintain it?", a: "Dry clean only. Store in muslin cloth for longer life." }
    ],
    reviews: [
      { user: "Priya", comment: "Loved the quality! Perfect for my sister’s wedding.", rating: 5 },
      { user: "Deepika", comment: "The zari is so detailed and elegant.", rating: 4 },
      { user: "Suman", comment: "Bit heavy but worth it!", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Banarasi Silk Saree",
    price: "₹9,999",
    offer: "15% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg",
      "https://images.unsplash.com/photo-1625326248445-f3b3f7e2d9bb?w=600"
    ],
    description:
      "Exquisite Banarasi silk saree with intricate zari floral motifs and rich pallu. A timeless choice for brides and festive occasions.",
    faqs: [
      { q: "What is the length of the saree?", a: "It is 6.3 meters including blouse piece." },
      { q: "Can I wear it in summer?", a: "Yes, but being silk, it is best for cooler evenings." },
      { q: "Is it handloom?", a: "Yes, woven by Banaras artisans." }
    ],
    reviews: [
      { user: "Aarti", comment: "Superb craftsmanship! Got so many compliments.", rating: 5 },
      { user: "Megha", comment: "Rich and royal look. Loved it.", rating: 5 },
      { user: "Kavya", comment: "Packaging was beautiful too!", rating: 4 }
    ]
  },
  {
    id: 3,
    name: "Chiffon Printed Saree",
    price: "₹1,899",
    offer: "25% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Lightweight chiffon saree with floral digital prints. A comfortable choice for office wear and casual outings.",
    faqs: [
      { q: "Is this see-through?", a: "It’s semi-transparent with lining blouse piece." },
      { q: "How to wash?", a: "Mild hand wash with cold water." },
      { q: "Does it come pre-stitched?", a: "No, it’s a regular unstitched saree." }
    ],
    reviews: [
      { user: "Shalini", comment: "Very comfortable for daily wear.", rating: 4 },
      { user: "Neha", comment: "Soft material, worth the price.", rating: 4 },
      { user: "Tina", comment: "Colors are vibrant!", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "Georgette Embroidered Saree",
    price: "₹3,499",
    offer: "30% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Graceful georgette saree with sequin embroidery and elegant borders. Perfect for parties and receptions.",
    faqs: [
      { q: "How heavy is this saree?", a: "It’s lightweight and easy to drape." },
      { q: "Does it need ironing?", a: "Yes, light steam ironing works best." },
      { q: "Is it machine washable?", a: "No, we recommend dry cleaning." }
    ],
    reviews: [
      { user: "Madhuri", comment: "Shiny and gorgeous for evening events!", rating: 5 },
      { user: "Pooja", comment: "Material feels premium.", rating: 4 },
      { user: "Anu", comment: "Loved the embroidery design.", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Cotton Handloom Saree",
    price: "₹2,499",
    offer: "10% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Eco-friendly cotton handloom saree crafted by artisans. Ideal for summer daily wear with breathable fabric.",
    faqs: [
      { q: "Does color fade?", a: "No, it uses natural dyes and remains vibrant." },
      { q: "Is blouse included?", a: "Yes, comes with cotton blouse piece." },
      { q: "Good for office?", a: "Yes, it’s formal yet comfortable." }
    ],
    reviews: [
      { user: "Jyoti", comment: "Very comfortable and skin-friendly.", rating: 5 },
      { user: "Asha", comment: "Simple and elegant look.", rating: 4 },
      { user: "Sunita", comment: "Good quality fabric.", rating: 5 }
    ]
  },
    {
    id: 6,
    name: "Organza Floral Saree",
    price: "₹3,799",
    offer: "22% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Light and airy organza saree featuring digital floral prints and delicate zari borders. Perfect for brunch parties, casual weddings, and festive occasions.",
    faqs: [
      { q: "Does it come with lining?", a: "No, it comes with blouse fabric; lining can be added while stitching." },
      { q: "Is this saree transparent?", a: "Yes, organza fabric is semi-transparent." },
      { q: "Can I iron it?", a: "Yes, use low heat steam iron." }
    ],
    reviews: [
      { user: "Ritika", comment: "Beautiful and classy look.", rating: 5 },
      { user: "Swati", comment: "Feels premium and light.", rating: 4 },
      { user: "Neetu", comment: "Loved the floral design!", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "Paithani Silk Saree",
    price: "₹14,499",
    offer: "18% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Authentic Maharashtrian Paithani silk saree with traditional peacock motifs on the pallu. Known for its elegance and rich weaving heritage.",
    faqs: [
      { q: "Is this handloom?", a: "Yes, handcrafted by Paithani weavers." },
      { q: "Blouse included?", a: "Yes, matching blouse piece included." },
      { q: "Occasion?", a: "Perfect for weddings, pujas, and festive wear." }
    ],
    reviews: [
      { user: "Manisha", comment: "True traditional beauty!", rating: 5 },
      { user: "Komal", comment: "Heavy but royal look.", rating: 4 },
      { user: "Rashmi", comment: "Totally worth it.", rating: 5 }
    ]
  },
  {
    id: 8,
    name: "Tussar Silk Saree",
    price: "₹7,999",
    offer: "20% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Elegant tussar silk saree with hand-painted madhubani motifs. Unique earthy texture makes it a collector’s piece.",
    faqs: [
      { q: "What’s the saree length?", a: "6.3 meters including blouse piece." },
      { q: "Is this eco-friendly?", a: "Yes, made with natural silk fibers." },
      { q: "Maintenance?", a: "Dry clean only." }
    ],
    reviews: [
      { user: "Sudha", comment: "Loved the hand painting!", rating: 5 },
      { user: "Rani", comment: "Simple yet elegant.", rating: 4 },
      { user: "Jaya", comment: "Great quality tussar.", rating: 5 }
    ]
  },
  {
    id: 9,
    name: "Net Embellished Saree",
    price: "₹4,299",
    offer: "30% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Trendy net saree embellished with sequins and beads. Perfect for cocktail parties and modern receptions.",
    faqs: [
      { q: "Is it heavy?", a: "No, it’s lightweight but looks glamorous." },
      { q: "Can I drape it easily?", a: "Yes, but use safety pins for secure hold." },
      { q: "Blouse included?", a: "Yes, with sequin work blouse fabric." }
    ],
    reviews: [
      { user: "Divya", comment: "Glamorous and stylish.", rating: 5 },
      { user: "Sneha", comment: "Loved it for my party!", rating: 5 },
      { user: "Karishma", comment: "Shiny and trendy.", rating: 4 }
    ]
  },
  {
    id: 10,
    name: "Linen Saree",
    price: "₹2,999",
    offer: "12% Off",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Breathable linen saree in pastel shades with contrast borders. A sophisticated pick for summer and office wear.",
    faqs: [
      { q: "Is it soft?", a: "Yes, it’s pre-softened linen fabric." },
      { q: "Can I machine wash?", a: "Yes, gentle machine wash." },
      { q: "Is blouse included?", a: "Yes, with matching linen blouse piece." }
    ],
    reviews: [
      { user: "Geeta", comment: "Comfortable and light.", rating: 5 },
      { user: "Lavanya", comment: "Perfect for summer.", rating: 4 },
      { user: "Pallavi", comment: "Very elegant drape.", rating: 5 }
    ]
  },
  {
    id: 11,
    name: "Bandhani Saree",
    price: "₹5,499",
    offer: "25% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Traditional Bandhani saree from Gujarat with tie-dye patterns. Vibrant and festive choice for Navratri and Diwali.",
    faqs: [
      { q: "Is this hand-dyed?", a: "Yes, hand-tied and dyed by artisans." },
      { q: "How to wash?", a: "Dry clean to maintain colors." },
      { q: "Occasions?", a: "Best for traditional festivals and family functions." }
    ],
    reviews: [
      { user: "Kiran", comment: "So colorful and festive.", rating: 5 },
      { user: "Ankita", comment: "Loved wearing it at Navratri.", rating: 5 },
      { user: "Harsha", comment: "Bright colors, worth it.", rating: 4 }
    ]
  },
  {
    id: 12,
    name: "Designer Party Saree",
    price: "₹6,999",
    offer: "20% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Designer saree with shimmer fabric, sequin borders, and glamorous appeal. A statement outfit for receptions.",
    faqs: [
      { q: "Is it ready-to-wear?", a: "No, it’s a regular saree with blouse piece." },
      { q: "Is it stretchy?", a: "No, shimmer fabric is non-stretch." },
      { q: "Good for wedding?", a: "Yes, perfect for night receptions." }
    ],
    reviews: [
      { user: "Anjali", comment: "Looked like a diva!", rating: 5 },
      { user: "Snehal", comment: "Eye-catching piece.", rating: 5 },
      { user: "Poonam", comment: "Loved the shimmer.", rating: 4 }
    ]
  },
  {
    id: 13,
    name: "Kota Doria Saree",
    price: "₹3,199",
    offer: "15% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Lightweight Kota Doria saree from Rajasthan, known for its unique square weave and breezy fabric.",
    faqs: [
      { q: "Is it transparent?", a: "Yes, slightly see-through fabric." },
      { q: "Daily wear?", a: "Yes, great for hot summers." },
      { q: "Blouse included?", a: "Yes, plain blouse piece included." }
    ],
    reviews: [
      { user: "Neelam", comment: "Super comfy for daily wear.", rating: 4 },
      { user: "Bhavna", comment: "Lightweight and stylish.", rating: 5 },
      { user: "Meena", comment: "Very traditional yet modern.", rating: 5 }
    ]
  },
  {
    id: 14,
    name: "Velvet Saree",
    price: "₹8,499",
    offer: "28% Off",
    images: [
 "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Luxurious velvet saree with golden embroidery and regal look. A premium pick for winter weddings.",
    faqs: [
      { q: "Is velvet heavy?", a: "Yes, slightly heavy but very elegant." },
      { q: "Winter wear?", a: "Yes, best suited for colder seasons." },
      { q: "Dry clean only?", a: "Yes, to maintain fabric sheen." }
    ],
    reviews: [
      { user: "Simran", comment: "Looked royal in it!", rating: 5 },
      { user: "Radhika", comment: "Warm and elegant.", rating: 5 },
      { user: "Meher", comment: "Rich fabric quality.", rating: 4 }
    ]
  },
  {
    id: 15,
    name: "Kalamkari Saree",
    price: "₹4,799",
    offer: "20% Off",
    images: [
       "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Artistic Kalamkari saree with hand-printed mythological designs. A storytelling masterpiece on fabric.",
    faqs: [
      { q: "Is it hand-painted?", a: "Yes, traditional hand-printing technique." },
      { q: "Does color fade?", a: "No, natural dyes last long." },
      { q: "Occasions?", a: "Festivals, cultural events, and traditional ceremonies." }
    ],
    reviews: [
      { user: "Alka", comment: "Unique and beautiful art.", rating: 5 },
      { user: "Barkha", comment: "Got compliments everywhere!", rating: 5 },
      { user: "Kusum", comment: "A must-have in collection.", rating: 5 }
    ]
  },
  {
    id: 16,
    name: "Banarasi Silk Saree - Royal Blue",
    price: "₹4,999 (10% OFF)",
    images: [
      "https://i.ibb.co/VxZWqLz/banarasi-blue-1.jpg",
      "https://i.ibb.co/4g9yhj8/banarasi-blue-2.jpg",
      "https://i.ibb.co/2tK5Qjc/banarasi-blue-3.jpg"
    ],
    description:
      "This Royal Blue Banarasi Silk Saree is a timeless masterpiece, handwoven with intricate zari motifs. Perfect for weddings, festivals, and grand celebrations. Its luxurious texture and lightweight drape make it both elegant and comfortable.",
    faqs: [
      { q: "Is the blouse piece included?", a: "Yes, an unstitched blouse piece is included with the saree." },
      { q: "How do I maintain it?", a: "Dry clean only. Avoid direct sunlight while storing." },
      { q: "Can I wear it for summer weddings?", a: "Yes, the silk is lightweight and comfortable for all seasons." }
    ],
    reviews: [
      { user: "Aishwarya", comment: "Loved it! Got so many compliments at my cousin’s wedding.", rating: 5 },
      { user: "Meena", comment: "The fabric is rich and the zari work is elegant.", rating: 4 },
      { user: "Pooja", comment: "Worth the price, totally recommend it.", rating: 5 }
    ]
  },
  {
    id: 17,
    name: "Kanjeevaram Silk Saree - Maroon & Gold",
    price: "₹7,999 (15% OFF)",
    images: [
      "https://i.ibb.co/7GSz6FL/kanjeevaram-maroon-1.jpg",
      "https://i.ibb.co/7QjsK29/kanjeevaram-maroon-2.jpg",
      "https://i.ibb.co/gSmKdSz/kanjeevaram-maroon-3.jpg"
    ],
    description:
      "Authentic Kanjeevaram Silk Saree with maroon body and golden zari border. A traditional favorite for South Indian weddings and cultural festivities.",
    faqs: [
      { q: "What is the length of the saree?", a: "The saree length is 6.3 meters including blouse piece." },
      { q: "Is it handwoven?", a: "Yes, this saree is handwoven by artisans." },
      { q: "Can it be machine washed?", a: "No, strictly dry clean only." }
    ],
    reviews: [
      { user: "Deepa", comment: "A beautiful traditional saree. Felt like a bride myself.", rating: 5 },
      { user: "Sravani", comment: "Great quality silk, the zari shines beautifully.", rating: 5 },
      { user: "Latha", comment: "A bit heavy but looks gorgeous.", rating: 4 }
    ]
  },
  {
    id: 18,
    name: "Georgette Saree - Pastel Pink Embroidered",
    price: "₹2,499 (20% OFF)",
    images: [
      "https://i.ibb.co/hH1jmdC/georgette-pink-1.jpg",
      "https://i.ibb.co/kM3wR8L/georgette-pink-2.jpg",
      "https://i.ibb.co/cyfnVtv/georgette-pink-3.jpg"
    ],
    description:
      "Lightweight pastel pink georgette saree with floral embroidery. Ideal for parties, receptions, and casual festive gatherings.",
    faqs: [
      { q: "Does it come with a blouse?", a: "Yes, an embroidered blouse piece is attached." },
      { q: "Is it see-through?", a: "Slightly, as it’s georgette, but comes with lining option." },
      { q: "What occasions suit this saree?", a: "Perfect for evening parties and light celebrations." }
    ],
    reviews: [
      { user: "Anjali", comment: "Very elegant and classy look.", rating: 5 },
      { user: "Priya", comment: "Loved the embroidery. Worth it.", rating: 4 },
      { user: "Sneha", comment: "A bit delicate but stunning.", rating: 4 }
    ]
  },
  {
    id: 19,
    name: "Chiffon Saree - Yellow Floral Print",
    price: "₹1,899 (25% OFF)",
    images: [
      "https://i.ibb.co/khZB0v8/chiffon-yellow-1.jpg",
      "https://i.ibb.co/8KjYd7C/chiffon-yellow-2.jpg"
    ],
    description:
      "Light and breezy yellow chiffon saree with floral prints. A perfect daily wear choice for summers and casual gatherings.",
    faqs: [
      { q: "Does the print fade?", a: "No, it’s digitally printed and long-lasting." },
      { q: "Can it be worn without ironing?", a: "Yes, chiffon doesn’t crease much." },
      { q: "Is it good for office wear?", a: "Yes, it’s lightweight and formal enough." }
    ],
    reviews: [
      { user: "Kiran", comment: "Comfortable and stylish for work wear.", rating: 4 },
      { user: "Manisha", comment: "Loved the soft fabric.", rating: 5 },
      { user: "Bhavana", comment: "Affordable and chic.", rating: 4 }
    ]
  },
  {
    id: 20,
    name: "Cotton Handloom Saree - White with Red Border",
    price: "₹2,199 (10% OFF)",
    images: [
      "https://i.ibb.co/5M4c5k0/cotton-handloom-1.jpg",
      "https://i.ibb.co/LnVDQpV/cotton-handloom-2.jpg"
    ],
    description:
      "Classic handloom cotton saree in white with red border, inspired by Bengal traditions. Light, breathable, and perfect for cultural events.",
    faqs: [
      { q: "Is it see-through?", a: "Mildly, but manageable with proper drape." },
      { q: "Is it soft?", a: "Yes, gets softer with each wash." },
      { q: "Can I wear it daily?", a: "Yes, it’s made for comfort and durability." }
    ],
    reviews: [
      { user: "Sudha", comment: "Simple yet elegant. Got many compliments.", rating: 5 },
      { user: "Jyoti", comment: "Best for festivals. Pure cotton feel.", rating: 4 },
      { user: "Radha", comment: "A bit stiff initially, but softens later.", rating: 4 }
    ]
  },

  // 👉 Continue the same format for 15 more sarees (Silk, Tissue, Organza, Net, Bandhani, Paithani, Linen, etc.)
];

const product4= () => {
  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">NEW ARRIVALS  - SAREES</h2>

      {/* Carousel */}


      {/* Product Grid */}
      <Row>
        {newSarees.map((product) => (
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
                <Link to={`/New/product/${product.id}`}>
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
export default product4