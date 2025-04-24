const express = require('express');
const productRoute = require('./routes/product.route.js');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();



// Middlewear to convert the json
app.use(express.json());

// routes
app.use("/api/products", productRoute);
const PORT = 3000

// Testing the Api
app.get('/testapi', (req, res) => {
  res.send('Helo World')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})


// Replace with your MongoDB Atlas connection string
const dbURI = process.env.mongo;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas.'))
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
    console.log('Error details:', error.message);  
  });
