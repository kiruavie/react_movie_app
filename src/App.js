import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleFilterChange = (filters) => {
    const { title, rating } = filters;
    let filteredMovies = [...movies];

    if (title) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.rating === rating
      );
    }

    setMovies(filteredMovies);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilterChange} />
      <MovieList movies={movies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: "The Matrix",
            description:
              "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
            posterURL:
              "https://www.imdb.com/title/tt0133093/mediaviewer/rm2413614080/",
            rating: "8.7",
          })
        }
      >
        Add movie
      </button>
    </div>
  );
};

export default App;
