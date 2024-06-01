import axios from 'axios';
import React, { useState } from 'react';
import './Registration.css';

export default function Registration() { 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [success, setSucess] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isStrongPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome.trim()) {
      setErro("Nome é obrigatório.");
      return;
    }

    if (!email.trim() || !isValidEmail(email)) {
      setErro("Por favor, insira um endereço de email válido.");
      return;
    }

    if (!senha.trim() || !isStrongPassword(senha)) {
      setErro("A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial.");
      return;
    }

    const usuario = {
      nome,
      email,
      senha,
    };

    try {
      const response = await axios.post('http://localhost:8080/usuarios', usuario);
      console.log(response.data);
      setErro(null);
      setSucess("Cadastro realizado. Por favor faça login.")
      setTimeout(() => {
        window.location.href = '/login'; 
      }, 2000)
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setErro(error.response.data.message);
      } else {
        setErro('Ocorreu um erro ao registrar o usuário');
      }
    }
  };

  return (
    <body className='registration-page'>
      <div className='wrapper'>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" value={nome} onChange={e => setNome(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" value={senha} onChange={e => setSenha(e.target.value)} required />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary">Registrar</button>
            <button type="button" className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Voltar</button>
          </div>
          {erro && <div className="alert alert-danger mt-3">{erro}</div>}
          {success && <div className='alert alert-success mt-3'>{success}</div>}
        </form>
      </div>
    </body>
  );
}
