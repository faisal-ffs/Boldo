import React from 'react';

function Index() {
  return (
    <section className='mx-auto max-w-6xl'>
      <div className='bg-[#0A2640]'>
        <div className='flex text-white font-sans justify-center items-center'>
          <h1 className='mt-8 md:mt-12 text-2xl md:text-4xl'>Our Blog</h1>
        </div>
        <div className='flex text-white justify-center mt-4 md:mt-8 items-center font-thin md:text-3xl'>
          <h1>Value proposition accelerator <br />project management venture.</h1>
        </div>
        <div className='mt-8 mx-auto w-32 md:w-64 h-0.5 bg-slate-100'></div>
        <div className='pb-12'>
          <div className='flex flex-col md:flex-col ml-20'>
            <div className='text-white text-center md:text-left mt-8 md:mt-20 md:w-1/2'>
              <h1 className='text-3xl md:text-4xl'>We are<span className='text-[#65E4A3]'> committed.</span></h1>
              <p>Take donations through credit card, PayPal, Venmo, cryptocurrency, DAF, & stock donations.</p>
            </div>
            <div className='text-white text-center md:text-left mt-8 md:mt-12 md:w-1/2'>
              <h1 className='text-3xl md:text-4xl'>We are<span className='text-[#65E4A3]'> responsible.</span></h1>
              <p>Take donations through credit card, PayPal, Venmo, cryptocurrency, DAF, & stock donations. Every.org is a trusted space for nonprofits to fundraise & reach a wide variety of donors.</p>
            </div>
          
          <div className='flex flex-col md:flex-row mt-8'>
            <div className='text-white text-center md:text-left md:w-1/2'>
              <h1 className='text-3xl md:text-4xl'>We aim for<span className='text-[#65E4A3]'> progress.</span></h1>
              <p>Take donations through credit card, PayPal, Venmo, cryptocurrency, DAF, & stock donations. Every.org is a trusted space for nonprofits to fundraise & reach a wide variety of donors.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
