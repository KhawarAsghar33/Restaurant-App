import './App.css';
import React, { } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantUpdate from './components/RestaurantUpdate';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import Auth from './components/Auth';    
import Footer from './components/Footer';
 
function App() {
  
  return (
    <div className="App">
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<RestaurantList />}></Route>
          <Route path="/create" element={<RestaurantCreate />}></Route>
          <Route path="/search" element={<RestaurantSearch />}></Route>
          <Route path="/detail" element={<RestaurantDetail />}></Route>
          <Route path="/update" element={<RestaurantUpdate />} ></Route>
          <Route path="/auth" element={<Auth />} ></Route>
          <Route path="*" element={<Page404 />} ></Route>
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
