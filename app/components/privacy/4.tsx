import Link from "next/link";
import React from "react";
import {
  FaEnvelopeOpenText,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaShieldAlt,
  FaDatabase,
  FaChartLine,
  FaHandshake,
  FaUserShield,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 text-white py-16">
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
              <span className="text-sm font-medium tracking-wider uppercase text-neutral-400">Official Document</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Privacy Policy
          </h1>
          
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8">
            How we protect and manage your information when you use our services
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"></div>
          </div>
        </header>

        {/* Introduction banner */}
        <section className="mb-16 backdrop-blur-md bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 text-white/5">
            <FaShieldAlt size={150} />
          </div>
          <div className="relative z-10">
            <p className="text-xl font-light leading-relaxed text-neutral-200">
              At <span className="font-medium text-white">smrehman.vercel.app</span>, we&apos;re committed to protecting your privacy
              and providing a secure experience. This policy outlines our practices regarding
              your information when you visit our website.
            </p>
          </div>
        </section>

        {/* Policy Content with enhanced design */}
        <div className="space-y-16">
          {/* Data Collection Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaDatabase className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Collection</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                We collect information with transparency and purpose, focusing only on what&apos;s necessary to provide you with the best experience.
              </p>
              
              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-3">Personal Information</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Since our website does not require users to sign up or create accounts, we do not actively collect personal 
                    information such as names, email addresses, or phone numbers.
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-3">Non-Personal Information</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    We may collect non-personal data such as your IP address, browser type, device information, 
                    and usage data (e.g., pages visited, time spent on the website, and interactions with the website).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Usage Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaChartLine className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Usage</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                We use collected data responsibly to improve your experience and our services:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-medium">1</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Improve Functionality</h3>
                  <p className="text-neutral-300">
                    Enhance website performance and features based on how users interact with our content
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-medium">2</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Analyze Trends</h3>
                  <p className="text-neutral-300">
                    Understand usage patterns to better serve our visitors and improve navigation
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-medium">3</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Ensure Security</h3>
                  <p className="text-neutral-300">
                    Maintain a secure environment and protect against potential threats
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-medium">4</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Provide Support</h3>
                  <p className="text-neutral-300">
                    Assist you with any issues you might experience while using our website
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaHandshake className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Sharing</h2>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-white/5">
                  <FaHandshake size={100} />
                </div>
                <div className="relative z-10">
                  <p className="text-xl text-neutral-200 leading-relaxed">
                    We do not sell, rent, or share your personal information with third parties for marketing purposes. 
                    However, we may share non-personal information with service providers and partners for analytics, 
                    security, and operational purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaUserShield className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Your Rights</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                We respect your control over your information. As a user, you have the following rights:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="bg-white/5 p-4 border-b border-white/10">
                    <h3 className="text-xl font-medium text-white">Access</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-300 leading-relaxed">
                      You have the right to request access to the personal data we hold about you. We&apos;ll provide this information in a clear and accessible format.
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="bg-white/5 p-4 border-b border-white/10">
                    <h3 className="text-xl font-medium text-white">Correction</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-300 leading-relaxed">
                      You may request updates or corrections to your personal information if you believe it is inaccurate or incomplete.
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="bg-white/5 p-4 border-b border-white/10">
                    <h3 className="text-xl font-medium text-white">Deletion</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-300 leading-relaxed">
                      You may request the deletion of your non-personal data at any time, if applicable. We will comply with your request unless we have a legal obligation to retain certain information.
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="bg-white/5 p-4 border-b border-white/10">
                    <h3 className="text-xl font-medium text-white">Opt-Out</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-300 leading-relaxed">
                      You can opt out of any data collection or tracking processes. We respect your preferences and will honor your choices regarding data collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
            <div className="pl-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                  <FaEnvelopeOpenText className="w-5 h-5 text-neutral-300" />
                </div>
                <h2 className="text-3xl font-bold text-white">Contact Us</h2>
              </div>
              
              <p className="text-neutral-300 mb-8 text-lg">
                Have questions or concerns about our privacy practices&ques; We&apos;re here to help!
                Reach out through any of the channels below:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="mailto:minamrahman727@gmail.com"
                  className="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex items-center">
                    <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-neutral-600 transition-colors duration-300 relative">
                      <FaEnvelopeOpenText className="w-6 h-6 text-neutral-300" />
                      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-400 mb-1">Email</p>
                      <p className="text-white text-lg">minamrahman727@gmail.com</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  href="https://instagram.com/syedminamurrehman"
                  target="_blank"
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
                  href="https://linkedin.com/in/syedminamurrehman"
                  target="_blank"
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
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center">
              <FaShieldAlt className="h-5 w-5 text-neutral-400" />
            </div>
          </div>
          <p className="text-neutral-400 mb-2">Last Updated: April 2025</p>
          <p className="text-sm text-neutral-500">All rights reserved © 2025 Syed Minam ur Rehman</p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;