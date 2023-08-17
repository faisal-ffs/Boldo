import React from 'react';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl h-auto px-4 sm:px-8 lg:px-16'>
      <div className='bg-[#0A2640] rounded-3xl h-auto p-8 md:p-12 lg:p-16'>
        <div className='flex text-white justify-center items-center text-2xl md:text-4xl'>
          <h1 className='mt-4 md:mt-8 px-3 text-center'>
            An Enterprise Template To Ramp<br />Up Your Company Site.
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center mt-8 md:mt-12 gap-2 '>
          <input
            type='email'
            placeholder='Enter your email'
            className='rounded-3xl py-2 px-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white '
          />
          <button
            type='submit'
            className=' md: rounded-3xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-700 focus:outline-none'
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Index;
