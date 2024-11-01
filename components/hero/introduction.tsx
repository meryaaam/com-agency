"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { title } from "../primitives";

export const Introduction = () => {
 
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-full text-center justify-center ">

        <span className={title({ size:"lg"})}>
        We know what’s going on. <br/>
        You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. 
        <br/>
        That’s when Q comes in.
        </span>
       </div>

    </section>
  );
};
