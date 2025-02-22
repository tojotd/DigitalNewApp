import Hero from "@/sections/Hero";
import Posts from "@/sections/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Posts />    
    </main>
  );
}
