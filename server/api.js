const apiRoute = {
  '/users': (req, res, next) => {
    const user = ['Andi', 'Ibrahim', 'Umar'];
    res.send(user);
    next();
  },
  '/random': (req, res, next) => {
    const random = [1, 2, 3, 4, 5, 6];
    res.send(random);
    next();
  },
};

module.exports = apiRoute;
