import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ImageSrc, title, description}:{ImageSrc:string, title:string, description:string}) => {
  return (
    <div className="">
      <div className='h-96 flex items-center justify-center'>
        <div className='w-80 h-80 relative rounded-full overflow-hidden'>
          <Image
            src={ImageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-[rgba(25,51,54)] mt-4 text-center">
        <h1 className='font-light text-2xl '>{title}</h1>
        <p className='text-sm font-extralight leading-8'>
            {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard