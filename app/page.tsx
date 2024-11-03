 
import Hero from "@/components/hero/hero";
import { SocialProof } from "@/components/hero/social-proof";
import { Introduction } from "@/components/hero/introduction";
import FadeUp from "@/components/hero/fade-up";
import Tricker from "@/components/hero/ticker";
import { Services } from "@/components/hero/services";
import Socials from "@/components/hero/socials";

export default function Home() {
  return (
    <section>
      <Hero />
      <SocialProof />
      <FadeUp />
      <Services />
     {/* <Tricker />*/}
    </section>
 
  );
}
