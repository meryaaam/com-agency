 
"use client";  

import Work from "@/components/common/about/work";
import { subtitle, title } from "@/components/primitives"; 
  
export default function AboutPage() {
  return (
    <section>
    <div className="relative z-10 pb-18 lg:pb-27 xl:pb-36 pt-5 lg:pt-5 xl:pt-10">
      <div className="absolute left-0 -z-1 flex w-full flex-col gap-3 opacity-50"> 
      </div>
      <div className="px-4 text-center"> </div> 
      <div className="px-4 text-center mb-5.5">
        <h1 className={title()}>About</h1> 
        </div>
      </div>
     

    
      <Work/>
    
      
    </section>
   
   
  );
}
