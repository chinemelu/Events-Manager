
const isAdmin = (req, res, next) => {
  const { role } = req.decoded;
  if (role === 'superadmin' || role === 'admin') {
    next();
  } else {
    res.status(403).json({
      message: 'You are not authorised to perform this action'
    });
  }
};

export default isAdmin;
