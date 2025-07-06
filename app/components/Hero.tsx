import React from "react";

const Hero = () => {
  return (
    <div className="px-4  md:px-14 h-screen w-full relative bg-[rgba(239,236,227)] -z-20">
      <div className="w-full h-full relative flex items-center">
        <video
          width="1920"
          height="990"
          preload="none"
          autoPlay
          muted
          loop
          className="absolute top-0 -z-10 py-12 left-0 w-full h-full object-cover"
        >
          <source
            src="https://gmsmmuryjvjpjkmkftpt.supabase.co/storage/v1/object/public/video//beach.mp4"
            type="video/mp4"
          />
        </video>
        <div className="py-14 w-full h-[87%] bg-black/20 justify-center items-center flex flex-col text-white text-center p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 leading-10 md:leading-24">
            Psychological Care for <br /> Change, Insight, and Well-Being
          </h1>
          <h2 className="text-lg md:text-2xl font-light mt-6 md:mt-10">
            Dr. Serena Blake, PsyD – Licensed Clinical Psychologist in Los
            Angeles
          </h2>
          <div className="mt-14 md:mt-20 ">
            <button className="btn btn-outline text-lg font-light text-white">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
