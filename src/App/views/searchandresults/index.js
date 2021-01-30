import React, { Component } from 'react';

import SearchHeader from '../../components/searchheader';
import SearchForm from '../../components/searchform';
import SearchResults from '../../components/searchresults';

class SearchAndResults extends Component {
  render() {
    return (
      <div className="container">
        <h4>Search the public gists</h4>
        <SearchHeader>
          <SearchForm />
        </SearchHeader>
        <SearchResults />
      </div>
    );
  }
}

export default SearchAndResults;