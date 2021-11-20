export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const getCartItemsQuantity = (cartItems) => {
  return cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);
};
