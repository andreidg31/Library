import { Router } from 'express';
import Book from '../models/Book.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) throw Error('no books');

        res.status(200).json(books);
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
});

router.post('/', async (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });

    try {
        const book = await newBook.save();
        if (!book) throw Error('Error saving the new book');

        res.status(200).json(book);
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw Error('No book found');
    
        const removed = await book.remove();
        if (!removed) throw Error('Error deleting the book');
    
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const update = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            rating: req.body.rating
        }

        let updatedBook = await Book.findOneAndUpdate(req.params.id, update, {new: true});
        if (!updatedBook) throw Error('Error updating the book');

        res.status(200).json({ success: true })
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
});

export default router;