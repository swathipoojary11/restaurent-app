"use client";

import React from "react";

export default function Hero({ backgroundImage, title, subtitle }) {
  return (
    <section
      className="w-full h-[70vh] sm:h-[80vh] text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-black/60 gap-3 px-4 text-center">
        <h1 className="text-3xl font-serif font-bold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-lg font-medium sm:text-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
//For other pages .