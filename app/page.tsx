 
import Hero from "@/components/hero/hero";
import { SocialProof } from "@/components/hero/social-proof";
import { Introduction } from "@/components/hero/introduction";
import FadeUp from "@/components/hero/fade-up";
import Tricker from "@/components/hero/ticker";
import { Services } from "@/components/hero/services"; 
import React from 'react'; 

export default function Home() {
  
  return (  
    <section>
        <Hero /> 
        <Services /> 
      </section>
         
  );
}
