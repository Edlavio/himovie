import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';	
import Search from './pages/Search';
import ErrorPage from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/movies/:id" element={<Movie/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);