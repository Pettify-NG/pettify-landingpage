import React from 'react';
import Image from 'next/image';
import Human from '@/assets/human&dog.png';
import Bulb from '@/assets/bulb.png';
import Love from '@/assets/love.png';
import Trust from '@/assets/trust.png';

export default function What() {
  return (
    <div className='flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg'>
      {/* Title */}
      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold text-orange-500 font-serif'>What Drives Us</h2>
      </div>
      
      {/* Grid Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl'>
        {/* Card 1 */}
        <div className='flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:scale-95'>
          <Image src={Human} alt='Human & Dog' width={100} height={100} className='mb-4' />
          <h1 className='text-lg font-semibold text-orange-500'>Companionship First</h1>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:scale-95'>
          <Image src={Bulb} alt='Innovation' width={100} height={100} className='mb-4' />
          <h1 className='text-lg font-semibold text-orange-500'>Innovation</h1>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:scale-95'>
          <Image src={Love} alt='Long life Commitment' width={100} height={100} className='mb-4' />
          <h1 className='text-lg font-semibold text-orange-500'>Long life Commitment</h1>
        </div>

        {/* Card 4 */}
        <div className='flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:scale-95'>
          <Image src={Trust} alt='Trust & Safety' width={100} height={100} className='mb-4' />
          <h1 className='text-lg font-semibold text-orange-500'>Trust & Safety</h1>
        </div>
      </div>
    </div>
  );
}
