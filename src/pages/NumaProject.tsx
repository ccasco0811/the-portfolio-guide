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
    contextDescription: "Small business owners in Latin America were spending hours in bank branches for simple transactions, facing complex processes that didn't understand their unique needs. Traditional banking forced them into personal banking flows that ignored their business context entirely.",
    problemStatement: "Business banking required 45+ minutes in branch visits, with confusing interfaces that treated business owners like individual consumers, creating friction at every touchpoint.",
    whyImportant: "Small businesses are the backbone of Latin American economies, but outdated banking was holding them back from growth and efficiency. Every minute spent on banking was time stolen from building their business.",
    contextImages: [],

    // Approach
    approachDescription: "I led a human-centered design approach, starting with extensive field research to understand the real pain points of small business owners. Rather than assumptions, we built our solution on genuine insights from users struggling with existing systems.",
    methodology: "My strategy focused on three key decisions that would fundamentally reshape the experience: simplifying complex flows, designing for business context, and creating trust through transparency.",
    focusAreas: [
      {
        title: "User Research & Journey Mapping",
        description: "Conducted interviews with 50+ small business owners to understand their banking behaviors, pain points, and workflows in their natural environment."
      },
      {
        title: "Service Design & Process Optimization", 
        description: "Mapped end-to-end business banking journeys and identified key friction points where we could eliminate steps and reduce cognitive load."
      },
      {
        title: "Interaction Design & Prototyping",
        description: "Created and tested multiple interaction models specifically designed for business contexts, not adapted from personal banking."
      }
    ],
    approachImages: [],

    // Solution
    solutionDescription: "The final solution is a mobile-first business banking platform that understands context. Instead of generic banking, NUMA provides tools that speak the language of small business owners - from cash flow management to supplier payments.",
    keyCharacteristics: "The interface feels more like a business management tool than a bank app. Every interaction is designed around business needs: quick cash flow checks, bulk payments, and simple reporting.",
    interfaceTone: "Professional yet approachable, with clear language that avoids banking jargon. The visual design builds trust while maintaining the speed that business owners need.",
    keyFeatures: [
      {
        title: "3-Minute Account Opening",
        description: "Streamlined onboarding that collects only essential information, with smart defaults based on business type."
      },
      {
        title: "Business-Context Transactions", 
        description: "Payment flows designed specifically for business needs - supplier payments, employee transfers, and tax preparations."
      },
      {
        title: "Real-Time Cash Flow Dashboard",
        description: "Instant visibility into business financial health with actionable insights, not just data dumps."
      }
    ],
    solutionImages: [],

    // Impact
    impactDescription: "The results exceeded our expectations. Business owners went from avoiding digital banking to actively preferring it over branch visits.",
    metrics: [
      {
        name: "Account Opening Time",
        before: "45+ minutes",
        after: "3 minutes"
      },
      {
        name: "Transaction Completion Rate",
        before: "23%",
        after: "87%"
      },
      {
        name: "Customer Satisfaction",
        before: "2.1/5",
        after: "4.6/5"
      },
      {
        name: "Digital Adoption",
        before: "12%",
        after: "78%"
      }
    ],
    impactImages: [],

    // Learnings
    whatWorked: "Starting with deep user research rather than banking industry assumptions. Business owners needed business solutions, not adapted personal banking.",
    whatLearned: "Trust in financial services comes from transparency and predictability. Every interaction needs to clearly communicate what's happening and why.",
    whatWouldDoDifferent: "I would have involved business owners in the design process even earlier, potentially as co-designers rather than just research subjects.",

    // Tools
    tools: [
      {
        area: "Research",
        tools: ["Field interviews", "Journey mapping", "Usability testing", "Analytics"]
      },
      {
        area: "Design", 
        tools: ["Figma", "Sketch", "Principle", "InVision"]
      },
      {
        area: "Prototyping",
        tools: ["Framer", "React Native", "Webflow"]
      },
      {
        area: "Validation",
        tools: ["Maze", "Google Analytics", "Hotjar", "User interviews"]
      }
    ],

    // CTA
    ctaText: "Interested in how I design financial products that actually work for real businesses?",
    ctaLink: "mailto:hello@yourname.com"
  };

  return <ProjectTemplate {...projectData} />;
};

export default NumaProject;