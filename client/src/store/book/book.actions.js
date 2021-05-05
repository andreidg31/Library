import axios from 'axios';
import {BOOK_ALL, BOOK_ADD, BOOK_UPDATE, BOOK_DELETE} from './book.constants';
const api = 'http://localhost:4000';

export const getBooks = () => (dispatch) => {
    axios
        .get('http://localhost:4000/api/books')
        .then(res => {
            dispatch({
                type: BOOK_ALL,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
}

export const addBook = (book) => (dispatch) => {
    axios
        .post(api + '/api/books', book)
        .then(res => {
            dispatch({
                type: BOOK_ADD,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
}

export const deleteBook = (id) => (dispatch) => {
    axios
        .delete(api + `/api/books/${id}`)
        .then(res => {
            dispatch({
                type: BOOK_DELETE,
                payload: id
            })
        })
        .catch(err => {
            console.error(err);
        })
}

export const updateBook = (book) => (dispatch) => {
    axios
        .put(api + `/api/books/${book._id}`, book)
        .then(res => {
            dispatch({
                type: BOOK_UPDATE,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err);
        })
}