import React from 'react';
import ProjectTemplate from '@/components/ProjectTemplate';
import numaHeroImage from '@/assets/numa-case.jpg';

const NumaProject: React.FC = () => {
  const projectData = {
    // Hero
    projectName: "NUMA",
    role: "Product Strategy · UX Design · Service Design · Prototyping",
    tagline: "A conversational invoicing assistant that helps professionals create compliant invoices in seconds.",
    heroImages: [numaHeroImage],

    // Context
    contextDescription: "Creating government‑compliant digital invoices in Mexico (CFDI) was slow and error‑prone. Most existing tools were desktop‑only and complex, leaving small service providers struggling with wasted time and costly mistakes.",
    problemStatement: "Through research, we discovered users needed a simpler way to issue invoices directly from the channel they use every day — WhatsApp.",
    whyImportant: "Small service providers were losing valuable time and money due to slow, complex invoicing processes that led to costly mistakes and rejected filings.",
    contextImages: [],

    // Approach
    approachDescription: "We took a user-first approach, prioritizing the channels and language that our users already understood. Rather than forcing them to learn new tools, we met them where they were.",
    methodology: "Our strategy focused on four key decisions that would fundamentally change how people think about invoicing in Mexico.",
    focusAreas: [
      {
        title: "User Research & Journey Mapping",
        description: "Conducted early interviews that revealed hidden pain points and shaped our pivot towards WhatsApp-based solutions."
      },
      {
        title: "Interaction Design & Prototyping", 
        description: "Built a Wizard‑of‑Oz prototype to validate the conversational interface before full development investment."
      },
      {
        title: "Service Blueprint & Validation",
        description: "Ran A/B landing page tests to confirm demand and measure key performance indicators before launch."
      }
    ],
    approachImages: [],

    // Solution
    solutionDescription: "NUMA is an AI‑powered invoicing assistant built directly into WhatsApp. It guides users through creating CFDI invoices step by step, detecting tax IDs (RFC), suggesting correct usage codes, validating with the SAT in real time, and storing invoice history for future use.",
    keyCharacteristics: "The solution works entirely within WhatsApp, using conversational flows that feel natural to users. Complex tax terminology is simplified into plain‑language prompts to reduce errors.",
    interfaceTone: "Conversational and helpful, like having a knowledgeable assistant who speaks your language and understands Mexican tax requirements.",
    keyFeatures: [
      {
        title: "WhatsApp-Native Invoicing",
        description: "Create CFDI‑compliant invoices directly in WhatsApp, no app downloads or new platforms required."
      },
      {
        title: "Smart Tax Assistance", 
        description: "Auto‑detect RFC and suggest correct usage codes, with real-time validation against Mexico's tax authority (SAT)."
      },
      {
        title: "Invoice Memory & Reuse",
        description: "Store and reuse invoice data for speed and accuracy, learning from previous transactions to make future ones even faster."
      }
    ],
    solutionImages: [],

    // Impact
    impactDescription: "The results exceeded expectations, with beta users experiencing dramatic improvements in both speed and accuracy. User feedback has been overwhelmingly positive.",
    metrics: [
      {
        name: "Time to invoice",
        before: "10 min",
        after: "30 s"
      },
      {
        name: "Errors",
        before: "12%",
        after: "<1%"
      },
      {
        name: "Beta sign‑ups",
        before: "0",
        after: "120"
      }
    ],
    impactImages: [],

    // Learnings
    whatWorked: "Early interviews revealed hidden pain points and shaped the pivot. Meeting users in their preferred channel (WhatsApp) was key to adoption.",
    whatLearned: "Initial scope didn't focus on the most urgent user needs. Users valued simplicity and reliability over feature richness.",
    whatWouldDoDifferent: "Would have started with the conversational interface from day one rather than exploring traditional app approaches first.",

    // Tools
    tools: [
      {
        area: "Research",
        tools: ["Maze", "Google Forms"]
      },
      {
        area: "Design", 
        tools: ["Figma", "Midjourney"]
      },
      {
        area: "Dev Handoff",
        tools: ["Firebase", "WhatsApp API"]
      },
      {
        area: "Validation",
        tools: ["Webflow", "GA4"]
      },
      {
        area: "Branding",
        tools: ["Adobe Illustrator"]
      }
    ],

    // CTA
    ctaText: "Interested in how I design products that deliver impact?",
    ctaLink: "https://cabras.co/contact"
  };

  return <ProjectTemplate {...projectData} />;
};

export default NumaProject;