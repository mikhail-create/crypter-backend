const products = require('../products.json')

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const getImage = (req, res) => {
  const filename = req.params.filename;
  res.sendFile(filename, { root: __dirname + '/images' });
};

module.exports = {
  getAllProducts,
  getProductById,
  getImage
};