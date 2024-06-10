import React from 'react';

export default function GenreFilter({ filtrarGenero }) {
  // Define os filtros, atribui seus valores e os envia á função de filtragem
  return (
    <div className="btn-container" style={{marginBottom: '20px'}}>
      <button className="btn btn-outline-warning mx-2" value="28" onClick={() => filtrarGenero(28)}>Action</button>
      <button className="btn btn-outline-warning mx-2" value="12" onClick={() => filtrarGenero(12)}>Adventure</button>
      <button className="btn btn-outline-warning mx-2" value="16" onClick={() => filtrarGenero(16)}>Animation</button>
      <button className="btn btn-outline-warning mx-2" value="35" onClick={() => filtrarGenero(35)}>Comedy</button>
      <button className="btn btn-outline-warning mx-2" value="80" onClick={() => filtrarGenero(80)}>Crime</button>
      <button className="btn btn-outline-warning mx-2" value="99" onClick={() => filtrarGenero(99)}>Documentary</button>
      <button className="btn btn-outline-warning mx-2" value="18" onClick={() => filtrarGenero(18)}>Drama</button>
      <button className="btn btn-outline-warning mx-2" value="10751" onClick={() => filtrarGenero(10751)}>Family</button>
      <button className="btn btn-outline-warning mx-2" value="14" onClick={() => filtrarGenero(14)}>Fantasy</button>
    </div>
  );
}
