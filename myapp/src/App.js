import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard'; 
import AddNew from './pages/adduser';





function App(){
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/password-reset" element={<Forgot />}/>
        <Route path="/Landing/Dashboard" element={<Dashboard/>}/>
        <Route path="/Landing/AddNew" element={<AddNew/>}/>
      </Routes>
    </div>
  );
}
export default App;