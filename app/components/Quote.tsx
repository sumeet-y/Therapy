import Image from 'next/image';
import React from 'react';

const Quote = () => {
  return (
    <div className='flex  flex-col items-center border relative'>
      <div className="h-[30rem] border ">
        <Image src="/waves.jpg" alt="Waves" fill className="object-cover" />
      </div>
      <div className="text-black text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-2xl md:text-4xl font-extralight text-center mt-10 mb-4">
          The curious paradox is that when I accept myself just as I am, then I
          can change.
        </h1>
        <span className="text-center font-extralight mt-14">- Carl Rogers</span>
      </div>
    </div>
  );
};

export default Quote;
