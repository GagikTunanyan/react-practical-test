import React from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import { Home, Signin, Signup, UserDetails, Users } from './pages';
import { Navbar } from './components/Navbar';

function App() {
  // TODO create useWindowSize custom hook, and store window size and device information in the redux utilsSlice.ts used detectDevice action
  // useWindowSize(); 

  return (
    <div className="App">
      {/* TODO show <Navbar /> when the user is authenticated */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/users/id' element={<UserDetails />} />
          <Route path='/users' element={<Users />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="" element={<Navigate to="/signin" />} />
          {/* TODO create a 404 not found page and show that for all routes that were not declared there */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
