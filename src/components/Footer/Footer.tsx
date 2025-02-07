import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Logo from "@/assets/Pettify__11_-removebg-preview.png";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-orange-500 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Image src={Logo} alt="Pettify Logo" width={120} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/#customer" className="hover:underline">Pricing</Link>
          <Link href="/#faq" className="hover:underline">FAQs</Link>
          <Link href="/Blog" className="hover:underline">Blog</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left mt-6 md:mt-0">
          <Link href="/Pettify -Privacy policy.pdf" target="_blank" className="hover:underline">
  Privacy Policy
</Link>
<Link href="/Pettify Terms of Service.pdf" target="_blank" className="hover:underline">
  Terms of Use
</Link>
        </div>

      </div>

      {/* Social Media & Contact Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
        
        {/* Social Icons */}
        <div className="flex space-x-4 mb-10 ">
          <Link href="https://www.instagram.com/usepettify">
            <Instagram className="w-6 h-6 hover:text-gray-200 transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/company/pettify/">
            <Linkedin className="w-6 h-6 hover:text-gray-200 transition duration-300" />
          </Link>
            <Link href="">
            <BsWhatsapp className="w-6 h-6 hover:text-gray-200 transition duration-300" />
          </Link>
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-left md:mt-0">
          <p> Phone:<span className="font-semibold">+2347018590284</span></p>
          <p>Email: <a href="mailto:hello@pettify.co" className="underline">hello@pettify.co</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-white pt-4">
        <p>© 2025 Pettify Global Technologies LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}
