const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    kmabastecimento: Number,
    kmatual: Number,
    quantidadelitro: Number,
    valorlitro: Number,
    kmrodado: Number,
}, {
    timestamps: true,
});
module.exports = mongoose.model('Post', PostSchema);