"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaNodeJs,
  FaPython,
  
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
  SiMeta,
  SiGithub,
  SiCplusplus,
  SiVercel,
  SiClaude,
  SiReact,
  SiFramer
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  Compass,
  GraduationCap,
  BrainCircuit,
  Laptop2,
  Sparkles,
  User,
  ExternalLink
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  // const [isNavVisible, setIsNavVisible] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: 'HTML', icon: <FaHtml5 size={20} className="text-red-600" />, desc: 'Semantic Markup' },
        { name: 'CSS', icon: <FaCss3Alt size={20} className="text-blue-600" />, desc: 'Modern Styling' },
        { name: 'JavaScript', icon: <FaJs size={20} className="text-yellow-400" />, desc: 'ES6+ Proficiency' },
        { name: 'TypeScript', icon: <SiTypescript size={20} className="text-blue-400" />, desc: 'Type-Safe Code' },
        { name: 'React.js', icon: <SiReact size={20} className="text-blue-300" />, desc: 'UI Library' },
        { name: 'Next.js', icon: <SiNextdotjs size={20} className="text-white" />, desc: 'React Framework' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} className="text-blue-300" />, desc: 'Utility-First CSS' },
        { name: 'Framer-Motion', icon: <SiFramer size={20} className="text-white" />, desc: 'Animation library' },

      ]
    },
    {
      name: "Backend & Languages",
      skills: [
        { name: 'Python', icon: <FaPython size={20} className="text-blue-400" />, desc: 'Automation & ML' },
        { name: 'Supabase', icon: <SiSupabase size={20} className="text-green-600" />, desc: 'Backend-as-a-Service' },
        { name: 'Node.js', icon: <FaNodeJs size={20} className="text-green-400" />, desc: 'JavaScript Runtime Environment' },
        { name: 'C++', icon: <SiCplusplus size={20} className="text-blue-600" />, desc: 'High-Performance Programming' },
        
      ]
    },
    {
      name: "Tools & Services",
      skills: [
        { name: 'Vercel', icon: <SiVercel size={20} className="text-white" />, desc: 'Deployment Platform' },
        { name: 'VS Code', icon: <VscVscodeInsiders size={20} className="text-blue-600" />, desc: 'Powerful Code Editor' },
        { name: 'Collab', icon: <Image src="/colab.png" width={20} height={20} alt="Collab" className="text-blue-600" />, desc: 'Online code editor' },
        { name: 'GitHub', icon: <SiGithub size={20} className="text-white" />, desc: 'Version Control' },
      
      ]
    },
    {
      name: "AI Integration",
      skills: [
        { name: 'ChatGPT', icon: <SiOpenai size={20} className="text-white" />, desc: 'Conversational AI Assistant' },
        { name: 'GitHub Copilot', icon: <SiGithubcopilot size={20} className="text-white" />, desc: 'AI Code Assistant' },
        { name: 'Gemini', icon: <SiGooglegemini size={20} className="text-white" />, desc: 'Multimodal AI Model' },
        { name: 'Meta', icon: <SiMeta size={20} className="text-blue-600" />, desc: 'Social-Focused AI' },
        { name: 'Claude AI', icon: <SiClaude size={20} className="text-orange-600" />, desc: 'Ethical Conversational Intelligence' },
      ]
    },
  ];

  // Social links for contact section
  const socialLinks = [
    { icon: <FaLinkedinIn size={20} />, name: "LinkedIn", username: "Syed Minam Ur Rehma", link: "https://www.linkedin.com/in/syed-minam-ur-rehman/" },
    { icon: <FaGithub size={20} />, name: "GitHub", username: "minamrahman727", link: "https://github.com/minamrahman727" },
    { icon: <FaInstagram size={20} />, name: "Instagram", username: "@syedminamurrehman", link: "https://www.instagram.com/syedminamurrehman" },
    { icon: <FaEnvelope size={20} />, name: "Email", username: "minamrahman727@gmail.com", link: "mailto:minamrahman727@gmail.com" }
  ];

  const SkillCard = ({ name, icon, desc }: { name: string; icon: React.ReactNode; desc: string }) => (
    <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-neutral-400 text-xs">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
      {/* Navigation bar */}
      {/* <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isNavVisible ? 'backdrop-blur-md bg-neutral-900/80 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-800 rounded-md flex items-center justify-center border border-neutral-700">
              <span className="font-bold text-lg">S</span>
            </div>
            <span className={`font-medium ${isNavVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Syed Minam</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors rounded-lg text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-neutral-900 to-neutral-800 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block mb-6">
                <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium tracking-wider text-neutral-300">
                  FRONTEND DEVELOPER
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">سید منعام الرحمٰن</span>
                <span className="block text-blue-300 text-2xl mt-2">Syed Minam ur Rehman</span>
              </h1>
              
              <p className="text-neutral-300 text-lg mb-8 max-w-lg">
                A passionate frontend developer focused on creating engaging, accessible, and responsive web applications with modern frameworks and design patterns.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3"
                >
                  Contact Me <FaArrowRight />
                </a>
                <a 
                  href="#skills" 
                  className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  View My Skills
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="relative h-64 w-64 border-4 border-neutral-800 rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center">
                  <User size={100} className="text-neutral-500" />
                  {/* Replace with your image: */}
                  <Image src="/minam.png" className="object-cover w-full h-full" alt="Syed Minam's profile picture" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-t from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="h-1 w-16 bg-blue-400 mb-6"></div>
                <p className="text-neutral-300">Learn more about my background, interests, and what drives me as a developer.</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Compass className="text-white w-6 h-6" />
                    <h3 className="text-2xl font-semibold text-white">My Evolution as a Frontend Developer</h3>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Hello! I&apos;m <span className="text-white font-medium">Syed Minam Ur Rehman</span>, a dedicated frontend developer based in Karachi, Pakistan.
                    My journey into web development began with a curiosity about how websites work. Over time, that interest transformed into a strong
                    passion for building intuitive, accessible, and engaging digital experiences. With every line of code and every project I complete,
                    I strive to grow not just as a developer, but as a creator who understands users and delivers real impact.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
                  <div className="space-y-6 text-neutral-300">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="text-white w-6 h-6 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Matriculation &ndash; Programmer School
                        </h4>
                        <p className="text-sm opacity-80">
                          2011 &ndash; 2024<br />
                          Focused on Computer Science, gaining a solid foundation in logic, programming, and mathematics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <BrainCircuit className="text-white w-6 h-6 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Certified Cloud Applied Generative AI Engineer (WMD) &ndash; PIAIC
                        </h4>
                        <p className="text-sm opacity-80">
                          2023 &ndash; 2025 <br />
                          Specialized training in cloud computing, applied AI, and generative models through real-world projects and industry-focused curriculum.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Laptop2 className="text-white w-6 h-6 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          ICS &ndash; Govt. Degree Boys College 5L, New Karachi
                        </h4>
                        <p className="text-sm opacity-80">
                          2024&ndash; 2026 (expected) | Board of Intermediate Education Karachi (BIEK)<br />
                          Currently studying Intermediate in Computer Science, emphasizing programming, software development, and algorithmic thinking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="text-white w-6 h-6" />
                    <h3 className="text-2xl font-semibold text-white">What Sets Me Apart</h3>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    I bring a unique blend of technical proficiency and design sensitivity to every project. My expertise lies in developing
                    responsive, interactive web interfaces using <span className="text-white font-medium">Next.js, React, and TypeScript</span>,
                    with a strong emphasis on writing clean, maintainable code that adheres to modern best practices. Beyond functionality, I focus
                    on crafting intuitive user experiences that are both accessible and visually refined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-16 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life. I &#39;m constantly learning and expanding my toolkit.
            </p>
          </div>
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex bg-white/5 rounded-lg p-1">
              {skillCategories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === category.name 
                      ? 'bg-white/10 text-white' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className={`transition-all duration-300 ${activeTab === category.name ? 'opacity-100' : 'hidden opacity-0'}`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with elegant styling */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-neutral-900 to-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="h-1 w-16 bg-blue-400 mb-6"></div>
              <p className="text-neutral-300 mb-8">
                Have a project in mind or want to collaborate? Feel free to reach out through any of these platforms.
              </p>
              
              <div className="space-y-6">
                {socialLinks.map((contact, index) => (
                  <a 
                    key={index} 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">{contact.name}</p>
                      <p className="text-white">{contact.username}</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 justify-center flex flex-col items-center h-full">
                <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
                <a 
                  href="mailto:minamrahman727@gmail.com?subject=Website%20Development%20Inquiry&body=Hello%20Minam%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I'm%20interested%20in%20getting%20a%20full-fledged%20website%20developed%20using%20advanced%20frameworks%20like%20React%20or%20Next.js.%0ACould%20you%20please%20provide%20an%20estimate%20of%20the%20total%20cost%20and%20timeline%3F%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you" 
                  className="border-2 border-white/5 text-white bg-white/10 hover:bg-white/5 px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2 animate-pulse"
                >
                  Send Message <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-12 px-6 border-t border-white/10 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-800 rounded-md flex items-center justify-center border border-neutral-700">
                <span className="font-bold text-lg">S</span>
              </div>
              <span className="font-medium">Syed Minam</span>
            </div>
            
            <div className="flex items-center gap-6">
              {socialLinks.slice(0, 3).map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Syed Minam. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ProfilePage;