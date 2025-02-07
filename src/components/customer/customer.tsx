'use client';
import React, { useState } from "react";
import Apple from "@/assets/app-store.png";
import Play from "@/assets/google-play.png";
import Image from "next/image";
import Link from "next/link";
import CustomerImg from '@/assets/app preview.png'
import VendorImg from '@/assets/laptop-preview.png'
import VetImg from '@/assets/vet-doctor.png'

export default function Customer() {
  const [activeRole, setActiveRole] = useState("customer");

  // Text and Image Data
  const content = {
    customer: {
      image: CustomerImg,
      title: "Find Your Perfect Companion",
      description: "Download the Pettify app to connect with trusted breeders and sellers near you. Your next best friend is just a click away!",
    },
    vendor: {
      image: VendorImg,
      title: "Sell Your Pets with Confidence",
      description: "Join thousands of pet vendors using Pettify to reach verified buyers. List your pets today!",
    },
    vet: {
      image: VetImg,
      title: "Connect with Trusted Veterinarians",
      description: "Access expert veterinary services through Pettify. Book an appointment with certified vets now!",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 md:px-16 lg:px-32 mt-10">
      
      {/* Role Selection Buttons */}
      <div className="bg-orange-500 flex flex-wrap sm:flex-row items-center justify-center gap-6 p-4 rounded-lg shadow-lg w-full max-w-lg text-white font-semibold text-lg mb-12">
        {Object.keys(content).map((role) => (
          <button 
            key={role}
            className={`px-4 py-2 rounded-md shadow cursor-pointer transition ${
              activeRole === role ? "bg-orange-700" : "hover:bg-orange-600"
            }`}
            onClick={() => setActiveRole(role)}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen px-4">
        
        {/* Left Section (Dynamic Text) */}
        <div className="md:w-1/2 text-center md:text-left p-6 transition-opacity duration-500">
          <h2 className="text-orange-500 font-bold text-3xl mb-4">
            {content[activeRole].title}
          </h2>
          <p className="text-gray-700 text-2xl leading-relaxed mb-6">
            {content[activeRole].description}
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <Link href="/" className="flex items-center gap-2 text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600">
              <Image src={Play} alt="Google Play" width={20} height={40} />
              <button className="text-lg">Download Now on Google Play</button>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600">
              <Image src={Apple} alt="Apple Store" width={20} height={40} />
              <button className="text-lg">Coming Soon on Apple Store</button>
            </Link>
          </div>
        </div>

        {/* Right Section (Dynamic Image) */}
        <div className="md:w-1/2 flex justify-center ml-auto mt-6 sm:mt-0">
          <Image
            src={content[activeRole].image}
            alt="App Preview"
            width={300}
            height={400}
            className="rounded-lg shadow-lg transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
