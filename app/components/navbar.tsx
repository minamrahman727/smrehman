"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaUser, FaEnvelope, FaCode, FaTimes, FaShieldAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <FaUser className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope className="w-4 h-4" /> },
    { name: "Projects", href: "/projects", icon: <FaCode className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/minamrahman727", icon: <FaGithub className="w-4 h-4" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/syedminamurrehman", icon: <FaLinkedin className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-100 shadow-lg relative z-50">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40  opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 w-60 h-60  opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-32 w-24 h-24  opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo with animation */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-70 blur transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-full  flex items-center justify-center relative">
                <Image 
                  src="/minam.png"
                  width={48} 
                  height={48} 
                  className="rounded-full relative" 
                  alt="Minam logo" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-clip-text  hidden sm:block">
                Syed Minam Ur Rehman
              </span>
              <span className="text-xs text-neutral-400 hidden sm:block">Frontend Web Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden sm:flex items-center space-x-2">
            <ul className="flex space-x-1 mr-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg flex items-center space-x-1 font-medium group hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="text-neutral-400 group-hover:text-blue-300 transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="group-hover:text-blue-300 transition-colors duration-300">{item.name}</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-4/5 transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social links */}
            <div className="flex space-x-1 border-l border-white/10 pl-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-blue-300 transition-all duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="sm:hidden relative group"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-blue-300 relative" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-300 relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col p-6">
          {/* Decorative background elements */}
          <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Close button and logo */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 flex items-center justify-center">
                <Image 
                  src="/minam.png"
                  width={48} 
                  height={48} 
                  className="rounded-full border border-white/10" 
                  alt="Minam logo" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
                  Syed Minam Ur Rehman
                </span>
                <span className="text-xs text-neutral-400">Portfolio & Digital Space</span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6 text-blue-300" />
            </button>
          </div>

          {/* Enhanced mobile menu items */}
          <ul className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium relative z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Social links for mobile */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-neutral-400 mb-4">Connect with me:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "GitHub", href: "https://github.com/minamrahman727", icon: <FaGithub className="w-5 h-5" /> },
                { name: "LinkedIn", href: "https://linkedin.com/in/syedminamurrehman", icon: <FaLinkedin className="w-5 h-5" /> },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto mb-8 pt-8 border-t border-white/10 flex items-center justify-center space-x-2">
            <FaShieldAlt className="h-4 w-4 text-neutral-500" />
            <p className="text-sm text-neutral-400 text-center">
              © 2025 Syed Minam ur Rehman
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}