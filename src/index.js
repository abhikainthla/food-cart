import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy loading components
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyFaq = React.lazy(() => import('./components/Faq'));
const LazyCart = React.lazy(() => import('./components/Cart'));
const LazyLogin = React.lazy(() => import('./components/Login'));
const LazySignUp = React.lazy(() => import('./components/SignUp'));

// Use Suspense to handle loading of lazy components
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className='loading-screen'><img src='https://cdn.dribbble.com/users/12755/screenshots/1036842/media/99d83efd4b719adff7480ac048434dfd.gif'></img></div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/reviews" element={<LazyFaq />} />
          <Route path="/cart" element={<LazyCart />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path='/signup' element={<LazySignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
