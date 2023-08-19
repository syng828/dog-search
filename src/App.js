import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import SingleBreed from './Pages/SingleBreed';
import React, {Fragment} from 'react';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes> 
    <Route path = "/" element = {
    <React.Fragment>
      <Home/> 
    </React.Fragment>
    }></Route>
    <Route path = "/:name" element = {<SingleBreed/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
