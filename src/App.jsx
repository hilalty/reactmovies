import { useState } from "react";
import "./App.css";
import { Form, MovieDisplay } from "./components";

const API_KEY = "d11c7c83";

function App() {
  const [movie, setMovie] = useState(null);
  
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
    );

    const data = await response.json();
    setMovie(data);
  };

  return (
    <div className="App">
      React Movies
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
