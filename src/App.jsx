
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axiox from 'axios'
function App() {

  const [todos, setTodos] = useState(null)
  const [todo,setTodo ] = useState("");
  const handleChange = (e) =>  setTodo(e.target.value);
  const addTodo = (e) =>{
    e.preventDefault ();
    const newTodo ={
    userId:"1",
    id: "21",
    title:todo,
    completed:false,
    };
    try {
      axiox. post("https://jsonplaceholder.typicode.com/todos")
      .then(() =>setTodos([...todos,newTodo]));
    } catch (error) {
    console.log(error);  
    }
    setTodo('')
  }
   useEffect(
    () => {
      axiox.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setTodos(res.data));

    }, []
  );
  
  return (
    <div className='App'>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='add a todo' onChange={handleChange}/>
        <button>add</button>
        </form> {todos?.map(todo => {
      return (
        <>
        <div key={todo.id}> {todo.title}

        </div>
        <div>
          {todo.id}
        </div>
        <div>
          {todo.userId}
        </div>
        </>
      )
    }

    )

    }

    </div>
  )
}

export default App
