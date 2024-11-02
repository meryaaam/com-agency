 
import Hero from "@/components/hero/hero";
import { SocialProof } from "@/components/hero/social-proof";
import { Introduction } from "@/components/hero/introduction";
import FadeUp from "@/components/hero/fade-up";

export default function Home() {
  return (
    <section>
      <Hero />
      <SocialProof />
      <FadeUp />
    </section>
 
  );
}
