import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons"; 
import Hero from "@/components/hero/hero";
import { SocialProof } from "@/components/hero/social-proof";
import { Introduction } from "@/components/hero/introduction";

export default function Home() {
  return (
    <section>
      <Hero />
      <SocialProof />
      <Introduction />
    </section>
 
  );
}
