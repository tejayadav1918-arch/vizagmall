import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resto.css';
const categories = ['All', 'T-Shirts', 'Shirts', 'Jeans', 'Kurtas', 'Shorts', 'Trousers', 'Jackets'];
// Example products (20 items)
export const tradproducts = [
  {
       id: 1,
    name: "Madhubani Painting",
    price: "₹1500",
    description: "Traditional folk painting from Bihar with vibrant colors and intricate patterns.",
    images: [
      "https://i.etsystatic.com/26441189/r/il/10ddda/2957459852/il_fullxfull.2957459852_8sn6.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2020/9/VA/YN/MI/113830010/product-jpeg-1000x1000.jpg",
      "https://www.madhubani-art.in/wp-content/uploads/2018/05/1-1.jpg"
    ],
    faqs: [{ q: "What is Madhubani?", a: "A folk art from Bihar." }],
    reviews: [
      { user: "Amit", rating: 5, comment: "Beautiful work!" },
      { user: "Sita", rating: 4, comment: "Great colors." }
    ],
    category: "decor"
  },
  {
    id: 2,
    name: "Banarasi Saree",
    price: "₹8500",
    description: "Luxurious silk saree from Varanasi with intricate zari work.",
    images: [
      "https://www.pothys.com/cdn/shop/files/12A-bsak-026.jpg?v=1747462711&width=600",
"https://www.pothys.com/cdn/shop/files/12d_109dea14-e5c2-42d8-8bde-3008a775df9a.jpg?v=1747462711&width=600",
      "https://cdn.shopify.com/s/files/1/0591/5501/7343/products/Banarasi-Silk-Saree-2_600x.jpg"
    ],
    faqs: [{ q: "Material?", a: "Pure silk with gold/silver zari." }],
    reviews: [
      { user: "Neha", rating: 5, comment: "Very elegant and comfortable." },
      { user: "Ravi", rating: 4, comment: "Perfect for weddings." }
    ],
    category: "women"
  },
  {
    id: 3,
    name: "Kalamkari Fabric",
    price: "₹1200",
    description: "Hand-painted cotton fabric using natural dyes from Andhra Pradesh.",
    images: [
"https://www.prashantisarees.com/cdn/shop/files/BVH3723-6.jpg?crop=center&height=1269&v=1755784481&width=940",
      "https://www.prashantisarees.com/cdn/shop/files/BVH3723-6a.jpg?crop=center&height=1269&v=1755784481&width=940",
      "https://www.prashantisarees.com/cdn/shop/files/BVH3723-6c.jpg?crop=center&height=1269&v=1755879343&width=940"
    ],
    faqs: [{ q: "What is Kalamkari?", a: "Hand-painted or block-printed fabric." }],
    reviews: [
      { user: "Arjun", rating: 5, comment: "Beautiful traditional prints." },
      { user: "Maya", rating: 4, comment: "Lightweight and soft." }
    ],
    category: "women"
  },
  {
    id: 4,
    name: "Channapatna Toys",
    price: "₹600",
    description: "Colorful wooden toys handcrafted in Karnataka using traditional lacquer work.",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.IPoLoe3g2cstu-yI_JZv1gHaE-?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse3.mm.bing.net/th/id/OIP.fOM7NS_QwZsUpRfeNmh78QHaFb?w=750&h=550&rs=1&pid=ImgDetMain&o=7&rm=3g",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1e778006-6416-4825-bdd3-344c79a80dfd.__CR49,0,983,608_PT0_SX970_V1___.jpg"
    ],
    faqs: [{ q: "Are they safe for kids?", a: "Yes, non-toxic and eco-friendly." }],
    reviews: [
      { user: "Kiran", rating: 5, comment: "Kids love them!" },
      { user: "Rhea", rating: 4, comment: "Nice craftsmanship." }
    ],
    category: "kids"
  },
  {
    id: 5,
    name: "Phulkari Embroidery",
    price: "₹2500",
    description: "Vibrant floral embroidery from Punjab traditionally done on shawls and dupattas.",
    images: [
      "https://th.bing.com/th/id/OPAC.Mod80Xgz3DmCXA474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",
      "https://i.etsystatic.com/9816232/r/il/9dbaa2/7021840952/il_1588xN.7021840952_p1av.jpg",
      "https://i.etsystatic.com/9816232/r/il/80f119/7069817827/il_1588xN.7069817827_ae4n.jpg"
    ],
    faqs: [{ q: "Origin?", a: "Punjab folk embroidery." }],
    reviews: [
      { user: "Simran", rating: 5, comment: "Lovely traditional work." },
      { user: "Harpreet", rating: 4, comment: "Good quality threads." }
    ],
    category: "women"
  },
  {
    id: 6,
    name: "Pattachitra Painting",
    price: "₹1800",
    description: "Traditional scroll painting from Odisha, known for mythological themes.",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.Hn6pZ3d4jbP3A3Bbav5KjQHaFA?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://webneel.com/daily/sites/default/files/images/daily/05-2020/2-pattachitra-painting-radha-krishna.jpg",
      "https://webneel.com/daily/sites/default/files/images/daily/05-2020/7-pattachitra-painting-jagannath-eye.jpg"
    ],
    faqs: [{ q: "What is Pattachitra?", a: "Hand-painted scrolls on cloth or dried palm leaves." }],
    reviews: [
      { user: "Deepak", rating: 5, comment: "Intricate and colorful." },
      { user: "Lata", rating: 4, comment: "Very traditional art." }
    ],
    category: "decor"
  },
  {
    id: 7,
    name: "Bidriware Metal Craft",
    price: "₹4000",
    description: "Metal handicraft from Karnataka with silver inlay on blackened alloy.",
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.N-sBqCT1HMHBqoRfTdGunQHaEz?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.d5BjJCS9fmMbBZuBxLCaeAHaEV?pid=ImgDet&w=474&h=277&rs=1&o=7&rm=3",
      "https://tse1.mm.bing.net/th/id/OIP.jkIHdzxphtCvOgJk06k64AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    faqs: [{ q: "What is Bidriware?", a: "Metal handicraft with silver inlay." }],
    reviews: [
      { user: "Rohan", rating: 5, comment: "Beautiful contrast and design." },
      { user: "Neeta", rating: 4, comment: "Great for gifts." }
    ],
    category: "decor"
  },
  {
    id: 8,
    name: "Blue Pottery Jaipur",
    price: "₹2200",
    description: "Glazed ceramic craft with vibrant colors from Jaipur, Rajasthan.",
    images: [
      "https://www.neerja.com/cdn/shop/products/BPCJ-001_613x.progressive.jpg?v=1677478606",
      "https://www.neerja.com/cdn/shop/products/BPCJ-001.1_613x.progressive.jpg?v=1677478597",
      "https://www.neerja.com/cdn/shop/products/BPCJ-001.2_612x.progressive.jpg?v=1677478615"
    ],
    faqs: [{ q: "Material?", a: "Glazed ceramic." }],
    reviews: [
      { user: "Pooja", rating: 5, comment: "Elegant and colorful." },
      { user: "Manish", rating: 4, comment: "Delicate but beautiful." }
    ],
    category: "decor"
  },
  {
    id: 9,
    name: "Dokra Metal Craft",
    price: "₹3500",
    description: "Ancient lost-wax metal casting technique from tribal India.",
    images: [
      "https://thumbs.dreamstime.com/b/brass-gold-dokra-metal-craft-maa-durga-set-dhokra-non-ferrous-casting-using-lost-wax-technique-160421842.jpg",
      "https://thumbs.dreamstime.com/b/brass-gold-dokra-metal-craft-maa-durga-set-dhokra-non-ferrous-casting-using-lost-wax-technique-160421842.jpg",
      "https://images.news18.com/ibnlive/uploads/2024/10/untitled-design-2024-10-5a3d5b57084a7d438eac60e74edcb8cb-16x9.png?impolicy=website&width=640&height=360"
    ],
    faqs: [{ q: "Technique?", a: "Lost-wax casting." }],
    reviews: [
      { user: "Suresh", rating: 5, comment: "Rustic and unique." },
      { user: "Kavita", rating: 4, comment: "Great cultural artifact." }
    ],
    category: "decor"
  },
  {
    id: 10,
    name: "Kanchipuram Silk Saree",
    price: "₹9500",
    description: "Rich silk saree with temple borders from Tamil Nadu.",
    images: [
      "https://www.prashantisarees.com/cdn/shop/files/TFP0257.jpg?crop=center&height=1269&v=1756557203&width=940",
      "https://www.prashantisarees.com/cdn/shop/files/TFP0257a.jpg?crop=center&height=1269&v=1756557203&width=940",
      "https://www.prashantisarees.com/cdn/shop/files/TFP0257b.jpg?crop=center&height=1269&v=1756557203&width=940"
    ],
    faqs: [{ q: "Known for?", a: "Pure silk and rich borders." }],
    reviews: [
      { user: "Anjali", rating: 5, comment: "Perfect for weddings." },
      { user: "Vijay", rating: 4, comment: "Luxurious feel." }
    ],
    category: "women"
  },
  {
    id: 11,
    name: "Bandhani Dupatta",
    price: "₹1800",
    description: "Tie-dye textile art from Gujarat with bright patterns.",
    images: [
      "https://www.ratanshikheraj.com/cdn/shop/files/MG_0004copy.png?format=pjpg&v=1756558532&width=600",
      "https://www.ratanshikheraj.com/cdn/shop/files/MG_0007copy.png?format=pjpg&v=1756558532&width=600",
      "https://www.ratanshikheraj.com/cdn/shop/files/MG_0008copy.png?format=pjpg&v=1756558532&width=600"
    ],
    faqs: [{ q: "What is Bandhani?", a: "Traditional tie-dye textile." }],
    reviews: [
      { user: "Priya", rating: 5, comment: "Beautiful vibrant colors." },
      { user: "Raj", rating: 4, comment: "Very lightweight and soft." }
    ],
    category: "women"
  },
  {
    id: 12,
    name: "Kutch Embroidery",
    price: "₹2000",
    description: "Intricate hand embroidery from Kutch region in Gujarat.",
    images: [
      "https://amounee.com/cdn/shop/products/16906321601340737431.jpg?v=1690632178&width=600",
      "https://amounee.com/cdn/shop/products/16906321601806288108.jpg?v=1690632178&width=600",
      
    ],
    faqs: [{ q: "Origin?", a: "Kutch district, Gujarat." }],
    reviews: [
      { user: "Meena", rating: 5, comment: "Amazing craftsmanship." },
      { user: "Sunil", rating: 4, comment: "Detailed and colorful." }
    ],
    category: "women"
  },
  {
    id: 13,
    name: "Warli Art",
    price: "₹1200",
    description: "Tribal art from Maharashtra with monochrome geometric patterns.",
    images: [
      "https://i.pinimg.com/originals/42/d5/9b/42d59b08fc27cbeec75bd39928778003.jpg",
      "https://m.media-amazon.com/images/I/8129tsk-i0L.jpg",
      "https://pwonlyias.com/wp-content/uploads/2024/01/Untitled-100-1.webp"
    ],
    faqs: [{ q: "What is Warli?", a: "Tribal painting style from Maharashtra." }],
    reviews: [
      { user: "Sanjay", rating: 5, comment: "Simple yet meaningful." },
      { user: "Anita", rating: 4, comment: "Great cultural art." }
    ],
    category: "decor"
  },
  {
    id: 14,
    name: "Phad Painting",
    price: "₹1600",
    description: "Traditional scroll painting depicting folk tales from Rajasthan.",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.-JzDxtE-dl3opf44dVq_dAHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://indianfolkart.org/wp-content/uploads/2021/07/Phad-painting-Abishek-Joshi-15.jpeg",
      "https://indianfolkart.org/wp-content/uploads/2021/07/Phad-painting-Abishek-Joshi-18.jpeg"
    ],
    faqs: [{ q: "What is Phad?", a: "Scroll painting narrating folk stories." }],
    reviews: [
      { user: "Rakesh", rating: 5, comment: "Colorful and traditional." },
      { user: "Sunita", rating: 4, comment: "Beautiful storytelling art." }
    ],
    category: "decor"
  },
  {
    id: 15,
    name: "Tanjore Painting",
    price: "₹3000",
    description: "Classical South Indian painting style with gold foil work.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Tanjore_painting.jpg",
      "https://cdn.shopify.com/s/files/1/0437/0490/9446/products/Tanjore-Painting-1_600x.jpg",
      "https://cdn.shopify.com/s/files/1/0437/0490/9446/products/Tanjore-Painting-2_600x.jpg"
    ],
    faqs: [{ q: "Known for?", a: "Gold foil and vibrant colors." }],
    reviews: [
      { user: "Lalitha", rating: 5, comment: "Rich and detailed art." },
      { user: "Ravi", rating: 4, comment: "Excellent craftsmanship." }
    ],
    category: "decor"
  },
  {
    id: 16,
    name: "Pochampally Ikat",
    price: "₹3500",
    description: "Tie-dye textile from Telangana with geometric patterns.",
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.bmbsp12iX326jUrzzb_mkgHaJV?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/R.af8bd9b62436d1224640ce3fde64a706?rik=q%2ff69%2bC5lwGR3Q&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f08-2015%2f6-tanjore-painting-guruvayur-krishna.jpg&ehk=e%2fCyXtxdbPq0Nz3vWFR%2bkJXD%2fpZ8ioQ9e3oUDkpL3AA%3d&risl=&pid=ImgRaw&r=0",
      "https://www.cholaimpressions.com/Blog%20Images/IMG20180916105858.jpg"
    ],
    faqs: [{ q: "What is Ikat?", a: "Resist dyeing technique on yarns." }],
    reviews: [
      { user: "Manoj", rating: 5, comment: "Elegant and unique patterns." },
      { user: "Divya", rating: 4, comment: "Soft and colorful fabric." }
    ],
    category: "unisex"
  },
  {
    id: 17,
    name: "Kasuti Embroidery",
    price: "₹2800",
    description: "Traditional folk embroidery from Karnataka using intricate stitches.",
    images: [
      "https://itokri.com/cdn/shop/files/632A8787_8c35cdc1-7bb0-4c4a-8a3c-92cb3358ed0d.jpg?crop=center&height=2000&v=1711698500&width=2000",
      "https://itokri.com/cdn/shop/files/632A8930.jpg?crop=center&height=2000&v=1711698501&width=2000",
      "https://itokri.com/cdn/shop/files/632A8931.jpg?crop=center&height=2000&v=1711698503&width=2000"
    ],
    faqs: [{ q: "What is Kasuti?", a: "Intricate folk embroidery of Karnataka." }],
    reviews: [
      { user: "Geeta", rating: 5, comment: "Very delicate and beautiful." },
      { user: "Rajesh", rating: 4, comment: "Perfect craftsmanship." }
    ],
    category: "women"
  },
  {
    id: 18,
    name: "Kalamkari Art",
    price: "₹2100",
    description: "Hand-painted or block-printed cotton textile from Andhra Pradesh.",
    images: [
      "https://itokri.com/cdn/shop/files/0Q8A2215_6cac89e6-6991-49a6-a727-5d7fc9d4e9bd.jpg?crop=center&height=2000&v=1755783086&width=2000",
      "https://itokri.com/cdn/shop/files/0Q8A2218-Copy.jpg?crop=center&height=2000&v=1755783087&width=2000",
      "https://itokri.com/cdn/shop/files/0Q8A2219_4142f014-3a84-435d-96ab-82731ab3e2b8.jpg?crop=center&height=2000&v=1755783086&width=2000"
    ],
    faqs: [{ q: "Difference from fabric?", a: "Art focuses on painting; fabric is material." }],
    reviews: [
      { user: "Nikhil", rating: 5, comment: "Rich cultural heritage." },
      { user: "Shweta", rating: 4, comment: "Great colors and design." }
    ],
    category: "unisex"
  },
  {
    id: 19,
    name: "Terracotta Jewelry",
    price: "₹1200",
    description: "Handcrafted earthen jewelry with traditional designs.",
    images: [
      "https://i.etsystatic.com/28670706/r/il/22890c/5651750478/il_1588xN.5651750478_8bhm.jpg",
      "https://i.etsystatic.com/28670706/r/il/5a42e6/5699815513/il_1588xN.5699815513_1kfs.jpg",
      "https://i.etsystatic.com/28670706/r/il/72d97c/5651752336/il_1588xN.5651752336_p1gl.jpg"
    ],
    faqs: [{ q: "Is it fragile?", a: "Handled carefully, lasts long." }],
    reviews: [
      { user: "Anita", rating: 5, comment: "Lightweight and beautiful." },
      { user: "Sunil", rating: 4, comment: "Perfect ethnic accessory." }
    ],
    category: "women"
  },
  {
    id: 20,
    name: "Bamboo Crafts",
    price: "₹900",
    description: "Eco-friendly crafts made from bamboo by skilled artisans.",
    images: [
      "https://i.etsystatic.com/56971455/r/il/14a43a/6931423335/il_1588xN.6931423335_puho.jpg",
      "https://i.etsystatic.com/56971455/r/il/3a0e97/6883444014/il_1588xN.6883444014_4htn.jpg",
      "https://i.etsystatic.com/56971455/r/il/5f053d/6931423313/il_1588xN.6931423313_oy1q.jpg"
    ],
    faqs: [{ q: "Are these sustainable?", a: "Yes, made from renewable bamboo." }],
    reviews: [
      { user: "Kartik", rating: 5, comment: "Eco-friendly and durable." },
      { user: "Neha", rating: 4, comment: "Beautifully crafted." }
    ],
    category: "decor"
  },
]

const Offertraditional = () => {
const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? tradproducts
      : tradproducts.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-5">
       
      <h1 className="mb-3 " style={{color:"red",textAlign:"center",fontSize:"100npmpx" }}>MEGA SALE IS LIVE</h1>
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
                  onClick={() => navigate(`/Trade/product/${product.id}`)}
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

export default Offertraditional