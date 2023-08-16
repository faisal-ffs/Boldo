import react from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>




    </>
  );
}

export default App;
