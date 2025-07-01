"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {
  FaExclamationTriangle,
  
  FaSearch,
  FaHome,
  FaRegSadTear,
  FaChevronRight,
} from "react-icons/fa";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  icons: {
      icon: "/1.ico",
  },
  };
const NotFound = () => {
  // const [ setIsScrolled] = useState(false);
  const [animateError, setAnimateError] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Start animation after component mounts
    setTimeout(() => {
      setAnimateError(true);
    }, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 text-white relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-neutral-400 opacity-3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-neutral-500 opacity-3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neutral-600 opacity-3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
      </div>

      
<Navbar  />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute right-0 bottom-0 opacity-5">
            <svg width="450" height="450" viewBox="0 0 100 100">
              <path d="M50,2 L95,25 L95,75 L50,98 L5,75 L5,25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50,20 L80,35 L80,65 L50,80 L20,65 L20,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
              <FaExclamationTriangle className="h-3 w-3 mr-2 text-neutral-300" />
              <span className="text-xs font-medium text-neutral-300">404 Error</span>
            </div>
            
            <div className={`mb-10 transition-all duration-1000 transform ${animateError ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-32 h-32 mx-auto mb-6 text-neutral-500 opacity-60">
                <FaRegSadTear className="w-full h-full" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-400">
              Page Not Found
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
            </p>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/" className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur-md border border-white/10 font-medium flex items-center">
                <FaHome className="mr-2" />
                <span>Back to Home</span>
              </Link>
              <Link href="/contact" className="px-8 py-3 rounded-lg bg-white text-neutral-900 hover:bg-opacity-90 transition-all duration-300 font-medium flex items-center">
                <FaSearch className="mr-2" />
                <span>Search Our Site</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 py-16">
        <section className="mb-24">
          <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 text-white/5">
              <FaSearch size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-10 bg-neutral-400 rounded-full mr-3"></div>
                <h2 className="text-3xl font-bold">You Might Be Looking For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Home Page", description: "Return to my website", path: "/" },
                  { title: "Projects", description: "Explore my portfolio", path: "/projects" },
                  { title: "About Us", description: "Learn more about me", path: "/about" },
                  { title: "Contact", description: "Get in touch with me", path: "/contact" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="group flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-xl border border-white/10"
                  >
                    <div>
                      <h3 className="text-xl font-bold">{link.title}</h3>
                      <p className="text-neutral-400 text-sm">{link.description}</p>
                    </div>
                    <div className="text-neutral-400 group-hover:text-white transition-colors duration-300">
                      <FaChevronRight />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Report Issue Section */}
        <section className="mb-16 scroll-mt-24">
          <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <div className="p-8 md:p-10 bg-white/5 border-b border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mr-4">
                  <FaExclamationTriangle className="h-5 w-5 text-neutral-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Report This Issue</h2>
                  <p className="text-neutral-400">Help us improve by reporting this error</p>
                </div>
              </div>
              <p className="text-neutral-300 text-lg leading-relaxed">
                If you believe this page should exist or if you&apos;ve found a broken link, please let us know so we can fix it.
              </p>
            </div>
            
            <div className="p-8 bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Link 
                  href="mailto:minamrahman727@gmail.com" 
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <FaExclamationTriangle className="h-4 w-4 text-neutral-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Submit Error Report</h3>
                      <p className="text-neutral-400 text-sm">We&apos;ll look into it right away</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <FaChevronRight className="h-3 w-3 text-neutral-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      
    </main>
  );
};

export default NotFound;