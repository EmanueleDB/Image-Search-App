import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ border: "1px solid black", backgroundColor:'grey' }} className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label style={{ fontSize: "25px" }}>Image Search</label>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              placeholder="type here"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
