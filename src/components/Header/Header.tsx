'use client'
import React, {useState} from 'react'
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from '@/assets/Pettify__11_-removebg-preview.png';
import Image from "next/image";


export default function Header() {
 const [isOpen, setIsOpen]=useState(false);
//  const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

  return (
      <header className="bg-gray-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
       <Image src={Logo} alt="Logo" width={120} height={100} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#header" className="text-orange-600 hover:underline font-DM_sans">
            Home
          </Link>
          <Link href="/#pricing" className="text-orange-600 hover:underline">
            Pricing
          </Link>
        <Link href="/#faq" className="text-orange-600 hover:underline">
            FAQs
          </Link>
          <Link href="/Blog" className="text-orange-600 hover:underline" >
            Blog
          </Link>
         <Link href="/#contact" className="text-orange-600 hover:underline">
            Contact
          </Link>
           <Link href="/create">
<button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:underline">
      Create A Free Account
    </button>
  </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-non text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
          <Link href="/" className="block py-2 text-orange-600 hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/#pricing" className="block py-2 text-orange-600 hover:underline" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/#faqs" className="block py-2 text-orange-600 hover:underline" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/#blog" className="block py-2 text-orange-600 hover:underline" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/#contact" className="block py-2 text-orange-600 hover:underline" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href='/create' className='bg-orange-600 text-white px-4 py-2 mb-2 rounded-lg hover:underline'  >Create A Free Account</Link>
        </nav>
      )}
    </header>
  )
}
