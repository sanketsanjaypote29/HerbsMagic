//server.js

const env = require('dotenv');
env.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productRoutes = require('./routes/productRoutes');
const productDomainRoutes = require('./routes/productDomainRoutes');
const productTypeRoutes = require('./routes/productTypeRoutes');

app.use(express.json());
app.use(productDomainRoutes);
app.use(productTypeRoutes);

const PORT = process.env.PORT
const DB = process.env.DB

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.use(productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});