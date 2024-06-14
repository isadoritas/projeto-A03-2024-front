import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviesCard from '../movies/MoviesCard';
import './RandomMovie.css';

export default function RandomMovie() {
  const[movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const auth = localStorage.getItem("user");

  // armazena os filmes favoritos na variável movies
  useEffect(() => {
    const fetchMovies = async () => {
      if (auth) {
        const parsedAuth = JSON.parse(auth);
        const token = parsedAuth.tokenCodigo;
        
        if (!token) {
          console.error('Token não encontrado');
          return;
        }

        console.log('Token:', token);

        axios.get('http://localhost:8080/favoritos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          if (error.response) {
            console.error('Resposta do servidor:', error.response);
          } else if (error.request) {
            console.error('Pedido feito, mas sem resposta:', error.request);
          } else {
            console.error('Erro ao configurar o pedido:', error.message);
          }
        });
      }
    };
    fetchMovies();
  }, [auth]);

  // seleciona um filme específico da lista movies para ser exibido
  function pickRandomMovie() {
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      const token = parsedAuth.tokenCodigo;
      axios.get('http://localhost:8080/favoritos/random', {
        headers: {  
          'Authorization': `Bearer ${token}` 
        }
      })
      .then(response => {
        console.log('Filme aleatorio encontrado');
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Erro ao achar filme aleatório:', error);
      });
    }
  }

  return (
    <div className='container' style={{ marginTop: '100px', border: '1px black' }}>
      <div class="d-flex justify-content-center">
        <div class="card" style={{width: '110%', height: '100px', marginBottom: '100px'}}>
          <div class="card-body">
            <h3 class="card-title text-center fs-1">Random Movie Generator</h3>
            <h6 class="card-subtitle text-center fs-4">Let us pick a movie based on your favorites list!</h6>
            <p class="card-text text-center fs-5">Click on the button bellow</p>
          </div>
          {movies.length !== 0 ? (
            <div>
              <div class="d-flex justify-content-center" style={{marginTop: '20px'}}>
                <a className="btn-generator" style={{fontSize: '25px', border: '20px solid white'}} onClick={() => pickRandomMovie()}><b>RANDOM</b></a>
              </div>
              {movie.length !== 0 && (
                <div className="d-flex justify-content-center" style={{marginTop: '50px'}}>
                  <MoviesCard movie={movie} />
                </div>
              )}
            </div>
          ) : (
            <div class="card">
              <h6 class="card-subtitle text-center fs-3">You haven't added any movies to your list yet</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  )  
}
