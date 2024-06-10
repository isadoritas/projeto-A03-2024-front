import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  // Desconecta o usuário e retorna á pagina inicial
  const logout = () => {
    localStorage.clear();
    navigate('/')
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand"><span>N</span>ext<span>M</span>ovies</a>
      <ul>
        {/* Verifica se o usuário está logado e exibe links de acordo */}
        { auth ? (
          <>
            <li><Link to="/perfil">Watch List</Link></li>          
            <li><Link to="/generator">Random Movie</Link></li>
            <li><Link to="/" onClick={logout}>Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Signed Up</Link></li>
          </>
        )}
      </ul>
      <button className="navbar-toggler">
        <span></span>
      </button>
    </nav>
  );
}
