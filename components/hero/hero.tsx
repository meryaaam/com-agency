import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme"; 

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {StarIcon } from "@/components/icons"; 

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center ">
        <div className="mb-8">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
           
        >
          <StarIcon size={24} />
          Say hello to Your Go-To Agency for Unforgettable Communication!
        </Link>
        <br/>
      </div>
        
        <span className={title({size:"xl"})}>Collaborate and&nbsp;</span>
        <br />
        <span className={title({size:"xl"})}> 
            validate &nbsp;
        </span>
        <span className={title({ size:"xl" , color: "violet" })}>ideas&nbsp;</span>
        <div className={subtitle({ class: "w-full text-lg lg:text-xl text-default-600 max-w-xl mt-4 mx-auto" })}>
        Where creativity meets strategy: we craft unforgettable brand stories and spark genuine connections across every digital and traditional touchpoint.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            size: "lg",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Contact us
        </Link>
         
      </div>
  
     
    </section>
  );
}
