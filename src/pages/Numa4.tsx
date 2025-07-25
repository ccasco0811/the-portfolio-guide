export default function Numa4() {
  return (
    <div className="min-h-screen bg-white font-epilogue">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-4 max-w-7xl mx-auto">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e367e0eb9315325aba3499bfeeff5915f96188f6?width=160" 
          alt="Logo" 
          className="w-20 h-20"
        />
        <div className="flex items-center gap-10">
          <span className="text-black text-base font-normal">Projects</span>
          <button className="px-4 py-4 border border-black rounded-full bg-white hover:bg-gray-50 transition-colors">
            <span className="text-black text-base font-normal">Let's connect</span>
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-20 px-10 pb-20 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="flex flex-col max-w-2xl w-full gap-8">
          <h1 className="text-lg font-medium text-black">Numa</h1>
          <h2 className="text-5xl font-bold text-black leading-tight">
            AI assistant that helps professionals create compliant invoices in seconds
          </h2>
          
          {/* Project Details Grid */}
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-4 min-w-[105px]">
              <span className="text-sm font-light text-black uppercase tracking-wide">Timeline</span>
              <span className="text-base text-gray-800">2024-Present</span>
            </div>
            <div className="flex flex-col gap-4 min-w-[134px]">
              <span className="text-sm font-light text-black uppercase tracking-wide">Role</span>
              <span className="text-base text-gray-800">Product Strategy</span>
            </div>
            <div className="flex flex-col gap-4 min-w-[132px]">
              <span className="text-sm font-light text-black uppercase tracking-wide">Platform</span>
              <span className="text-base text-gray-800">WhatsApp & Web</span>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="w-full max-w-6xl">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c1a60a6a273a2f911afb76dd66c938f0b55c984b?width=2720" 
            alt="Numa Landing Page" 
            className="w-full h-auto rounded-3xl"
          />
        </section>

        {/* Content Sections Container */}
        <div className="flex flex-col max-w-2xl w-full gap-20">
          
          {/* Context Section */}
          <section className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">Context</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.
            </p>
          </section>

          {/* Insights Section */}
          <section className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">Insights</h3>
            <div className="flex flex-col gap-6">
              <p className="text-base text-gray-600 leading-relaxed">
                At this stage NUMA is still in a pre‑launch validation phase. All experiments and results described here come from early testing designed to validate the riskiest assumptions before full development.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Market research showed that the most effective value proposition must combine four elements: 95 percent automation, regulatory urgency, empathetic language, and credibility in the Mexican market. Accountants aged 30 to 45 want to move from repetitive data entry to trusted strategy work, avoiding the fear of fines that can reach up to $173,000 MXN. NUMA addresses these pain points by automating almost all CFDI tasks and removing the frustration of manual validations that often consume 15 to 20 hours weekly.
              </p>
            </div>
          </section>

          {/* My Role Section */}
          <section className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">My Role</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Creating government compliant digital invoices in Mexico (CFDI) has been slow, error prone and traditionally handled by accountants. The SAT, Mexico's tax authority, offers a self‑invoicing system that is basic and lacks proper validation, so users cannot be sure their invoices are correct. This makes invoicing a manual, repetitive task often delegated to accountants. Most existing tools are desktop only and complex, causing small service providers and accountants to lose time and money.
            </p>
          </section>

          {/* Approach Section */}
          <section className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-gray-900">Approach</h3>
            <div className="flex flex-col gap-5">
              <div className="bg-[#2D4BAE] rounded-lg p-5">
                <p className="text-white text-base leading-relaxed">
                  WhatsApp is used daily by over 94 million people in Mexico, giving the product instant familiarity and adoption.
                </p>
              </div>
              <div className="bg-[#2D4BAE] rounded-lg p-5">
                <p className="text-white text-base leading-relaxed">
                  We turned complex rules from the SAT, Mexico's tax authority, into simple prompts that reduced confusion and errors. An AI assistant works in the background coordinating agents for tasks such as verification and invoice creation.
                </p>
              </div>
              <div className="bg-[#2D4BAE] rounded-lg p-5">
                <p className="text-white text-base leading-relaxed">
                  We tested the full flow with a manually supported prototype, validating ideas and learning fast without heavy development.
                </p>
              </div>
              <div className="bg-[#2D4BAE] rounded-lg p-5">
                <p className="text-white text-base leading-relaxed">
                  We launched two landing pages, one for accountants and one for small and medium enterprises. Tracking sign ups showed which group needed the service more, helping validate demand and reduce risk
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Customer Journey Section */}
        <section className="w-full max-w-[1016px] inline-flex flex-col justify-start items-center gap-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch justify-start text-neutral-900 text-2xl font-bold font-['Epilogue'] leading-loose">Customer Journey</div>
            <div className="justify-start text-neutral-900 text-base font-light font-['Epilogue'] leading-loose">Juan Hernández, Restaurant Owner</div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-5 flex-wrap content-center">
            <div className="max-w-80 max-h-80 flex justify-center items-center gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Awareness</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Discovers NUMA through Google searches, Facebook ads, and word of mouth. Learns there is a simpler way to invoice using WhatsApp.</div>
                </div>
              </div>
            </div>
            <div className="max-w-80 max-h-80 flex justify-start items-start gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Consideration</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Visits landing page, watches a 30 second video, calculates savings, and shares phone number and email.</div>
                </div>
              </div>
            </div>
            <div className="max-w-80 max-h-80 flex justify-start items-start gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Decision</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Requests more details through WhatsApp, asks colleagues, and signs up for early access.</div>
                </div>
              </div>
            </div>
            <div className="max-w-80 max-h-80 flex justify-start items-start gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Onboarding</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Uploads a CSD (digital tax certificate required by Mexico's SAT), receives the shared WhatsApp number, issues a first invoice, and shares it with staff.</div>
                </div>
              </div>
            </div>
            <div className="max-w-80 max-h-80 flex justify-start items-start gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Adoption</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Starts invoicing daily, reviews summaries, and reduces reliance on an accountant.</div>
                </div>
              </div>
            </div>
            <div className="max-w-80 max-h-80 flex justify-start items-start gap-5">
              <div className="w-80 h-80 max-w-80 min-w-80 max-h-80 p-7 bg-white rounded-[40px] outline outline-2 outline-offset-[-2px] outline-black inline-flex flex-col justify-start items-start gap-4">
                <img className="w-24 h-24" src="https://api.builder.io/api/v1/image/assets/TEMP/a9f5cebb5c8f16891bc526e7c12e9f7e567f7944?width=200" alt="Journey step icon" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] leading-7">Advocacy</div>
                  <div className="self-stretch justify-start text-black text-base font-normal font-['Epilogue'] leading-normal">Recommends NUMA in WhatsApp groups, shares experience on social media, and refers other business owners.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="flex flex-col gap-20 max-w-2xl w-full">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">Solution</h3>
            <div className="flex flex-col gap-6">
              <p className="text-base text-gray-600 leading-relaxed">
                NUMA is an AI powered invoicing assistant built directly into WhatsApp. It guides users through creating CFDI invoices step by step, detecting tax IDs (RFC), suggesting correct usage codes, validating with the SAT in real time, and storing invoice history for future use.
              </p>
              <div className="flex flex-col gap-5 pl-10">
                <p className="text-base text-gray-600 leading-relaxed">
                  Create valid CFDI (Mexico's official digital tax invoice format.) invoices directly in WhatsApp.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Detect the client's RFC (Tax ID) and suggest the right usage codes required by the SAT.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Validate each invoice in real time with the SAT(Mexico's tax authority).
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Reuse stored data to make future invoicing faster and easier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversational Flow Design Section */}
        <section className="flex flex-col gap-20 max-w-2xl w-full">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">Conversational Flow Design</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We designed conversational flows that feel natural in chat and embedded more than 17 custom fiscal rules we created for NUMA. In Mexico, to issue a valid CFDI (digital tax invoice), the SAT(Servicio de Administración Tributaria), the official tax authority,requires specific data: a valid RFC (unique taxpayer ID), the correct CFDI usage code, the proper payment method, and a valid digital certificate (CSD). Most people rely on accountants because these rules are complex and errors can invalidate an invoice. NUMA integrates these rules into simple chat prompts, validating data in real time with the SAT and preventing mistakes before the invoice is officially issued.
            </p>
          </div>
        </section>



        {/* Impact & Results Section */}
        <section className="flex flex-col gap-20 w-full max-w-6xl">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900">Impact & Results</h3>
            <div className="flex flex-col gap-6">
              <p className="text-base text-gray-600 leading-relaxed">
                NUMA delivers near total elimination of manual processes with conversational AI, reducing the average invoice time from 15 minutes to under 2 minutes and positioning the product to make a significant impact in a $944.9M market growing at 15.9 percent CAGR.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                NUMA proved strong demand even before a demo was available. In one week we generated qualified leads daily with low acquisition costs, confirming problem–solution fit and a clear path to scale.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { metric: "20+", description: "Qualified leads in first week" },
              { metric: "2.8", description: "Leads per day on average" },
              { metric: "87–239", description: "MXN CAC range" },
              { metric: "0", description: "Hours spent on demos while still driving conversions" },
              { metric: "200+", description: "Leads per month projected with demo" }
            ].map((item, index) => (
              <div key={index} className="bg-black border-2 border-black rounded-[40px] p-8 flex flex-col justify-center gap-4 h-80">
                <div className="flex flex-col gap-4">
                  <span className="text-white text-7xl font-black leading-tight">{item.metric}</span>
                  <p className="text-white text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="flex flex-col gap-20 max-w-2xl w-full">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-gray-900">Next Steps</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              NUMA is transitioning from validation to growth. In the next weeks we will activate existing leads, refine messaging, and complete the MVP to reach first revenue within 60 days. Clear steps and metrics guide this path, ensuring every action drives closer to product–market fit.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-10 max-w-2xl w-full">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            Interested in how I design products
          </h2>
          <button className="px-4 py-4 border border-black rounded-full bg-white hover:bg-gray-50 transition-colors self-start">
            <span className="text-black text-base font-normal">Let's connect</span>
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-10 py-16">
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-8">
              <span className="text-black text-base">Projects</span>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.5909 12.291C22.5909 6.76802 18.1139 2.29102 12.5909 2.29102C7.06794 2.29102 2.59094 6.76802 2.59094 12.291C2.59094 17.282 6.24794 21.419 11.0289 22.169V15.182H8.48894V12.291H11.0289V10.088C11.0289 7.58202 12.5209 6.19802 14.8059 6.19802C15.8999 6.19802 17.0439 6.39302 17.0439 6.39302V8.85302H15.7839C14.5409 8.85302 14.1539 9.62402 14.1539 10.415V12.291H16.9269L16.4839 15.181H14.1539V22.169C18.9339 21.419 22.5909 17.282 22.5909 12.291Z" fill="black"/>
                </svg>
                <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.9059 2.29102C15.3359 2.29102 15.6899 2.30402 16.7139 2.35102C17.7779 2.40002 18.5049 2.56902 19.1409 2.81602C19.8084 3.06689 20.4132 3.46037 20.9129 3.96902C21.4216 4.46879 21.8151 5.07352 22.0659 5.74102C22.3129 6.37702 22.4819 7.10402 22.5309 8.16802C22.5789 9.23502 22.5909 9.57502 22.5909 12.291V12.371C22.5909 15.014 22.5789 15.358 22.5309 16.414C22.4819 17.478 22.3129 18.205 22.0659 18.841C21.8151 19.5085 21.4216 20.1132 20.9129 20.613C20.4132 21.1217 19.8084 21.5151 19.1409 21.766C18.5049 22.013 17.7779 22.182 16.7139 22.231C15.6469 22.279 15.3069 22.291 12.5909 22.291H12.5109C9.86794 22.291 9.52394 22.279 8.46794 22.231C7.40394 22.182 6.67694 22.013 6.04094 21.766C5.37344 21.5151 4.76872 21.1217 4.26894 20.613C3.7603 20.1132 3.36682 19.5085 3.11594 18.841C2.86894 18.205 2.69994 17.478 2.65094 16.414C2.60394 15.39 2.59094 15.035 2.59094 12.606V11.976C2.59094 9.54602 2.60394 9.19202 2.65094 8.16802C2.69994 7.10402 2.86894 6.37702 3.11594 5.74102C3.36682 5.07352 3.7603 4.46879 4.26894 3.96902C4.76872 3.46037 5.37344 3.06689 6.04094 2.81602C6.67694 2.56902 7.40394 2.40002 8.46794 2.35102C9.49194 2.30402 9.84694 2.29102 12.2759 2.29102H12.9059ZM12.8249 4.09302H12.3569C9.90094 4.09302 9.57294 4.10402 8.54994 4.15102C7.57494 4.19602 7.04594 4.35802 6.69294 4.49502C6.22594 4.67702 5.89294 4.89302 5.54294 5.24302C5.19294 5.59302 4.97694 5.92602 4.79494 6.39302C4.65794 6.74602 4.49494 7.27502 4.45094 8.25002C4.40394 9.27302 4.39294 9.60102 4.39294 12.057V12.525C4.39294 14.981 4.40394 15.309 4.45094 16.332C4.49594 17.307 4.65794 17.836 4.79494 18.189C4.97694 18.655 5.19394 18.989 5.54294 19.339C5.89294 19.689 6.22594 19.905 6.69294 20.087C7.04594 20.224 7.57494 20.387 8.54994 20.431C9.60394 20.479 9.91994 20.489 12.5909 20.489H12.6709C15.2679 20.489 15.5879 20.479 16.6309 20.431C17.6069 20.386 18.1359 20.224 18.4889 20.087C18.9549 19.905 19.2889 19.689 19.6389 19.339C19.9889 18.989 20.2049 18.656 20.3869 18.189C20.5239 17.836 20.6869 17.307 20.7309 16.332C20.7789 15.277 20.7889 14.962 20.7889 12.291V12.211C20.7889 9.61402 20.7789 9.29402 20.7309 8.25102C20.6859 7.27502 20.5239 6.74602 20.3869 6.39302C20.2267 5.95859 19.9711 5.56561 19.6389 5.24302C19.3163 4.91087 18.9234 4.65528 18.4889 4.49502C18.1359 4.35802 17.6069 4.19502 16.6319 4.15102C15.6089 4.10402 15.2809 4.09302 12.8249 4.09302ZM12.5909 7.15602C13.2653 7.15602 13.933 7.28884 14.556 7.54689C15.179 7.80495 15.7451 8.18319 16.2219 8.66002C16.6988 9.13685 17.077 9.70293 17.3351 10.3259C17.5931 10.9489 17.7259 11.6167 17.7259 12.291C17.7259 12.9654 17.5931 13.6331 17.3351 14.2561C17.077 14.8791 16.6988 15.4452 16.2219 15.922C15.7451 16.3988 15.179 16.7771 14.556 17.0351C13.933 17.2932 13.2653 17.426 12.5909 17.426C11.2291 17.426 9.92295 16.885 8.95995 15.922C7.99695 14.959 7.45594 13.6529 7.45594 12.291C7.45594 10.9291 7.99695 9.62302 8.95995 8.66002C9.92295 7.69702 11.2291 7.15602 12.5909 7.15602ZM12.5909 8.95802C11.707 8.95802 10.8592 9.30917 10.2342 9.93423C9.6091 10.5593 9.25794 11.407 9.25794 12.291C9.25794 13.175 9.6091 14.0227 10.2342 14.6478C10.8592 15.2729 11.707 15.624 12.5909 15.624C13.4749 15.624 14.3227 15.2729 14.9477 14.6478C15.5728 14.0227 15.9239 13.175 15.9239 12.291C15.9239 11.407 15.5728 10.5593 14.9477 9.93423C14.3227 9.30917 13.4749 8.95802 12.5909 8.95802ZM17.9289 5.75302C18.2472 5.75302 18.5524 5.87944 18.7775 6.10449C19.0025 6.32953 19.1289 6.63476 19.1289 6.95302C19.1289 7.27128 19.0025 7.5765 18.7775 7.80154C18.5524 8.02659 18.2472 8.15302 17.9289 8.15302C17.6107 8.15302 17.3055 8.02659 17.0804 7.80154C16.8554 7.5765 16.7289 7.27128 16.7289 6.95302C16.7289 6.63476 16.8554 6.32953 17.0804 6.10449C17.3055 5.87944 17.6107 5.75302 17.9289 5.75302Z" fill="black"/>
                </svg>
                <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                  <path d="M14.073 10.9128L20.6298 3.29102H19.0761L13.3828 9.9089L8.8356 3.29102H3.59094L10.4672 13.2984L3.59094 21.291H5.14478L11.157 14.3023L15.9592 21.291H21.2038L14.073 10.9128ZM11.9448 13.3866L11.2481 12.3901L5.70465 4.46073H8.09127L12.5649 10.8599L13.2616 11.8565L19.0768 20.1745H16.6902L11.9448 13.3866Z" fill="black"/>
                </svg>
                <svg className="w-6 h-6" viewBox="0 0 25 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.2039 2.29102C6.68086 2.29102 2.20386 6.77502 2.20386 12.308C2.20386 16.733 5.06886 20.488 9.04286 21.812C9.54286 21.904 9.72486 21.595 9.72486 21.329C9.72486 21.092 9.71686 20.461 9.71186 19.626C6.92986 20.231 6.34286 18.283 6.34286 18.283C5.88886 17.125 5.23286 16.817 5.23286 16.817C4.32486 16.197 5.30186 16.209 5.30186 16.209C6.30486 16.279 6.83286 17.241 6.83286 17.241C7.72486 18.771 9.17386 18.329 9.74286 18.073C9.83486 17.426 10.0929 16.985 10.3789 16.735C8.15886 16.482 5.82386 15.622 5.82386 11.784C5.82386 10.691 6.21386 9.79602 6.85286 9.09602C6.74986 8.84302 6.40686 7.82402 6.95086 6.44602C6.95086 6.44602 7.79086 6.17602 9.70086 7.47202C10.5166 7.24953 11.3583 7.13621 12.2039 7.13502C13.0539 7.13902 13.9089 7.25002 14.7079 7.47202C16.6169 6.17602 17.4549 6.44502 17.4549 6.44502C18.0009 7.82402 17.6569 8.84302 17.5549 9.09602C18.1949 9.79602 18.5829 10.691 18.5829 11.784C18.5829 15.632 16.2439 16.479 14.0169 16.727C14.3759 17.036 14.6949 17.647 14.6949 18.582C14.6949 19.92 14.6829 21.001 14.6829 21.329C14.6829 21.597 14.8629 21.909 15.3709 21.811C17.3622 21.1431 19.0932 19.8663 20.3193 18.1611C21.5455 16.4558 22.2047 14.4083 22.2039 12.308C22.2039 6.77502 17.7259 2.29102 12.2039 2.29102Z" fill="black"/>
                </svg>
                <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.0159 5.70902C20.8769 5.93902 21.5539 6.61602 21.7839 7.47702C22.2019 9.03702 22.2039 12.291 22.2039 12.291C22.2039 12.291 22.2039 15.546 21.7859 17.105C21.6719 17.5288 21.4486 17.9152 21.1383 18.2255C20.828 18.5358 20.4416 18.7591 20.0179 18.873C18.4579 19.292 12.2039 19.292 12.2039 19.292C12.2039 19.292 5.94886 19.292 4.38986 18.873C3.96613 18.759 3.57978 18.5357 3.2695 18.2254C2.95922 17.9151 2.73588 17.5287 2.62186 17.105C2.20386 15.546 2.20386 12.291 2.20386 12.291C2.20386 12.291 2.20386 9.03602 2.62086 7.47702C2.73507 7.05338 2.95846 6.66713 3.26872 6.35688C3.57897 6.04662 3.96522 5.82323 4.38886 5.70902C5.94786 5.29102 12.2019 5.29102 12.2019 5.29102C12.2019 5.29102 18.4569 5.29102 20.0159 5.70902ZM15.3979 12.291L10.2039 15.291V9.29102L15.3979 12.291Z" fill="black"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-base text-center">
              © 2024 Cabrasco. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}