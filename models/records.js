const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    artist: String,
    albumTitle: String,
    coverArt: String,
    coverArtist: String,
    year: String,
    genre: String
})

const Records = mongoose.model('Record', recordSchema)

module.exports = Records