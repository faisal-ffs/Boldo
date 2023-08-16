import React from 'react';
import Table from '../../images/table.png';
import whg from '../../images/whg.png';
import girl from '../../images/girl.png';
import trash from '../../images/trash.png';
import random from '../../images/random.png';
import random2 from '../../images/random2.png';
import random1 from '../../images/random1.png';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-100 pt-8 px-4 sm:px-8 md:px-16 lg:px-20 '>
      <div className='w-full md:w-4/5 lg:w-3/5 xl:w-2/3 mx-auto mb-8'>
        <img src={Table} className='w-full' alt='Table' />
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <div className='md:text-base lg:text-lg xl:text-xl mt-4 md:ml-4'>
          We connect our Customers<br />
          with the best, and help<br />
          them keep up-and stay open.
        </div>
        <div className='md:mt-4 md:ml-4'>
          <h1 className='text-sm md:text-base lg:text-lg mt-4 underline'>
            We connect our customers with the best?
          </h1>
          <h1 className='text-sm md:text-base lg:text-lg mt-2 underline'>
            We connect our customers with the best?
          </h1>
        </div>
      </div>
      <div className='flex text-black justify-center items-center font-bold mt-8'>
        <h1>Our blog</h1>
      </div>
      <div className='flex text-black justify-center mt-4 md:mt-8 items-center font-semibold text-sm md:text-base lg:text-lg px-4'>
        <h1>Value proposition accelerator<br />product management venture.</h1>
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
        <div className='w-full mt-8'>
          <div className='relative'>
            <img src={whg} alt='Image 1' className='w-full' />
          </div>
          <div className='mt-4 font-sans text-sm md:text-base lg:text-lg'>
            Pitch termsheet backing validation focus release.
          </div>
          <div className='text-start flex items-center mt-4'>
            <img src={random} alt='random' className='w-6 h-6 rounded-full' />
            <p className='ml-2 font-sans'>Chandiler bing</p>
          </div>
        </div>
        <div className='w-full mt-8'>
          <div className='relative'>
            <img src={girl} alt='girl' className='w-full' />
          </div>
          <div className='mt-4 font-sans text-sm md:text-base lg:text-lg'>
            Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
          </div>
          <div className='text-start flex items-center mt-4'>
            <img src={random1} alt='random1' className='w-6 h-6 rounded-full' />
            <p className='ml-2 font-sans'>Rachel green</p>
          </div>
        </div>
        <div className='w-full mt-8'>
          <div className='relative'>
            <img src={trash} alt='Image 3' className='w-full' />
          </div>
          <div className='mt-4 font-sans text-sm md:text-base lg:text-lg'>
            Beta prototype sales iPad gen-z marketing network effect value proposition.
          </div>
          <div className='text-start flex items-center mt-4'>
            <img src={random2} alt='random2' className='w-6 h-6 rounded-full' />
            <p className='ml-2 font-sans'>Monika geller</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <button className='mb-8 md:mb-12 py-2 px-4 rounded-3xl font-bold w-32 md:w-40 h-12 border-2 border-black bg-slate-300'>
          Load more
        </button>
      </div>
    </section>
  );
}

export default Index;
