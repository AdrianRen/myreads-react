import React from 'react';

import BookDetails from './book_details';

const WantToRead = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BookDetails />
        </ol>
      </div>
    </div>
  )
}

export default WantToRead;