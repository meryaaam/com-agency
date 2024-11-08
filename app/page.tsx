 
import Hero from "@/components/hero/hero";  
import { Introduction } from "@/components/hero/introduction";
import { Services } from "@/components/hero/services"; 
import React from 'react';  
 
export default function Home() {
  
  return (  
    <section>
        <Hero /> 
        <Services /> 
        <Introduction/>  
        
      </section>
         
  );
}

