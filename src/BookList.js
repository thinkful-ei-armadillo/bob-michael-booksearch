import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {

  render() {
    return (
      this.props.books.map((book) => {
        return <Book
          image={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={(book.saleInfo.saleability === "FOR_SALE") ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(book.saleInfo.listPrice.amount) : 'Unavailable for Purchase'} />
      })
    )
  }
}

export default BookList;