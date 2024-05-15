import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  const { data } = props; // Destructure the data prop

  return (
    <div className="App">
      <h1>Elephant Images</h1>
      <div className="image-container">
        {data.map((item) => ( // Use data from props instead of calling imageData()
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
