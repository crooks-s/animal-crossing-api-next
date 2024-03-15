import React from 'react';
import Image from 'next/image';
import bday from "../../../public/images/birthday/bday-cake.png";

const Birthday = ({ villager }) => {
  return (
    <div className="items-center mt-2 rounded-xl border-8 box-border border-[#6f8141] h-16 w-3/4 max-w-96 flex flex-row bg-[#829356]">
    <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
      Birthday
    </span>
    <span className="bg-[#fdf8e7] w-3/4 h-full rounded-lg shadow-lg text-center flex-grow flex items-center justify-start ">
      <div className="flex-shrink-0 ml-2 mr-2">
        <Image
          className="rounded-full bg-white"
          src={bday}
          alt="birthday cake icon"
          height={36}
          width={36}
        />
      </div>
      {villager && villager.birthday_month && villager.birthday_day
        ? `${villager.birthday_month} ${villager.birthday_day}`
        : "Unknown"}
    </span>
  </div>
  )
}

export default Birthday