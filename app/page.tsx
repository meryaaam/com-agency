 
import Hero from "@/components/common/home/hero";  
import { Introduction } from "@/components/common/home/introduction"; 
import { Services } from "@/components/common/home/services";  
import ImageReveal2 from "@/components/common/home/works";
import React from 'react';  
 
export default function Home() {
  
  return (  
    <section>
        <Hero />  
        <Services /> 
        <Introduction/>  
        <ImageReveal2/>  
      </section>
         
  );
}

