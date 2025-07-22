import React from 'react';
import ProjectTemplate from '@/components/ProjectTemplate';
import numaHeroImage from '@/assets/numa-case.jpg';

const NumaProject: React.FC = () => {
  const projectData = {
    // Hero
    projectName: "NUMA",
    role: "Product Strategy · UX Design · Service Design",
    tagline: "A conversational invoicing assistant that helps professionals create compliant invoices in seconds",
    heroImages: [numaHeroImage],

    // Context
    contextDescription: "Creating government‑compliant digital invoices in Mexico (CFDI) was slow and error‑prone. Most existing tools were desktop‑only and complex, leaving small service providers struggling with wasted time and costly mistakes. Through research, we discovered users needed a simpler way to issue invoices directly from the channel they use every day — WhatsApp.",
    problemStatement: "",
    whyImportant: "",
    contextImages: [],

    // Approach
    approachDescription: "Prioritized WhatsApp as the main channel to meet users where they already work. Simplified tax terminology into plain‑language prompts to reduce errors. Built a Wizard‑of‑Oz prototype to validate before development. Ran A/B landing page tests to confirm demand and measure KPIs.",
    methodology: "",
    focusAreas: [
      {
        title: "User Research & Journey Mapping",
        description: "Conducted extensive research to understand small business invoicing pain points and user workflows"
      },
      {
        title: "Interaction Design & Prototyping", 
        description: "Created and tested conversational flows specifically designed for WhatsApp interactions"
      },
      {
        title: "Service Blueprint & Validation",
        description: "Built prototypes and validated the concept before full development to ensure product-market fit"
      }
    ],
    approachImages: [],

    // Solution
    solutionDescription: "NUMA is an AI‑powered invoicing assistant built directly into WhatsApp. It guides users through creating CFDI invoices step by step, detecting tax IDs (RFC), suggesting correct usage codes, validating with the SAT in real time, and storing invoice history for future use.",
    keyCharacteristics: "",
    interfaceTone: "",
    keyFeatures: [
      {
        title: "Create CFDI‑compliant invoices directly in WhatsApp",
        description: "Users can generate legally compliant invoices without leaving their preferred messaging platform"
      },
      {
        title: "Auto‑detect RFC and suggest correct usage codes", 
        description: "Intelligent system that automatically identifies tax IDs and recommends appropriate usage codes"
      },
      {
        title: "Validate invoices in real time with Mexico's tax authority",
        description: "Real-time validation with SAT ensures 100% compliance before invoice generation"
      },
      {
        title: "Store and reuse invoice data for speed and accuracy",
        description: "Smart data storage that learns from previous invoices to speed up future transactions"
      }
    ],
    solutionImages: [],

    // Impact
    impactDescription: "",
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
    whatWorked: "Early interviews revealed hidden pain points and shaped the pivot.",
    whatLearned: "Initial scope didn't focus on the most urgent user needs.",
    whatWouldDoDifferent: "Scale to 500 users and integrate payment links.",

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