const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    kmabastecimento: Number,
    kmatual: Number,
    quantidadelitro: Number,
    valorlitro: Number,
    // image: String,
    // likes: {
    //     type: Number,
    //     default: 0,
  //  }

}, {
    timestamps: true,
});
module.exports = mongoose.model('Post', PostSchema);