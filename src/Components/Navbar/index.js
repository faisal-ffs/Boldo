import React from 'react';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-50'>
      <div className="w-full">
        <nav className="bg-white shadow-lg">
          <div className="md:flex items-center justify-between py-2 px-4 md:px-12 lg:px-16">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800 md:text-3xl">
                <img src={logo} alt="Logo" />
              </Link>
              <div className="md:hidden">
                <button type="button" className="block text-gray-800 focus:text-gray-700 focus:outline-none">

                </button>
              </div>
            </div>
            <div className="flex-col md:flex-row hidden ml-4 md:block">
              <Link to="/blog" className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2">Blog</Link>
              <a href="#" className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2">Services</a>
              <Link to="/about" className="text-gray-800 hover:bg-gray-300 rounded-3xl hover:text-black-900 hover:font-bold py-1 px-2 md:mx-2">About</Link>
            </div>
            <div className='px-2 py-2 bg-gray-100 w-full sm:w-32 md:w-28 border-solid border-2 border-blue-900 flex items-center justify-center font-bold text-black-600 text-xs cursor-pointer rounded-2xl mt-2 sm:mt-0'>
              Log In
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Index;
