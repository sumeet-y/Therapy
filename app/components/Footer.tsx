import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgba(239,236,227)] py-14 text-center text-[rgba(50,50,48)] ">
      <h1 className="text-3xl font-extralight">
        Dr. Serena Blake Psychologist
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <span>Phone: (323) 555-0192</span>
        <span>
          Email:{" "}
          <Link href="mailto:serena@blakepsychology.com">
            serena@blakepsychology.com
          </Link>
        </span>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        <p className="underline">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
        <p className="mt-20">
          © 2025 Dr. Serena Blake Psychologist. All rights reserved.
        </p>
      </div>
      {/* Footer content goes here */}
    </footer>
  );
};

export default Footer;
