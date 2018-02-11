import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './components/search_page';
import MainPage from './components/main_page/main_page';

class BooksApp extends React.Component {

  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    console.log('====================================');
    console.log(BooksAPI.getAll().then((data)=> console.log(data)));
    console.log('====================================');
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onCloseClick={() => this.setState({ showSearchPage: false })}/>
        ) : (
            <MainPage onAddClick={() => this.setState({ showSearchPage: true })}/>
        )}
      </div>
    )
  }
}

export default BooksApp
