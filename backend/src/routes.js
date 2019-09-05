const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');
const routes = new express.Router();
const multer1 = multer();

routes.get('/posts', PostController.index);
routes.post('/posts', multer1.single(), PostController.store);

module.exports = routes;