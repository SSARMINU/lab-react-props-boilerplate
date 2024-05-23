import React, { Component } from 'react';
import './App.css';

class AppClass extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="image-gallery">
        {images.map((img) => (
          <div key={img.id} className="image-container">
            <img src={img.img} alt={`img-${img.id}`} className="image" />
          </div>
        ))}
      </div>
    );
  }
}

export default AppClass;
