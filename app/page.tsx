"use client";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div >
      <div className="flex flex-row items-center justify-center gap-4 min-h-screen">
        <Hero />
      </div>
    </div>

  );
}
