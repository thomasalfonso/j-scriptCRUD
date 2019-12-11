const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    bio:{ 
        type: String,
        default: ''
    },
    classification: {
        type: String,
        required: true,
        enum: ['non-fiction', 'fiction'],
    }
})

module.exports = bookSchema