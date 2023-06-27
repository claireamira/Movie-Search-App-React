import React from 'react';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <div>No search results found.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Release Year: {movie.release_date.substring(0, 4)}</p>
          <p>Average Rating: {movie.vote_average}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
