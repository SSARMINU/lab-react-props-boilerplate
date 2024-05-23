import React from 'react';
import './App.css';

function App({ images }) { 
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

export default App;
