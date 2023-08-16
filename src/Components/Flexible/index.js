import React from "react";
import random from "../../images/random.png";
import random1 from "../../images/random1.png";
import random2 from "../../images/random2.png";
import sm from "../../images/sm.png";

function Index() {
  return (
    <section className="mx-auto mt-8 max-w-6xl bg-slate-50 pt-8">
      <div className="text-center text-black font-sans">
        <h1 className="text-2xl md:text-4xl text-gray-400">Our Story</h1>
      </div>
      <div className="text-center text-black mt-4 font-thin md:text-3xl">
        <h1>The people behind the work</h1>
      </div>
      <div className="text-center mt-8 mx-4 md:mx-20 font-serif">
        <p>
          Conversion angel investor entrepreneur first mover advantage. Handshake
          <br /> infographic mass market crowd funding iteration. Traction
          stock user experience
          <br /> deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-20 pb-20 mt-20 text-black font-serif">
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={random} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={random1} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={random2} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-4 md:ml-16 lg:ml-64">
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={sm} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={sm} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={sm} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
        <div className="flex flex-col items-center mt-4 text-center">
          <img src={sm} alt="Michael Scott" />
          <p className="mt-2">Michael Scott</p>
          <p className="mt-1 text-sm">General manager</p>
        </div>
      </div>
    </section>
  );
}

export default Index;
