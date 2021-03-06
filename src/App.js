import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {

  state = {
    books: [],
    searchList: []
  }


  componentDidMount() {
    BooksAPI.getAll()
            .then(books => this.setState({books}))
  }
  
  onShelfUpdate = (book, shelf) => {
    if (book.shelf === 'none') {
      BooksAPI.update(book, shelf).then(()=>{
        book.shelf = shelf;
        this.setState(preState => ({
          books: preState.books.concat([book])
        }))
      })
    } else {
      const index = this.state.books.map(x=>x.id).indexOf(book.id);
      BooksAPI.update(book, shelf).then(()=>{
        let books = this.state.books.slice();
        books[index].shelf = shelf;
        this.setState({books})
      })
    }
  }

  onBookSearch = query => {
    BooksAPI.search(query).then(books => {
      let searchList = books.map(book => {
        let existed = false;
        let organizedBooks = {};
        for (let i = 0; i < this.state.books.length; i++) {
          if (this.state.books[i].id === book.id) {
            existed = true;
            organizedBooks = this.state.books[i];
          }
        }
        if (existed) {
          return organizedBooks;
        } else {
          book.shelf = 'none';
          return book;
        }
      });
      this.setState({ searchList });
    }).catch(() => {
      this.setState({ searchList: [] });
    });
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={()=> (
            <ListBooks books={this.state.books} onShelfUpdate={this.onShelfUpdate}/>
          )}/>
          <Route path="/search" render={()=> (
          <SearchBooks books={this.state.searchList} onShelfUpdate={this.onShelfUpdate} onBookSearch={this.onBookSearch}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
