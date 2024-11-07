 
import Hero from "@/components/hero/hero";
import { SocialProof } from "@/components/hero/social-proof";
import { Introduction } from "@/components/hero/introduction";
import FadeUp from "@/components/hero/fade-up";
import Tricker from "@/components/hero/ticker";
import { Services } from "@/components/hero/services";
import Socials from "@/components/hero/socials";
import React, { useState, useEffect } from 'react';
import Loading from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for loading, adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // e.g., 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {!isLoading ? (
        <Loading />
      ) : (  
        <section>
          <Hero /> 
         <Services />
         </section>
         
         )} 
    
      
      
     {/* <Tricker />*/}
    </div>
 
  );
}
