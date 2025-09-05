import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, InputGroup, FormControl, Button,Badge } from "react-bootstrap";
import { BsSearch } from "react-icons/bs"; // Search icon
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'; // Adjust the import path as necessary

import Banner from "./components/Banner"; // Adjust the import path as necessary
import Mensfashion from "./components/Mensfashion";
import WomensFashion from "./components/WomensFashion";
import RunningShoes from "./components/Runningshoes"; // Adjust the import path as necessary /
import NikePage from "./components/Nike";
import Zara from "./components/Zara";
import Adidas from "./components/Adidas"; // Adjust the import path as necessary
import Hm from "./components/Hm";
import Puma from "./components/Puma"; // Adjust the import path as necessary
 // Adjust the import path as necessary
import Product2 from "./components/Product2"; // Adjust the import path as necessary
import Product3 from "./components/Product3";
import Product4 from "./components/Product4"; // Adjust the import path as necessary
import Product7 from "./components/Product7"; // Adjust the import path as necessary
import Product8 from "./components/Product8"; // Adjust the import path as necessary
import Product9 from "./components/Product9"; // Adjust the import path as necessary
import Product10 from "./components/Product10"; // Adjust the import path as necessary
import About from "./About";
import Footer from "./components/Footer";
import Offers from "./Offers"; // Adjust the import path as necessary
import Offermen from "./components/Offermen";
import Offerwomen from "./components/Offerwomen";
import Offerkids from "./components/Offerkids" ; // Adjust the import path as necessary
import Offershoes from "./components/Offershoes";
import Offertraditional from "./components/Offertraditional";
import Eventspage from "./components/Eventspage";
import FashionShow from "./components/FashionShow";  // Adjust the import path as necessary
import FootExpo from "./components/FootExpo";
import Contact from "./components/Contact"; // Adjust the import path as necessary
import Faq from "./components/Faq"; // Adjust the import path as necessary
import Directory from "./components/Directory";
import Scrolltop from "./components/Scrolltop"; // Adjust the import path as necessary
import Restaurant1 from "./components/Restaurant1"; // Adjust the import path as necessary
import ProductPage from "./components/ProductPage";
import Restaurant2 from "./components/Restaurant2"; 
import ProductPage2 from "./components/ProductPage2";
import Restaurant3 from "./components/Restaurant3";
import ProductPage3 from "./components/ProductPage3";
import Restaurant4 from "./components/Restaurant4";
import ProductPage4 from "./components/ProductPage4";
import Restaurant5 from "./components/Restaurant5"; 
import ProductPage5 from "./components/Productpage5";
import Restaurant6 from "./components/Restaurant6";
import ProductPage6 from "./components/ProductPage6";

import PumaProducts from "./components/PumaProducts";
import Arrivals from "./components/Arrivals";
import Arrivals1 from "./components/Arrivals1";
import Arrivals2 from "./components/Arrival2";
import Arrivals3 from "./components/Arrivals3";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";
import AdidasProductPage from "./components/Adidasproducts";
import ZaraProductPage from "./components/Zaraproducts";
import HmProductPage from "./components/HMProducts";
import NikeProductPage from "./components/NIkeProducts";
import OfferProductPage1 from "./components/KidsOffer";
import OfferProductPage2 from "./components/Menoffer";
import OfferProductPage3 from "./components/Shoesoffer";
import OfferProductPage4 from "./components/TraditionalOffersPage";
import OfferProductPage5 from "./components/Womenoffer";
import Product1 from "./components/Product1";

 // Adjust the import path as necessary

 function App() {
  // Pages
  
 


  // Dining subpages
 


 


  return (
    <div>
      <Scrolltop/>
      <Navbar bg="danger" variant="dark" expand="lg" sticky="top">
        <Container>
          {/* Mall Name */}
          <Navbar.Brand as={Link} to="/" style={{ fontsize: "40px",color:"#fff"}}>VizagMall</Navbar.Brand>
          {/* Search Bar with Icon */}
          <Form className="d-flex mx-auto" style={{ flexGrow: 1, maxWidth: "1000px",marginLeft: "20px" }}>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <Button variant="outline-light">
                <BsSearch />
              </Button>
            </InputGroup>
          </Form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>

              {/* Dining Dropdown */}
              <NavDropdown title="Featuring Catgeories" id="dining-dropdown">
                <NavDropdown.Item as={Link} to="/dining/restaurant1">MENS WEAR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dining/restaurant2">Women's Wear</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dining/restaurant3">Kids Wear</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dining/restaurant4">Sports Wear</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dining/restaurant5">Footwear</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dining/restaurant6">Traditional Wear</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/offers">OFFERS</Nav.Link>
              <Nav.Link as={Link} to="/events">EVENTS</Nav.Link>
              <Nav.Link as={Link} to="/contact">SUPPORT&FEEDBACK</Nav.Link>
              <Nav.Link href="/cart" className="position-relative">
              🛒 Cart

            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      {/* Page Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/events" element={<Eventspage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Banner />} />

        {/* Dining Routes */}
        <Route path="/dining/restaurant1" element={<Restaurant1 />} />
        <Route path="/dining/restaurant2" element={<Restaurant2 />} />
        <Route path="/dining/restaurant3" element={<Restaurant3 />} />
        <Route path="/dining/restaurant4" element={<Restaurant4 />} />
        <Route path="/dining/restaurant5" element={<Restaurant5 />} />
        <Route path="/dining/restaurant6" element={<Restaurant6 />} />
     <Route path="/product/mens-fashion" element={<Mensfashion />} />
     <Route path="/product/womens-fashion" element={<WomensFashion />} />
     <Route path="/product/running-shoes" element={<RunningShoes />} />
        <Route path="/brand/adidas" element={<Adidas />} />
        <Route path="/brand/zara" element={<Zara />} />
        <Route path="/brand/nike" element={<NikePage />} />
        <Route path="/brand/hm" element={< Hm/>} />
        <Route path="/brand/puma" element={<Puma />} />
        <Route path="/product/product1" element={<Product1 />} />  
        <Route path="/product/product2" element={<Product2 />} />    
        <Route path="/product/product3" element={<Product3 />} /> 
        <Route path="/product/product4" element={<Product4 />} /> 
        <Route path="/product7" element={<Product7 />} />
        <Route path="/product8" element={<Product8 />} />
        <Route path="/product9" element={<Product9 />} />
        <Route path="/product10" element={<Product10 />} />
        <Route path="/fashion" element={< Offermen/>} />
        <Route path="/Womensfashion" element={<Offerwomen />} />
        <Route path="/kidsfashion" element={<Offerkids />} />
        <Route path="/Footwear" element={<Offershoes />} />
        <Route path="/Traditional" element={<Offertraditional />} />
        <Route path="/FashionShow" element={<FashionShow />} />
        <Route path="/Explore" element={<FootExpo />} /> 
        <Route path="/faq" element={<Faq />} />
        <Route path="/stores" element={<Directory />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/product/:id" element={<ProductPage />} />
       <Route path="/womens/product/:id" element={<ProductPage2 />} />
       <Route path="/kids/product/:id" element={<ProductPage3 />} />
       <Route path="/sports/product/:id" element={<ProductPage4 />} />
       <Route path="/footwear/product/:id" element={<ProductPage5/>}/>
       <Route path="/Trade/product/:id" element={<ProductPage6/>}/>
       <Route path="/puma/product/:id" element={<PumaProducts/>}/>
       <Route path="/puma" element={<Puma/>}/>
       <Route path="/adidas/product/:id" element={<AdidasProductPage/>}/>
       <Route path="/adidas" element={<Adidas/>}/>
       <Route path="/zara/product/:id"element={<ZaraProductPage/>}/>
       <Route path="/zara" element={<Zara/>}/>
       <Route path="/hm/product/:id" element={<HmProductPage/>}/>
       <Route path="/hm" element={<Hm/>}/>
       <Route path="/nike/product/:id" element={<NikeProductPage/>}/>
       <Route path="/nike" element={<NikePage/>}/>
       <Route path="/kidsoffer/product/:id" element={<OfferProductPage1/>}/>
      <Route path="/offermen/product/:id" element={<OfferProductPage2/>}/>
      <Route path="/footwear/product/:id" element={<OfferProductPage3/>}/>
      <Route path="/Trade/product/:id" element={<OfferProductPage4/>}/>
      <Route path="/womens/product/:id" element={<OfferProductPage5/>}/>
       <Route path="/Tshirt/product/:id" element={<Arrivals/>}/>
       <Route path="/shirt/product/:id" element={<Arrivals1/>}/>
       <Route path="/Shoes/product/:id" element={<Arrivals2/>}/>
       <Route path="/New/product/:id" element={<Arrivals3/>}/>
                 <Route path="/cart" element={<CartPage />} />

  

        

      </Routes>
     
    
    <Footer />
    </div>
  );
}

export default App;
