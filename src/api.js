const products = require('../products.json')

const getAllProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1; // Запрашиваемая страница, по умолчанию 1
  const limit = parseInt(req.query.limit) || 8; // Количество элементов на странице, по умолчанию 10

  const startIndex = (page - 1) * limit; // Начальный индекс элементов на текущей странице
  const endIndex = page * limit; // Конечный индекс элементов на текущей странице

  const results = products.results.slice(startIndex, endIndex); // Получение элементов для текущей страницы
  const totalPages = products.totalPages; // Общее количество страниц

  res.json({ results, totalPages });
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