'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { DM_Sans } from 'next/font/google'; // Import DM Sans
import Logo from '@/assets/Pettify__11_-removebg-preview.png';

// Load DM Sans font
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose required weights
  variable: '--font-dm-sans', // Optional CSS variable
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={120} height={100} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#header" className={`${dmSans.className} text-orange-600 hover:underline`}>
            Home
          </Link>
          <Link href="/#pricing" className={`${dmSans.className} text-orange-600 hover:underline`}>
            Pricing
          </Link>
          <Link href="/#faq" className={`${dmSans.className} text-orange-600 hover:underline`}>
            FAQs
          </Link>
          <Link href="/Blog" className={`${dmSans.className} text-orange-600 hover:underline`}>
            Blog
          </Link>
          <Link href="/#footer" className={`${dmSans.className} text-orange-600 hover:underline`}>
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
          className="md:hidden p-2 focus:outline-none text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
          <Link href="/#header" className={`${dmSans.className} block py-2 text-orange-600 hover:underline`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/#faq" className={`${dmSans.className} block py-2 text-orange-600 hover:underline`} onClick={() => setIsOpen(false)}>
            FAQs
          </Link>
          <Link href="/Blog" className={`${dmSans.className} block py-2 text-orange-600 hover:underline`} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/#footer" className={`${dmSans.className} block py-2 text-orange-600 hover:underline`} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/create">
            <button className="w-full bg-orange-600 text-white px-4 py-2 mt-2 rounded-lg hover:underline">
              Create A Free Account
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
