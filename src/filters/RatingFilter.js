import React from 'react';
import { Star } from 'react-bootstrap-icons';


export default function RatingFilter({ ordemAvaliacao }) {
  // Define os filtros, atribui seus valores e os envia á função de filtragem
  return (
    <button className="btn btn-outline-primary mx-2" onClick={() => ordemAvaliacao()}><Star/></button>    
  );
}
