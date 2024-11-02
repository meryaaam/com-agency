"use client";

import { useRef, useState , useEffect} from "react"; 
import { title } from "../primitives";  
import { motion, useInView, useScroll } from "framer-motion";  

const sections = [
  {
    title: 'Branding',
    description: 'Create appealing interfaces effortlessly without writing any code by using Framer as NoCode design tools.',
    imageUrl: '/images/branding.jpg', // Replace with your actual image paths
  },
  {
    title: 'Product Design',
    description: 'We build and design products that captivate audiences and drive engagement.',
    imageUrl: '/images/product-design.jpg',
  },
  {
    title: 'UI UX Design',
    description: 'Design intuitive user experiences that bring your vision to life.',
    imageUrl: '/images/ui-ux-design.jpg',
  },
  // Add more sections as needed
];
export const Services = () => {

  
  
  return (
    <section className="relative z-10 mt-10 grid gap-14 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
        
            <div className=" lg:row-span-2">
                <span  className={title({size:"lg"})}>Branding &nbsp;</span>
                <span className={title({size:"lg"})}>Product Design&nbsp;</span>
                <span className={title({size:"lg"})}>UI UX Design&nbsp;</span>
                <span className={title({size:"lg"})}>UI UX Design&nbsp;</span>
            </div>
            <div className=" lg:row-span-2">
                <span  className={title({size:"lg"})}>Branding &nbsp;</span>
                <span className={title({size:"lg"})}>Product Design&nbsp;</span>
                <span className={title({size:"lg"})}>UI UX Design&nbsp;</span>
                <span className={title({size:"lg"})}>UI UX Design&nbsp;</span>
            </div>
            
    </section>
  );
};
