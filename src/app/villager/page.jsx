import React from "react";
import Image from "next/image";
const apiKey = process.env.NEXT_PUBLIC_NOOKIPEDIA_API_KEY;
import fetchData from "../../api/fetch";
import bday from "../../../public/images/birthday/bday-cake.png";
import placeholder from "../../../public/images/placeholder.png";
import NewVillagerBtn from "../components/NewVillagerBtn";
import Attribute from "../components/Attribute";
import Custom404 from "../404";
import Custom500 from "../500";

const Villager = async () => {
  let villager;

  try {
    const data = await fetchData(apiKey);
    if (data === 404) {
      return <Custom404 />;
    }
    const randomIndex = Math.floor(Math.random() * data.length);
    villager = data[randomIndex];
  } catch (err) {
    return <Custom500 />;
  }

  return (
    // background image
    <main className="overflow-y-auto bg-hero-pattern bg-center min-h-screen bg-no-repeat bg-cover flex items-center justify-center">
      {/* top level card -- card background */}
      <div className=" h-auto w-3/5 rubik flex flex-col items-center py-0 px-0 fixed-bg bg-cover bg-card-pattern shadow-2xl rounded-3xl  min-h-[632px] max-w-2xl min-w-96 animate-ease-in">
        
        {/* Headshot */}
        <div className="rounded-full">

            <Image
              className="rounded-full bg-[#fdf8e7] p-2 m-0 -mt-6 -mb-16 shadow-2xl "
              src={villager.nh_details ? villager.nh_details.icon_url || placeholder : placeholder}
              alt="headshot photo"
              height={100}
              width={100}
            />

        </div>

        {/* name + name background */}
        <div className="h-auto -mt-12 py-2 px-3 relative -left-28 -rotate-12 top-20 rounded-full bg-[#c0503c]">
          {/* villager name */}
          <span className="relative text-white">
            {villager && villager.name ? villager.name : "Unknown"}
          </span>
        </div>

        {/* Chat Bubble */}
        <div className="min-h-[10rem] w-full bg-chat-pattern bg-center bg-no-repeat bg-contain flex items-center justify-center mt-10 p-0 -z-10">
          {/* //TODO: add ternary in case of null value */}
          <span className="flex items-center justify-center w-1/2">
            {villager && villager.quote
              ? villager.quote
              : "This villager does not have a particular saying!"}
          </span>
        </div>

        {/* Species */}
        <Attribute
          title={"Species"}
          villager={villager}
          colorScheme={"border-[#ec9900] bg-[#ffa500]"}
          iconColor={"border-[#ec9900] bg-[#ec9900]"}
          addBorder={"border-2"}
          rounded={"rounded-full"}
        />

        {/* Personality */}
        <Attribute
          title={"Personality"}
          villager={villager}
          colorScheme={"border-[#7f3d35] bg-[#983f34]"}
          iconColor={"border-[#ec9900] bg-[#ec9900]"}
          rounded={"rounded-full"}
        />

        {/* Sign */}
        <Attribute
          title={"Sign"}
          villager={villager}
          colorScheme={"border-[#2e6b7b] bg-[#107896]"}
          rounded={"rounded-full"}
        />

        {/* Hobby */}
        <Attribute
          title={"Hobby"}
          villager={villager}
          colorScheme={"border-[#7f19e6] bg-[#7f00ff]"}
        />

        {/* Birthday */}
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

        {/* Avatar */}
        <div className="pt-0 -mt-[15px]">
          {villager && villager.image_url ? (
            <Image
              className="z-10 mt-10"
              src={villager.image_url}
              alt={`image of {villager.name}`}
              height={100}
              width={100}
            />
          ) : null}
        </div>

        <NewVillagerBtn atVillager={true} />
      </div>
    </main>
  );
};

export default Villager;
