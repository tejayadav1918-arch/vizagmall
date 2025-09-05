import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { products } from "./Puma"; // products from Puma.js
import "./ProductPage.css";
import CartButton from "../components/CartButton";

const PumaProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h2>Product not found!</h2>
        <Link to="/puma">
          <Button variant="dark" className="mt-3">Back to Puma</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        {/* Sticky Carousel Left */}
        <Col md={5}>
          <div className="sticky-carousel">
            <Carousel>
              {product.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 rounded"
                    src={img}
                    alt={`Slide ${idx}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>

        {/* Product Details Right */}
        <Col md={7}>
          <h2>{product.name}</h2>
          <h4 className="text-danger">{product.price}</h4>
          <p>{product.description}</p>
           

          {/* FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <>
              <h5>FAQs:</h5>
              <ul>
                {product.faqs.map((faq, idx) => (
                  <li key={idx}>{faq}</li>
                ))}
              </ul>
            </>
          )}

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <>
              <h5>Reviews:</h5>
              {product.reviews.map((rev, idx) => (
                <Card key={idx} className="mb-2 p-2">
                  <strong>{rev.user}</strong> - {rev.rating}⭐
                  <p>{rev.comment}</p>
                </Card>
              ))}
            </>
          )}

          <div className="mt-4 d-flex gap-2">
            <CartButton product={product} /> 
<Link to="/puma">
  <Button variant="secondary" className="mt-3">Back to Puma</Button>
</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PumaProductPage;
