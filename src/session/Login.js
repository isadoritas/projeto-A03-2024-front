import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() { 

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erro, setErro] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Definição de erros de validação do formulário
    if (!email  || !senha) {
      setErro(true);
      return false
    }

    // Envio de requisição e autenticação de usuário
    let result = await fetch("http://localhost:8080/login", {
      method: 'post',
      body: JSON.stringify({email, senha}),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Retorna á pagina inicial caso usuário logado
    result = await result.json();
    console.log(result.tokenCodigo);
    if (result.tokenCodigo) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/home');
    } else {
      alert ("Please enter connect details")
    }
  }

 
  return (
    <body className='registration-page'>
   
      <div className='wrapper'>
        <form className="needs-validation">

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${erro ? 'is-invalid' : ''}`} value={email} onChange={e => setEmail(e.target.value)} required />
            {erro && <div className="invalid-feedback">Por favor digite um email válido.</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className={`form-control ${erro ? 'is-invalid' : ''}`} value={senha} onChange={e => setSenha(e.target.value)} required />
            {erro && <div className="invalid-feedback">Por favor digite uma senha válido.</div>}
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-primary" onClick={handleLogin} >Login</button>
            <button type="button" className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Voltar</button>
          </div>
        </form>
      </div>
    </body>
  );
}
