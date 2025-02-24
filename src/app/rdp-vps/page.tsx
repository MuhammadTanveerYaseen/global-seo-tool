"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {vpsPlans} from "@/components/vpsdata"; // Ensure correct import path
import Hero from "@/components/Hero";

interface CardProps {
  title: string;
  price: string;
  features: string[];
  image: string;
  message: string;
}

const Card: React.FC<CardProps> = ({ title, price, features, image, message }) => {
  const whatsappLink = `https://wa.me/923292566019?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-2xl p-5 w-80 flex flex-col items-center border border-gray-200 transition-all hover:shadow-xl"
    >
      <Image src={`/${image}`} alt={title} width={200} height={30} className="mb-2" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-md font-medium text-gray-600">{price}</p>
      <ul className="text-sm text-gray-700 mt-3 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
      >
        Buy Now
      </a>
    </motion.div>
  );
};

const CardsList: React.FC = () => {
  return (
    <div>
      <Hero
        title="Get More Speed & Less Price Now!"
        subtitle="Pick your desired location VPS with admin access."
        buttonText="Explore Plans"
        buttonLink="/vps-plans"
        bgGradient="from-blue-600 to-blue-800"
        image1="/vps-hero.png"
        image2="/vps-performance.png"
      />

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {vpsPlans.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            features={item.features}
            image={item.image}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
