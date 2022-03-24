const { body, validationResult } = require('express-validator');
const users = [];
const getUsers = (req, res) => {
  res.json(users);
};
const postUsers = [
  body('username').custom((value) => {
    if (value.length === 0) {
      throw new Error('username should not be empty');
    }
    if (value.length < 5 || value.length > 15) {
      throw new Error('length of user name should be in between 5 and 15');
    }
    if (value.includes('*') || value.includes('&')) {
      throw new Error('username should not contain * and &');
    }
    return true;
  }),
  (req, res) => {
    if (!validationResult(req).isEmpty()) {
      res.json(validationResult(req));
    } else {
      users.push(req.body);
      res.json('added user successfully');
    }
  },
];
module.exports = {
  getUsers,
  postUsers,
};
