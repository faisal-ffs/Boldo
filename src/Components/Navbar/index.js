import React, { useState } from 'react';
import logo from '../../images/Logo.png';
import logo3 from '../../images/hamburger.png';
import { Link } from 'react-router-dom';

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className='mx-auto mt-8 max-w-6xl pb-8 '>
      <div className="w-full">
        <nav className="bg-white ">
          <div className="md:flex items-center justify-between py-2 px-4 md:px-12 lg:px-16">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800 md:text-3xl">
                <img src={logo} alt="Logo" />
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="block text-gray-800 focus:text-gray-700 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={logo3} alt="Menu" className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className={`md:flex md:items-center ${isOpen ? 'md:flex-col' : ''}`}>
              <div
                className={`${isOpen ? 'flex flex-col justify-center items-center gap-5 md:flex-row md: py-5 my-2' : 'hidden md:flex md:mb-0'
                  } md:flex md:items-center`}
              >
                <Link
                  to="/blog"
                  className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2"
                  onClick={closeMenu} 
                >
                  Blog
                </Link>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2"
                  onClick={closeMenu} 
                >
                  Services
                </a>
                <Link
                  to="/about"
                  className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2"
                  onClick={closeMenu} 
                >
                  About
                </Link>
                
                <button className="sm:inline py-2 px-4 border-solid border-2 border-blue-900  font-bold text-black-600 text-xs cursor-pointer rounded md:ml-4 mt-2 md:static">Log In</button>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Index;
