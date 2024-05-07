import LoginPage from "./pages/loginpage/login";
import * as React from 'react';
import Dashboard from "./pages/dashboard/dashboard";
import Signup from "./pages/signup/signup";
import EditProfile from "./pages/profile/editprofile.js";
import NewPosts from "./pages/new posts/newposts.js";
import PostDetails from "./pages/post/postdetails.js";
import Profile from "./pages/ViewProfile/profile.js";
import OtherProfile from "./pages/ViewProfile/otherprofile.js";
import Explore from "./pages/Explore/explore.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() { 
  return (
  <div>
    <BrowserRouter>
    <div className="pages">
      <Routes>
        <Route path="/login" element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />
        <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/editprofile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
        <Route path="/newposts" element={<PrivateRoute><NewPosts /></PrivateRoute>} />
        <Route path="/post/:id" element={<PrivateRoute><PostDetails /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/profile/:id" element={<PrivateRoute><OtherProfile /></PrivateRoute>} />
        <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (auth) {
    return <Navigate to="/" replace />;
  } else {
    return props.children;
  }
}

export function PrivateRoute(props) {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth) {
    return <Navigate to="/login" replace />;
  } else {
    return props.children;
  }
}