import React, {Component} from 'react';
import Book from './Book'



class BookList extends Component {
  
  render() {
    
    return (
      this.props.books.map((book) => {
        return <Book
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={(book.saleInfo.saleability === "FOR_SALE") ? book.saleInfo.listPrice.amount : 'Book not for sale'}
         
        />
      })
    )
  }
}

export default BookList;