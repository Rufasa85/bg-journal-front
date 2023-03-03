import React,{useState,useEffect} from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import API from "./utils/API";

function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    console.log(savedToken)
    if(savedToken){
      API.isValidToken(savedToken).then(tokenData=>{
        if(tokenData.isValid){
          setToken(savedToken);
          setUserId(tokenData.user.id)
          setIsLoggedIn(true)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  },[])

  const logout = ()=>{
    setToken('');
    setUserId(0);
    setIsLoggedIn(false);
    localStorage.removeItem("token")
  }
  
  return (

     <BrowserRouter>
     <Navbar isLoggedIn={isLoggedIn} userId={userId} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} token={token} userId={userId}/>}/>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/profile/:id" element={<Profile token={token} userId={userId}/>}/>
        <Route path="*" element={<h1>404 page not found'</h1>}/>
      </Routes>
     </BrowserRouter>
 
   
  );
}

export default App;
