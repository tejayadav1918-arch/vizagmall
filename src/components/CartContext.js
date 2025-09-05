import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product (if already exists, increase qty)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product completely
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Increase qty
  const increaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease qty
  const decreaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
