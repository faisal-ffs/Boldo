import React from 'react';
import logos from '../../images/logos/logos.png';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl bg-slate-100'>
      <div className='p-4 md:p-10 lg:p-20'>
        <div className='flex justify-center md:justify-start'>
          <img src={logos} alt='Logos' className='text-center md:text-left mt-6 md:mt-12' />
        </div>
        <h1 className='text-center md:text-left mt-6 md:mt-12  '>
          Social media validation business models canvas graphical user interface launch party
          creative Facebook iPad Twitter.Funding handshake buyer business-to-business metrics i-pas partnership. First mover advantage innovator success deployment non-disclosure
        </h1>
        <div className='flex flex-row md:flex-row justify-between mt-6 md:mt-12'>
          <div className='text-center md:text-left'>
            <h1 className='font-semibold mt-8 md:mt-8'>Company</h1>
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
