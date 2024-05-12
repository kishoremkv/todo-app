import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { func } from 'prop-types'

// useEffect hook

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3001/todos")
  .then(async function(res){
    const json = await res.json();
    console.log(json.todos);
    setTodos(json.todos);
    console.log(todos)
  })
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
