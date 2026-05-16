import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Services } from "@/components/home/Services";
import { TechStack } from "@/components/home/TechStack";
import { About } from "@/components/home/About";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <TechStack />
      <About />
      <ContactCTA />
    </>
  );
}
