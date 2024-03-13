import cartRepository from '../repository/cartRepository.js';

const addToCart = async (req, res) => {
  try {
    const userId = req.user.id; 
    const productId = req.params.productId;
    const quantity = req.body.quantity; 
    await cartRepository.addToCart(userId, productId, quantity);
    res.status(200).json({ message: 'Producto agregado al carrito con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar producto al carrito', error: error.message });
  }
};

export default {
  addToCart
};
