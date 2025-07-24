import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const NumaProject: React.FC = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col justify-start items-start font-epilogue">
      <div className="w-full bg-white overflow-hidden flex flex-col justify-center items-center">
        <div className="w-full max-w-[1251px] px-4 md:px-8 pb-2 flex flex-col justify-start items-start">
          <div className="pt-16 pb-2 px-6 flex flex-col justify-center items-center gap-14 w-full">
            {/* Hero Section */}
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="max-w-[571px] w-full flex flex-col justify-center items-start gap-8">
                <div className="w-full h-7 text-black text-lg font-medium leading-7">
                  Numa
                </div>
                <div className="w-full text-black text-5xl font-bold leading-[60px]">
                  AI assistant that helps professionals create compliant invoices in seconds
                </div>
                <div className="flex justify-start items-center gap-10 flex-wrap">
                  <div className="py-2 flex flex-col justify-start items-start gap-4">
                    <div className="text-center text-black text-sm font-light uppercase leading-5">
                      Timeline
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="text-center text-[#1E1E1E] text-base font-normal leading-[26px]">
                        2024-Present
                      </div>
                    </div>
                  </div>
                  <div className="py-2 flex flex-col justify-start items-start gap-4">
                    <div className="text-center text-black text-sm font-light uppercase leading-5">
                      Role
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="text-center text-[#1E1E1E] text-base font-normal leading-[26px]">
                        Product Strategy
                      </div>
                    </div>
                  </div>
                  <div className="py-2 flex flex-col justify-start items-start gap-4">
                    <div className="text-center text-black text-sm font-light uppercase leading-5">
                      Platform
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="text-center text-[#1E1E1E] text-base font-normal leading-[26px]">
                        WhatsApp & Web
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full shadow-[10px_10px_10px_rgba(0,0,0,0.10)] overflow-hidden rounded-3xl flex flex-col justify-start items-start">
              <img 
                className="w-full h-auto max-h-[758px] object-contain" 
                src="/lovable-uploads/77f7effb-2c25-4511-8019-38f7831625d2.png" 
                alt="NUMA WhatsApp Interface"
              />
            </div>

            {/* Context and Insights Section */}
            <div className="w-full flex flex-col justify-start items-center gap-12">
              <div className="max-w-[573px] w-full flex flex-col justify-center items-start gap-6">
                <div className="text-[#111111] text-2xl font-bold leading-8">
                  Context
                </div>
                <div className="w-full text-[#666666] text-base font-normal leading-[26px] tracking-[0.32px]">
                  Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.
                </div>
              </div>
              <div className="max-w-[573px] w-full flex flex-col justify-center items-start gap-6">
                <div className="text-[#111111] text-2xl font-bold leading-8">
                  Insights
                </div>
                <div className="w-full text-[#666666] text-base font-normal leading-[26px]">
                  Market research showed that the most effective value proposition must combine four elements: 95 percent automation, regulatory urgency, empathetic language, and credibility in the Mexican market. Accountants aged 30 to 45 want to move from repetitive data entry to trusted strategy work, avoiding the fear of fines that can reach up to $173,000 MXN. NUMA addresses these pain points by automating almost all CFDI tasks and removing the frustration of manual validations that often consume 15 to 20 hours weekly.
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div className="max-w-[574px] w-full flex flex-col justify-start items-start gap-8">
              <div className="text-[#111111] text-2xl font-bold leading-8">
                Approach
              </div>
              <div className="w-full pt-1 pl-0 flex flex-col justify-center items-center gap-2">
                <div className="w-full p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="text-white text-sm font-light leading-7">
                      WhatsApp
                    </div>
                    <div className="w-full text-white text-base font-normal leading-6">
                      WhatsApp is used daily by over 94 million people in Mexico, giving the product instant familiarity and adoption.
                    </div>
                  </div>
                </div>
                <div className="w-full p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="text-white text-sm font-light leading-7">
                      Plain prompts
                    </div>
                    <div className="w-full text-white text-base font-normal leading-6">
                      We turned complex SAT rules into simple prompts that cut confusion and errors. An AI assistant runs in the background coordinating agents for tasks like verification and invoice creation.
                    </div>
                  </div>
                </div>
                <div className="w-full p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="text-white text-sm font-light leading-7">
                      Wizard prototype
                    </div>
                    <div className="w-full text-white text-base font-normal leading-6">
                      We tested the full flow with a manually supported prototype, validating ideas and learning fast without heavy development.
                    </div>
                  </div>
                </div>
                <div className="w-full p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="text-white text-sm font-light leading-7">
                      A/B tests
                    </div>
                    <div className="w-full text-white text-base font-normal leading-6">
                      We launched two landing pages, one for accountants and one for small and medium enterprises. Tracking sign ups showed which group needed the service more, helping validate demand and reduce risk.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Journey Section */}
            <div className="max-w-[866px] w-full flex flex-col justify-center items-start gap-6">
              <div className="flex justify-center items-center gap-2">
                <div className="text-[#111111] text-2xl font-bold leading-8">
                  Customer Journey
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="text-[#111111] text-base font-light leading-8">
                  Juan Hernández, Restaurant Owner
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Journey Cards - Top Row */}
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="w-15 h-15 flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Advocacy icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Advocacy
                    </div>
                    <div className="w-full h-24 text-black text-base font-normal leading-6">
                      Shares NUMA in WhatsApp groups, posts on social media, and refers friends.
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="w-15 h-15 flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Adoption icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Adoption
                    </div>
                    <div className="w-full h-24 text-black text-base font-normal leading-6">
                      Clients issue invoices themselves, review weekly summaries, and reduce accountant costs.
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="w-15 h-15 flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Onboarding icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Onboarding
                    </div>
                    <div className="w-full h-24 text-black text-base font-normal leading-6">
                      Uploads Digital Tax Certificate, issues first invoice, and shares with staff.
                    </div>
                  </div>
                </div>
                
                {/* Journey Cards - Bottom Row */}
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="w-15 h-15 flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Decision icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Decision
                    </div>
                    <div className="w-full h-24 text-black text-base font-normal leading-6">
                      Attends a 15 minute demo, asks colleagues, compares against current accountant, and starts a 30 day trial.
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Consideration icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Consideration
                    </div>
                    <div className="w-full h-24 text-black text-base font-normal leading-6">
                      Visits website, watches a 30-second demo, calculates savings, and books a demo.
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
                  <div className="w-15 h-15 flex justify-start items-center gap-2">
                    <img className="w-15 h-15" src="/placeholder.svg" alt="Awareness icon" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="text-black text-sm font-light leading-7">
                      Awareness
                    </div>
                    <div className="w-full text-black text-base font-normal leading-6">
                      Discovers NUMA through Google searches, Facebook ads, and news about SAT changes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;