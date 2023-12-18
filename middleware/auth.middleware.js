const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "masai");
      if (decoded) {
        next();
      } else {
        res.send({ msg: "Please login" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  } else {
    res.send({ msg: "Please Login!!!" });
  }
};

module.exports = {
  auth,
};
