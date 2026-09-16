import { AvatarOption } from "@/components/AvatarOption";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PageShell } from "@/components/PageShell";
import { Pricing } from "@/components/Pricing";
import { Security } from "@/components/Security";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Security />
      <AvatarOption />
      <Pricing />
      <Faq />
    </PageShell>
  );
}
