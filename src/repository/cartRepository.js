import Cart from '../DAO/mongo/models/cart.js';

const addToCart = async (userId, productId, quantity) => {
  try {
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(item => String(item.productId) === productId);

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
  } catch (error) {
    throw new Error(`Error al agregar producto al carrito: ${error.message}`);
  }
};

export default {
  addToCart
};
