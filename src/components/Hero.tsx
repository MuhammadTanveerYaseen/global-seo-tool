"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgGradient?: string;
  image1?: string;
  image2?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgGradient = "from-green-600 to-green-800",
  image1 = "/seo-tool-1.png",
  image2 = "/seo-tool-2.png",
}) => {
  return (
    <section className={`relative bg-gradient-to-br ${bgGradient} text-white min-h-screen flex flex-col items-center justify-center text-center px-6`}>
      
      {/* Animated Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />

      {/* Hero Content */}
      <div className="max-w-3xl z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl"
        >
          {subtitle}
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6"
        >
          <Link href={buttonLink}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-400 text-red-800 px-8 py-3 rounded-lg text-lg font-bold shadow-lg"
            >
              {buttonText}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Images */}
      {image1 && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 hidden md:block"
        >
          <Image
            src={image1}
            alt="Floating Image 1"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </motion.div>
      )}

      {image2 && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 hidden md:block"
        >
          <Image
            src={image2}
            alt="Floating Image 2"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
