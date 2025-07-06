import React from 'react'

const Pricing = () => {
  return (
    <div className="text-center py-20 px-10 bg-[rgba(130,161,161)] text-black">
      <h1 className="text-4xl font-extralight ">Rate and Insurance</h1>
      <div className="text-lg font-extralight mt-14 flex flex-col gap-8">
        <p>Individual Session Fee - $200</p>
        <p>Couples Session Fee - $250</p>
        <p>
          I accept both private pay and insurance. I am in-network with BCBS and
          Aetna.
        </p>
        <p>
          I also offer a sliding scale fee for those who qualify. Please contact me for more information.
        </p>
      </div>
    </div>
  );
}

export default Pricing