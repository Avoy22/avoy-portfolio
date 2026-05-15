import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We map your customer journey, current bottlenecks, and what success looks like in 90 days. You get a written strategy doc — not a vague proposal.",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "I design the data model, the system architecture, and the UI in parallel. You see the actual product direction in week one, not week five.",
    icon: "PenTool",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Weekly shipped increments deployed to a staging URL you can use immediately. Async feedback. No mystery progress bars.",
    icon: "Hammer",
  },
  {
    step: "04",
    title: "Launch & Hand-off",
    description:
      "Production deployment, documentation, Loom walkthroughs, and a 30-day support window. You own the code, the data, and the infrastructure.",
    icon: "Rocket",
  },
];
