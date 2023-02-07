import './App.css';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element = {<Task />}/>
          <Route path='/add' element={<AddTask />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
