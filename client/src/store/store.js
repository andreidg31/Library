import {createStore, applyMiddleware, compose} from 'redux';
import bookReducer from './book/book.reducer';
import thunk from 'redux-thunk';

const middleWare = [thunk];

const initialState = {
    books: [],
    loading: false
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    bookReducer, 
    initialState,
    composeEnhancers(applyMiddleware(...middleWare))
);

export default store;