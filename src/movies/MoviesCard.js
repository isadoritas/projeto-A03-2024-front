import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MoviesCard({ movie }) {
  const[favorites, setFavorites] = useState([]);
  const auth = localStorage.getItem("user");

  // Verifica se o usuário está logado, se estiver, procura sua lista de favoritos e armazena 
  useEffect(() => {
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      const token = parsedAuth.tokenCodigo;
      console.log(token);
    
      axios.get('http://localhost:8080/favoritos', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
      .then(response => {
        setFavorites([...favorites, ...response.data]);
        console.log(response.data);
        })
        .catch(error => {
          console.error('Erro ao listar filmes favoritados:', error);
          
          })
        console.log(favorites);
    }
  }, [])
  
  // Verifica se o filme da view foi favoritado pelo usuário e exibe ou esconde o botão dependendo da resposta
  const isFavorite = favorites.some(favorite => favorite.titulo === movie.titulo);
  console.log(isFavorite)


  // Faz a requisição POST do filme favoritado através do token do usuário a armazena na lista de favoritos
  const handleFavorite = (movieId) => {
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      const token = parsedAuth.tokenCodigo;
      axios.post(`http://localhost:8080/favoritos/${movieId}`, {}, {
        headers: {  
          'Authorization': `Bearer ${token}` 
        }
      })
      .then(response => {
        console.log('Filme favoritado');
      })
      .catch(error => {
        console.log(movieId);
        console.log(token);
        console.error('Erro ao favoritar filme:', error);
      });
  
      // Atualiza o estado favorites imediatamente
      setFavorites([...favorites, movie]);
    }
  }

  
  
  

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
          {(auth && !isFavorite) && <button className="btn btn-primary mx-2" onClick={() => handleFavorite(movie.id)}>Add Favorites</button>}
        </div>
      </div>
    </div>
  );
}
