const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');


module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);

    },
    async store(req, res){

       const {kmabastecimento,kmatual,quantidadelitro,valorlitro,kmrodado } = req.body;


       const post = await Post.create({
           kmabastecimento,
           kmatual,
           quantidadelitro,
           valorlitro,
          kmrodado,
       })


       req.io.emit('post', post);

       return res.json(post);
    }

};