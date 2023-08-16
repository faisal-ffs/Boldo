import React from 'react';
import graph from '../../images/graph.png';
import logos from '../../images/logos/logos.png';
import logo2 from '../../images/logos/logo2.png';
import Herosection from '../Herosection'
import RouterComponent from '../Router'
import Flex from '../Flex'
import Customer from '../Customer'
import Value from '../Value'
import Footer from '../Footer'

function index() {
  return (
    <>

      <section className='mx-auto mt-2 max-w-6xl bg-white'>
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="flex flex-col lg:w-1/2 p-8 md:p-12">
            <div>
              <h2 className="text-3xl text-gray-800 font-serif md:text-4xl">Save time by building fast with Boldo Template.</h2>
              <p className="text-sm mt-4 text-gray-500 md:text-base">Funding handshake buyer business-to-business metrics i-pas partnership. First mover advantage innovator success deployment non-disclosure.</p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a className="py-3 mt-8 bg-blue-900 rounded-3xl flex items-center justify-center text-gray-200 text-xs font-semibold w-40" href="#">Buy template</a>
                <a className="mx-4 py-3 mt-8 rounded-3xl text-gray-900 flex border-2 border-indigo-900 items-center justify-center text-xs w-40 font-bold cursor-pointer">Explore</a>
              </div>
            </div>
          </div>
          <div className="mt-8 ml-8">
            <img src={graph} alt="Graph" />
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8 bg-white w-full px-4 md:px-12'>
          <img className='w-24 mb-2' src={logos} alt="Logo" />
          <img className='w-24 mb-2' src={logo2} alt="Logo 2" />
          <img className='w-24 mb-2' src={logos} alt="Logo" />
          <img className='w-24 mb-2' src={logo2} alt="Logo 2" />
          <img className='w-24 mb-2' src={logos} alt="Logo" />
          <img className='w-24 mb-2' src={logo2} alt="Logo 2" />
        </div>
      </section>

      <Herosection />
      <RouterComponent />
      <Flex />
      <Customer />
      <Value />
      <Footer />
    </>
  )
}

export default index;
