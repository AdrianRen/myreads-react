import React from 'react';

import BookDetails from './book_details';

const CurrentlyReading = (props) => {
  // console.log('=============currently reading=======================');
  // console.log(props.books);
  // console.log('====================================');
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map( data => 
              <BookDetails 
                key={data.id}
                book={data}
              />
            )}
          </ol>
        </div>
      </div>
  )
}

export default CurrentlyReading;