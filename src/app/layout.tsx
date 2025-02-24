import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best AI & SEO Tools | Writing, Research, Marketing & Design",
  description: "Unlock the power of AI with top tools like ChatGPT, Jenni.ai, Scite.ai, StealthWriter.ai, WriteHuman.ai, Hix.ai, BypassGPT.ai, Grammarly, Quillbot, Turnitin, and more for content creation, SEO, research, design, and automation.",
  keywords: "ChatGPT, Jenni.ai, Scite.ai, StealthWriter.ai, WriteHuman.ai, Hix.ai, BypassGPT.ai, Canva, LinkedIn Premium, Coursera Plus, CourseHero, Chegg, Turnitin Student, Turnitin Instructor, Originality, Quillbot, Grammarly, Midjourney, Leonard.ai, Freepik, Envato Elements, Semrush, ElevenLabs, Runway ML, Hailou.ai, VideoExpress.ai, Office 365, VidIQ, WordTune, AI writing tools, AI content generator, SEO optimization, plagiarism checker, AI-powered research, AI marketing, AI design tools, AI automation, AI voice generation, AI video editing, AI education tools, digital marketing AI, academic writing assistant, content optimization, AI-driven productivity, AI-driven creativity, AI-generated content, AI paraphrasing tools, AI research assistant, online learning tools, AI-powered SEO, AI-based design, best AI tools, AI-powered automation, AI software for writers, AI-powered video creation, AI-driven marketing tools, AI tools for businesses, AI-powered branding, AI-driven copywriting, AI-powered image creation, AI for freelancers, AI for students, AI-powered business tools, top AI platforms, AI-powered academic solutions, AI-powered creative tools, AI-powered advertising, AI-powered blogging, AI-powered productivity tools.",
};



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
        <Header></Header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
