import React from 'react'
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './components/Offers.css'; // Import your CSS file for styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import CountdownBanner from './components/CountdownBanner';



const Offers = () => {
  
 const categories = [
  { id: 1, name: "Mens fashion", img: "https://static.fibre2fashion.com//articleresources/images/104/10372/Men's%20Fashion%20(1)-s_Small.jpg", path: "/fashion" },
  { id: 2, name: "Women's fashions", img: "https://thumbs.dreamstime.com/b/portrait-two-sexy-pretty-beautiful-women-fashion-style-clothes-sisters-long-curly-hair-perfect-make-up-people-lifestyle-113021487.jpg", path: "/Womensfashion" },
  { id: 3, name: "Kids Fashions", img: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/floral_ethnic_wear_for_kids_by_utsa.jpg?v=1597833877", path: "/Kidsfashion" },
  { id: 4, name: "Footwear", img: "https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=", path: "/Footwear" },
  { id: 5, name: "Traditional wear", img: "https://st2.depositphotos.com/55662868/48966/i/450/depositphotos_489668632-stock-photo-model-showcases-latest-indian-bridal.jpg", path: "/Traditional" },
];

const settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
    
    {
      breakpoint: 480, // mobile
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
  
};// 3s

  return (
      <div>
      <div className="offers-hero">
        <Slider {...settings}>
      <Carousel  indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/marketing-superlatives-concept-megaphone-advert-extra-super-exclusive-sale-communication-overuses-words-221797696.jpg" // Replace with your offer image path
            alt="First offer"
          />
          <Carousel.Caption>
            <Button variant="danger" size="lg">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg"
            alt="Second offer"
          />
          <Carousel.Caption>
            <Button variant="danger" size="lg">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/16/24/12/17/240_F_1624121794_9souMHfZBY78JorxXpLixN5Px9nmMbqw.jpg"
            alt="Third offer"
          />
          <Carousel.Caption>
            <Button variant="danger" size="lg">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Slider>
    </div>
    <div className="offers-page">
      {/* Hero Section */}


      {/* Offers Grid */}
      <section className="offers-grid">
        <div className="offer-card">
          <img src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=" alt="Mens Fashion" />
          <h2>Men's Fashion</h2>
          <p>Upto 50% Off</p>
        </div>

        <div className="offer-card">
          <img src= {require('./components/photo-1483985988355-763728e1935b.jpg')} alt=''/>
          <h2>Women's Fashion</h2>
          <p>Flat 40% Off</p>
        </div>

        <div className="offer-card">
          <img src={require('./components/sports-shoe-pair-design-illustration-generated-by-ai (1).jpg')}  alt="Shoes" />
          <h2>Footwear</h2>
          <p>Upto 60% Off</p>
        </div>

        <div className="offer-card">
          <img src={require('./components/dancing-team-studio.jpg')} alt="Electronics" />
          <h2>Kids Wear</h2>
          <p>Upto 30% Off</p>
        </div>
      </section>
    </div>
<div className="category-carousel">
      <h2 className="section-title">🔥 Exclusive Deals by Category</h2>
      <Slider {...settings1}>
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <div className="overlay">
              <h3>{cat.name}</h3>
              <Link to={cat.path} className="shop-btn">Shop Now</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <CountdownBanner />
    </div>

  )
}

export default Offers