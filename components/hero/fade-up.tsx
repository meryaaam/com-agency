"use client" ;
import { useEffect, useRef, useState } from "react";
import { color, motion } from "framer-motion";
import gsap from "gsap";
import { Button, Card , CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { RightIcon, StarIcon } from "../icons";

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
            <div className="flex flex-col gap-2 items-start justify-center w-full">
                <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">The Loud</h1>
                 <div>
                    <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
                        Voice&nbsp;
                    </h1>
                    <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">of your Brand.</h1>
                </div>
            </div>
                    <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                    NextUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.
                    </p>
        </div>
        </div>
</section>
);
};

export default FadeUp;
