import daoService from '../DAO/services/daoService.js';

const getUserById = async (userId) => {
  try {
    const user = await daoService.getUserById(userId);
    return user;
  } catch (error) {
    throw new Error(`Error al obtener el usuario con ID ${userId}: ${error.message}`);
  }
};

export default {
  getUserById,
};
