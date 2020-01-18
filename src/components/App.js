import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  //I could use the .then() but I preferred the async/await synthax
  //   .then(response => {
  // console.log(response.data.results);
  //   });

  render() {
    const imageFound = this.state.images.length;
    let found;
    if (imageFound !== 0) {
      found = (
        <h1 style={{ fontSize: "15px", color: "black" }}>
          Found: {this.state.images.length} images
        </h1>
      );
    } else {
      found = null;
    }
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {found}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
