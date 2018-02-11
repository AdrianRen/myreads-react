import React from 'react';

import BookDetails from './book_details';

const Read = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BookDetails />
        </ol>
      </div>
    </div>
  )
}

export default Read;