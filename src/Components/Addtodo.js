import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Addtodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("no fild can be empty");
        } 
        addTodo(title, desc);
        alert("todo created sucessfully");
        setTitle(" ");
        setDesc(" ");
    }

  return (
    <>
    <div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" value={title} onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" value={desc}  onChange={(e)=>setDesc(e.target.value)} id="exampleFormControlTextarea1"></textarea>
</div>
        <button className='btn btn-primary my-3 mx-3' onClick={submit}>ADD-todo</button>
    </div>

<Link to="/todoitems">
<button className='btn btn-primary my-3 mx-3'>TODO-List</button>
</Link>
<Link to="/">
<button className='btn btn-primary'>Home</button>
</Link>
</>
  )
}

export default Addtodo