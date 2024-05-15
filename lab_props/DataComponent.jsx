import React from 'react';
import App from './App';
import AppClass from './AppClass';
import elephant from './images/elephant.jpeg';
const imageData = [
  {
    id: 1,
    img: elephant
  },
  {
    id: 2,
    img: elephant
  },
  {
    id: 3,
    img: elephant
  },
  {
    id: 4,
    img: elephant
  }
];

function MainApp() {
  return (
    <div>
      <App data={imageData} />
    </div>
  );
}

export default MainApp;
