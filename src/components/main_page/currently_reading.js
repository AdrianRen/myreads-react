import React from 'react';

import BookDetails from './book_details';

const CurrentlyReading = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BookDetails />
        </ol>
      </div>
    </div>
  )
}

export default CurrentlyReading;