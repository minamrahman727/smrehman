"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaSortAlphaDown,
  FaThLarge,
  FaQuoteRight,
  FaStar,
  FaExternalLinkAlt
} from "react-icons/fa";

// Custom hook to check if element is visible in viewport
function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-50px");

  const animationClass = isVisible
    ? index % 2 === 0
      ? "fadeInLeft"
      : "fadeInRight"
    : "opacity-0";

  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        ref={ref}
        style={{ animationDelay: `${index * 0.1}s` }}
        className={`group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${animationClass}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {project.featured && (
          <div className="absolute top-3 right-3 z-20">
            <div className="flex items-center justify-center w-8 h-8 bg-neutral-800/70 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:bg-neutral-700 transition-colors duration-300">
              <FaStar className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        )}
        
        <div className="relative">
          <Image
            height="192"
            width="340"
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">{project.title}</h2>
            <div className="bg-white/10 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <FaExternalLinkAlt className="w-3 h-3 text-white" />
            </div>
          </div>
          <p className="text-neutral-400 text-sm transition-colors duration-300 group-hover:text-neutral-300">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "MGC (Official Page)",
      description:
        "The official website of MGC Karachi, showcasing services, achievements, and updates about the organization.",
      image: "/projects/mgc.jpg",
      link: "https://mgckarachi.vercel.app/",
      featured: true,
    },
    {
      title: "Voice of Gaza",
      description:
        "A user-friendly tool to track and manage your daily expenses efficiently.",
      image: "/projects/vog.jpg",
      link: "https://voiceofgaza.vercel.app/",
      featured: true,
    },
    {
      title: "ZEX Expense Tracker",
      description:
        "A user-friendly tool to track and manage your daily expenses efficiently.",
      image: "/projects/zexc.jpg",
      link: "https://zexpencia.vercel.app/",
    },
    {
      title: "ZEX Pressure Converter",
      description: "Quickly convert pressure units with accuracy and ease",
      image: "/projects/pc.jpg",
      link: "https://zexpc.vercel.app/",
    },
    {
      title: "ZEX Currency Converter",
      description:
        "Simplify global transactions by converting currencies effortlessly",
      image: "/projects/cc.jpg",
      link: "https://zexcc.vercel.app/",
    },
    {
      title: "ZEX Time Converter",
      description: "Convert time across multiple formats.",
      image: "/projects/tc.jpg",
      link: "https://zextc.vercel.app/",
    },
    {
      title: "ZEX Power Converter",
      description: "Convert power measurements with ease.",
      image: "/projects/ppc.jpg",
      link: "https://zexpower.vercel.app/",
    },
    {
      title:"Zarak Inventory",
      description:"Streamline your operations with real-time updates, AI-powered insights, and an intuitive user interface. Welcome to the next generation of inventory management.",
      image:"/projects/inventory.jpg",
      link:"https://inventory-zarak.vercel.app/",
      featured:true,
    },
    {
      title: "ZEX POS terminal",
      description: "A point-of-sale terminal for managing sales and inventory.",
      image: "/projects/POS.jpg",
      link: "https://pos-coral-nine.vercel.app/",
    },
    {
      title: "Animated Accordion",
      description: "A simple accordion with smooth animations.",
      image: "/projects/acc.jpg",
      link: "https://films-woad.vercel.app/",
    },
    {
      title: "ZEX Angle Converter",
      description: "Easily convert angles to different units.",
      image: "/projects/ac.jpg",
      link: "https://angleconverter.vercel.app/",
    },
    {
      title: "ZEX Document Library",
      description: "library of books various Programming languages.",
      image: "/projects/doc.jpg",
      link: "https://zex-docs.vercel.app/",
    },
    {
      title: "Syed AI",
      description:
        "Syed AI is an advance chatbot application powered by Gemini API,",
      image: "/projects/chat.jpg",
      link: "https://chatbot-minam.vercel.app/",
      featured: true,
    },
    {
      title: "Number guessing game",
      description:
        "an interactive game in which user has 3 attempts to guess the correct number between 1-10",
      image: "/projects/number.jpg",
      link: "https://numbergame-minam.vercel.app/",
    },
    {
      title: "antashari character generator",
      description: "a minimal interface to play game Called antshari",
      image: "/projects/ant.jpg",
      link: "https://antashari.vercel.app/",
    },
    {
      title: "Zarak landing page",
      description: "a minimal landing page for Zarak Global",
      image: "/projects/zarakha.jpg",
      link: "https://zarakha.vercel.app/",
    },
    {
      title: "Kashmala Portfolio",
      description: "A minimal, stylish portfolio for Kashmala",
      image: "/projects/kashmala.jpg",
      link: "https://kashmala.vercel.app/",
      featured: false,
    },
    {
      title: "World Clocks",
      description: "A simple page showing time of various zones",
      image: "/projects/wc.jpg",
      link: "https://worldcl.vercel.app/",
    },
    {
      title: "clock",
      description: "a simple page showing current time",
      image: "/projects/clock.jpg",
      link: "#",
    },
    {
      title: "stop watch",
      description: "a simple page of stop watch",
      image: "/projects/clock.jpg",
      link: "https://stpwtch.vercel.app/",
    },
    {
      title: "Timer",
      description: "a simple page of timer",
      image: "/projects/timer.jpg",
      link: "https://timersea.vercel.app/",
    },
    {
      title: "Routemapper",
      description: "explore BRTS, busses and chinchi routes in Karachi",
      image: "/projects/route.jpg",
      link: "https://routemapper.vercel.app/",
      featured: false,
    },
    {
      title: "RahGuzar",
      description: "Your Ultimate Karachi Public Transport Guide.",
      image: "/projects/rah.jpg",
      link: "https://rahguzar.vercel.app/",
      featured: true,
    },
    {
      title:"Govt of Pakistan",
      description:"Unofficial website of Government of Pakistan.",
      image:"/projects/govt.jpg",
      link:"https://govtofpakistan.vercel.app/",
      featured: true,
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Daud Rauf Butt",
      role: "CEO & Founder, Veloix",
      feedback:
        "Minam is a talented React developer who delivers polished, user-friendly interfaces.",
    },
    {
      name: "M.Ayan Israr",
      role: "Frontend Developer",
      feedback:
        "Minam is a skilled React developer with a great collaborative approach.",
    },
    {
      name: "Syed Muhammad Hasan",
      role: "React Developer",
      feedback:
        "Minam excels in React and UX, delivering seamless, high-performance solutions.",
    },
    {
      name: "Syed Shafiq Ur Rehman",
      role: "A.M Finance, Landi Renzo Pakistan",
      feedback:
        "Minam is a dedicated developer who consistently produces quality work under pressure.",
    },
    {
      name: "Syed Abdul Rehman",
      role: "CEO, Standard construction",
      feedback:
        "Minam's front-end work is always responsive, interactive, and visually appealing.",
    },
    {
      name: "Syed Tauseef Ur Rehman",
      role: "Teacher, The Generation School Maymar",
      feedback:
        "Minam is a skilled and reliable developer, especially with Frameworks he work on.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortMethod, setSortMethod] = useState("alphabetical");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortMethod === "featuredFirst") {
      if (a.featured === b.featured) {
        return a.title.localeCompare(b.title);
      }
      return a.featured ? -1 : 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with advanced styling */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-sky-400 to-purple-500 rounded-lg blur-md opacity-30"></div>
          <div className="relative px-6 py-2 bg-neutral-800 rounded-lg shadow-inner shadow-black/20">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
Profile Showcase
            </span>
          </div>
        </div>
          
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            My Projects
          </h1>
          
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8">
            A curated collection of my work, showcasing creativity and technical expertise
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-50"></div>
          </div>
        </header>

        {/* Search and Filters Section */}
        <section className="mb-16">
          <div className="backdrop-blur-md bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 text-white/5">
              <FaSearch size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FaSearch className="h-4 w-4 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-600/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/25 transition-all duration-300 shadow-inner"
                  />
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <FaSortAlphaDown className="h-4 w-4 text-neutral-400" />
                    </div>
                    <select
                      value={sortMethod}
                      onChange={(e) => setSortMethod(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-600/50 focus:outline-none focus:ring-2 focus:ring-white/25 transition-all duration-300 shadow-inner appearance-none"
                    >
                      <option value="alphabetical">Alphabetical</option>
                      <option value="featuredFirst">Featured First</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <div className="border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-neutral-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative mb-24">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
          <div className="pl-8">
            <div className="flex items-center mb-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                <FaThLarge className="w-5 h-5 text-neutral-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Project Gallery</h2>
            </div>
            
            {sortedProjects.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 shadow-xl text-center">
                <p className="text-xl text-neutral-300">No projects found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-400 to-transparent opacity-30"></div>
          <div className="pl-8">
            <div className="flex items-center mb-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700 border border-neutral-600 mr-4 shadow-lg">
                <FaQuoteRight className="w-5 h-5 text-neutral-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Testimonials</h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx} 
                  className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4 text-white/10 transform -rotate-12 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                    <FaQuoteRight size={48} />
                  </div>
                  <div className="relative z-10">
                    <p className="italic text-lg text-neutral-200 mb-6 leading-relaxed">
                      &quot;{testimonial.feedback}&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-neutral-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fadeInUp {
          opacity: 1;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .fadeInLeft {
          opacity: 1;
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        .fadeInRight {
          opacity: 1;
          animation: fadeInRight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}