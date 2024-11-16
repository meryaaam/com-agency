"use client" ;
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/react"; 
  
export default function AboutPage() {
  return (
    <>
    <section className="relative z-10 pb-18 lg:pb-27 xl:pb-36 pt-5 lg:pt-5 xl:pt-10">
      <div className="absolute left-0 -z-1 flex w-full flex-col gap-3 opacity-50"> 
      </div>
      <div className="px-4 text-center"> </div> 
      <div className="px-4 text-center mb-5.5">
        <h1 className={title()}>About</h1> 
        </div>
      </section>
    
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
       
       <div className='mt-5'>
         <div className='grid grid-cols-2 px-8 gap-12 pb-3'>
           <div className='place-content-center px-8'>
               
               <div className="mb-8"> 
                   <div  className='mb-8'> 
                       <span className={title({size:"lg"})}>Crafting Digital  &nbsp;</span>
                       <span className={title({size:"lg", color: "green"})}>Success&nbsp;</span>   
                       <span className={title({ size:"lg"  })}>Stories&nbsp;</span>
                   </div>
                   <p className="w-full   text-lg lg:text-xl mt-6 font-normal text-default-500 block max-w-full">
                   Turning ideas into impact, we craft stunning websites, elevate online visibility, 
                   and design visuals that speak louder than words.
                   <br/>
                   From Digital Marketing and SEO to Web Development and Graphic Design, 
                   we blend creativity and strategy to amplify your brand and drive real results.
                   <br/>
                   Let’s build extraordinary together.
                   
                   </p> 
               </div>
             </div>
          <div className='place-content-center'>
            
            <Image src="images/about-2.jpg"> </Image>
            
            </div>    
          
         </div>
       </div>
     </section>
     <div>
    
     </div>
     
    </>
   
  );
}
