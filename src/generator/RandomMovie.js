import axios from 'axios';
import { useState } from 'react';
import MoviesCard from '../movies/MoviesCard';
import './RandomMovie.css';

export default function RandomMovie() {
  const[movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const auth = localStorage.getItem("user");


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

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
          <div class="d-flex justify-content-center" style={{marginTop: '20px'}}>
            <a className="btn-generator" onClick={() => pickRandomMovie()}></a>
          </div>
          <div className="d-flex justify-content-center" style={{marginTop: '50px'}}>
            {movie.length !== 0 && <MoviesCard movie={movie} />}
          </div>
        </div>
      </div>
    </div>
  )  
}