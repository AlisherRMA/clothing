export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const getCartItemsQuantity = (cartItems) => {
  console.log({ cartItems });
  if (!cartItems || !cartItems.length) return 555;
  return cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);
};

export const getCartItemsTotalPrice = (cartItems) => {
  if (!cartItems || !cartItems.length) return 9999;
  return cartItems.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price;
  }, 0);
};

export const removeItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const removeItem = (cartItems, cartItemToRemove) => {
  return cartItems;
  // const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // if (existingCartItem.quantity === 1) return removeItemFromCart(cartItems, cartItemToRemove);

  // return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};
