import React from 'react'
import Image from 'next/image'
import Back from '@/assets/orange-woman.png'

export default function Body() {
  return (
     <div className="mt-20 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-orange-600 text-7xl font-bold mb-4">
            Need a Pet <br /> Companion?
          </h2>
          <p className="text-gray-700 text-1xl leading-relaxed">
            Find your perfect partner, whether you are a creative looking for your muse, 
            a remote worker looking for a work buddy, or a family searching for a new best friend. 
            At <span className="font-bold text-orange-500">Pettify</span>, we make it easy, safe, and fun 
            to discover the companion who will bring joy to your everyday life.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image src={Back} alt="Pet Companion" className="rounded-lg mt-20" width={400} height={400} />
        </div>

      </div>
    </div>

  )
}
