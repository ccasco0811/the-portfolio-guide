import React from 'react';

const NumaProject: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-6 p-8">
      <div className="flex justify-center items-center gap-2.5">
        <div className="text-foreground text-2xl font-bold font-epilogue leading-8">Customer Journey</div>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <div className="text-foreground text-base font-light font-epilogue leading-8">Juan Hernández, Restaurant Owner</div>
      </div>
      <div className="w-full max-w-[868px] h-auto flex flex-col justify-start items-start">
        <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Advocacy icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Advocacy</div>
            <div className="self-stretch h-24 text-foreground text-base font-normal font-epilogue leading-6">Shares NUMA in WhatsApp groups, posts on social media, and refers friends.</div>
          </div>
        </div>
        <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Adoption icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Adoption</div>
            <div className="self-stretch h-24 text-foreground text-base font-normal font-epilogue leading-6">Clients issue invoices themselves, review weekly summaries, and reduce accountant costs.</div>
          </div>
        </div>
        <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Onboarding icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Onboarding</div>
            <div className="self-stretch h-24 text-foreground text-base font-normal font-epilogue leading-6">Uploads Digital Tax Certificate, issues first invoice, and shares with staff.</div>
          </div>
        </div>
        <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Decision icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Decision</div>
            <div className="self-stretch h-24 text-foreground text-base font-normal font-epilogue leading-6">Attends a 15 minute demo, asks colleagues, compares against current accountant, and starts a 30 day trial.</div>
          </div>
        </div>
        <div className="w-[276px] self-stretch py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Consideration icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Consideration</div>
            <div className="self-stretch h-24 text-foreground text-base font-normal font-epilogue leading-6">Visits website, watches a 30-second demo, calculates savings, and books a demo.</div>
          </div>
        </div>
        <div className="w-[276px] h-[276px] py-2 px-8 pb-8 rounded-lg border border-black flex flex-col justify-center items-start gap-4">
          <div className="w-[60px] h-[60px] flex justify-start items-center gap-2.5">
            <img className="w-[60px] h-[60px]" src="https://placehold.co/60x60" alt="Awareness icon" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="text-foreground text-sm font-light font-epilogue leading-7">Awareness</div>
            <div className="self-stretch text-foreground text-base font-normal font-epilogue leading-6">Discovers NUMA through Google searches, Facebook ads, and news about SAT changes.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;