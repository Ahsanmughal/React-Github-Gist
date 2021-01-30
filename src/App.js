import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SearchAndResults from './App/views/searchandresults';
import GistDetails from './App/views/gistdetails';


class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact={true} component={SearchAndResults}></Route>
          <Route path="/:id" component={GistDetails}></Route>
      </Router>
    )
  }
}

export default App;
