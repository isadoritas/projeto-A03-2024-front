import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Perfil from "./perfil/Perfil";
import Login from "./session/Login";
import Registration from "./session/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/perfil" element={<Perfil/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
