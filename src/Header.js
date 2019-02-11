import React, {Component} from 'react';

class Header extends Component {

  handleSubmit = e =>{
    e.preventDefault();
    const query = document.getElementById("userSearch").value;
    this.props.handleSearch(query);
  }

  render() {
    return (
      <header role="heading">
        <h1>Book List</h1>
        <form id="filterForm" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search: <input id='userSearch' type='text'></input>
          </label>
          <button type='submit'>Submit</button>
          <label for="printType">Print Type: </label>
            <select name="printType">
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
          <label for="bookType">Book Type: </label>
            <select name="bookType">
              <option value="none">No Filter</option>
              <option value="ebooks">eBooks</option>
              <option value="free-ebooks">Free eBook</option>
              <option value="paid-ebooks">Paid eBooks</option>
              <option value="full">Full</option>
              <option value="partial">Partial</option>
            </select>
        </form>
      </header>
    )
  }
}

export default Header;