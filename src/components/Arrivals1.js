import React from "react";
import { useParams, } from "react-router-dom";
import { Container, Row, Col, Button, Carousel,Card } from "react-bootstrap";
import { Shirts } from "./Product1"; // Make sure the path is correct
import CartButton from "../components/CartButton";

const Arrivals1 = () => {
  const { id } = useParams();
  const product = Shirts.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  // Provide default empty arrays for faqs and reviews
  const faqs = product.faqs || [];
  const reviews = product.reviews || [];

  return (
    <Container className="my-5">
      <Row>
        {/* Sticky Carousel on Left */}
        <Col md={5}>
          <div className="sticky-carousel">
            <Carousel>
              {/* If you have multiple images, loop through them */}
              {(product.images || [product.images]).map((img, idx) => (
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

        {/* Product Details on Right */}
        <Col md={7}>
          <h2>{product.name}</h2>
          <h4 className="text-danger">{product.price}</h4>
          <p>{product.description}</p>

<div className="mt-3">
  <h5>FAQs:</h5>
  <ul>
    {product.faqs.map((faq, idx) => (
      <li key={idx}>
        <strong>Q: {faq.q}</strong> <br />
        A: {faq.a}
      </li>
    ))}
  </ul>
</div>

          <h5>Reviews:</h5>
          {product.reviews.map((rev, idx) => (
            <Card key={idx} className="mb-2 p-2">
              <strong>{rev.user}</strong> - {rev.rating}⭐
              <p>{rev.comment}</p>
            </Card>
          ))}
<Col xs={12} md={6}> 
<CartButton product={product} />
        </Col>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Arrivals1;
