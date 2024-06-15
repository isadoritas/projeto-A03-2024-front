import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import Pagination from "../components/Pagination";
import MoviesList from "../movies/MoviesList";


export default function Perfil() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const auth = localStorage.getItem("user");
  const decodedToken = jwtDecode(auth);
  const nome = decodedToken.Nome;

  // Exibe os filmes favoritados pelo usuário
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
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      <div class="d-flex justify-content-center">
        <div class="card" style={{width: '110%', height: '100px', marginBottom: '100px'}}>
          <div class="card-body">
            <h3 class="card-title text-center fs-1">Welcome {nome}</h3>
            <h6 class="card-subtitle text-center fs-3">These are your next movies...</h6>
          </div>
        </div>
      </div>
      <div className="row">
        {movies.length > 0 ? (
            <MoviesList movies={currentPosts} />
          ) : (
            <div class="card">
              <h6 class="card-subtitle text-center fs-3">You haven't added any movies to your list yet</h6>
            </div>
        )}
      </div>
      <Pagination 
        totalPosts={movies.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
