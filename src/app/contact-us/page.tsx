"use client"
import Hero from "@/components/Hero"
export default function ContactUsPage() {
    return (
      <div className="container mx-auto py-10 px-6">
       <Hero
  title="Get in Touch with Us!"
  subtitle="Have questions? Need support? Contact us for quick assistance."
  buttonText="Contact Now"
  buttonLink="/contact-us"
  bgGradient="from-teal-600 to-teal-800"
  image1="/contact.png"
  image2="/support.png"
/>
      </div>
    );
  }