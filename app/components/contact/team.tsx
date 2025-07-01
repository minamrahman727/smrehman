import Link from "next/link";
import React from "react";
import MapEmbed from "../map";
import {
  FaEnvelopeOpenText,
  FaInstagram,
  FaGithub,
  FaLinkedin,
    FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Section with advanced styling */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-700 rounded-lg blur opacity-30"></div>
            <div className="relative px-6 py-3 bg-neutral-800 rounded-lg">
              <span className="text-sm font-medium tracking-wider uppercase text-neutral-400">Get In Touch</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Contact Me
          </h1>
          
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8">
            Let &apos; s discuss your project, answer your questions, or just have a chat
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"></div>
          </div>
        </header>

        {/* Introduction banner */}
        <section className="mb-16 backdrop-blur-md bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 text-white/5">
            <FaMapMarkerAlt size={150} />
          </div>
          <div className="relative z-10">
            <p className="text-xl font-light leading-relaxed text-neutral-200">
              I &apos; m always interested in new opportunities, collaborations, and projects. 
              Feel free to reach out through any of the channels listed below or use the map
              to find my location.
            </p>
          </div>
        </section>

        {/* Map and Direct Contact */}
        <div className="space-y-16">
          {/* Map Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaMapMarkerAlt className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Find Me</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                You can find my location on the map below. I&apos;m available for in-person meetings
                by appointment.
              </p>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-full h-96 overflow-hidden rounded-lg">
                  <MapEmbed />
                </div>
              </div>
            </div>
          </section>

          {/* Direct Contact Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaPhoneAlt className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Direct Contact</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                Reach out directly through phone or email:
              </p>
              
              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-3 flex items-center">
                    <FaPhoneAlt className="mr-3 text-neutral-400" /> Phone Number
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    <Link
                      href="tel:+923369289269"
                      aria-label="Call Phone Number"
                      className="text-lg hover:text-white transition-colors duration-300"
                    >
                      +92-336-9289269
                    </Link>
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-3 flex items-center">
                    <FaEnvelopeOpenText className="mr-3 text-neutral-400" /> Email Address
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    <Link
                      href="mailto:minamrahman727@gmail.com?subject=Inquiry&body=Hello, I want to contact you for hiring you"
                      aria-label="Send Email"
                      className="text-lg hover:text-white transition-colors duration-300"
                    >
                      minamrahman727@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaInstagram className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Social Media</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                Connect with me on my social media platforms:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="https://instagram.com/syedminamurrehman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex items-center">
                    <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-neutral-600 transition-colors duration-300 relative">
                      <FaInstagram className="w-6 h-6 text-neutral-300" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-400 mb-1">Instagram</p>
                      <p className="text-white text-lg">@syedminamurrehman</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://linkedin.com/syedminamurrehman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex items-center">
                    <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-neutral-600 transition-colors duration-300 relative">
                      <FaLinkedin className="w-6 h-6 text-neutral-300" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-400 mb-1">LinkedIn</p>
                      <p className="text-white text-lg">Syed Minam ur Rehman</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://github.com/minamrahman727"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex items-center">
                    <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-neutral-600 transition-colors duration-300 relative">
                      <FaGithub className="w-6 h-6 text-neutral-300" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-400 mb-1">GitHub</p>
                      <p className="text-white text-lg">minamrahman727</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://facebook.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex items-center">
                    <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-neutral-600 transition-colors duration-300 relative">
                      <FaFacebookF className="w-6 h-6 text-neutral-300" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-400 mb-1">Facebook</p>
                      <p className="text-white text-lg">Visit Profile</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center">
              <FaEnvelopeOpenText className="h-5 w-5 text-neutral-400" />
            </div>
          </div>
          <p className="text-neutral-400 mb-2">Let&apos;s work together</p>
        </footer>
      </div>
    </main>
  );
};

export default ContactSection;