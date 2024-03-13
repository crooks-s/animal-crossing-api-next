import React from 'react';
import Image from 'next/image';
import TownHall from "../../../public/images/town-hall.jpg";

const Custom500 = () => {
  return (
    <main className="bg-hero-pattern bg-center h-screen bg-no-repeat bg-cover flex items-center justify-center">
      {/* top level card -- card background */}
      <div className="h-4/5 w-3/5 rubik flex flex-col items-center py-4 px-0 bg-cover pt-3 bg-card-pattern shadow-2xl rounded-3xl ">
        <span className="text-center text-xl mt-4 py-4 px-3 rounded-full bg-[#fdf8e7]  ">
          Sorry! Something went wrong! Please try again later.
        </span>
      <Image 
      className="border-2 bg-[#fdf8e7] rounded-3xl my-5"
      src={TownHall}
      alt='picture of the town hall'
      height={500}
      width={500}
      />
      </div>
    </main>
  )
}

export default Custom500