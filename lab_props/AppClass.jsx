import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const { data } = this.props; // Receive image data from props

    return (
      <div className="App">
        <h1>Elephant Images</h1>
        <div className="image-container">
          {data.map((item) => (
            <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
          ))}
        </div>
      </div>
    );
  }
}
