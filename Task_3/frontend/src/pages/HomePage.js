import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Home() {

    const [Task,setTask]=useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('All');

    useEffect(()=>{
        LoadTaskAll();
    },[]);

    const LoadTaskAll=async()=>{
        const result= await axios.get("http://localhost:8080/get_task");
        setTask(result.data);
    };

    const HandleSearch = () => {
      if (searchCriteria === 'All') {
        LoadTaskAll();
        setSearchInput('');
    } else {
        if (searchInput.trim() === '') {
            toast.warning('Please enter a value for search.');
        } else {
            switch (searchCriteria) {
                case 'ById':
                    LoadTasksById();
                    break;
                case 'ByName':
                    LoadTasksByName();
                    break;
                case 'ByAssignee':
                    LoadTasksByAssignee();
                    break;
                default:
                    break;
                }
            }
        }
    };

      const LoadTasksById = async () => {
        const result = await axios.get(`http://localhost:8080/get_task/${searchInput}`);
        if (result.data!=null){
            setTask([result.data]);
          } else {
            setTask([]);
          }
      };
    
      const LoadTasksByName = async () => {
        const result = await axios.get(`http://localhost:8080/find_ByName/${searchInput}`);
        if (Array.isArray(result.data)) {
            setTask(result.data);
          } else {
            setTask([]);
          }
      };
    
      const LoadTasksByAssignee = async () => {
        const result = await axios.get(`http://localhost:8080/find_ByAssignee/${searchInput}`);
        if (Array.isArray(result.data)) {
            setTask(result.data);
          } else {
            setTask([]);
          }
      };
    
      const DeleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/del_task/${id}`);
        toast.success(`Task with id ${id} was deleted successfully`)
        setSearchCriteria('All');
        LoadTaskAll();
      }

    return (
        <div className="container">
            <div className="input-group" style={{ marginTop: '50px' }}> 
            <button className="btn btn-success dropdown-toggle" 
            type="button" data-bs-toggle="dropdown"> 
                    {searchCriteria} 
            </button> 
            <ul className="dropdown-menu dropdown-menu-end"> 
                <li> 
                    <a className="dropdown-item" href="#" onClick={() => setSearchCriteria('All')}> 
                        All
                    </a> 
                </li> 
                <li> 
                    <a className="dropdown-item" href="#" onClick={() => setSearchCriteria('ById')}> 
                        ById 
                    </a> 
                </li> 
                <li> 
                    <a className="dropdown-item" href="#" onClick={() => setSearchCriteria('ByName')}> 
                        ByName
                    </a> 
                </li> 
                <li> 
                    <a className="dropdown-item" href="#" onClick={() => setSearchCriteria('ByAssignee')}> 
                        ByAssignee
                    </a> 
                </li> 
            </ul> 
            <input type="text" className="form-control" 
            placeholder="Enter here" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}   disabled={searchCriteria === 'All'}
            >
            </input>
            <button type="button" class="btn btn-outline-success" onClick={HandleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                </svg>
            </button>
            </div>
            <div className='container'>
            <small id="filter_option" class="form-text text-muted" style={{ marginLeft: '-34.5rem', position: 'absolute' }}>current search option: {searchCriteria}</small>
            </div>
            <div className="py-4"  style={{ marginTop: '15px' }}>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                        <th scope="col">name</th>
                        <th scope="col">id</th>
                        <th scope="col">assignee</th>
                        <th scope="col">project</th>
                        <th scope="col">startTime</th>
                        <th scope="col">ajeyPrasandProperty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Task.map((task)=>{
                            return(
                                <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.id}</td>
                                <td>{task.assignee}</td>
                                <td>{task.project}</td>
                                <td>{task.startTime}</td>
                                <td>{task.ajeyPrasandProperty}</td>
                                <td><button type="button" className="btn btn-secondary btn-sm" onClick={()=>DeleteTask(task.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
        </svg></button></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}
