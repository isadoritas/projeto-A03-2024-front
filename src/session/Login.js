
import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

export default function Login() { 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setErro("Email é obrigatório.");
      return;
    }

    if (!senha.trim()) {
      setErro("Senha é obrigatória.");
      return;
    }

    const usuario = {
      email,
      senha,
    };

    try {
      const response = await axios.post('http://localhost:8080/usuarios', usuario);
      console.log(response.data);
      setErro(null);
      window.location.href = '/home'; // Redireciona para a página inicial após o login bem-sucedido
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setErro(error.response.data.message);
      } else {
        setErro('Ocorreu um erro ao fazer login');
      }
    }
  };
 
  return (
    <body className='registration-page'>
   
      <div className='wrapper'>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
            <div className="invalid-feedback">
              Por favor digite um email válido.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="email" className="form-control" value={senha} onChange={e => setSenha(e.target.value)} required />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Voltar</button>
          </div>
          {erro && <div className="alert alert-danger mt-3">{erro}</div>}
        </form>
      </div>
    </body>
  );
}
