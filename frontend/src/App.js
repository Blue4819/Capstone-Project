import LoginPage from "./pages/loginpage/login";
import * as React from 'react';
import Dashboard from "./pages/dashboard/dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  return (
  <div>
    <BrowserRouter>
    <div className="pages">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

