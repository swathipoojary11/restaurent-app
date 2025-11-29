"use client";

import React from "react";
import Navbar from "../components/navbar";
import Hero from "../menu/hero";
import BlogCard from "./BlogCard";
import FooterComponent from "../components/footer";

export default function BlogPage() {
  const mainImg = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";

  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        backgroundImage={mainImg}
        title="Blog Standard"
        subtitle="Home"
      />

      {/* Blog Cards */}
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-0">
        <div className="grid gap-10">
          <BlogCard
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
            date="12 August, 2024"
            author="John Baus"
            title="Picked up a Brussels burger Sprouts."
            excerpt="Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now"
          />

          <BlogCard
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
            date="13 August, 2024"
            author="Admin"
            title="Picked up a Brussels burger Sprouts."
            excerpt="Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now"
          />

          <BlogCard
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"
            date="14 August, 2024"
            author="Admin"
            title="Overcame breeding point concerns has."
            excerpt="Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now"
          />
        </div>

  
      </main>
      <FooterComponent/>
    </div>
  );
}