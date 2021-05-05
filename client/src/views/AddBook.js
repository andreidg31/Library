import {useState} from 'react';
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {addBook} from '../store/book/book.actions';
import store from '../store/store';

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

const AddBook = () => {
  const classes = useStyles();
  const history = useHistory();

	const [newBook, setNewBook] = useState({
		title: '',
		author: '',
		description: '',
    rating: 0.0
	});

  const handleClickBack = () => {
    history.push("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({...newBook, [name]: value});
  }

  const handleSubmit = async () => {
    await store.dispatch(addBook(newBook));
    history.push('/');
  }

	return (
		<div>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <Button margin="normal" variant="contained" color="secondary" onClick={handleClickBack}>
              Go Back
            </Button>
            Create a new book
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
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              onChange={handleChange}
              multiline
              rows={10}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Add Book
            </Button>
          </form>
        </div>
        
      </Container>
		</div>
	);
}

export default AddBook;