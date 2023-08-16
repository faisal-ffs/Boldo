import React from 'react';
import logo from '../../images/Logo.png';
import whg from '../../images/whg.png';
import Bvalue from '../Bvalue';
import Value from '../Value';
import Footer from '../Footer';

function Index() {
  return (
    <>
      <section className='mx-auto mt-2 max-w-6xl bg-slate-50'>
        <div className='w-full'>
          <nav className='bg-slate-50'></nav>
          <div className='flex text-black justify-center items-center font-sans'>
            <h1 className='mt-8 md:mt-12 text-2xl md:text-4xl'>Blog</h1>
          </div>
          <div className='flex text-black justify-center mt-4 md:mt-8 items-center font-thin md:text-3xl'>
            <h1>Thoughts and words.</h1>
          </div>
          <div className='mt-12 md:mt-20 ml-4 md:ml-12 flex flex-col md:flex-row'>
            <img src={whg} alt='Blog Image' className='md:w-1/2' />
            <div className='mt-4 md:mt-0 md:ml-8'>
              <h2 className='text-xl md:text-3xl text-gray-800 font-serif'>
                Pitch termsheet backing <br />Validation focus release.
              </h2>
            </div>
          </div>
        </div>
        <h1 className='w-3/4 ml-8 md:ml-36 h-0.5 bg-black mt-8 md:mt-20'></h1>
      </section>

      <Bvalue />
      <Value />
      <Footer />
    </>
  );
}

export default Index;
