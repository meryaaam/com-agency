
import Hero from "@/components/common/hero";
import { Introduction } from "@/components/common/introduction"; 
import { Services } from "@/components/common/services"; 
import ImageReveal2 from "@/components/common/works"; 
import React from "react";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <Introduction />
      <ImageReveal2 />
    </section>
  );
}
