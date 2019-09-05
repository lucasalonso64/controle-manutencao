const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    kmtroca: Number,
    kmptroca: Number,
    kmatual: Number,
    dataptroca: String,
}, {
    timestamps: true,
});
module.exports = mongoose.model('Post', PostSchema);