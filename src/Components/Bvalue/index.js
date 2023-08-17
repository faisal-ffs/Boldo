import React from 'react';
import whg from '../../images/whg.png';
import girl from '../../images/girl.png';
import trash from '../../images/trash.png';
import random from '../../images/random.png';
import random1 from '../../images/random1.png';
import random2 from '../../images/random2.png';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-100 pt-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 lg:px-24 '>
        <div className='w-full'>
          <div className='relative ml-4'>
            <img src={whg} alt='Image 1' />
          </div>
          <div className='w-full mt-8'>
          <div className='mt-4 font-sans ml-4 text-sm md:text-base lg:text-lg'>Pitch termsheet backing validation focus release value proposition..</div>
          <div className='text-start flex  flex-row'>
            <img src={random} alt='random' className='w-8 h-8 ml-4 rounded-full mt-4' />
            <p className='ml-4 mt-6 font-sans'>Chandler Bing</p>
          </div>
        </div>
        </div>
        <div className='w-full mt-8 sm:mt-0'>
          <div className='relative ml-4'>
            <img src={girl} alt='girl' />
          </div>
          <div className='mt-4 font-sans ml-4'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</div>
          <div className='text-start flex flex-row'>
            <img src={random1} alt='random1' className='w-8 h-8 ml-4 rounded-full mt-4' />
            <p className='ml-4 mt-6 font-sans'>Rachel Green</p>
          </div>
        </div>
        <div className='w-full mt-8 sm:mt-0'>
          <div className='relative ml-4'>
            <img src={trash} alt='Image 3' />
          </div>
          <div className='mt-4 ml-4 font-sans'>Beta prototype sales iPad Gen-Z marketing network effect value proposition.</div>
          <div className='text-start flex flex-row'>
            <img src={random2} alt='random2' className='w-8 h-8 ml-4 rounded-full mt-4' />
            <p className='ml-4 mt-6 font-sans'>Monica Geller</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8 pb-8'>
        <button className='py-2 px-4 rounded-3xl font-bold w-40 border-2 border-black bg-slate-300'>Load more</button>
      </div>
    </section>
  );
}

export default Index;
