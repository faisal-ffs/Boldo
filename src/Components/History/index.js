import React from 'react';

function Index() {
  return (
    <section className='mx-auto mt-8 max-w-6xl'>
      <div className='bg-[#0A2640] p-4 md:p-8'>
        <div className='flex text-white font-sans justify-center items-center'>
          <h1 className='mt-6 md:mt-12 text-2xl md:text-4xl text-center'>
            Our Story
          </h1>
        </div>
        <div className='flex text-white justify-center mt-4 md:mt-8 items-center font-thin md:text-3xl text-center'>
          <h1>
            Handshake infographic mass <br />market crowdfunding iteration.
          </h1>
        </div>
        <div className='pb-8 text-gray-500 mt-6 md:mt-20 px-3 md:px-8 text-center'>
          <p>
            Through our suite of innovative tools including crowdfunding
            campaigns, permanent digital campaigns, peer-to-peer giving, and
            Digital Giving Circles, people and organizations come together to
            create community and make an impact in the world. Crowdfunding is
            the use of small amounts of capital from a large number of
            individuals to finance a new business venture. Depending on the
            type of crowdfunding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Index;
