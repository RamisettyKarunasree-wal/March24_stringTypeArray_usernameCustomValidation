const Product = require('../models/product');
const getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
const postProducts = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json('added product successfully');
    }
  });
};

module.exports = {
  getProducts,
  postProducts,
};
