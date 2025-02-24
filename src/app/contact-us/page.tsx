"use client";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Hero from "@/components/Hero";

export default function ContactUsPage() {
  const phoneNumber = "+923292566019";
  const email = "globaltoolshub@gmail.com";

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Hero Section */}
      <Hero
        title="Get in Touch with Us!"
        subtitle="Have questions? Need support? Contact us for quick assistance."
        buttonText="Contact Now"
        buttonLink={`https://wa.me/${phoneNumber.replace("+", "")}`}
        bgGradient="from-teal-600 to-teal-800"
        image1="/contact.png"
        image2="/support.png"
      />

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl mx-auto">
        {/* Phone Number (Redirects to WhatsApp) */}
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm w-full md:w-auto">
          <FaPhone className="text-green-600 text-xl" />
          <span className="text-gray-800 font-medium">{phoneNumber}</span>
          <button
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            onClick={() =>
              window.open(`https://wa.me/${phoneNumber.replace("+", "")}`, "_blank")
            }
          >
            WhatsApp
          </button>
        </div>

        {/* Email (Opens Email App) */}
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm w-full md:w-auto">
          <FaEnvelope className="text-red-600 text-xl" />
          <span className="text-gray-800 font-medium">{email}</span>
          <button
            className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            onClick={() => (window.location.href = `mailto:${email}`)}
          >
            Email
          </button>
        </div>
      </div>
    </div>
  );
}
