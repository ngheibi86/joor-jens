import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router';
import './App.css';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ResponsiveNavigation from './components/ResponsiveNavigation';


function App() {
  const navLinks=[
    {
      text: 'جستجوی کالا',
      path: '/portfolio',
      icon: 'search-inactive'
    },
  
   {
     text: 'دسته بندی کالا',
     path: '/about',
     icon: 'category-inactive'
   },
   {
     text: 'اسکنر',
     path: '/blog',
     icon: 'scan-inactive'
   },
   {
     text: 'شرکت های پخش',
     path: '/portfolio',
     icon: 'DS-inactive'
   },
 
  {
    text: 'لیست سفارشات',
    path: '/contact',
    icon: 'order-inactive'
  }
  ]
      return (
        <div className="App">
          <ResponsiveNavigation
          navLinks={ navLinks }
          logo={ logo }
          // background="#fff"
          // hoverBackground="#ddd"
          linkColor="#sss"
        />
          <Router>
            <Contact path='/contact'></Contact>
            <About path='/about'></About>
            <Home path='/home'></Home>
            <Portfolio path='/portfolio'></Portfolio>
            <Blog path='/blog'></Blog>
          </Router>
        </div>
  );
}

export default App;
