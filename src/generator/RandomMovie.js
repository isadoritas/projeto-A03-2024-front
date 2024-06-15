import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviesCard from '../movies/MoviesCard';
import './RandomMovie.scss';

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
      <div class="card-random" style={{width: '70%', marginBottom: '100px'}}>
          <div class="card-body">
            <h1 style={{textAlign: "center", color: "yellow", backgroundColor: "red", fontFamily: "Bangers, cursive"}}>Random Movie Generator</h1>
            <p style={{textAlign: "center", color: "white", backgroundColor: "#1b1fbd", fontSize: "30px", fontFamily: "Bangers, cursive"}}>Let us pick a movie based on your favorites list!</p>
            <p style={{textAlign: "center", color: "white", backgroundColor: "#1b1fbd", fontSize: "25px", fontFamily: "Bangers, cursive"}}>Click on the button bellow</p>
          </div>
          <div className='container-gerador'>
            {movies.length !== 0 ? (
              <div className='botao'>
                {/* <div class="d-flex justify-content-center" style={{marginTop: '20px'}}>
                  <a className="btn-generator" style={{fontSize: '25px', border: '20px solid white'}} onClick={() => pickRandomMovie()}><b>RANDOM</b></a>
                </div> */}
                <div class="circle" id="threed">
                  <div class="circle button" onClick={() => pickRandomMovie()}></div>
                </div>
                {movie.length !== 0 && (
                  <div className="d-flex justify-content-center" id='container-random' style={{marginTop: '50px', width: '400px', backgroundColor: 'black'}}>
                    <MoviesCard movie={movie} />
                  </div>
                )}
              </div>
            ) : (
              <div class="card-movie">
                <h6 class="card-subtitle text-center fs-3">You haven't added any movies to your list yet</h6>
              </div>
            )}
            <img className='icon-space' src={process.env.PUBLIC_URL + '/comic.jpg'} alt="marvel">
            </img>
          </div>
        </div>
      </div>
    </div>
  )  
}
