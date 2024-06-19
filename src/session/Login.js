import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Envio de requisição e autenticação de usuário
            const result = await fetch("http://localhost:8080/login", {
                method: 'post',
                body: JSON.stringify({ email, senha }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await result.json();
            if (data.tokenCodigo) {
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/home');
            } else {
                alert("Por favor, insira credenciais válidas.");
            }
        } catch (error) {
            setErro("Invalid password or email");
        }
    };

 
  return (
    <body className='registration-page'>
   
      <div className='wrapper'>
        <form className="needs-validation">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${erro ? 'is-invalid' : ''}`} value={email} onChange={e => setEmail(e.target.value)} required />
            {erro && !email && <div className="invalid-feedback">Please type a valid email</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className={`form-control ${erro ? 'is-invalid' : ''}`} value={senha} onChange={e => setSenha(e.target.value)} required />
            {erro && !senha && <div className="invalid-feedback">Please type a valid password</div>}
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-primary" onClick={handleLogin} >Login</button>
            <button type="button" className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Back</button>
          </div>
          {erro && <div className="alert alert-danger">{erro}</div>}
        </form>
      </div>
    </body>
  );
}

