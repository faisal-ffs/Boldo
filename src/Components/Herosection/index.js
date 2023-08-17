import React from "react";
import guy from "../../images/guy.png";
import sky from "../../images/sky.png";
import hand from "../../images/handshake.png";

function Index() {
  return (
    <section className="mx-auto mt-8 max-w-6xl w-full bg-slate-50">
      <div className="bg-[#0A2640] w-full">
        <div className="flex text-white justify-center items-center font-sans">
          <h1 className="mt-12 text-xl md:text-2xl lg:text-3xl">
            Our Services
          </h1>
        </div>
        <div className="flex text-white justify-center mt-6 md:mt-8 items-center font-thin text-lg md:text-2xl lg:text-3xl">
          <h1>
            Handshake infographic mass <br />
            market crowdfunding iteration.
          </h1>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 md:px-6 lg:px-20 w-full pb-20 mt-8 md:mt-12 text-white font-bold">
          <div className="text-center mt-4">
            <img src={hand} alt="Hand Icon" className="mx-auto" />
            <p className="mt-2 text-lg md:text-xl">
              Cool feature title
            </p>
            <a href="#" className="mt-2 underline hover:no-underline">Explore feature →</a>
          </div>
          <div className="text-center mt-4">
            <img src={sky} alt="Sky Icon" className="mx-auto" />
            <p className="mt-2 text-lg md:text-xl">
              Even feature title
            </p>
            <a href="#" className="mt-2 underline hover:no-underline">Explore feature →</a>
          </div>
          <div className="text-center mt-4">
            <img src={guy} alt="Guy Icon" className="mx-auto" />
            <p className="mt-2 text-lg md:text-xl">
              Cool feature title
            </p>
            <a href="#" className="mt-2 underline hover:no-underline">Explore feature →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
