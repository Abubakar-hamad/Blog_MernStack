import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}



export default App;
