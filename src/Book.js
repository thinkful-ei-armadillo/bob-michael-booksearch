import React, {Component} from 'react'
//title = author = description = price = 

class Book extends Component {

  render(){
    return (
      <li>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
      </li>
    )
  }
}

export default Book;