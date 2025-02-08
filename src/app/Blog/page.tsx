'use client'
import React from 'react'
import Pic from '@/assets/post1.png';
import Image from 'next/image';
import Link from 'next/link';
import myLogo from '@/assets/pettify-logo-removebg-preview.png';
import { CiHeart } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import Header from "@/components/header/Header";
import Footer from '@/components/footer/footer';

export default function Blog() {
  return (
    <>
      {/* Include Header */}
      <Header />

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center mt-40">
        {/* Section Title */}
        <h2 className="text-orange-500 font-serif text-center text-5xl md:text-6xl font-bold mb-6">
          Stories & More
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl text-center max-w-2xl leading-relaxed">
          Stay updated with the latest pet care tips, trends, and insights from our expert writers.
        </p>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-orange-500 mt-4 rounded-lg"></div>

        <div className="container mx-auto p-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Repeating Card */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* Post Image */}
                <Image src={Pic} alt="Post Image" className="rounded-md mb-4" />

                {/* Post Title */}
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  <Link href='https://www.linkedin.com/company/pettify/'>Press Release: Pettify sets to disrupt the pet industry</Link>
                </p>

                {/* Logo & Info */}
                <div className="flex items-center gap-3 mb-2">
                  <Image src={myLogo} alt="Logo" width={40} height={40} className="rounded-full" />
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-4">20th of February, 2025</p>

                {/* Like & Share Buttons */}
                <div className="flex items-center gap-6 text-gray-600">
                  <CiHeart className="text-2xl cursor-pointer hover:text-red-500 transition" />
                  <Link href="https://www.linkedin.com/company/pettify/">
                    <IoShareSocialSharp className="text-2xl cursor-pointer hover:text-orange-500 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Include Footer */}
      <Footer />
    </>
  )
}
