import Tag3d from "@/components/animations/3dtag";
import Hero from "@/components/common/hero";
import { Introduction } from "@/components/common/introduction";
import LogoCarousel from "@/components/common/logo-carousel";
import { Services } from "@/components/common/services";
import { SocialProof } from "@/components/common/social-proof";
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
