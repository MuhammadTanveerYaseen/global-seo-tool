"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-10 px-6"
    >
      {/* Contact Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        {/* WhatsApp */}
        <motion.div
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-red-600 p-4 rounded-lg shadow-md flex items-center justify-center md:justify-start space-x-3"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="text-lg font-semibold">+923256629019</span>
        </motion.div>

        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.1, rotateY: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-red-600 p-4 rounded-lg shadow-md flex items-center justify-center md:justify-start space-x-3"
        >
          ✉️ <span className="text-lg font-semibold">globaleotools@gmail.com</span>
        </motion.div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto mt-10 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Description */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-center md:text-left"
        >
          <Image
            src="/logo.jpeg"
            alt="Global SEO TOOLS Logo"
            width={150}
            height={50}
          />
          <p className="mt-2 max-w-sm">
            Global SEO TOOLS offer high-quality cheap SEO tools at unbelievably affordable monthly fees.
          </p>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-6 md:mt-0 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            {["Home", "SEO Tools", "Amazon Tools", "Other Services", "RDP/VPS"].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: "#ffeb3b" }}
                transition={{ duration: 0.2 }}
                className="block hover:text-yellow-300"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            {["Privacy Policy", "Terms and Conditions", "Disclaimer", "Support", "FAQ"].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: "#ffeb3b" }}
                transition={{ duration: 0.2 }}
                className="block hover:text-yellow-300"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
            <p>📧 globaltoolshub@gmail.com</p>
            <p>📞 +923292566019</p>
            <p>💬 WhatsApp: +923256629019</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 flex justify-center space-x-6">
        {[
          { icon: FaFacebookF, link: "https://www.facebook.com/share/18pFxECbGe" },
          { icon: FaLinkedinIn, link: "#" },
          { icon: FaTwitter, link: "#" },
          { icon: FaWhatsapp, link: "https://whatsapp.com/channel/0029VaxokTxHLHQeHyklWD2U" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ duration: 0.3 }}
            className="p-3 bg-white text-red-600 rounded-full shadow-lg hover:bg-yellow-300"
          >
            <social.icon className="text-xl" />
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-white pt-4">
        Copyright © 2025 <span className="font-bold">Global SEO TOOLS</span> – Design by Global SEO TOOLS.
      </div>
    </motion.footer>
  );
};

export default Footer;
