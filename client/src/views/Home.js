import { useEffect} from 'react';
import store from '../store/store';
import {getBooks} from '../store/book/book.actions';
import {useSelector} from 'react-redux';
import {bookSelector} from '../store/book/book.selector';
import MyTableRow from '../components/MyTableRow';
import {
  Button,
	Table, 
	TableContainer,
	TableBody,
	TableCell,
	TableHead,
	TableRow } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const books = useSelector(bookSelector);
  const history = useHistory();

  useEffect(() => {

	store.dispatch(getBooks());
  }, []);

  const createTable = () => {
	if (books.length < 1) {
	  return null;
	}
	return (
	  <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.length > 0 && books.map((book, index) => (
            <MyTableRow  key={index} book={book} title={book.title} author={book.author} rating={book.rating} />
          ))}
        </TableBody>
      </Table>
	  </TableContainer>
	);
  }

  return (
	  <div>
		<h1> Books </h1>
    <Button variant="contained" color="primary" onClick={() => history.push('/addBook')}>
      Add book
    </Button>
		{createTable()}
	</div>
  );

}

export default Home;