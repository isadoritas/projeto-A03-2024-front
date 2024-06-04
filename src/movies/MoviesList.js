import React from 'react';
import MoviesCard from './MoviesCard';

export default function MoviesList({ movies }) {
  // Cria um card para cada filme
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <MoviesCard key={index} movie={movie} />
      ))}
    </div>
  );
}
