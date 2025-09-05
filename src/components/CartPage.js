import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * parseFloat(item.price.replace(/[^\d]/g, "")),
    0
  );

  return (
    <Container className="my-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cart.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.images ? item.images[0] : item.image} // Handles both types
                    alt={item.name}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Price: {item.price} <br />
                      Quantity: {item.qty}
                    </Card.Text>
                    <div className="d-flex gap-2 mb-2">
                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h4>Total: ₹{totalPrice.toLocaleString()}</h4>
        </>
      )}
    </Container>
  );
};

export default CartPage;
