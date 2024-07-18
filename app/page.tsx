import HeroSection from "@/components/mainPageComponents/HeroSection";
import Navbar from "@/components/mainPageComponents/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen  bg-bgColor">
      <Navbar/>
      <HeroSection/>
      </main>
    </>
  );
}
