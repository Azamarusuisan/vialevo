"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Service from "@/components/Service";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Message />
      <Service />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}
