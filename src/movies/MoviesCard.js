import React from 'react';

export default function MoviesCard({ movie }) {
  
  // Define o modelo de card dos filmes
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={movie.poster} alt=""/>
        <div className="card-body">
          <h5 className="card-title">{movie.titulo}</h5>
          <p className="card-text">{movie.sinopse}</p>
          <p className="card-text">Avaliação: {movie.avaliacao}</p>
          <p className="card-text">Data de Lançamento: {movie.dataDeLancamento}</p>
          <button className="btn btn-primary mx-2">Ver Detalhes</button>
          <button className="btn btn-outline-primary mx-2">Editar</button>
          <button className="btn btn-danger mx-2">Excluir</button>
        </div>
      </div>
    </div>
  );
}
