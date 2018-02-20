import React from 'react'

import Book from './Book'

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => 
            <Book key={book.id} book={book} onShelfUpdate={props.onShelfUpdate}/>
          )}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;