 
import Hero from "@/components/hero/hero"; 
import { Introduction } from "@/components/hero/introduction";
import FadeUp from "@/components/hero/fade-up";
import Tricker from "@/components/hero/ticker";
import { Services } from "@/components/hero/services"; 
import React from 'react'; 
import Socials from "@/animations/socials"; 
import ServicesWrapper from "@/components/hero/services-wrapper";
 
export default function Home() {
  
  return (  
    <section>
        <Hero /> 
        <Services />   
        <Tricker/> 
      </section>
         
  );
}

