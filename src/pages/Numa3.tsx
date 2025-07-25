import React from 'react';

const Numa3: React.FC = () => {
  return (
    <div className="w-[1440px] px-10 py-15 bg-white inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center overflow-hidden">
        <img className="w-20 h-20" src="https://placehold.co/80x80" alt="Logo" />
        <div className="flex-1 inline-flex flex-col justify-start items-end gap-2.5">
          <div className="self-stretch px-10 py-5 inline-flex justify-end items-center gap-10">
            <div className="pt-[0.01px] flex justify-start items-center gap-10">
              <div className="justify-start text-black text-base font-normal font-['Epilogue'] leading-relaxed">Projects</div>
            </div>
            <div className="p-4 bg-white rounded-[30px] outline outline-1 outline-offset-[-1px] outline-black flex justify-start items-center gap-2.5">
              <div className="justify-start text-black text-base font-normal font-['Epilogue'] leading-relaxed tracking-tight">Let's connect</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-80 max-w-[668px] max-h-80 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch justify-start text-black text-lg font-medium font-['Epilogue'] leading-7">Numa</div>
        <div className="self-stretch justify-start text-black text-5xl font-bold font-['Epilogue']">AI assistant that helps professionals create compliant invoices in seconds</div>
        <div className="self-stretch inline-flex justify-start items-center gap-10 flex-wrap content-center">
          <div className="w-28 py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">Timeline</div>
            <div className="self-stretch text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">2024-Present</div>
          </div>
          <div className="w-32 py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">Role</div>
            <div className="self-stretch text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">Product Strategy</div>
          </div>
          <div className="w-32 py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">Platform</div>
            <div className="self-stretch text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">WhatsApp & Web</div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch pr-[0.21px] pt-[0.85px] pb-[0.17px] bg-white flex flex-col justify-start items-start">
          <div className="self-stretch px-10 pt-14 pb-16 flex flex-col justify-center items-center gap-10">
            <div className="self-stretch pt-[0.16px] inline-flex justify-center items-start gap-7">
              <div className="self-stretch flex justify-start items-start gap-10">
                <div className="justify-start text-black text-base font-normal font-['Epilogue'] leading-relaxed">Projects</div>
              </div>
              <div className="w-6 p-0.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="w-5 h-5 bg-black"></div>
              </div>
              <div className="p-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="w-5 h-5 bg-black"></div>
              </div>
              <div className="p-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="w-4 h-4 bg-black"></div>
              </div>
              <div className="w-6 p-0.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="w-5 h-5 bg-black"></div>
              </div>
              <div className="w-6 px-0.5 py-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="w-5 h-3.5 bg-black"></div>
              </div>
            </div>
            <div className="text-center justify-start text-stone-500 text-base font-normal font-['Epilogue'] leading-relaxed">© 2024 Cabrasco. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numa3;