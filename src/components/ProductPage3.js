import React from 'react';
import {  useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel, } from 'react-bootstrap';
import { products } from './Restaurant3'; // Adjust the import path as necessary
// Importing products from Restaurant1.js
import './ProductPage.css'; // We'll add sticky styles here
import CartButton from "../components/CartButton";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <Container><h2>Product not found!</h2></Container>;

  return (
    <Container className="my-5">
      <Row>
        {/* Sticky Carousel on Left */}
        <Col md={5}>
          <div className="sticky-carousel">
            <Carousel>
              {/* If you have multiple images, loop through them */}
              {(product.images || [product.image]).map((img, idx) => (
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

          <h5>FAQs:</h5>
          <ul>
            {product.faqs.map((faq, idx) => <li key={idx}>{faq}</li>)}
          </ul>

          <h5>Reviews:</h5>
          {product.reviews.map((rev, idx) => (
            <Card key={idx} className="mb-2 p-2">
              <strong>{rev.user}</strong> - {rev.rating}⭐
              <p>{rev.comment}</p>
            </Card>
          ))}
          <div className="mt-4">
            
            <CartButton product={product} />
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;