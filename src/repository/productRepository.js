import productRepository from '../DAO/mongo/models/products.js';

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;

    // Validación de entrada
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.stock) {
      return res.status(400).json({ message: 'Faltan campos obligatorios para crear el producto' });
    }

    await productRepository.createProduct(newProduct);
    res.status(201).json({ message: 'Producto creado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el producto', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;

    // Validación de entrada
    if (!updatedProduct.name && !updatedProduct.description && !updatedProduct.price && !updatedProduct.stock) {
      return res.status(400).json({ message: 'No se proporcionó información para actualizar el producto' });
    }

    await productRepository.updateProduct(productId, updatedProduct);
    res.status(200).json({ message: 'Producto actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Validación de entrada
    if (!productId) {
      return res.status(400).json({ message: 'No se proporcionó ID de producto para eliminar' });
    }

    await productRepository.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};

export default {
  createProduct,
  updateProduct,
  deleteProduct,
};
