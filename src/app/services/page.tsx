"use client"
import Hero from "@/components/Hero"
 import React from 'react'
 
 function services() {
   return (
    <Hero
    title="Explore Our Additional Services!"
    subtitle="From digital marketing to automation, we have a range of services tailored for you."
    buttonText="See All Services"
    buttonLink="/other-services"
    bgGradient="from-red-600 to-red-800"
    image1="/services.png"
    image2="/automation.png"
  />
   )
 }
 
 export default services