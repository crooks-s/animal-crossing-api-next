"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NewVillagerBtn = ({ atVillager, text }) => {
  const router = useRouter();

  const handleClick = () => {
    if (!atVillager) {
      router.push('/villager');
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <button
      onClick={handleClick}
      className="bg-[#503cce] hover:bg-[#8098ef] transition ease-in-out py-2 my-6 px-3 flex items-center justify-center rounded-3xl text-white font-normal border-2 border-[#22399e]"
    >
      {text ? text : "New Villager"}
    </button>
  );
};

export default NewVillagerBtn;
