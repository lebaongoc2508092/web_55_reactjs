import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AuthContext from "./contexts/auth";
import Home from "./components/Home";
import http from "./utils/axios";
function App() {
  const [user,setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      setLoadingUser(false);
      return;
    }
    http.get("/profile/me", {
      headers: {
        authorization:'Bearer ' + token,
      },
    })
    .then((res) =>{
      setUser(res.data);
      setTimeout(()=>{
      setLoadingUser(false);
      },1000)
    }).catch(() =>{
      localStorage.removeItem('jwt');
      setLoadingUser(false);
    });
  },[]);
  if (loadingUser) {
    return <div className="App">Loading User...</div>}
  return (
    <div className="App">
      <AuthContext.Provider value={{user: user, setUser: setUser, loading: loadingUser }} >
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
