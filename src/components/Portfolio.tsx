import React from 'react';

const Portfolio = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white flex flex-col justify-start items-center gap-10 overflow-hidden">
      {/* Header */}
      <header className="self-stretch h-32 md:h-40 p-4 md:p-10 flex justify-between items-center overflow-hidden">
        <img 
          className="w-20 h-20" 
          src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
          alt="Carlos Cabrasco Logo"
        />
        <div className="text-center text-black text-2xl font-normal font-['Epilogue'] leading-9">
          Carlos Cabrasco
        </div>
      </header>

      {/* Hero Section */}
      <section className="self-stretch py-16 md:py-32 lg:py-48 px-4 md:px-8 flex flex-col justify-center items-center gap-2.5">
        <div className="w-full max-w-[1034px] flex flex-col justify-center items-center gap-6 md:gap-10">
          <h1 className="w-full text-black text-3xl md:text-5xl lg:text-6xl font-normal font-['Epilogue'] leading-tight md:leading-[64.05px] text-center">
            AI assistant that helps professionals create compliant invoices in seconds
          </h1>
          <p className="self-stretch text-black text-base font-normal font-['Epilogue'] leading-normal">
            I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence. My work reduces uncertainty, delivers evidence, and accelerates smarter decision making.
          </p>
          <button className="p-4 rounded-[30px] border border-black flex justify-center items-center gap-2.5 hover:bg-black hover:text-white transition-all duration-300">
            <span className="text-center text-sm font-bold font-['Epilogue'] leading-none">
              Let's Collaborate
            </span>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="self-stretch py-12 md:py-20 px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="self-stretch flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-black text-2xl md:text-4xl font-bold font-['Epilogue'] leading-tight md:leading-10">
            What We Made Happen
          </h2>
          <p className="text-black text-lg md:text-2xl font-normal font-['Epilogue'] leading-normal md:leading-7 max-w-4xl">
            Projects I've co-designed with teams and founders to turn ideas into meaningful, testable solutions.
          </p>
        </div>
        <div className="w-full max-w-[1248px] flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <div className="w-full md:flex-1 h-[400px] md:h-[608px] md:max-w-[608px] bg-black/60 rounded-[20px] md:rounded-[30px] flex flex-col justify-center items-center gap-2.5 hover:bg-black/70 transition-all duration-300 cursor-pointer p-6 md:p-0">
            <div className="w-full md:w-[568px] flex flex-col justify-start items-start gap-4 md:gap-6">
              <h3 className="self-stretch text-white text-3xl md:text-5xl font-normal font-['Epilogue']">
                Numa
              </h3>
              <p className="self-stretch text-white text-lg md:text-2xl font-normal font-['Epilogue'] leading-normal md:leading-9">
                AI assistant that helps professionals create compliant invoices in seconds
              </p>
            </div>
          </div>
          <div className="w-full md:w-[608px] h-[400px] md:h-[608px] md:max-w-[608px] bg-black/60 rounded-[20px] md:rounded-[30px] flex flex-col justify-center items-center gap-2.5 hover:bg-black/70 transition-all duration-300 p-6 md:p-0">
            <div className="w-full md:w-[568px] flex flex-col justify-start items-start gap-4 md:gap-6">
              <h3 className="self-stretch text-white text-3xl md:text-5xl font-normal font-['Epilogue']">
                Patrimonio Hoy
              </h3>
              <p className="self-stretch flex-1 text-white text-lg md:text-2xl font-bold font-['Epilogue'] leading-normal md:leading-9">
                Coming Soon
              </p>
            </div>
          </div>
          <div className="w-full md:w-[608px] h-[400px] md:h-[608px] md:max-w-[608px] bg-black/60 rounded-[20px] md:rounded-[30px] flex flex-col justify-center items-center gap-2.5 hover:bg-black/70 transition-all duration-300 p-6 md:p-0">
            <div className="w-full md:w-[568px] flex flex-col justify-start items-start gap-4 md:gap-6">
              <h3 className="self-stretch text-white text-3xl md:text-5xl font-normal font-['Epilogue']">
                CiBiDi
              </h3>
              <p className="self-stretch flex-1 text-white text-lg md:text-2xl font-bold font-['Epilogue'] leading-normal md:leading-9">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-[1248px] py-12 md:py-20 lg:py-40 px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="self-stretch flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-black text-2xl md:text-4xl font-bold font-['Epilogue'] leading-tight md:leading-10">
            How I Bring Ideas to Life
          </h2>
          <p className="text-black text-lg md:text-2xl font-normal font-['Epilogue'] leading-normal md:leading-9 max-w-4xl">
            From early concepts to testable products, here's how I create value through design.
          </p>
        </div>
        <div className="self-stretch flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <div className="flex-1 p-5 rounded-[20px] border-2 border-black flex flex-col justify-center items-center gap-2.5 hover:shadow-lg transition-all duration-300">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-5 overflow-hidden">
              <h3 className="text-black text-base font-normal font-['Epilogue'] leading-normal">
                Frame the Right Bet
              </h3>
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <p className="self-stretch h-32 text-black text-base font-normal font-['Epilogue'] leading-normal">
                  I clarify user, pain, constraints, and one success metric. I turn assumptions into hypotheses and set a 1–2 week learning goal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 rounded-[20px] border-2 border-black flex flex-col justify-center items-center gap-2.5 hover:shadow-lg transition-all duration-300">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-5 overflow-hidden">
              <h3 className="text-black text-base font-normal font-['Epilogue'] leading-normal">
                Design the Smallest MVP
              </h3>
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <p className="self-stretch h-32 text-black text-base font-normal font-['Epilogue'] leading-normal">
                  I pick the lightest experiment and time‑box it, with clear pass/fail tied to the metric.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 rounded-[20px] border-2 border-black flex flex-col justify-center items-center gap-2.5 hover:shadow-lg transition-all duration-300">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-5 overflow-hidden">
              <h3 className="text-black text-base font-normal font-['Epilogue'] leading-normal">
                Ship to Real Users
              </h3>
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <p className="self-stretch h-32 text-black text-base font-normal font-['Epilogue'] leading-normal">
                  I release to real users, capture behavior and feedback, and document insights.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 rounded-[20px] border-2 border-black flex flex-col justify-center items-center gap-2.5 hover:shadow-lg transition-all duration-300">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-5 overflow-hidden">
              <h3 className="text-black text-base font-normal font-['Epilogue'] leading-normal">
                Decide, Then Scale
              </h3>
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <p className="self-stretch h-32 text-black text-base font-normal font-['Epilogue'] leading-normal">
                  I synthesize results and choose to persist, pivot, or pause; then productize what works and line up the next bet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[1248px] px-4 md:px-8 lg:px-14 py-12 md:py-20 flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="self-stretch flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-black text-2xl md:text-4xl font-bold font-['Epilogue'] leading-tight md:leading-10">
            Stories from the Field
          </h2>
          <p className="text-black text-lg md:text-2xl font-normal font-['Epilogue'] leading-normal md:leading-9 max-w-4xl">
            Real words from teammates, founders, and collaborators I've partnered with to design, test, and build meaningful solutions.
          </p>
        </div>
        <div className="w-full flex justify-center items-start gap-4 md:gap-8 flex-wrap">
          <div className="flex-1 rounded-[40px] flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-10 overflow-hidden">
              <blockquote className="w-[528px] text-black text-base font-normal font-['Epilogue'] leading-normal">
                "It's great working with Carlos, at @Kmbal A.C. He brings sharp ideas and practical solutions that really help us focus on what our users need. I highly recommend working with him!"
              </blockquote>
              <cite className="w-96 text-black text-3xl font-medium font-['Epilogue']">
                Dina Fajardo
              </cite>
              <p className="text-black text-2xl font-normal font-['Epilogue'] leading-9">
                Co-Founder, Kmbal .
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[40px] flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch bg-white flex flex-col justify-center items-start gap-10 overflow-hidden">
              <blockquote className="self-stretch text-black text-base font-normal font-['Epilogue'] leading-normal">
                "Carlos is a professional in what he does, and he always delivers what he promises. He is attentive to the expectations of his clients and looks for ways to offer them valuable proposals. He is always looking for ways to do his work better and always seeks to be up to date on issues such as technologies, methods, and methodologies of how to do things. He is an excellent collaborator who knows how to build a team, who builds trust and is a person with whom it is very easy to interact."
              </blockquote>
              <cite className="w-96 text-black text-3xl font-medium font-['Epilogue']">
                Orlando Valencia
              </cite>
              <p className="text-black text-2xl font-normal font-['Epilogue'] leading-9">
                Senior Innovation Advisor, CEMEX CENTRAL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="self-stretch bg-white flex flex-col justify-start items-start overflow-hidden px-4 md:px-8">
        <div className="w-full max-w-[1440px] mx-auto py-12 md:py-20 flex flex-col justify-center items-center gap-8 md:gap-14">
          <div className="w-full max-w-[858px] flex flex-col justify-center items-center gap-2.5">
            <h2 className="self-stretch text-center text-neutral-900 text-3xl md:text-5xl lg:text-7xl font-normal font-['Epilogue'] leading-tight">
              Interested in how I design products?
            </h2>
          </div>
          <button className="p-4 bg-white rounded-[30px] border border-black flex justify-start items-center gap-2.5 hover:bg-black hover:text-white transition-all duration-300">
            <span className="text-lg font-normal font-['Epilogue'] leading-relaxed">
              Let's Collaborate
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="self-stretch px-4 md:px-10 pt-8 md:pt-14 pb-8 md:pb-16 flex flex-col justify-center items-center gap-6 md:gap-10">
        <div className="self-stretch pt-[0.16px] flex justify-center items-center gap-7">
          <div className="flex justify-start items-start gap-10">
            <a href="mailto:carlos@cabras.co" className="text-black text-base font-normal font-['Epilogue'] leading-relaxed hover:underline">
              carlos@cabras.co
            </a>
          </div>
          <div className="w-6 px-0.5 py-[5px] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
          </div>
          <div className="w-6 px-0.5 py-[5px] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
          </div>
        </div>
        <p className="text-center text-stone-500 text-base font-normal font-['Epilogue'] leading-relaxed">
          © 2024 Cabras.co All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;