import React from 'react';
import random from '../../images/random.png';
import random1 from '../../images/random1.png';
import random2 from '../../images/random2.png';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl'>
      <div className='bg-[#0A2640]'>
        <div className='flex text-white px-3 lg:ml-20 items-center font-serif text-xl lg:text-3xl'>
          <h1 className='mt-12'>An enterprise template to ramp <br />up your company website.</h1>
        </div>
        <div className='lg:px-8 xl:px-16 mt-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='w-full mb-4 bg-slate-100 text-black rounded-2xl p-6'>
              <p className='text-sm md:text-base'>
                "Buyer buzzer partner network disruptive disclosure agreement business"
              </p>
              <div className='flex justify-end items-center mt-6'>
                <img
                  className='w-10 h-10 rounded-full'
                  src={random}
                  alt='Albus Dumbledore'
                />
                <p className='ml-2 text-sm font-serif'>Albus Dumbledore</p>
              </div>
            </div>
            <div className='w-full mb-4 bg-slate-100 text-black rounded-2xl p-6'>
              <p className='text-sm md:text-base'>
                "Buyer buzzer partner network disruptive disclosure agreement business"
              </p>
              <div className='flex justify-end items-center mt-6'>
                <img
                  className='w-10 h-10 rounded-full'
                  src={random1}
                  alt='Severus Snape'
                />
                <p className='ml-2 text-sm font-serif'>Severus Snape</p>
              </div>
            </div>
            <div className='w-full mb-4 bg-slate-100 text-black rounded-2xl p-6'>
              <p className='text-sm md:text-base'>
                "Buyer buzzer partner network disruptive disclosure agreement business"
              </p>
              <div className='flex justify-end items-center mt-6'>
                <img
                  className='w-10 h-10 rounded-full'
                  src={random2}
                  alt='Harry Potter'
                />
                <p className='ml-2 text-sm font-serif'>Harry Potter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
  