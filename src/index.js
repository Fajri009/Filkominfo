import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './Pages/Home/Home.js';
import Lomba from './Pages/Lomba/Lomba.js'
import Desc_lomba from './Pages/Deskripsi/Lomba.js';
import Seminar from './Pages/Seminar/Seminar.js';
import Desc_seminar from './Pages/Deskripsi/Seminar.js'
import Beasiswa from './Pages/Beasiswa/Beasiswa.js';
import Desc_beasiswa from './Pages/Deskripsi/Beasiswa.js'
import Oprec from './Pages/Oprec/Oprec.js';
import Desc_oprec from './Pages/Deskripsi/Oprec.js'
import Karya from './Pages/Karya/Karya.js';
import Desc_karya from './Pages/Deskripsi/Karya.js'
import Footer from './Components/Footer/Footer.js'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/lomba' exact element={<Lomba />} />
          <Route path='/beasiswa' exact element={<Beasiswa />} />
          <Route path='/seminar' exact element={<Seminar />} />
          <Route path='/oprec' exact element={<Oprec />} />
          <Route path='/karya' exact element={<Karya />} />
          <Route path='/description-lomba' exact element={<Desc_lomba />} />
          <Route path='/description-seminar' exact element={<Desc_seminar />} />
          <Route path='/description-beasiswa' exact element={<Desc_beasiswa />} />
          <Route path='/description-oprec' exact element={<Desc_oprec />} />
          <Route path='/description-karya' exact element={<Desc_karya/>} />
        </Routes>
        <Footer />
      </div>  
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
