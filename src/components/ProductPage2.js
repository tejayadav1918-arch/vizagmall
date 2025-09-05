import React from 'react';
import {  useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel,  } from 'react-bootstrap';
import { womenproducts } from './Restaurant2';
 // ✅ Import products from WomensPage.js
import './ProductPage.css';
import CartButton from "../components/CartButton";

const ProductPage1 = () => {
  const { id } = useParams();
  const product = womenproducts.find((p) => p.id === parseInt(id));

  if (!product) return <Container><h2>Product not found!</h2></Container>;

  return (
    <Container className="my-5">
      <Row>
        {/* Sticky Carousel on Left */}
        <Col md={5}>
          <div className="sticky-carousel">
            <Carousel>
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

          <h5>FAQs:</h5>
          <ul>
  {product.faqs.map((faq, idx) => (
    <li key={idx}>
      <strong>{faq.q}</strong>: {faq.a}
    </li>
  ))}
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

export default ProductPage1;
