import React from 'react';

function MovieDetail({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Genre: {movie.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
}

export default MovieDetail;
