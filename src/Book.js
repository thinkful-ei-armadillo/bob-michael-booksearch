import React, { Component } from 'react';

class Book extends Component {

  render() {
    return (
      <li>
        <img src={this.props.image} alt="cover" />
        <h2>{this.props.title}</h2>
        <h3>{this.props.author.join(', ')}</h3>
        <h4><i>{this.props.price}</i></h4>
        <p>{this.props.description}</p>
      </li>
    )
  }
}

export default Book;