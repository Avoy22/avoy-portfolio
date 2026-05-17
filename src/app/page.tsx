import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Services } from "@/components/home/Services";
import { WorkWithMe } from "@/components/home/WorkWithMe";
import { TechStack } from "@/components/home/TechStack";
import { About } from "@/components/home/About";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CaseStudies />
      <Services />
      <WorkWithMe />
      <TechStack />
      <About />
      <ContactCTA />
    </>
  );
}
