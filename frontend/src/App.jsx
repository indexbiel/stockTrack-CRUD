import { useState } from "react";
import './App.css'
import Trash from './assets/trash.svg'

function App() {

  const [users, setUsers] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    // Cria um novo usuário com os dados digitados
    const novoUsuario = {
      id: Date.now().toString(), // Gera um id único simples
      nome,
      email,
      idade
    };
    // Adiciona o novo usuário na lista
    setUsers([...users, novoUsuario]);
    // Limpa os campos do formulário
    setNome("");
    setEmail("");
    setIdade("");
  }

  return (
    <div className='app'>
      <h1>Cadastro de usuários</h1>


      <form onSubmit={handleSubmit}>
        <input
          placeholder="nome"
          type='text'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          placeholder="email"
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          placeholder="Idade"
          type='number'
          value={idade}
          onChange={e => setIdade(e.target.value)}
        />

        <button onClick={handleSubmit}>

          Cadastrar

        </button>

      </form>

      {users.map(user => (
        <div key={user.id}>
          <div class="user-list">
            <p>{user.nome}</p>
            <p>{user.email}</p>
            <p>{user.idade}</p>

            <button>
              <img src={Trash} />
            </button>

          </div>

        </div>
      ))}





    </div>
  )
}

export default App














