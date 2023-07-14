const express = require('express');
const products = require('./products')
const app = express();

// Возвращает все продукты
app.get('/products', (req, res) => {
    res.json(products);
});

// Возвращает продукт по id
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(product => product.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

// Возвращает изображение по пути
app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(filename, { root: __dirname + '/images' });
});

// Запускаем сервер на порту 5000
app.listen(5000, () => {
    console.log('Backend приложение запущено на порту 5000');
});