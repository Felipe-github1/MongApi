//Crear un CRUD, para el listado de productos, conectado a una base de datos MongoDB Atlas, por medio de Node o Mongoose.
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/products');

const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(express.json());
app.use('/api',productRoutes);



//Rutas
app.get('/', (req, res) => {
  res.send('Hola mundito!');
});


// CONEXION A MONGODB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log(error));


app.listen(port, () => console.log("server andando en el puerto", port));

