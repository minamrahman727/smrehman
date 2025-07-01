import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ProfileCard from "./components/about";
import Footer from "./components/footer";
import Head from "next/head";


export const metadata = {
  title: "Syed Minam Ur Rehman - Portfolio",
  description: "Explore Syed Minam Ur Rehman's portfolio showcasing expertise in web development, coding, and full-stack projects.",
  authors: [{ name: "Syed Minam Ur Rehman" }],
  icons: {
    icon: "/1.ico",
  },
  keywords: [
    "Syed Minam Ur Rehman",
    "portfolio",
    "web development",
    "coding",
    "projects",
    "achievements",
    "developer",
    "programming",
    "frontend development",
    "backend development",
    "full-stack development",
    "Next.js",
    "React",
    "JavaScript",
    "Vercel",
    "software engineer",
    "UI/UX design"
  ],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Syed Minam Ur Rehman - Portfolio",
    description: "Explore Syed Minam Ur Rehman's portfolio showcasing expertise in web development, coding, and full-stack projects.",
    url: "https://smrehman.vercel.app",
    siteName: "Syed Minam Ur Rehman", 
  }
}
export default function Home() {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta name="keywords" content="Syed Minam Ur Rehman, portfolio, web development, coding, projects, achievements, vercel, Zarak" />
        <meta name="author" content="Syed Minam Ur Rehman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={metadata.icons.icon} />

      </Head>
    <main>
      <Navbar />
      <HeroSection />
      <ProfileCard />
      <Footer />
    </main>
    </main>

  );
}
