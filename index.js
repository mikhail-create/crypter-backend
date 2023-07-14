// const express = require('express');
// const products = require('../products.json')
// const app = express();

// // Возвращает все продукты
// app.get('/products', (req, res) => {
//     res.json(products);
// });

// // Возвращает продукт по id
// app.get('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const product = products.find(product => product.id === id);

//     if (product) {
//         res.json(product);
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// });

// // Возвращает изображение по пути
// app.get('/images/:filename', (req, res) => {
//     const filename = req.params.filename;
//     res.sendFile(filename, { root: __dirname + '/images' });
// });

// // Запускаем сервер на порту 5000
// app.listen(5000, () => {
//     console.log('Backend приложение запущено на порту 5000');
// });

// module.exports = app;

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})