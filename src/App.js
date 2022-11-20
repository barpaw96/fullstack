import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Caruzel from './pages/Caruzel';
import Panel from './pages/Panel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Tictactoe from './pages/Tictactoe';

function App() {

  
  return (
    <div className="App">
            

      <Router>
      <Navbar/>
      <div id="toastUserAdded" class="toast" role="alert" aria-live="assertive" aria-atomic="false">
              <div class="toast-header">
                
                <strong class="me-auto">UWAGA!</strong>
                <small></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Użytkownik dodany!
              </div>
            </div>
      <Routes>
      
        <Route exact path="/list" element={<Home/>}/>

        
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/list/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/caruzel" element={<Caruzel/>}/>
        <Route exact path="/panel" element={<Panel/>}/>
        <Route exact path="/tictactoe" element={<Tictactoe/>}/>

      </Routes>

      
      </Router>
      
      {/* style="background-color: green; color: white" */}

    
    </div>
  );
}

export default App;
