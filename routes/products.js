const express = require('express');
const router = express.Router();
const userSchema = require('../models/products');


//crear producto

router.post('/products', (req, res) => { 
   const user = userSchema(req.body);
   user
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});


//Obtener todos los productos
router.get('/products', (req, res) => { 
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//Obtener un producto
router.get('/products/:id', (req, res) => { 
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//Actualizar un producto
router.put('/products/:id', (req, res) => { 
    const {id} = req.params;
    const {nombre, tipo, numero} = req.body;
    userSchema
    .updateOne({_id: id}, {$set: {nombre, tipo, numero}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//Eliminar un producto
router.delete('/products/:id', (req, res) => { 
    const {id} = req.params;
    userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });


module.exports = router;