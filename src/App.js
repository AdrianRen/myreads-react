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
    this.updateShelf = this.updateShelf.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books,
      currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
      wantToRead: books.filter(book => book.shelf === 'wantToRead'),
      read: books.filter(book => book.shelf === 'read')
    }))
  }
  
  updateShelf(book,shelf){
    BooksAPI.update(book,shelf);
  }

  onAddClick() {
    this.setState({
      showSearchPage: true
    })
  }
  
  render() {
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
                  <CurrentlyReading books={this.state.currentlyReading} />
                  <WantToRead books={this.state.wantToRead} />
                  <Read books={this.state.read} />
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
