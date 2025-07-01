import Link from "next/link";
import React from "react";
import {

  FaShieldAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Syed Minam ur Rehman
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              © 2025 Syed Minam ur Rehman. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mb-8 md:mb-0">
            <Link href="/about">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">Contact</p>
            </Link>
            <Link href="/privacy">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">Privacy Policy</p>
            </Link>
          </div>
        </div>

       
        <div className="flex justify-center mt-8">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-neutral-800 rounded-full flex items-center justify-center mr-2">
              <FaShieldAlt className="h-3 w-3 text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-500">Secured with privacy in mind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}