import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import SingleBreed from './Pages/SingleBreed';

function App() {
  return (
   <>
   <HashRouter basename={process.env.PUBLIC_URL}>
   <Routes> 
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/:name" element = {<SingleBreed/>}></Route>
   </Routes>
   </HashRouter>
   </>
  );
}

export default App;
