'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../routes/handler');

//LIVROS
router.get('/books', controller.get);
router.put('/books', controller.put);

//CLIENTES
router.get('/users', controller.getUser);
router.get('/users/:email', controller.getUserByEmail);
router.delete('/users/:email', controller.deleteUser)
router.put('/users/:id', controller.putUser);

//router.delete('/:id', controller.delete);

module.exports = router;