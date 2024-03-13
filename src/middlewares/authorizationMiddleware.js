const authorizeAdmin = (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso no autorizado' });
  }

  next();
};

const authorizeUser = (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== 'user') {
    return res.status(403).json({ message: 'Acceso no autorizado' });
  }

  next();
};

export default {
  authorizeAdmin,
  authorizeUser,
};
