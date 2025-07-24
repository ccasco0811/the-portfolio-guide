import React from 'react';

const NumaProject: React.FC = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col justify-start items-start">
      <div className="self-stretch px-10 py-[60px] flex flex-col justify-center items-center gap-[50px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="max-w-[1000px] flex flex-col justify-center items-start gap-8">
            <div className="w-[571px] h-7 text-black text-lg font-medium font-epilogue leading-7">Numa</div>
            <div className="w-[571px] text-black text-5xl font-bold font-epilogue leading-[60px]">AI assistant that helps professionals create compliant invoices in seconds</div>
            <div className="flex justify-start items-center gap-10">
              <div className="py-2 flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue uppercase leading-tight">Timeline</div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-neutral-800 text-base font-normal font-epilogue leading-relaxed">2024-Present</div>
                </div>
              </div>
              <div className="py-2 flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue uppercase leading-tight">Role</div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-neutral-800 text-base font-normal font-epilogue leading-relaxed">Product Strategy</div>
                </div>
              </div>
              <div className="py-2 flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue uppercase leading-tight">Platform</div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-neutral-800 text-base font-normal font-epilogue leading-relaxed">WhatsApp & Web</div>
                </div>
              </div>
            </div>
          </div>
          <img className="w-[1168px] h-[758px] shadow-[10px_10px_10px_rgba(0,0,0,0.10)] rounded-3xl" src="https://placehold.co/1168x758" alt="Numa Project Screenshot" />
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-center gap-12">
          <div className="w-[573px] flex flex-col justify-center items-start gap-[25px]">
            <div className="text-neutral-900 text-2xl font-bold font-epilogue leading-8">Context</div>
            <div className="self-stretch text-neutral-600 text-base font-normal font-epilogue leading-relaxed tracking-wide">Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.</div>
          </div>
          
          <div className="w-[573px] flex flex-col justify-center items-start gap-[25px]">
            <div className="text-neutral-900 text-2xl font-bold font-epilogue leading-8">Insights</div>
            <div className="self-stretch text-neutral-600 text-base font-normal font-epilogue leading-relaxed">At this stage NUMA is still in a pre‑launch validation phase. All experiments and results described here come from early testing designed to validate the riskiest assumptions before full development.</div>
            <div className="self-stretch text-neutral-600 text-base font-normal font-epilogue leading-relaxed">Market research showed that the most effective value proposition must combine four elements: 95 percent automation, regulatory urgency, empathetic language, and credibility in the Mexican market. Accountants aged 30 to 45 want to move from repetitive data entry to trusted strategy work, avoiding the fear of fines that can reach up to $173,000 MXN. NUMA addresses these pain points by automating almost all CFDI tasks and removing the frustration of manual validations that often consume 15 to 20 hours weekly.</div>
          </div>
          
          <div className="w-[573px] flex flex-col justify-center items-start gap-[25px]">
            <div className="text-neutral-900 text-2xl font-bold font-epilogue leading-8">My Role</div>
            <div className="self-stretch text-neutral-600 text-base font-normal font-epilogue leading-relaxed">I led the end to end product design process: driving research, mapping journeys, prototyping conversational flows, and guiding the team to turn those insights into a validated MVP. I also created and ran experiments such as building and configuring landing pages, setting up Meta campaigns and GTM tracking with the goal of validating the riskiest business hypotheses and avoiding unnecessary development costs before validation</div>
          </div>
          
          <div className="w-[574px] flex flex-col justify-start items-start gap-8">
            <div className="text-neutral-900 text-2xl font-bold font-epilogue leading-8">Approach</div>
            <div className="w-[574px] flex flex-col justify-center items-center gap-2">
              <div className="w-[574px] p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-white text-sm font-light font-epilogue leading-7">WhatsApp</div>
                  <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">WhatsApp is used daily by over 94 million people in Mexico, giving the product instant familiarity and adoption.</div>
                </div>
              </div>
              <div className="w-[574px] p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-white text-sm font-light font-epilogue leading-7">Plain prompts</div>
                  <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We turned complex rules from Mexico's tax authority, into simple prompts that reduced confusion and errors. An AI assistant works in the background coordinating agents for tasks such as verification and invoice creation.</div>
                </div>
              </div>
              <div className="w-[574px] p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-white text-sm font-light font-epilogue leading-7">Wizard prototype</div>
                  <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We tested the full flow with a manually supported prototype, validating ideas and learning fast without heavy development.</div>
                </div>
              </div>
              <div className="w-[574px] p-8 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-white text-sm font-light font-epilogue leading-7">A/B tests</div>
                  <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We launched two landing pages, one for accountants and one for small and medium enterprises. Tracking sign ups showed which group needed the service more, helping validate demand and reduce risk.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[866px] flex flex-col justify-center items-start gap-[25px]">
          <div className="flex justify-center items-center gap-2.5">
            <div className="text-neutral-900 text-2xl font-bold font-epilogue leading-8">Customer Journey</div>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <div className="text-neutral-900 text-base font-light font-epilogue leading-8">Juan Hernández, Restaurant Owner</div>
          </div>
          <div className="w-[868px] h-[572px] flex flex-col justify-start items-start">
            <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Advocacy icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Advocacy</div>
                <div className="self-stretch h-24 text-black text-base font-normal font-epilogue leading-6">Shares NUMA in WhatsApp groups, posts on social media, and refers friends.</div>
              </div>
            </div>
            <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Adoption icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Adoption</div>
                <div className="self-stretch h-24 text-black text-base font-normal font-epilogue leading-6">Clients issue invoices themselves, review weekly summaries, and reduce accountant costs.</div>
              </div>
            </div>
            <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Onboarding icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Onboarding</div>
                <div className="self-stretch h-24 text-black text-base font-normal font-epilogue leading-6">Uploads Digital Tax Certificate, issues first invoice, and shares with staff.</div>
              </div>
            </div>
            <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Decision icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Decision</div>
                <div className="self-stretch h-24 text-black text-base font-normal font-epilogue leading-6">Attends a 15 minute demo, asks colleagues, compares against current accountant, and starts a 30 day trial.</div>
              </div>
            </div>
            <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Consideration icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Consideration</div>
                <div className="self-stretch h-24 text-black text-base font-normal font-epilogue leading-6">Visits website, watches a 30-second demo, calculates savings, and books a demo.</div>
              </div>
            </div>
            <div className="w-[276px] h-[276px] py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
              <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
                <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Awareness icon" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-epilogue leading-7">Awareness</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Discovers NUMA through Google searches, Facebook ads, and news about SAT changes.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;