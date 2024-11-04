"use client";
import React, { useState, useRef, useEffect } from "react";
import { subtitle, title } from "../primitives";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import SectionLayout from "@/common/SectionLayout";
import HorizontalWrapper from "@/common/HorizontalWrapper";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

 

export const Cards = (item:any,progress:any,range:any,targetScale:any,i:any , visibleCards:any) => {
    const scale = useTransform(item.progress, item.range, [1, item.targetScale ]);
    const container = useRef(null);



  return (
    <div ref={container}>


   <motion.div
     id={item.key}
     initial={{ opacity: 0.5, y: 20 }}
     animate={visibleCards[item.key] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in and slide up
     transition={{ duration: 0.6 }}
     style={{scale, top:`calc(-5vh + ${item.i * 25}px)`}} 


   >
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-auto"
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
      </motion.div>
     
    </div>
 
  );
};
