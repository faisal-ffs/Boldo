import React from 'react';
import logos from '../../images/logos/logos.png';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-100'>
      <div className='p-4 md:p-10 lg:p-20'>
        <div className='lg:ml-4 md:ml-20 mt-0 text-center lg:text-left'>
          <img src={logos} alt='Logos' />
        </div>
        <h1 className='text-center md:text-left mt-6 md:mt-12'>
          Social media validation<br />
          business models canvas graphical<br />
          user interface launch party<br />
          creative Facebook iPad Twitter.
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-12'>
          <div className='text-center md:text-left'>
            <h1 className='font-semibold mt-4 md:mt-8'>Company</h1>
            <h1 className='mt-2'>Home</h1>
            <h1 className='mt-2'>Careers</h1>
            <h1 className='mt-2'>Services</h1>
          </div>
          <div className='text-center md:text-left mt-4 md:mt-0'>
            <h1 className='font-semibold mt-4 md:mt-8'>Landings</h1>
            <h1 className='mt-2'>Home</h1>
            <h1 className='mt-2'>Product</h1>
            <h1 className='mt-2'>Services</h1>
          </div>
          <div className='text-center md:text-left mt-4 md:mt-0'>
            <h1 className='font-semibold mt-4 md:mt-8'>Resources</h1>
            <h1 className='mt-2'>Blog</h1>
            <h1 className='mt-2'>Product</h1>
            <h1 className='mt-2'>Services</h1>
          </div>
        </div>
    
      </div>
    </section>
  );
}

export default Index;
