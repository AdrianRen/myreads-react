import React from 'react'
import {Link} from 'react-router-dom'

import BookShelf from './BookShelf';

const ListBooks = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={props.books.filter(book => book.shelf === 'currentlyReading')} onShelfUpdate={props.onShelfUpdate} category="Currently Reading"/>
          <BookShelf books={props.books.filter(book => book.shelf === 'wantToRead')} onShelfUpdate={props.onShelfUpdate} category="Want To Read"/>
          <BookShelf books={props.books.filter(book => book.shelf === 'read')} onShelfUpdate={props.onShelfUpdate} category="Read"/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;