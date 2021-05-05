import {
    TableRow,
    TableCell,
    IconButton,
    Tooltip,
    Box
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import {deleteBook, getBooks} from '../store/book/book.actions';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

import store from '../store/store';

const MyTableRow = (props) => {
  const history = useHistory();
  const {book} = props;

  const handleDeleteBook = () => {
    if (window.confirm('Are you sure you wish to delete this book?')) {
      store.dispatch(deleteBook(book._id));
      console.log("Deleted the book");
      store.dispatch(getBooks)
    }
  }

  const handleEditBook = () => {
    history.push(`/editBook/${book._id}`);
  }

  const handleInfoBook = () => {
    window.alert(book.title + "\nby " + book.author + "\n\n" + book.description);
  }
  
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={book.rating} readOnly />
        </Box>
      </TableCell>
      <TableCell>
        <Tooltip title="Delete book">
          <IconButton onClick={handleDeleteBook}>
            <DeleteIcon color="secondary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit book">
          <IconButton onClick={handleEditBook}>
            <EditIcon color="primary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Description" onClick={handleInfoBook}>
          <IconButton>
            <InfoIcon color="inherit"/>
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

export default MyTableRow;