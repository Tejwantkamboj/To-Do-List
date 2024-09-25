import React from 'react'
import { Link } from 'react-router-dom'

const Todoitems = ({todos,onDel}) => {
  return (
    <>
    <Link to="/addtodo">
    <button className='btn btn-primary my-3 mx-3'>ADD-TODO</button>
  </Link>
  
  <Link to="/">
<button className='btn btn-primary'>Home</button>
</Link>
 
    <div>
      {todos.length===0 ? "No todos to display" :
      <div>
        {todos.map((dt)=>{return(<div className='container text-center my-3' key={dt.sno}> 
            <h1>{dt.sno}</h1> 
            <h1>{dt.title}</h1> 
            <h1>{dt.desc}</h1> 
            <button type="button" className="btn btn-danger" onClick={()=>{onDel(dt.sno)}}>Delete</button>
            </div>)})
}
      </div>
      }

    </div>
    </>
  )
}

export default Todoitems