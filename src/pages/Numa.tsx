import React from 'react';

const Numa = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-center gap-10 overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-[1440px] h-32 md:h-40 p-4 md:p-10 flex justify-between items-center overflow-hidden">
        <img 
          className="w-16 h-16 md:w-20 md:h-20" 
          src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
          alt="Carlos Cabrasco Logo"
        />
        <div className="text-center text-black text-xl md:text-2xl font-normal font-['Epilogue'] leading-9">
          Carlos Cabrasco
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full px-4 md:px-24 flex flex-col justify-start items-center">
        {/* Hero Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-40 flex flex-col justify-center items-start gap-10">
          <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="w-full text-black text-2xl md:text-4xl lg:text-[39px] font-normal font-['Epilogue'] leading-tight text-center">
              AI assistant that helps professionals create compliant invoices in seconds
            </h1>
          </div>
          
          {/* Project Details */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-10">
            <div className="py-2 flex flex-col justify-start items-start gap-4">
              <div className="text-black text-sm font-light font-['Epilogue'] uppercase leading-5">
                Timeline
              </div>
              <div className="text-[#1E1E1E] text-base font-normal font-['Epilogue'] leading-[26px]">
                2024-Present
              </div>
            </div>
            <div className="py-2 flex flex-col justify-start items-start gap-4">
              <div className="text-black text-sm font-light font-['Epilogue'] uppercase leading-5">
                Role
              </div>
              <div className="text-[#1E1E1E] text-base font-normal font-['Epilogue'] leading-[26px]">
                Product Strategy
              </div>
            </div>
            <div className="py-2 flex flex-col justify-start items-start gap-4">
              <div className="text-black text-sm font-light font-['Epilogue'] uppercase leading-5">
                Platform
              </div>
              <div className="text-[#1E1E1E] text-base font-normal font-['Epilogue'] leading-[26px]">
                WhatsApp & Web
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full max-w-[1440px] flex justify-center items-center">
          <img 
            className="w-full max-w-[1440px] h-auto rounded-lg" 
            src="/lovable-uploads/3cb50d80-01f3-4c4c-943b-c61ba3ee5914.png" 
            alt="Numa Landing Page Design" 
          />
        </div>

        {/* Context Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-20 flex flex-col justify-center items-center gap-10">
          <h2 className="w-full text-[#111111] text-2xl md:text-[31px] font-normal font-['Epilogue'] leading-12 text-center">
            Context
          </h2>
          <p className="w-full text-[#666666] text-base font-normal font-['Epilogue'] leading-6 text-center">
            Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.
          </p>
        </div>

        {/* Insights Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-20 flex flex-col justify-center items-center gap-10">
          <h2 className="w-full text-[#111111] text-2xl md:text-[31px] font-normal font-['Epilogue'] leading-12 text-center">
            Insights
          </h2>
          <div className="w-full text-[#666666] text-base font-normal font-['Epilogue'] leading-6 text-center">
            <p className="mb-4">
              At this stage NUMA is still in a pre‑launch validation phase. All experiments and results described here come from early testing designed to validate the riskiest assumptions before full development.
            </p>
            <p>
              Market research showed that the most effective value proposition must combine four elements: 95 percent automation, regulatory urgency, empathetic language, and credibility in the Mexican market. Accountants aged 30 to 45 want to move from repetitive data entry to trusted strategy work, avoiding the fear of fines that can reach up to $173,000 MXN. NUMA addresses these pain points by automating almost all CFDI tasks and removing the frustration of manual validations that often consume 15 to 20 hours weekly.
            </p>
          </div>
        </div>

        {/* My Role Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-20 flex flex-col justify-center items-center gap-10">
          <h2 className="w-full text-[#111111] text-2xl md:text-[31px] font-normal font-['Epilogue'] leading-12 text-center">
            My Role
          </h2>
          <p className="w-full text-[#666666] text-base font-normal font-['Epilogue'] leading-6 text-center">
            Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.
          </p>
        </div>

        {/* Approach Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-20 flex flex-col justify-center items-center gap-10">
          <h2 className="w-full text-[#111111] text-2xl md:text-[31px] font-normal font-['Epilogue'] leading-12 text-center">
            Approach
          </h2>
          <div className="w-full flex flex-col gap-5">
            <div className="w-full p-5 bg-[#2D4BAE] rounded-lg flex flex-col gap-4">
              <p className="text-white text-base font-normal font-['Epilogue'] leading-6">
                WhatsApp is used daily by over 94 million people in Mexico, giving the product instant familiarity and adoption.
              </p>
            </div>
            <div className="w-full p-5 bg-[#2D4BAE] rounded-lg flex flex-col gap-4">
              <p className="text-white text-base font-normal font-['Epilogue'] leading-6">
                We turned complex rules from the SAT, Mexico's tax authority, into simple prompts that reduced confusion and errors. An AI assistant works in the background coordinating agents for tasks such as verification and invoice creation.
              </p>
            </div>
            <div className="w-full p-5 bg-[#2D4BAE] rounded-lg flex flex-col gap-4">
              <p className="text-white text-base font-normal font-['Epilogue'] leading-6">
                We tested the full flow with a manually supported prototype, validating ideas and learning fast without heavy development.
              </p>
            </div>
            <div className="w-full p-5 bg-[#2D4BAE] rounded-lg flex flex-col gap-4">
              <p className="text-white text-base font-normal font-['Epilogue'] leading-6">
                We launched two landing pages, one for accountants and one for small and medium enterprises. Tracking sign ups showed which group needed the service more, helping validate demand and reduce risk
              </p>
            </div>
          </div>
        </div>

        {/* Customer Journey Section */}
        <div className="w-full max-w-[1034px] px-8 md:px-54 py-16 md:py-20 flex flex-col justify-center items-center gap-5">
          <div className="w-full flex flex-col gap-2">
            <h2 className="w-full text-[#111111] text-2xl md:text-[31px] font-normal font-['Epilogue'] leading-12">
              Customer Journey
            </h2>
            <p className="w-full text-[#111111] text-xl font-normal font-['Epilogue'] leading-8">
              Juan Hernández, Restaurant Owner
            </p>
          </div>

          {/* Journey Steps */}
          <div className="w-full flex flex-col gap-8">
            {/* Awareness */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Awareness Image</span>
              </div>
              <div className="w-full md:w-1/2 p-5 rounded-lg flex flex-col gap-4">
                <h3 className="text-black text-xl font-normal font-['Epilogue'] leading-8">
                  Awareness
                </h3>
                <p className="text-black text-base font-normal font-['Epilogue'] leading-6">
                  Discovers NUMA through Google searches, Facebook ads, and word of mouth. Learns there is a simpler way to invoice using WhatsApp.
                </p>
              </div>
            </div>

            {/* Consideration */}
            <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center gap-8">
              <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Consideration Image</span>
              </div>
              <div className="w-full md:w-1/2 p-5 rounded-lg flex flex-col gap-4">
                <h3 className="text-black text-xl font-normal font-['Epilogue'] leading-8">
                  Consideration
                </h3>
                <p className="text-black text-base font-normal font-['Epilogue'] leading-6">
                  Visits landing page, watches a 30 second video, calculates savings, and shares phone number and email.
                </p>
              </div>
            </div>

            {/* Decision */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Decision Image</span>
              </div>
              <div className="w-full md:w-1/2 p-5 rounded-lg flex flex-col gap-4">
                <h3 className="text-black text-xl font-normal font-['Epilogue'] leading-8">
                  Decision
                </h3>
                <p className="text-black text-base font-normal font-['Epilogue'] leading-6">
                  Requests more details through WhatsApp, asks colleagues, and signs up for early access.
                </p>
              </div>
            </div>

            {/* Onboarding */}
            <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center gap-8">
              <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Onboarding Image</span>
              </div>
              <div className="w-full md:w-1/2 p-5 rounded-lg flex flex-col gap-4">
                <h3 className="text-black text-xl font-normal font-['Epilogue'] leading-8">
                  Onboarding
                </h3>
                <p className="text-black text-base font-normal font-['Epilogue'] leading-6">
                  Uploads a CSD (digital tax certificate required by Mexico's SAT), receives the shared WhatsApp number, issues a first invoice, and shares it with staff.
                </p>
              </div>
            </div>

            {/* Adoption */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Adoption Image</span>
              </div>
              <div className="w-full md:w-1/2 p-5 rounded-lg flex flex-col gap-4">
                <h3 className="text-black text-xl font-normal font-['Epilogue'] leading-8">
                  Adoption
                </h3>
                <p className="text-black text-base font-normal font-['Epilogue'] leading-6">
                  Starts invoicing daily, reviews summaries, and reduces reliance on an accountant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numa;