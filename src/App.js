import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (

     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/profile/:id" element={<h1>user profile page</h1>}/>
        <Route path="*" element={<h1>404 page not found'</h1>}/>
      </Routes>
     </BrowserRouter>
 
   
  );
}

export default App;
