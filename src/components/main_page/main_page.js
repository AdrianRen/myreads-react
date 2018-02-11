import React from 'react';

import CurrentlyReading from './currently_reading';
import WantToRead from './want_read';
import Read from './read';

const MainPage = (props) => {
  // console.log('=================Main Page.js===================');
  // console.log(props);
  // console.log('====================================');
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={props.books}/>
          <WantToRead books={props.books}/>
          <Read books={props.books}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={props.onAddClick}>Add a book</a>
      </div>
    </div>
  )
}

export default MainPage;