import React from 'react';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-50'>
      <div className='flex justify-center items-center font-sans text-black'>
        <h1 className='mt-12 text-3xl md:text-4xl'>Our Services</h1>
      </div>
      <div className='flex justify-center mt-8 items-center font-thin text-black md:text-3xl'>
        <h1>Handshake infographic mass <br />market crowdfunding iteration.</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-4 lg:gap-12 px-4 md:px-20 w-full pb-20 justify-center mt-20 font-bold'>
        <div className='md:mt-8 text-4xl lg:text-6xl font-sans text-center'>
          <p className='mt-2 text-xl font-serif'>120m</p>
          <p className='mt-2 text-xl font-semibold'>Cool feature title</p>
        </div>
        <div className='md:mt-8 text-4xl lg:text-6xl font-sans text-center'>
          <p className='mt-2 text-xl font-serif'>10.000</p>
          <p className='mt-2 text-xl font-semibold'>Even feature title</p>
        </div>
        <div className='md:mt-8 text-4xl lg:text-6xl font-bold text-center'>
          <p className='mt-2 text-xl font-serif'>240</p>
          <p className='mt-2 text-xl font-semibold'>Cool feature title</p>
        </div>
      </div>
    </section>
  );
}

export default Index;
