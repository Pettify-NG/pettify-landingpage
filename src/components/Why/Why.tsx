import React from 'react';
import Image from 'next/image';
import Titi from '@/assets/mypics.jpg';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Why() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg'>
      {/* Left Side */}
      <div className='flex flex-col items-center text-center md:w-1/3 p-4'>
        <h2 className='text-2xl font-bold text-orange-500'>Why Pettify</h2>
        <h3 className='text-lg font-semibold mt-2 text-orange-500'>Founder's Story</h3>
        <Image src={Titi} alt='Titlayo Sunday' width={300} height={300} className=' mt-4 shadow-md' />
        <p className='text-orange-500 font-mono font-semibold mt-2'>Titlayo Sunday</p>
        <p className='text-orange-500 font-mono font-semibold mt-2'>CEO/Founder</p>
        <Link href="https://www.linkedin.com/in/thetitilayo"><Linkedin className='text-orange-500 mt-2 cursor-pointer' /></Link>
      </div>

      {/* Right Side */}
      <div className='md:w-2/3 p-4'>
        <p className='text-gray-700 leading-relaxed text-justify'>
          I grew up surrounded by dogs. My dad was a local breeder, and our first family pet, a greyhound named Jet, was much more than just a dog—he was my childhood companion, always by my side, running errands with me, and brightening every day. But on January 18, 2002, Jet wandered off and never came back. Losing him left a deep void in my heart, and since then, I have been searching for a pet like Jet—a companion that feels like family. 
        </p>
        <p className='text-gray-700 leading-relaxed text-justify mt-4'>
          Over the years, I realized just how difficult it was for others to find pets, especially one that matched their lifestyle and personality. The traditional ways of finding breeders or pet vendors were limited, often long and inconvenient. People had to rely on word of mouth, drive long distances, or settle for fewer choices simply because there was no better way. 
        </p>
        <p className='text-gray-700 leading-relaxed text-justify mt-4'>
          We started Pettify to solve these pain points—to bring convenience, choice, and peace of mind to pet lovers. With Pettify, buyers can easily find trusted breeders and vendors close to their location, compare a variety of pets, and make their choice without hassle. Whether you're a remote worker looking for a loyal companion or a family searching for the perfect pet to add joy to your home, Pettify makes the process simple, safe, and tailored to your needs. 
        </p>
        <p className='text-gray-700 leading-relaxed text-justify mt-4'>
          My journey started with Jet, and through Pettify, we want to help others find their own Jets—pets that fill our lives with love, loyalty, and companionship.
        </p>
      </div>
    </div>
  );
}
