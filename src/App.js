import React,{useState} from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (

     <BrowserRouter>
     <Navbar isLoggedIn={isLoggedIn} userId={userId}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} token={token}/>}/>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/profile/:id" element={<Profile token={token} userId={userId}/>}/>
        <Route path="*" element={<h1>404 page not found'</h1>}/>
      </Routes>
     </BrowserRouter>
 
   
  );
}

export default App;
