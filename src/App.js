import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SearchMovies from './components/searchMovies/searchMovies';
import SingleMovie from './components/SingleMovie/SingleMovie.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={SearchMovies} />
        <Route path='/movies/:id' exact component={SingleMovie} />
      </Router>
    );
  }
}

export default App;
