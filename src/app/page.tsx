"use client"
import Hero from "@/components/Hero"
import Card from "@/components/card";
import { cardData } from "@/components/data";
import { motion } from "framer-motion";
export default function Home() {
  return (
   <div>
    <Hero
      title="Get Premium Tools at the Best Price!"
      subtitle="Access industry-leading tools at unbeatable prices and boost your online success."
      buttonText="Start Now"
      buttonLink="/pricing"
      bgGradient="from-green-600 to-green-800"
      image1="/seo-analysis.png"
      image2="/keyword-research.png"
    />
 <motion.h1
      className="text-2xl md:text-2xl font-extrabold text-center text-blue-600 mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      INDIVIDUAL All Tools Available Asked Just Name
    </motion.h1>
<div className="flex flex-wrap justify-center gap-6 p-6">
      {cardData.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} message={item.message} />
      ))}
    </div>
   </div>
  );
}
