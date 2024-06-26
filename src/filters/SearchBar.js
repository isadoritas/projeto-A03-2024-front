import React from 'react';

export default function SearchBar({ loadPesquisa }) {
  // Define o modelo de barra de pesquisa e chama a função loadPesquisa
  return (
    <form className="d-flex my-2 my-lg-0" onSubmit={(e) => e.preventDefault()} style={{marginTop: '20px'}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchInput"
      style={{width: '50%', marginRight: '10px'}}/>
      <button className="btn btn-warning my-2 my-sm-0" type="submit" onClick={() => loadPesquisa(document.getElementById('searchInput').value)}>Search</button>
    </form>
  );
}
