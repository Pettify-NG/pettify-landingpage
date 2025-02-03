import React from "react";
import Apple from "@/assets/app-store.png";
import Play from "@/assets/google-play.png";
import Image from "next/image";
import Link from "next/link";
import Preview from "@/assets/app preview.png";

export default function Customer() {
  return (
     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 md:px-16 lg:px-32">
      
      {/* Customer, Vendor, Vet Section */}
      <div className="bg-orange-500 flex  sm:flex-row items-center justify-center gap-6 p-6 rounded-lg shadow-lg w-full max-w-md text-white font-semibold text-lg mb-12 ">
        <h2 className="px-4 py-2 text-white rounded-md shadow cursor-pointer hover:bg-orange-600 transition">
          Customer
        </h2>
        <h2 className="px-4 py-2 text-white rounded-md shadow cursor-pointer hover:bg-orange-600 transition">
          Vendor
        </h2>
        <h2 className="px-4 py-2 text-white rounded-md shadow cursor-pointer hover:bg-orange-600 transition">
          Vet
        </h2>
      </div>

       <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen bg-gray-100 px-4">
      
      {/* Left Section (Text) */}
      <div className="md:w-1/2 text-center md:text-left p-6 mb-12 sm:mb-0">
        <h2 className="text-orange-500 font-sans font-bold text-3xl mb-4">
          Download The App
        </h2>
        <p className="text-gray-700 text-2xl leading-relaxed mb-6">
          Ready to find your perfect companion? Download the Pettify app on Google Play and shop with trusted breeders and sellers near you. Your next best friend is just a click away.
        </p>

        <div className="flex justify-center md:justify-start gap-6">
          <Link href="/" className="flex items-center gap-2 text-white bg-orange-500 p-3 rounded-md">
            <Image src={Play} alt="Google Play" width={20} height={40} />
            <button className="text-lg">Download Now on Google Play</button>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white bg-orange-500 p-3 rounded-md">
            <Image src={Apple} alt="Apple Store" width={20} height={40} />
            <button className="text-lg">Coming Soon on Apple Store</button>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center ml-auto mt-6 sm:mt-0">
        <Image
          src={Preview}
          alt="App Preview"
          width={300}
          height={400}
          className="rounded-lg shadow-lg md:right-4"        
        />
      </div>
    </div>
    </div>
  );
}
