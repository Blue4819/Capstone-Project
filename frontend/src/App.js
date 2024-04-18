import LoginPage from "./pages/loginpage/login";
import * as React from 'react';
import Dashboard from "./pages/dashboard/dashboard";
import Signup from "./pages/signup/signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  return (
  <div>
    <BrowserRouter>
    <div className="pages">
      <Routes>
        <Route path="/login" element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />
        <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const auth = JSON.parse(localStorage.getItem('auth'))
  if(auth){
    response.error("Already logged in")
    window.location.href = "/dashboard"
  }
  else{
    return props.children;
  }
}

export function PrivateRoute(props){
  const auth = JSON.parse(localStorage.getItem('auth'))
  if(!auth){
    response.error("Not logged in")
    window.location.href = "/login"
  }
  else{
    return props.children;
  }
}