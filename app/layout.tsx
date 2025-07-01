import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Minam Ur Rehman",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
