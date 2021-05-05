export const bookSelector = (state) => state.books;
export const specificBookSelector = (id) => (state) => state.books.find(book => book._id === id);