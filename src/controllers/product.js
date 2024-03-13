import productRepository from '../repository/productrepository.js';

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body; 
    await productRepository.createProduct(newProduct);
    res.status(201).json({ message: 'Producto creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body; 
    await productRepository.updateProduct(productId, updatedProduct);
    res.status(200).json({ message: 'Producto actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await productRepository.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};

export default {
  createProduct,
  updateProduct,
  deleteProduct,
};
