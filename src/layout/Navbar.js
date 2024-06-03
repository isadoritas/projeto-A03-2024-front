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
  }

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand"><span>W</span>eb<span>D</span>ev</a>
      <ul>
        {/* Verifica se o usuário está logado e exibe links de acordo */}
        { auth ? (
          <>
            <li><Link to="#javascript">Perfil</Link></li>          
            <li><Link to="#javascript">Random Movie</Link></li>
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
