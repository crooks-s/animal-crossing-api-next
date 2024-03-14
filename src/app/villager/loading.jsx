import React from "react";

const Loading = () => {
  return (
    <main className="overflow-y-auto bg-hero-pattern bg-center min-h-screen bg-no-repeat bg-cover flex items-center justify-center">
      {/* top level card -- card background */}
      <div className="h-4/5 w-3/5 rubik flex flex-col items-center py-0 px-0 bg-cover pt-3 bg-card-pattern shadow-2xl rounded-3xl ">
        {/* name */}
        <span className=" text-white h-auto -mt-12 py-2 px-3 relative top-20 rounded-full bg-[#c0503c]">
          <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
        </span>
        {/* quote box */}
        <div className="h-32 w-full bg-chat-pattern bg-center bg-no-repeat bg-contain flex items-center justify-center mt-10">
          <p className="">Loading quote...</p>
        </div>
        {/* avatar */}
        <div className="pt-10">
        <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
        </div>
        {/* species */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#ec9900] h-16 w-3/4 max-w-96 flex flex-row bg-[#ffa500]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Species
          </span>
          <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
          Loading species...
        </div>
        {/* personality */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#2e6b7b] h-16 w-3/4 max-w-96 flex flex-row bg-[#107896]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Personality
          </span>
          <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
          Loading personality...
        </div>
        {/* hobby */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#7f3d35] h-16 w-3/4 max-w-96 flex flex-row bg-[#983f34]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Sign
          </span>
          <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
          Loading sign...
        </div>
        {/* birthday */}
        <div className="items-center mb-20 mt-5 rounded-xl border-8 box-border border-[#6f8141] h-16 w-3/4 max-w-96 flex flex-row bg-[#829356]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Birthday
          </span>
          <svg
            className="text-white animate-spin"
            fill="#FFFFFF"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M2.39,8.13a5.47,5.47,0,0,1,.18-1.39l.16-.66L1.42,5.74l-.17.66a7,7,0,0,0,.08,3.73l.19.65,1.3-.39-.19-.65A5.46,5.46,0,0,1,2.39,8.13Zm2.18,4.39L4,12.12l-.83,1.07.55.42a6.76,6.76,0,0,0,3.48,1.32l.67.07L8,13.64l-.67-.06A5.56,5.56,0,0,1,4.57,12.52ZM14.4,5.37A7.05,7.05,0,0,0,5.16,1.63h0A6.92,6.92,0,0,0,2.77,3.28L4,4.48A5.32,5.32,0,1,1,10,13l.68,1.6A7.06,7.06,0,0,0,14.4,5.37Z" />
            </g>
          </svg>
            Loading birthday...
        </div>
      </div>
    </main>
  );
};

export default Loading;
