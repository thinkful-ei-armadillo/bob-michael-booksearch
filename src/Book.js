import React, { Component } from 'react';

class Book extends Component {

  render() {
    const author = (this.props.author) ? this.props.author.join(', ') : '';
    return (
      <li>
        <img src={this.props.image} alt="cover" />
        <h2>{this.props.title}</h2>
        <h3>{author}</h3>
        <h4><i>{this.props.price}</i></h4>
        <p>{this.props.description}</p>
      </li>
    )
  }
}

export default Book;