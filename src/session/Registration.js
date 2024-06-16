import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

// Definição de variáveis de validação
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isStrongPassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}

const isOnlyLetters = (str) => {
  return /^[A-Za-z\s]+$/.test(str);
}


export default function Registration() { 
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const[erro, setErro] = useState(false);
  const navigate = useNavigate();
  
  
  
  // Verifica o status do usuário e navega até a página inicial de acordo
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/home')
    }
  }, [])
  

  const collectData = async () => {
    // Definição de erros de validação do formulário
    if (!email || !nome || !senha || !isValidEmail(email) || !isStrongPassword(senha) || !isOnlyLetters(nome)) {
      setErro(true);
      return false
    }

    
    // Coleta dados do form e registra usuario no database
    console.log(nome, email, senha);
    let result = await fetch("http://localhost:8080/usuarios", {
      method: "post",
      body: JSON.stringify({nome, email, senha}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    //  result = await result.json();
    //  console.log(result);
    //  localStorage.setItem("user", JSON.stringify(result))
     navigate('/login');
  }

  return (
    <body className='registration-page'>
      <div className='wrapper'>
        <form className="needs-validation">
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="nome" className={`form-control ${erro ? 'is-invalid' : ''}`} value={nome} onChange={e => setNome(e.target.value)} required />
            {erro && (!nome || !isOnlyLetters(nome)) && <div className="invalid-feedback">Por favor digite um nome válido, (apenas letras)</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${erro ? 'is-invalid' : ''}`} value={email} onChange={e => setEmail(e.target.value)} required />
            {erro && (!email || !isValidEmail(email)) && <div className="invalid-feedback">Por favor digite um email válido.</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className={`form-control ${erro ? 'is-invalid' : ''}`} value={senha} onChange={e => setSenha(e.target.value)} required />
            {erro && (!senha || !isStrongPassword(senha)) && <div className="invalid-feedback">"A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial.".</div>}
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-primary" onClick={collectData}>Registrar</button>
            <button type="button" className="btn btn-secondary mt-3" onClick={() => window.location.href = '/'}>Voltar</button>
          </div>
        </form>
      </div>
    </body>
  );
}
