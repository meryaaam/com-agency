"use client" ;
import { useEffect, useRef, useState } from "react";
import { color, motion } from "framer-motion";
import gsap from "gsap";
import { Button, Card , CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { RightIcon, StarIcon } from "../icons";
import { title } from "../primitives";

const FadeUp = () => { 
    const [isCardVisible, setIsCardVisible] = useState(false);

    // Function to handle button click
    const handleButtonClick = () => {
        setIsCardVisible(true); // Show the card and hide the other button
    };
    
   
  return (
   <section className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56">
     <div className="flex flex-col gap-8">
        <div>
            
            <span className={title({size:"lg"})}>The Loud&nbsp;</span>
            <span className={title({size:"lg", color: "blue"})}>  Voice &nbsp; </span> <br />
        
        <span className={title({ size:"lg"  })}>of your Brand &nbsp;</span>
        </div>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            NextUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.
            </p>
        </div> 
        
</section>
);
};

export default FadeUp;
