"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Packages from "@/components/Packages";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pb-20">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Packages />
        <Experience />
        <Approach />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
