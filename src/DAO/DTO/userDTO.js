const createUserDTO = (user) => {
  return {
    id: user.id,
    username: user.username,
  };
};

export default createUserDTO;