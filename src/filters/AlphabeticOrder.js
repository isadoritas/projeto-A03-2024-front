import React from 'react';

export default function AlphabeticOrder({ ordemAlfabetica }) {
  // Define os filtros, atribui seus valores e os envia á função de filtragem
  return (
    <button className="btn btn-outline-primary mx-2" onClick={() => ordemAlfabetica()}>A-Z</button>
  );
}
