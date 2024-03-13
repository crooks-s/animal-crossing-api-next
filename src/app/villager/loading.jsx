import React from "react";

const Loading = () => {
  return (
    <main className="overflow-y-auto bg-hero-pattern bg-center min-h-screen bg-no-repeat bg-cover flex items-center justify-center">
      {/* top level card -- card background */}
      <div className="h-4/5 w-3/5 rubik flex flex-col items-center py-0 px-0 bg-cover pt-3 bg-card-pattern shadow-2xl rounded-3xl ">
        {/* name */}
        <span className="text-white h-auto -mt-12 py-2 px-3 relative top-20 rounded-full bg-[#c0503c]">Loading name...</span>
        {/* quote box */}
        <div className="h-32 w-full bg-chat-pattern bg-center bg-no-repeat bg-contain flex items-center justify-center mt-10">
          <p className="">Loading quote...</p>
        </div>
        {/* avatar */}
        <div className="pt-10">Loading villager avatar...</div>
        {/* species */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#ec9900] h-16 w-3/4 max-w-96 flex flex-row bg-[#ffa500]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Species
          </span>
          Loading species...
        </div>
        {/* personality */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#2e6b7b] h-16 w-3/4 max-w-96 flex flex-row bg-[#107896]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Personality
          </span>
          Loading personality...
        </div>
        {/* hobby */}
        <div className="items-center mt-5 rounded-xl border-8 box-border border-[#7f3d35] h-16 w-3/4 max-w-96 flex flex-row bg-[#983f34]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Sign
          </span>
          Loading sign...
        </div>
        {/* birthday */}
        <div className="items-center mb-20 mt-5 rounded-xl border-8 box-border border-[#6f8141] h-16 w-3/4 max-w-96 flex flex-row bg-[#829356]">
          <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
            Birthday
          </span>
          <p>Loading birthday...</p>
        </div>
      </div>
    </main>
  );
};

export default Loading;
