import React from 'react';
import './Navbar.css';

export default function Navbar() {

  return (
    <nav class="navbar">
      <a href="#" class="navbar-brand"><span>W</span>eb<span>D</span>ev</a>
        {/* <a href="#" class="navbar-brand"><img src="https://www.dropbox.com/s/zzwcz0xpj95sy7p/logo%20%2810%29.png?raw=1" style="width: 50px; vertical-align: middle;"/></a>  */}
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/registration">Signed Up</a></li>
        <li><a href="#javascript">Random Movie</a></li>
      </ul>
      <button class="navbar-toggler">
        <span></span>
      </button>
    </nav>
  )
}
