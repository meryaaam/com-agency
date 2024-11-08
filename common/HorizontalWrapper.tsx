// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react'; 
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { subtitle } from '@/components/primitives';

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
export default function HorizontalWrapper(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className='items-center justify-center gap-4 py-8 md:py-10' ref={container}>
        <>
          <section className='text-white  h-[70vh]  w-full grid place-content-center '>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Stacking Cards Using <br /> Framer-Motion. Scroll down! 👇
            </h1>
          </section>
        </>

        <section className=' '>
          {services.map((item, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
               
              <Card
              key={`p_${i}`}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              isBlurred
              className="transition-all duration-300 rounded-md border-none bg-background/60 dark:bg-default-100/50 max-auto"
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
            </Card> 
            );
          })}
        </section>

         
      </main>
    </ReactLenis>
  );
}
 