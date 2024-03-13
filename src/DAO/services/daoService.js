import User from '../mongo/models/user.js';

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(`Error al obtener el usuario con ID ${userId}: ${error.message}`);
  }
};

export default {
  getUserById
};
