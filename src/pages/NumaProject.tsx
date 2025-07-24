import React from 'react';

const NumaProject: React.FC = () => {
  return (
    <div className="px-72 inline-flex flex-col justify-center items-center gap-2.5">
      <div className="max-w-[1000px] flex flex-col justify-center items-start gap-8">
        <div className="w-[571px] h-7 justify-start text-black text-lg font-medium font-['Epilogue'] leading-7">
          Numa
        </div>
        <div className="w-[571px] justify-start text-black text-5xl font-bold font-['Epilogue'] leading-[60px]">
          AI assistant that helps professionals create compliant invoices in seconds   
        </div>
        <div className="inline-flex justify-start items-center gap-10">
          <div className="py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="text-center justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">
              Timeline
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">
                2024-Present
              </div>
            </div>
          </div>
          <div className="py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="text-center justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">
              Role
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">
                Product Strategy
              </div>
            </div>
          </div>
          <div className="py-2 inline-flex flex-col justify-start items-start gap-4">
            <div className="text-center justify-start text-black text-sm font-light font-['Epilogue'] uppercase leading-tight">
              Platform
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="text-center justify-start text-stone-900 text-base font-normal font-['Epilogue'] leading-relaxed">
                WhatsApp & Web
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;