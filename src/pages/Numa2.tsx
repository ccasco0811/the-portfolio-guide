import React from 'react';

const Numa2: React.FC = () => {
  return (
    <div className="w-[1440px] px-10 py-14 bg-white outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="self-stretch bg-white inline-flex justify-start items-center overflow-hidden">
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
      <div className="w-full max-w-[668px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch justify-start text-black text-lg font-medium font-['Epilogue'] leading-7">Numa</div>
        <div className="self-stretch justify-start text-black text-5xl font-bold font-['Epilogue']">AI assistant that helps professionals create compliant invoices in seconds   </div>
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
      <img className="w-full h-[883px] max-w-[1360px] max-h-[883.28px] rounded-[20px]" src="https://placehold.co/1360x883" alt="Numa product screenshot" />
    </div>
  );
};

export default Numa2;