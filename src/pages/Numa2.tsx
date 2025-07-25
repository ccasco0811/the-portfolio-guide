import React from 'react';

const Numa2: React.FC = () => {
  return (
    <div className="w-full h-full px-10 py-15 bg-white overflow-hidden outline outline-1 outline-black -outline-offset-1 flex flex-col justify-start items-center gap-20">
      <div className="self-stretch bg-white overflow-hidden justify-start items-center inline-flex">
        <img className="w-20 h-20" src="https://placehold.co/80x80" alt="Logo" />
        <div className="flex-1 flex-col justify-start items-end gap-2.5 inline-flex">
          <div className="self-stretch pt-5 pb-5 px-10 justify-end items-center gap-10 inline-flex">
            <div className="pt-0 justify-start items-center gap-10 flex">
              <div className="text-black text-base font-normal font-epilogue leading-[26px]">Projects</div>
            </div>
            <div className="p-4 bg-white rounded-[30px] outline outline-1 outline-black -outline-offset-1 justify-start items-center gap-2.5 flex">
              <div className="text-black text-base font-normal font-epilogue leading-[26px] tracking-[0.32px]">Let's connect</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[668px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch text-black text-lg font-medium font-epilogue leading-7">Numa</div>
        <div className="self-stretch text-black text-5xl font-bold font-epilogue leading-tight">AI assistant that helps professionals create compliant invoices in seconds</div>
        <div className="self-stretch justify-start items-center gap-10 inline-flex flex-wrap content-center">
          <div className="w-[105px] py-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Timeline</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">2024-Present</div>
          </div>
          <div className="w-[134px] py-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Role</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">Product Strategy</div>
          </div>
          <div className="w-[132px] py-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-sm font-light font-epilogue uppercase leading-5">Platform</div>
            <div className="self-stretch text-center text-[#1E1E1E] text-base font-normal font-epilogue leading-[26px]">WhatsApp & Web</div>
          </div>
        </div>
      </div>
      
      <img className="w-full h-[883px] max-w-[1360px] max-h-[883px] rounded-[20px]" src="https://placehold.co/1360x883" alt="Numa product screenshot" />
    </div>
  );
};

export default Numa2;