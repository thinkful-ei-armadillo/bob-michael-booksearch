import React, { Component } from 'react';
import Header from './Header'
import BookList from './BookList'
//API_KEY = 'AIzaSyCMf97A53S_uz02WiwQPQQRmq83l-Y0UqY'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
      printType: 'all',
      bookType: ''
    }
  }

  handleSearch = query => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}?printType=${this.state.printType}?filter=${this.state.bookType}`)
      .then(res => res.json())
      .then(books => this.setState({
        search: query,
        books: books.items
      }));
  }

  handlePrintType = printType =>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}?printType=${this.state.printType}?filter=${this.state.bookType}`)
      .then(res => res.json())
      .then(books => this.setState({
        printType: printType,
        books: books.items
      }));
  }

  handleBookType = bookType =>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}?printType=${this.state.printType}?filter=${this.state.bookType}`)
      .then(res => res.json())
      .then(books => this.setState({
        bookType: bookType,
        books: books.items
      }));
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then(res => res.json())
      .then(books => this.setState({
        books: books.items
      }));
  }

  render() {
    return (
      <main role="main" className="container">
        <Header handleSearch={this.handleSearch} handlePrintType={this.handlePrintType} handleBookType={this.handleBookType}/>
        {(!this.state.search) ? '' : <BookList books={this.state.books} />}
      </main>
    );
  }
}

export default App;