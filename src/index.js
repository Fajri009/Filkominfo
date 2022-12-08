import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Nav from './Components/Nav/Nav.js'
import Home from './Pages/Home/Home.js';
import Lomba from './Pages/Lomba/Lomba.js'
import Beasiswa from './Pages/Beasiswa/Beasiswa.js';
import Seminar from './Pages/Seminar/Seminar.js';
import Oprec from './Pages/Oprec/Oprec.js';
import Karya from './Pages/Karya/Karya.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/lomba' exact element={<Lomba />} />
          <Route path='/beasiswa' exact element={<Beasiswa />} />
          <Route path='/seminar' exact element={<Seminar />} />
          <Route path='/oprec' exact element={<Oprec />} />
          <Route path='/karya' exact element={<Karya />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
