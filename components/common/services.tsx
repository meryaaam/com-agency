"use client";
import React, { useState, useRef, useEffect } from "react";
import { subtitle, title } from "../primitives";
import { AnimatePresence, motion, useIsPresent, useScroll, useTransform } from "framer-motion"; 
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import ReactLenis from "@studio-freight/react-lenis";

const services = [
  {
    key : "MK-01" , 
    title: 'Marketing',
    shortDescription : "Engage, Inspire, Drive Success." ,
    description : "Tailored strategies that boost your brand's visibility and connect with your audience like never before." ,
    text : "From strategy to success, we turn your brand into a story that captivates and converts." ,
    imageUrl: '/images/1.jpg',
  },
  {
    key : "BG-01" , 
    title: 'Branding',
    shortDescription : "Stand Out, Be Memorable." ,
    description : "Elevate your identity—bold, memorable, and unmistakably you." ,
    text : "From strategy to success, we turn your brand into a story that captivates and converts." ,
    imageUrl: '/images/1.jpg',
  },
  {
    key : "DG-01" , 
    title: 'Design',
    shortDescription : "Creative Designs That Captivate." ,
    description : "Designs that don’t just catch the eye, but captivate the mind and inspire action."
 ,
    text : "Crafting unique identities that resonate and make lasting impressions in a crowded market." ,
    imageUrl: '/images/1.jpg',
  },
  { 
    key : "SEO-01" , 
    title: 'SEO',
    shortDescription : "Boost Visibility, Dominate Search." ,
    description : "Be found, be chosen—SEO that puts your brand on the digital map and keeps it there." ,
    text : "Precision-driven SEO services that enhance your online presence and push you to the top of search results." ,
    imageUrl: '/images/1.jpg'} 
    ,
  {  key : "DEV-01" , 
    title: 'Developement',
    shortDescription : "Innovative Solutions, Seamless Performance." ,
    description : "Innovative digital experiences, seamless performance, and platforms that keep your users coming back for more." ,
    text : "Cutting-edge, user-friendly web solutions that are built to engage and perform." ,
    imageUrl: '/images/1.jpg'} ,
  
  
  // Add more sections as needed
];
type VisibleCards = {
  [key: string]: boolean;  
};

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<VisibleCards>({}); // Set the initial state type

  const scrollRef = useRef<HTMLDivElement | null>(null); // Set type for ref
  const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ['start start', 'end end']

  })
  
  useEffect(() => {
    const handleScroll = () => {
      const newVisibleCards: VisibleCards = {};
      const scrollY = window.scrollY; 
   
      services.forEach((item, index) => {
        const triggerPoint = (index + 1) * 300;  
        newVisibleCards[index] = scrollY > triggerPoint && scrollY < triggerPoint + 300; 
        newVisibleCards[index] = true; 
      });

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, []); 

  return (
    <ReactLenis root>
    <main className='items-center justify-center  gap-4 py-8 md:py-10'>
      
      <section className=''>
        <div className='grid grid-cols-2 px-8 gap-5 pb-3'>
          <div className='sticky top-0 h-screen place-content-center'>
              
              <div> 
                  <div  className='tracking-tight leading-[170%] mb-5'> 
                      <span className={title({size:"lg"})}>The Loud&nbsp;</span>
                      <span className={title({size:"lg", color: "blue"})}>  Voice &nbsp; </span> <br /> 
                      <span className={title({ size:"lg"  })}>of your Brand &nbsp;</span>
                  </div>
                  <p className="w-full   text-lg lg:text-xl mt-6 font-normal text-default-500 block max-w-full">
                  We know what’s going on. <br/>
                  You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. 
                  <br/>
                  That’s when Q comes in.            </p> 
              </div>
            </div>
          <div className='grid gap-2'>
             
            <div className="max-w-[900px]  py-8 md:py-10 col-span-2">
          
          <section  className="sticky top-0  grid grid-rows-5 w-full gap-6 pb-2 ">
              { services.map((item,key) => (
              
                (visibleCards &&  
                 
                 <Card
                    isBlurred
                    className="transition-all duration-300  border-none bg-background/60 dark:bg-default-100/50 max-auto"
                    shadow="sm"
                  >
                    <CardHeader>
                      <div className="relative col-span-6 md:col-span-4">
                      <div className={subtitle({color:"blue" , class: "w-full text-lg font-bold lg:text-xl max-w-xl mt-4 mx-auto" })}>
                      {item.shortDescription}
                      </div>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-1 items-center justify-center"> 
                        <div className="flex flex-col col-span-6 md:col-span-8">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                              <h3 className="font-semibold text-default-600">  {item.description}
                              </h3>
                              <p className="text-small text-foreground/80">   {item.text}      </p>
                            </div>
                            
                          </div>

                          
                        </div>
                      </div>
                    </CardBody>
                  </Card> )
              ))}
          </section>
        </div>
         
         
          </div>
         
        </div>
      </section>
      
    </main>
  </ReactLenis>
   
  );
};
