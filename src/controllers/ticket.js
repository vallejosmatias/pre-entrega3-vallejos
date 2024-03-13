import ticketService from '../DAO/services/daoService.js';

const finalizePurchase = async (req, res) => {
  try {
    const userId = req.user.id; 
    const cartId = req.params.cid; 
    const ticket = await ticketService.finalizePurchase(userId, cartId);
    res.status(200).json({ message: 'Compra finalizada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al finalizar la compra', error: error.message });
  }
};

export default {
  finalizePurchase
};
