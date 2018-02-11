import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './components/search_page';
import CurrentlyReading from './components/main_page/currently_reading';
import WantToRead from './components/main_page/want_read';
import Read from './components/main_page/read';

class BooksApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books:[],
      currentlyReading:[],
      wantToRead:[],
      read:[]
    }

    this.onAddClick = this.onAddClick.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books:books
    }))
  
  }
  onAddClick() {
    this.setState({
      showSearchPage: true
    })
  }

  render() {
    // console.log('================APP.js====================');
    // console.log(this.state.books);
    // console.log('====================================');
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onCloseClick={() => this.setState({ showSearchPage: false })}/>
        ) : (
              <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading books={this.state.books} />
                  <WantToRead books={this.state.books} />
                  <Read books={this.state.books} />
                </div>
              </div>
              <div className="open-search">
                <a onClick={this.onAddClick}>Add a book</a>
              </div>
            </div>
        )}
      </div>
    )
  }
}

export default BooksApp
