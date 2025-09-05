import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../components/CartContext";

const CartButton = ({ product }) => {
  const { cart, addToCart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  if (!cartItem) {
    return (
      <Button variant="dark" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    );
  }

  return (
    <div className="d-flex align-items-center gap-2">
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() =>
          cartItem.qty > 1 ? decreaseQty(product.id) : removeFromCart(product.id)
        }
      >
        -
      </Button>
      <span className="px-2">{cartItem.qty}</span>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => increaseQty(product.id)}
      >
        +
      </Button>
    </div>
  );
};

export default CartButton;
