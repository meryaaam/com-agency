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
   <section className="grid grid-cols-2 lg:grid-cols-2 gap-4">
     <div className="flex flex-col gap-6 ">
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
        
        <div className="flex gap-6" ref={description}
            style={{
                
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div data-scroll data-scroll-speed={0.1}>
                    <RoundedButton>
                        
                    <span style={{ margin: 0,
                    color:'#000', 
                                    position: 'relative',
                                    zIndex: 1, }}
                            className={subtitle()}>About us&nbsp;
                    </span>

                     </RoundedButton>
                </div>
            <div
                style={{
                    maxWidth: '1400px',
                    display: 'flex',
                    gap: '50px',
                    position: 'relative',
                }}
            >
                 
                {/*<motion.p
                    variants={opacity}
                    animate={isInView ? 'open' : 'closed'}
                    style={{
                        fontSize: '18px',
                        width: '80%',
                        fontWeight: 300,
                        margin: 0,
                    }}
                >
                    The combination of my passion for design, code & interaction
                    positions me in a unique place in the web design world.
                </motion.p>*/}
                
            </div>
        </div>
</section>
);
};

export default FadeUp;
