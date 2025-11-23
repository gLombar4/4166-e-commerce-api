export function authorizeAdminOrSelf(req, res, next) {
  if (req.user.role === 'ADMIN') {
    return next();
  }
  if (req.user.id === Number(req.params.id)) {
    return next();
  }
  return res
    .status(403)
    .json({ message: 'Forbidden: insufficient permission' });
}
