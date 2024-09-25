import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Todoitems from './Components/Todoitems';
import Addtodo from './Components/Addtodo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDel = (sno) => {
    
    setTodos(todos.filter((e)=>{
           return e.sno!==sno;
        }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route exact path="/" element={<Navbar/>} />
    <Route exact path ="/about" element={<About/>} />
     <Route exact path="/addtodo" element={<Addtodo addTodo={addTodo}/>} />
     <Route exact path="/todoitems" element={<Todoitems todos={todos} onDel={onDel} />}/>
  
     </Routes>
 </BrowserRouter>
    </div>
  );
  }

export default App;
