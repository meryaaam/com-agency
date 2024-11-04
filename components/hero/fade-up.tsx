"use client" ;
import { useEffect, useRef, useState } from "react";
import { color, motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Button, Card , CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { RightIcon, StarIcon } from "../icons";
import { subtitle, title } from "../primitives";
import RoundedButton from "@/common/rounded-button";
import { Services } from "./services";
export const slideUp = {
    initial: {
        y: "100%",
    },
    open: (i: number) => ({
        y: "0%",
        transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
        y: "100%",
        transition: { duration: 0.5 },
    },
};

export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};
const FadeUp = () => { 
    const [isCardVisible, setIsCardVisible] = useState(false); 
    const handleButtonClick = () => {
        setIsCardVisible(true); // Show the card and hide the other button
    };
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)
   
  return (
    <section className="sticky top-0 items-center justify-center gap-4 py-8 md:py-10"> 
    <div className="sticky top-0 grid sm:grid-cols-3 gap-14">
        <div> 
            <div> 
                <span className={title({size:"lg"})}>The Loud&nbsp;</span>
                <span className={title({size:"lg", color: "blue"})}>  Voice &nbsp; </span> <br /> 
                <span className={title({ size:"lg"  })}>of your Brand &nbsp;</span>
            </div>
            <p className="w-full   text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            We know what’s going on. <br/>
            You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. 
            <br/>
            That’s when Q comes in.            </p> 
        </div>
        {/*<div className="max-w-[900px]  py-8 md:py-10 col-span-2">
            <div className="grid grid-cols-2  sm:grid-cols-2 grid-rows-3   gap-4">
                <Card shadow="sm" className=" h-[150px] grid-col-1 sm:grid-cols-1" isPressable onPress={() => console.log("item pressed")}>
                    <CardHeader className="p-5"></CardHeader>
                    <CardBody className="overflow-visible p-5">
                        <span className={title({ size:"sm" , color:"cyan" })}>Social Ads &nbsp;</span>
                        <p className="w-full   text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                            That’s when Q comes in.           
                        </p>                    
                    </CardBody>
                     
                    </Card> 
                <Card shadow="sm" className="h-[100px] sm:grid-col" isPressable onPress={() => console.log("item pressed")}>
                     <CardBody className="overflow-visible p-5">
                        <span className={title({ size:"sm"   })}>SaaS Marketing &nbsp;</span>
                        <p className="w-full   text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                            That’s when Q comes in.           
                        </p>                    
                    </CardBody>
                     
                    </Card> 
                 
                <Card shadow="sm" className="h-[300px] row-span-2 sm:row-span-2" isPressable onPress={() => console.log("item pressed")}>
                    <CardBody  className="overflow-visible p-0">
                    <Image
                        removeWrapper
                        shadow="sm"
                        radius="lg" 
                        width="100%"
                        height="auto"
                        alt="image"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="images/hero/fruit-3.jpeg"
                        />
                    </CardBody>
                     
                    </Card>  
                <Card shadow="sm" className="h-[130px] grid-col-2 sm:grid-col-2" isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="p-5">
                    <span className={title({ size:"sm" , color:"cyan"  })}>SEO &nbsp;</span>
                        <p className="w-full   text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                            That’s when Q comes in.           
                        </p>   
                    </CardBody>
                     
                    </Card> 
            </div>



        </div>*/}
        <div className="max-w-[900px]  py-8 md:py-10 col-span-2">
        <Services />
        </div>
        
    
  </div>
  </section>
);
};

export default FadeUp;
