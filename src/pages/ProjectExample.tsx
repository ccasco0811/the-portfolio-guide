import React from 'react';
import ProjectTemplate from '@/components/ProjectTemplate';

const ProjectExample = () => {
  const numaData = {
    // Hero
    projectName: "NUMA",
    role: "Product Strategy · UX Design · AI Integration",
    tagline: "A conversational invoicing assistant that helps professionals create compliant invoices in seconds",
    heroImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
    ],

    // Context
    contextDescription: "NUMA is a new AI-powered invoicing assistant designed for professionals who need to issue CFDI (Mexico's official digital tax invoices) quickly and without errors. We defined NUMA's core proposition, designed its conversational flow, and built an MVP that lets users create a legally valid invoice directly on WhatsApp in under 30 seconds.",
    problemStatement: "Small Mexican businesses face millions in fines for incorrect invoicing. The traditional process takes over 10 minutes and requires specific technical knowledge that most small business owners don't have.",
    whyImportant: "The service was born from research into compliance pain points for small firms. We initially explored another regulatory workflow, but interviews revealed a deeper need: simple, fast e-invoicing. We pivoted to focus on that urgent problem, designing an experience that feels effortless yet satisfies strict tax authority requirements.",
    contextImages: [
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    ],

    // Approach
    approachDescription: "I led the product strategy from concept to MVP, focusing on user research, conversational design, and AI integration. My approach combined structured experimentation with rapid prototyping to validate the core value proposition before development.",
    methodology: "We used lean startup methodology, conducting user interviews with 12+ small business owners and accountants, creating conversation flows in Figma, and testing WhatsApp Business API integrations.",
    focusAreas: [
      {
        title: "User Research & Journey Mapping",
        description: "Conducted interviews with small business owners and accountants to understand pain points in CFDI compliance"
      },
      {
        title: "Conversational UX Design",
        description: "Designed intuitive WhatsApp conversation flows that guide users through complex tax requirements"
      },
      {
        title: "AI Integration & Validation",
        description: "Implemented AI-powered data extraction and validation systems with Mexico's tax authority (SAT)"
      }
    ],
    approachImages: [
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop'
    ],

    // Solution
    solutionDescription: "NUMA's interface uses clear prompts and instant feedback. It auto-detects the user's RFC (tax ID), suggests correct usage codes, validates with the SAT (Mexico's tax authority), and stores invoice history for future use.",
    keyCharacteristics: "The solution transforms a complex 10+ minute process into a simple 30-second conversation. Users simply send a photo of their product or service details via WhatsApp, and NUMA handles all the technical complexity behind the scenes.",
    interfaceTone: "The tone is friendly and conversational, guiding users step-by-step while maintaining full legal accuracy. We designed it to feel like texting a helpful assistant rather than using traditional accounting software.",
    keyFeatures: [
      {
        title: "Create invoices directly in WhatsApp",
        description: "Users send a photo of their product and NUMA extracts all necessary information automatically"
      },
      {
        title: "Auto-validation with tax authority",
        description: "Real-time validation with SAT (Mexico's tax authority) ensures 100% legal compliance"
      },
      {
        title: "Friendly guidance through complex flows",
        description: "Conversational interface that simplifies tax requirements into plain language"
      },
      {
        title: "Instant invoice generation",
        description: "Legally valid CFDI invoices generated and delivered in under 30 seconds"
      }
    ],
    solutionImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop'
    ],

    // Impact
    impactDescription: "We tested NUMA with 120 beta users, measuring key metrics like time to invoice and error rate. The results exceeded our expectations and validated the core value proposition.",
    metrics: [
      {
        name: "Time to complete invoice",
        before: "10+ minutes",
        after: "30 seconds"
      },
      {
        name: "Error rate",
        before: "12%",
        after: "< 1%"
      },
      {
        name: "User adoption",
        before: "0 users",
        after: "120+ beta users"
      },
      {
        name: "Conversion rate (landing to payment)",
        before: "—",
        after: "18%"
      }
    ],
    impactImages: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop'
    ],

    // Learnings
    whatWorked: "The storytelling approach focusing on 'fear of fines' significantly increased conversion rates. WhatsApp as a channel dramatically reduced adoption friction, and AI-powered data extraction became our key differentiator.",
    whatLearned: "User research was crucial - we pivoted from our original idea based on interview insights. The conversational interface needed to balance friendliness with the seriousness of tax compliance. Integration complexity with existing accounting systems was underestimated.",
    whatWouldDoDifferent: "I would validate accounting software integrations earlier in the process. The initial webhook setup saturated the invoicing API, and the onboarding was too technical for traditional accountants. More user testing with the actual target demographic would have caught these issues sooner.",

    // Credits & Tools
    tools: [
      {
        area: "Research",
        tools: ["User Interviews", "Google Forms", "Loom"]
      },
      {
        area: "Design",
        tools: ["Figma", "Midjourney", "WhatsApp Business API"]
      },
      {
        area: "Development",
        tools: ["Next.js", "OpenAI GPT-4V", "Facturama API"]
      },
      {
        area: "Analytics",
        tools: ["Google Analytics 4", "Hotjar", "Facebook Pixel"]
      },
      {
        area: "Validation",
        tools: ["ManyChat", "Zapier", "SAT API"]
      }
    ],

    // CTA
    ctaText: "Interested in how I design products that deliver measurable impact through AI and conversational interfaces?",
    ctaLink: "mailto:hello@goatpath.com"
  };

  return <ProjectTemplate {...numaData} />;
};

export default ProjectExample;