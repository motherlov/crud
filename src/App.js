import { BrowserRouter,Route,Router,Routes,Link } from 'react-router-dom';
import './App.css';
 import Create from './Create/Create';
import List from './List/List';
import Update from './Update/Update';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Create/>} />
          <Route path="/" element={<List/>} /> 
          <Route path="/edit" element={<Update/>} /> 
        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
