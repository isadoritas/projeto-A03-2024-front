import React, { useEffect, useState } from 'react';
import Pagination from "../components/Pagination";
import AlphabeticOrder from '../filters/AlphabeticOrder';
import GenreFilter from "../filters/GenreFilter";
import RatingFilter from '../filters/RatingFilter';
import SearchBar from "../filters/SearchBar";
import MoviesList from "../movies/MoviesList";
import { loadAlphabetically, loadByRating, loadMovies, loadMoviesByGenre, loadMoviesByName } from '../services/MovieService';
import Batman from './Batman';
import './Home.css';

export default function Home() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(18);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await loadMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  // Filtrar filmes por gênero ou título
  const filtrarGenero = async (genero) => {
    const moviesData = await loadMoviesByGenre(genero);
    setMovies(moviesData);
  }

  // Tratar erro de pesquisa caso titulo não encontrada
  const loadPesquisa = async (titulo) => {
    const moviesData = await loadMoviesByName(titulo);
    setMovies(moviesData);
  }

  const ordemAlfabetica = async () => {
    const moviesData = await loadAlphabetically();
    setMovies(moviesData);
  }

  const ordemAvaliacao = async () => {
    const moviesData = await loadByRating();
    setMovies(moviesData);
  }
  
  // Define o número de páginas e posts por página
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex)

  
  return (
    <div className='container' style={{marginTop: '100px'}}>
        <SearchBar loadPesquisa={loadPesquisa}/>
        <div className='py-4'>
          <GenreFilter filtrarGenero={filtrarGenero}/>
        </div>
        <div className='py-4'>
          <AlphabeticOrder ordemAlfabetica={ordemAlfabetica}/>
          <RatingFilter ordemAvaliacao={ordemAvaliacao}/>
        </div>
        
        <div className="row">
          <MoviesList movies={currentPosts} />
        </div>
          <Pagination 
            totalPosts={movies.length} 
            postsPerPage={postsPerPage} 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        <Batman/>
    </div>
    
  )
  
}
