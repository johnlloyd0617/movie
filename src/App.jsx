import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState("");

  const movies = [
    {
      title: "Spider-Man",
     
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500",
    },
    {
      title: "Avengers",
     
      image:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500",
    },
    {
      title: "The Batman",
   
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500",
    },
    {
      title: "John Wick",
     
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    },
    {
      title: "Interstellar",
      
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500",
    },
    {
      title: "Jurassic Park",
      
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🎬 MOVIEFLIX</h1>

   
      </header>

      <div className="hero">
        <h2>JOHN LLOYD A. BUENO</h2>
        <p>Enjoy your favorite movies here.</p>

        <button onClick={() => setPlaying("The Last Adventure")}>
          ▶ Play
        </button>

        {playing && <p>Now Playing: {playing}</p>}
      </div>

      <h2 className="title">My Movies</h2>

      <div className="movies">
        {filteredMovies.map((movie) => (
          <div className="movie" key={movie.title}>
            <img src={movie.image} alt={movie.title} />

            <h3>{movie.title}</h3>

           

            <button onClick={() => setPlaying(movie.title)}>
              ▶ Play
            </button>

            {playing === movie.title && (
              <p className="playing">Now Playing</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;