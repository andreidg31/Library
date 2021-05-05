import {
  AppBar, 
  Toolbar, 
  Typography } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBook from './views/AddBook';
import Home from './views/Home';
import EditBook from './views/EditBook';
function App() {

  return (
      <div>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" >
                Library
              </Typography>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/addBook">
              <AddBook />
            </Route>
            <Route path="/editBook/:id" component={EditBook}/>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
