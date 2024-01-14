import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function AddTasks(){

  let navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    assignee: '',
    project: '',
    startTime: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation(); 
      form.classList.add("was-validated");
    }else{
      const existingTask = await axios.get(`http://localhost:8080/get_task/${formData.id}`);
      if (existingTask.data){
        toast.error('Task with the same ID already exists!');
      }else{
      await axios.post("http://localhost:8080/add_task",formData);
      toast.success(`Task with id ${formData.id} added successfully!`);
      navigate("/");
      }
    }
  };

  return (
    <div className='container d-flex justify-content-center' style={{ marginTop: '50px' }}>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <p><u>Add Task</u></p>
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row mb-3">
                <label htmlFor="Name" className="col-sm-4 col-form-label">Enter Name:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={(e)=>handleChange(e)} placeholder="Enter Name" required/>
                  <div className="invalid-feedback" style={{marginLeft:'-4rem'}}>
                    Please enter Name
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="Id" className="col-sm-4 col-form-label">Enter Id:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="id" value={formData.id} onChange={(e)=>handleChange(e)} placeholder="Enter Id" required/>
                  <div className="invalid-feedback" style={{marginLeft:'-4rem'}}>
                    Please enter Id
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="Assignee" className="col-sm-4 col-form-label">Enter Assignee:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="assignee" value={formData.assignee} onChange={(e)=>handleChange(e)} placeholder="Enter Assignee" required/>
                  <div className="invalid-feedback" style={{marginLeft:'-4rem'}}>
                    Please enter Assignee
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="Project" className="col-sm-4 col-form-label">Enter Project:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="project" value={formData.project} onChange={(e)=>handleChange(e)} placeholder="Enter Project" required/>
                  <div className="invalid-feedback" style={{marginLeft:'-4rem'}}>
                    Please enter Project
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="Time" className="col-sm-4 col-form-label">Enter StartTime:</label>
                <div className="col-sm-7">
                  <input type="datetime-local" className="form-control" id="startTime" value={formData.time} onChange={(e)=>handleChange(e)} placeholder="Enter StartTime" required/>
                  <div className="invalid-feedback" style={{marginLeft:'-4rem'}}>
                    Please enter StartTime
                  </div>
                </div>
              </div>

            </div>
            <button type="submit" className="btn btn-outline-success">Submit</button>
            <Link to="/">
            <button type="button" className="btn btn-outline-danger mx-2">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}