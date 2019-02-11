import React, { Component } from 'react';

class Header extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const query = document.getElementById("userSearch").value;
    this.props.handleSearch(query);
  }

  handleChangePrintType = e => {
    e.preventDefault();
    const printType = document.getElementById("pType").value;
    this.props.handlePrintType(printType);
  }

  handleChangeBookType = e => {
    e.preventDefault();
    const bookType = document.getElementById("bType").value;
    this.props.handleBookType(bookType);
  }

  render() {
    return (
      <header role="heading">
        <h1>Google Book Search</h1>
        <form id="searchForm" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search: <input id='userSearch' type='text'></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
        <form id="filterForm">
          <label for="printType">Print Type: </label>
          <select id='pType' name="printType" onChange={event => this.handleChangePrintType(event)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label for="bookType"> Book Type: </label>
          <select id='bType' name="bookType" onChange={event => this.handleChangeBookType(event)}>
            {/* <option value="">No Filter</option> */}
            <option value="partial">Partial</option>
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">Free eBook</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="full">Full</option>
          </select>
        </form>
      </header>
    )
  }
}

export default Header;