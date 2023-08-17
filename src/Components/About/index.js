import React from 'react';
import History from '../History';
import Flexible from '../Flexible';
import Comment from '../Comment';
import Herosection2 from '../Herosection2';
import Value from '../Value';
import Footer from '../Footer';

function Index() {
  return (
    <div>
      <section className='mx-auto max-w-6xl bg-[#65E4A3]'>
        <div className='flex justify-between items-center'>
         
        </div>
        <div className='flex'>
          <div className='flex flex-col mt-16 md:mt-32 items-center text-center lg:text-left px-6 md:px-12 lg:w-1/2'>
            <div className='pb-8 pt-4 mr-10'>
              <h2 className='text-2xl md:text-4xl text-gray-800 font-serif'>
                We love to make things, things that matter.
              </h2>
              <p className='text-sm md:text-base text-gray-500 mt-2 md:mt-4'>
                Funding handshake buyer business-to-business metrics i-pas
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Herosection2 />
      <History />
      <Flexible />
      <Comment />
      <Value />
      <Footer />
    </div>
  );
}

export default Index;
