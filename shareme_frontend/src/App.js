import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};
export default App;
