import React from 'react';

const NumaProject: React.FC = () => {
  return (
    <div className="w-full h-full px-10 py-15 bg-white overflow-hidden outline outline-1 outline-black -outline-offset-1 flex flex-col justify-start items-center gap-20">
      <div className="w-full max-w-[668px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch text-black text-lg font-medium font-epilogue leading-7">Numa</div>
        <div className="self-stretch text-black text-5xl font-bold font-epilogue leading-[60px]">AI assistant that helps professionals create compliant invoices in seconds</div>
        <div className="self-stretch justify-start items-center gap-10 inline-flex flex-wrap content-center">
          <div className="w-[105px] py-2 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Timeline</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">2024-Present</div>
          </div>
          <div className="w-[134px] py-2 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Role</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">Product Strategy</div>
          </div>
          <div className="w-[132px] py-2 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Platform</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">WhatsApp & Web</div>
          </div>
        </div>
      </div>
      
      <img className="w-full h-[883px] max-w-[1360px] max-h-[883px] rounded-[20px]" src="https://placehold.co/1360x883" alt="Numa product screenshot" />
      
      <div className="w-full max-w-[668px] flex flex-col justify-start items-start gap-20">
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch text-[#111111] text-2xl font-bold font-epilogue leading-8">Context</div>
          <div className="self-stretch text-[#666666] text-base font-normal font-epilogue leading-[26px] tracking-[0.32px]">Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.</div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch text-[#111111] text-2xl font-bold font-epilogue leading-8">Insights</div>
          <div className="self-stretch text-[#666666] text-base font-normal font-epilogue leading-[26px]">At this stage NUMA is still in a pre‑launch validation phase. All experiments and results described here come from early testing designed to validate the riskiest assumptions before full development.</div>
          <div className="self-stretch text-[#666666] text-base font-normal font-epilogue leading-[26px]">Market research showed that the most effective value proposition must combine four elements: 95 percent automation, regulatory urgency, empathetic language, and credibility in the Mexican market. Accountants aged 30 to 45 want to move from repetitive data entry to trusted strategy work, avoiding the fear of fines that can reach up to $173,000 MXN. NUMA addresses these pain points by automating almost all CFDI tasks and removing the frustration of manual validations that often consume 15 to 20 hours weekly.</div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch text-[#111111] text-2xl font-bold font-epilogue leading-8">My Role</div>
          <div className="self-stretch text-[#666666] text-base font-normal font-epilogue leading-[26px] tracking-[0.32px]">Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.</div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-[#111111] text-2xl font-bold font-epilogue leading-8">Approach</div>
          <div className="self-stretch p-5 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">WhatsApp is used daily by over 94 million people in Mexico, giving the product instant familiarity and adoption.</div>
            </div>
          </div>
          <div className="self-stretch p-5 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We turned complex rules from the SAT, Mexico's tax authority, into simple prompts that reduced confusion and errors. An AI assistant works in the background coordinating agents for tasks such as verification and invoice creation.</div>
            </div>
          </div>
          <div className="self-stretch p-5 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We tested the full flow with a manually supported prototype, validating ideas and learning fast without heavy development.</div>
            </div>
          </div>
          <div className="self-stretch p-5 bg-[#2D4BAE] rounded-lg flex flex-col justify-center items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-white text-base font-normal font-epilogue leading-6">We launched two landing pages, one for accountants and one for small and medium enterprises. Tracking sign ups showed which group needed the service more, helping validate demand and reduce risk</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-auto max-w-[1016px] flex flex-col justify-start items-center gap-20">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-[#111111] text-2xl font-bold font-epilogue leading-8">Customer Journey</div>
          <div className="text-[#111111] text-base font-light font-epilogue leading-8">Juan Hernández, Restaurant Owner</div>
        </div>
        
        <div className="self-stretch justify-center items-center gap-5 inline-flex flex-wrap content-center">
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-4">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Awareness icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Awareness</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Discovers NUMA through Google searches, Facebook ads, and word of mouth. Learns there is a simpler way to invoice using WhatsApp.</div>
              </div>
            </div>
          </div>
          
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-4">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Consideration icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Consideration</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Visits landing page, watches a 30 second video, calculates savings, and shares phone number and email.</div>
              </div>
            </div>
          </div>
          
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-4">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Decision icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Decision</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Requests more details through WhatsApp, asks colleagues, and signs up for early access.</div>
              </div>
            </div>
          </div>
          
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-5">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Onboarding icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Onboarding</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Uploads a CSD (digital tax certificate required by Mexico's SAT), receives the shared WhatsApp number, issues a first invoice, and shares it with staff.</div>
              </div>
            </div>
          </div>
          
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-4">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Adoption icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Adoption</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Starts invoicing daily, reviews summaries, and reduces reliance on an accountant.</div>
              </div>
            </div>
          </div>
          
          <div className="w-[324px] max-w-[324px] max-h-[324px] justify-start items-start gap-5 flex">
            <div className="flex-1 h-[324px] max-w-[324px] min-w-[324px] max-h-[324px] p-[30px] bg-white rounded-[40px] outline outline-2 outline-black -outline-offset-2 flex flex-col justify-start items-start gap-4">
              <img className="w-[100px] h-[100px]" src="https://placehold.co/100x100" alt="Advocacy icon" />
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch text-black text-sm font-light font-epilogue leading-7">Advocacy</div>
                <div className="self-stretch text-black text-base font-normal font-epilogue leading-6">Recommends NUMA in WhatsApp groups, shares experience on social media, and refers other business owners.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;