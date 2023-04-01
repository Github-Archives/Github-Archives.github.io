import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setData([data]));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item._id}>
            <h2>{item.author}</h2>
            <p>{item.content}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
