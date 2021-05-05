import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    rating:{
        type: Number,
        default: 0.0
    }
})

const Book = mongoose.model('book', BookSchema);

export default Book;