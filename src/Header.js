import React, {Component} from 'react'

class Header extends Component {
  
  
  
  render() {
    return (
      <header>
        <h1>Book List</h1>
        <form>
          <label>
            Search: <input id = 'userSearch' type = 'text'></input>
          </label>
          <button type = 'submit'>submit</button>
        </form>
      </header>
    )
  }
}

export default Header;