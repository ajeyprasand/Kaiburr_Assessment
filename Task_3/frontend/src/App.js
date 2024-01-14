import './App.css';
import Footer from './layout/footer';
import Navbar from './layout/navbar';
import Home from './pages/HomePage';
import AddTasks from './tasks/add_tasks';

import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/add_task" element={<AddTasks> </AddTasks>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
