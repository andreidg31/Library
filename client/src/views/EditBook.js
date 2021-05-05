import {useState, useEffect} from 'react';
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
  Box
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import {updateBook} from '../store/book/book.actions';
import store from '../store/store';
import {useSelector} from 'react-redux';
import {specificBookSelector} from '../store/book/book.selector';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EditBook = () => {
  const { id } = useParams();
  const book = useSelector(specificBookSelector(id));

  const [newBook, setNewBook] = useState(book);

  const classes = useStyles();
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({...newBook, [name]: value});
  }

  const handleSubmit = async () => {
    await store.dispatch(updateBook(newBook));
    history.push('/');
  }

  useEffect(() => {
    if (book !== undefined) {
      setNewBook({
        ...book,
        rating: String(book.rating)
      });
    }
  }, [book]);

  const renderForm = () => {
    return (
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <Button margin="normal" variant="contained" color="secondary" onClick={handleClickBack}>
              {book._id}
            </Button>
            Edit the book
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Book Title"
              name="title"
              value={newBook.title}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="author"
              label="By"
              name="author"
              value={newBook.author}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              value={newBook.description}
              onChange={handleChange}
              multiline
              rows={10}
            />
            <Box component="fieldset" mb={3} borderColor="transparent">
             <Typography component="legend">Rating</Typography>
             <Rating
                name="rating"
                value={book.value}
                onChange={handleChange}
              />
            </Box>
            <Button

              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Edit book
            </Button>
          </form>
        </div>
      </Container>
    );
  }

  return (
    <div>
      {book === undefined ? 
        <div>
          <h1>
            No book has been selected for editing
          </h1>
        </div>
       : 
        renderForm()
      }
    </div>
  );
}

export default EditBook;