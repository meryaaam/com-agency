import { title, subtitle } from "@/components/primitives";   
import { Image } from "@nextui-org/react";
 
export default function whoAreWe() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
          <div className='bg-none'> 
          <Image src="/images/about-2.jpg"    />
          </div>    
          
         </div>
       </div>
       
  
     
    </section>
  );
}
