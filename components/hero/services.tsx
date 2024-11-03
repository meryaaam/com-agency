"use client";
import React, { useState, useRef, useEffect } from "react";
import { title } from "../primitives";
import { motion } from "framer-motion";
import SectionLayout from "@/common/SectionLayout";
import HorizontalWrapper from "@/common/HorizontalWrapper";

const sectionsData = [
  {
    title: 'Branding',
    imageUrl: '/images/1.jpg',
  },
  {
    title: 'Marketing',
    imageUrl: '/images/2.jpg',
  },
  {
    title: 'Coding',
    imageUrl: '/images/3.jpg',
  },
  // Add more sections as needed
];

export const Services = () => {
 
  useEffect(() => {
  })

  return (
    <section className="relative z-10 mt-10 grid gap-14 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
        
            {/*<div className=" lg:row-span-2">
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
            </div>*/}

          
            
    </section>
  );
};
