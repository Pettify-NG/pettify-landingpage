import React from 'react';
import Image from 'next/image';
import Darey from '@/assets/darey.png';
import Daniel from '@/assets/daniel.png';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Humans() {
  const team = [
    { name: 'Emmanuel Oluwadare', role: 'CPO / CO-FOUNDER', image: Darey },
    { name: 'Omole Daniel', role: 'CTO / CO-FOUNDER', image: Daniel },
    { name: 'Emmanuel Oluwadare', role: 'Growth', image: Darey },
    { name: 'Omole Daniel', role: 'Operations', image: Daniel },
  ];

  return (
    <div className='bg-orange-500 py-12 px-4'>
      <div className='text-center mb-10'>
        <h3 className='text-3xl font-mono font-semibold text-white'>Humans of Pettify</h3>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
        {team.map((member, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
            <Image src={member.image} alt={member.name} width={120} height={120} className='rounded-full mb-4' />
            <h1 className='text-lg font-semibold'>{member.name}</h1>
            <p className='text-gray-600 uppercase'>{member.role}</p>
            <Link href='/' className='text-orange-500 mt-2'>
              <Linkedin size={24} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
