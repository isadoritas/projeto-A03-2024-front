import axios from 'axios';

// Procura todos os filmes do banco
export async function loadMovies() {
  const result = await axios.get(`http://localhost:8080/filmes`);
  return result.data;
}

// Procura filmes por gênero
export async function loadMoviesByGenre(genero) {
  try {
    const result = await axios.get(`http://localhost:8080/filmes/gen/${genero}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao carregar filmes por gênero: ', error);
  }
}

// Procura filmes por nome
export async function loadMoviesByName(titulo) {
  try {
    const result = await axios.get(`http://localhost:8080/filmes/${titulo}`);
    return result.data;
  } catch(error) {
    console.error('Erro ao carregar filmes por nome: ', error);
  }
}

// Procura filmes alfabeticamente
export async function loadAlphabetically() {
  const result = await axios.get('http://localhost:8080/filmes/ordem/alfabetica');
  return result.data;
}

// Procura filmes da maior á menor avaliação
export async function loadByRating() {
  const result = await axios.get('http://localhost:8080/filmes/ordenar/avaliacao');
  return result.data;
}
