"use client";

import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ProductCard from "./ProductCard";
import FooterComponent from "../components/footer";


export default function Shop() {
  const mainImg = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";

  const row1Products = [
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
      alt: "Cheese pizza",
      category: "Cheese,Pizza",
      name: "Margerita Pizza",
      price: "$12.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
      alt: "Burger",
      category: "Cheese,Pizza",
      name: "Margerita Burger",
      price: "$8.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
      alt: "Beef steak",
      category: "BeefSteak",
      name: "Grilled Flank Steak",
      price: "$7.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75",
      alt: "Barbecue chicken",
      category: "BBQ,Meat",
      name: "Barbecue Chicken",
      price: "$8.00",
    },
  ];

  const row2Products = [
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75",
      alt: "Vegetable roll",
      category: "FoodRoll",
      name: "Vegetable Roll",
      price: "$12.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
      alt: "Pasta",
      category: "PastaSpicy",
      name: "Creamy Pastar",
      price: "$13.00",
      oldPrice: "$18.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
      alt: "Chicken shawarma",
      category: "BBQ,Meat",
      name: "Chicken Shawarma",
      price: "$7.00",
    },
    {
      imageSrc:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75",
      alt: "Submarine sandwich",
      category: "BBQ,Meat",
      name: "Submarine Sandwich",
      price: "$8.00",
    },
  ];

  return (
    <div className="w-full h-full text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero backgroundImage={mainImg} title="Special Food" subtitle="Home" />

      {/* First row of cards */}
      <div className="w-[90vw] p-6 mx-8">
        <div className="flex flex-row justify-evenly items-center mt-12 gap-4 mx-10">
          {row1Products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>

      {/* Second row of cards */}
      <div className="w-[90vw] p-6 mx-10">
        <div className="flex flex-row justify-evenly items-center mt-12 gap-4 mx-5">
          {row2Products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>

      {/* Bottom boxes */}
      <div className="mt-10 flex flex-row h-[20vh] items-center justify-center gap-4">
        <div className="w-2/4 h-[8vh] items-center justify-evenly flex flex-row">
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
          <div className="h-[8vh] w-[8vh] rounded-2xl bg-[#46484abf]" />
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}