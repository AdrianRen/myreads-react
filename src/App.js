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
  
  render() {
    return (
      <div className="app">
          <Route exact path="/" render={()=> (
            <ListBooks books={this.state.books} />
          )}/>
          <Route path="/search" render={()=> (
            <SearchBooks books={this.state.SearchBooks}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
