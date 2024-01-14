import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  function task_button(){
    if(location.pathname != '/add_task'){
      return (
        <Link to="/add_task">
        <button className="btn btn-outline-success">Add Task</button>
        </Link>
      )
    }
  } 

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Task Manager</a>
        {task_button()} 
      </div>
    </nav>
  );
}
