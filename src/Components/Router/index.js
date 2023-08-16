import React from 'react';
import call from '../../images/call.png';
import calls from '../../images/calls.png';

function Index() {
  return (
    <section className='mx-auto max-w-6xl bg-slate-50'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 px-3'>
        <div className='lg:ml-20 lg:w-96 mt-8 md:w-full'>
          <img src={call} alt='Call' />
        </div>
        <div className='lg:ml-4 mt-4 md:mt-8'>
          <h1 className='font-serif text-3xl'>
            We connect our customers with the best,
            <br /> and help them keep up-and stay open.
          </h1>
          <p className='text-sm p-2 mt-4'>
            We connect our customers with the best.
          </p>
          <p className='text-sm p-2'>Advisor success customer launch party.</p>
          <p className='text-sm p-2'>business-to-consumer long tail.</p>
          <button className='mx-4 py-3 mt-4 rounded-3xl bg-[#0A2640] text-white text-sm w-36 font-bold cursor-pointer'>
            Start over
          </button>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 px-3 mt-8'>
        <div className='lg:ml-4 mt-4 md:mt-8'>
          <h1 className='font-serif text-3xl'>
            We connect our customers with the best,
            <br /> and help them keep up-and stay open.
          </h1>
          <p className='text-sm bg-gray-300 p-2 rounded mt-4 hover:bg-slate-500 text-white'>
            We connect our customers with the best.
          </p>
          <p className='text-sm bg-gray-300 mt-4 rounded p-2 hover:bg-slate-500 text-white'>
            Advisor success customer launch party.
          </p>
          <p className='text-sm bg-gray-300 mt-4 rounded p-2 hover:bg-slate-500 text-white'>
            business-to-consumer long tail.
          </p>
        </div>
        <div className='lg:w-96 md:w-full'>
          <img src={calls} alt='Calls' />
        </div>
      </div>
    </section>
  );
}

export default Index;
