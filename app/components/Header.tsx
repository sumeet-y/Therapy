import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="px-4  md:px-14 pt-10 bg-[rgba(239,236,227)] ">
      <Link href="/" className='flex items-center'>
        <Image src="/mind.png" alt="Dr. Serena Blake Logo" width={45} height={45}  />
        <span className="text-xl text-green-800 flex flex-col leading-tight ml-2">
          <span>Dr. Serena Blake,PsyD</span>
          <span>Psychologist</span>
        </span>
      </Link>
    </header>
  );
};

export default Header;
