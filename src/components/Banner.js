import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Banner.css'; 
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card,Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  const brandLogos = [
    { name: "Nike", img: "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png", path: "/brand/nike" },
    { name: "Adidas", img: "https://static.vecteezy.com/system/resources/thumbnails/010/994/276/small_2x/adidas-logo-symbol-clothes-design-icon-abstract-football-illustration-free-vector.jpg", path: "/brand/adidas" },
    { name: "Puma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTkSfRU3DaXyMgJvFtqyrCsM2nlcmcJ12hw&s", path: "/brand/puma" },
    { name: "Zara", img: "https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png", path: "/brand/zara" },
    { name: "H&M", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png", path: "/brand/hm" }
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };
   const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div>
    <div className="hero-container">
        <img
          style={{ height: '700px',alignItems: 'center', display: 'flex' }}
          className="hero-banner"
          src={require('./ChatGPT Image Aug 18, 2025, 02_23_43 PM.png')}
          alt="Second slide"
        />
         <div className="hero-overlay">
       
        <Button variant="danger" size="lg" href="/homenpm">
          Shop Now
        </Button>
      </div>
    </div>
 <Container className="jam my-5">
      <h2 className="text-center mb-4">Featured Categories</h2>

      {/* 🖥 Desktop Grid */}
      <Row className="d-none d-md-flex">
        {/* Men’s Wear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={require("./ai-generated-stylish-african-american-man-in-fashionable-green-coat-over-turquoise-background-ideal-for-fashion-concepts-and-st-patricks-day-promotions-photo.jpg")}
            />
            <Card.Body>
              <Card.Title>Men’s Wear</Card.Title>
              <Card.Text>Explore the latest trends for men.</Card.Text>
              <Button as={Link} to="/dining/restaurant1" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Women’s Wear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={require("./three-models-posing-under-falling-silver-confetti-yellow-background-panorama-party-time-girls-fancy-dresses-standing-studio-166196344.webp")}
            />
            <Card.Body>
              <Card.Title>Women’s Wear</Card.Title>
              <Card.Text>Chic and stylish clothing for women.</Card.Text>
              <Button as={Link} to="/dining/restaurant2" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Kids’ Wear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={require("./ChatGPT Image Aug 16, 2025, 10_55_05 AM.png")}
            />
            <Card.Body>
              <Card.Title>Kids’ Wear</Card.Title>
              <Card.Text>Fun and comfy styles for kids.</Card.Text>
              <Button as={Link} to="/dining/restaurant3" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Sports Wear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={require("./full-body-side-view-strong-600nw-1896088138.webp")}
            />
            <Card.Body>
              <Card.Title>Sports Wear</Card.Title>
              <Card.Text>Style That Keeps You Moving.</Card.Text>
              <Button as={Link} to="/dining/restaurant4" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Footwear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require("./Fi-_8_.webp")} />
            <Card.Body>
              <Card.Title>Footwear</Card.Title>
              <Card.Text>
                Step into comfort with our footwear collection.
              </Card.Text>
              <Button as={Link} to="/dining/restaurant5" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Traditional Wear */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={require("./1000_F_533258864_PQTsIw41cclzKcf34Idsh3HmNnxkRbRm.jpg")}
            />
            <Card.Body>
              <Card.Title>Traditional Wear</Card.Title>
              <Card.Text>Where Culture Meets Style.</Card.Text>
              <Button as={Link} to="/dining/restaurant6" variant="danger">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 📱 Mobile Carousel */}
      <div className="d-md-none">
        <Carousel indicators={false}>
          {/* Men’s Wear */}
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src={require("./ai-generated-stylish-african-american-man-in-fashionable-green-coat-over-turquoise-background-ideal-for-fashion-concepts-and-st-patricks-day-promotions-photo.jpg")}
              />
              <Card.Body>
                <Card.Title>Men’s Wear</Card.Title>
                <Card.Text>Explore the latest trends for men.</Card.Text>
                <Button as={Link} to="/dining/restaurant1" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Women’s Wear */}
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src={require("./three-models-posing-under-falling-silver-confetti-yellow-background-panorama-party-time-girls-fancy-dresses-standing-studio-166196344.webp")}
              />
              <Card.Body>
                <Card.Title>Women’s Wear</Card.Title>
                <Card.Text>Chic and stylish clothing for women.</Card.Text>
                <Button as={Link} to="/dining/restaurant2" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Kids’ Wear */}
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src={require("./ChatGPT Image Aug 16, 2025, 10_55_05 AM.png")}
              />
              <Card.Body>
                <Card.Title>Kids’ Wear</Card.Title>
                <Card.Text>Fun and comfy styles for kids.</Card.Text>
                <Button as={Link} to="/dining/restaurant3" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Sports Wear */}
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src={require("./full-body-side-view-strong-600nw-1896088138.webp")}
              />
              <Card.Body>
                <Card.Title>Sports Wear</Card.Title>
                <Card.Text>Style That Keeps You Moving.</Card.Text>
                <Button as={Link} to="/dining/restaurant4" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Footwear */}
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src={require("./Fi-_8_.webp")} />
              <Card.Body>
                <Card.Title>Footwear</Card.Title>
                <Card.Text>
                  Step into comfort and style with our footwear collection.
                </Card.Text>
                <Button as={Link} to="/dining/restaurant5" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Traditional Wear */}
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src={require("./1000_F_533258864_PQTsIw41cclzKcf34Idsh3HmNnxkRbRm.jpg")}
              />
              <Card.Body>
                <Card.Title>Traditional Wear</Card.Title>
                <Card.Text>Where Culture Meets Style.</Card.Text>
                <Button as={Link} to="/dining/restaurant6" variant="danger">
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
      
        <div className="trending-section">
      <h2 className="section-title">🔥 Trending Products</h2>

      {/* Desktop Grid */}
      <div className="trending-grid desktop-view">
        <div className="trending-card">
          <img src={require("./medium-shot-guy-with-red-jacket-looking-away.jpg")} alt="Men Fashion" />
          <h3>Stylish Jacket</h3>
          <Link to="/product/mens-fashion">
            <button className="view-more-btn">View Product</button>
          </Link>
        </div>

        <div className="trending-card">
          <img src={require("./young-indian-woman-wearing-sari.jpg")} alt="Women Fashion" />
          <h3>Elegant Saree</h3>
          <Link to="/product/Womens-fashion">
            <button className="view-more-btn">View Product</button>
          </Link>
        </div>

        <div className="trending-card">
          <img src={require("./closeup-jogger-man-near-sea.jpg")} alt="Kids Fashion" />
          <h3>Running Shoes</h3>
          <Link to="/product/running-shoes">
            <button className="view-more-btn">View Product</button>
          </Link>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="mobile-view">
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="trending-card">
              <img src={require("./medium-shot-guy-with-red-jacket-looking-away.jpg")} alt="Men Fashion" />
              <h3>Stylish Jacket</h3>
              <Link to="/product/mens-fashion">
                <button className="view-more-btn">View Product</button>
              </Link>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="trending-card">
              <img src={require("./young-indian-woman-wearing-sari.jpg")} alt="Women Fashion" />
              <h3>Elegant Saree</h3>
              <Link to="/product/Womens-fashion">
                <button className="view-more-btn">View Product</button>
              </Link>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="trending-card">
              <img src={require("./closeup-jogger-man-near-sea.jpg")} alt="Kids Fashion" />
              <h3>Running Shoes</h3>
              <Link to="/product/running-shoes">
                <button className="view-more-btn">View Product</button>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <br></br>
      {/* Offers Section */}
      <div className="offers-section">
        <div className="offers-banner">
          <p>🎉 Exclusive Discounts this Week! 🎉</p>
          <h2>Up to 50% off on selected items</h2>
          <br />
          <Link to="/offers">
            <button className="view-more-btn">View More Offers</button>
          </Link>
        </div>
        </div>
      </div>
      <div className="featured-brands" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Brands</h2>
      <Slider {...settings}>
        {brandLogos.map((brand, idx) => (
          <div key={idx} className="brand-card" style={{ padding: '10px', textAlign: 'center' }}>
            <Link to={brand.path}>
              <img 
                src={brand.img} 
                alt={brand.name} 
                style={{ maxHeight: '80px', objectFit: 'contain', margin: '0 auto' }} 
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
    <div className="new-arrivals-section">
  <h2 className="section-title">New Arrivals</h2>
  <div className="product-grid">
    {[
      { id: 1, image:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww" , path: "/product/product1" },
      { id: 2,  image: "https://images.unsplash.com/photo-1628071711153-d0204a351a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwYXJyaXZhbHMlMjBzaGlydHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", path: "/product/product2" },
      { id: 3, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  path: "/product/product3" },
      { id: 4,  image: "https://plus.unsplash.com/premium_photo-1724762180569-1f40acf9c87f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  path: "/product/product4" },
    ].map((product) => (
      <a href={product.path} key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <button className="view-btn1">View Details</button>
        </div>
      </a>
      
    ))}
  </div>
</div>
<div className="best-sellers-section">
  <h2 className="section-title">🔥 Best Sellers 🔥</h2>
  <p className="section-subtitle">Our most popular products loved by customers</p>

  <div className="product-grid">
    {[
      { id: 1, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4853cb76-73e6-4282-8662-91843f6a3a97/WMNS+AIR+JORDAN+1+MM+LOW+V3.png", price: "50% OFF", path: "/product7" },
      { id: 2, image: "https://www.koskii.com/cdn/shop/files/koskii-purple-threadwork-chiffon-designer-saree-saus0038518_purple_1_3.jpg?v=1748424959&width=1800", price: "30% OFF", path: "/product8" },
      { id: 3,  image: "https://sevendc.in/cdn/shop/products/SevenDesign_0390.jpg?v=1679565302&width=1000", price: "20% OFF ", path: "/product9" },
      { id: 4,  image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlc3QlMjB0c2hpcnRzfGVufDB8fDB8fHww", price: "10% OFF", path: "/product10" },
    ].map((product) => (
      <a href={product.path} key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <button className="view-btn">View Details</button>
        </div>
      </a>
    ))}
  </div>
</div>
  <div className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>

      <Slider {...testimonialSettings}>
        <div>
          <div className="testimonial-card">
            <p>
        "This website is amazing! The quality of the products exceeded my
        expectations and the delivery was super fast. I was a little hesitant at
        first, but now I’m a loyal customer!"
      </p>
      <h4>- John Doe.</h4>
          </div>
        </div>

        <div>
          <div className="testimonial-card">
           <p>
        "I’ve been shopping here for a few months now and every single order has
        been perfect. The packaging is neat, and the support team is always quick
        to respond to my queries. Highly recommended!"
      </p>
      <h4>- Sarah W.</h4>
          </div>
        </div>

        <div>
          <div className="testimonial-card">
            <p>
        "Customer service was super helpful when I wanted to exchange a product.
        The process was smooth and hassle-free. It feels like they really care
        about their customers, which is rare these days."
      </p>
      <h4>- Michael B., Regular Shopper</h4>
          </div>
        </div>
        <div>
    <div className="testimonial-card">
      <p>
        "The collection is very trendy and always updated. I found exactly what
        I was looking for, and at a better price than other sites. This has
        become my go-to store for shopping online!"
      </p>
      <h4>- Priya K., Lifestyle Blogger</h4>
    </div>
  </div>
      </Slider>
    </div>
    

      </div>
        
      
  
  );
}

export default Banner;
