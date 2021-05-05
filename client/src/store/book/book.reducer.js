import {BOOK_ALL, BOOK_ADD, BOOK_UPDATE, BOOK_DELETE} from './book.constants';

const bookReducer = (state, action) => {

    switch (action.type) {
        case BOOK_ADD:
            console.log('ADDED A NEW BOOK');
            return {
                ...state,
                books: state.books.push(action.payload)
            }
        case BOOK_ALL:
            console.log('GETTING ALL THE BOOKS');
            return {
                ...state,
                books: action.payload
            }
        case BOOK_UPDATE:
            console.log('UPDATING A BOOK');
            return {
                ...state,
                books: state.books.filter(book => book._id !== action.payload._id).push(action.payload)
            }
        case BOOK_DELETE: 
            console.log('DELETING A BOOK FROM LIBRARY');
            return {
                ...state,
                books: state.books.filter(book => book._id !== action.payload)
            }
        default: {
            return state;
        }
    }
}

export default bookReducer;