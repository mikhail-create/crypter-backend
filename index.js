const express = require('express');
const { getAllProducts, getProductById, getImage } = require('./src/api');
const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.send('Express JS on Vercel')
})

app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.get('/images/:filename', getImage);

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
  if (err) {
    console.log(err)
    return res.status(500).send(err.message)
  } else {
    console.log('[INFO] Server Running on port:', port)
  }
})