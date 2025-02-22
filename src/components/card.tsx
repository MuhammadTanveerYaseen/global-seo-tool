"use client"
import { motion } from "framer-motion"
interface CardProps {
  title: string;
  image: string;
  message: string;
}

const Card: React.FC<CardProps> = ({ title, image, message }) => {
  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center space-y-4 w-full sm:w-64"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-contain rounded-full" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
      </a>
    </motion.div>
  );
};

export default Card;
