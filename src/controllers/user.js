import userRepository from '../repository/userRepository.js';
import createUserDTO from '../DAO/DTO/userDTO.js';

const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await userRepository.getUserById(userId);
    const userDTO = createUserDTO(user);
    res.status(200).json(userDTO);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario actual', error: error.message });
  }
};

export default {
  getCurrentUser
};
