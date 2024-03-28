import React from "react";
import Image from "next/image";
const apiKey = process.env.NEXT_PUBLIC_NOOKIPEDIA_API_KEY;
import fetchData from "../../api/fetch";
import placeholder from "../../../public/images/placeholder.png";
import NewVillagerBtn from "../components/NewVillagerBtn";
import Attribute from "../components/Attribute";
import ChatBubble from "../components/ChatBubble";
import Name from "../components/Name";
import Birthday from "../components/Birthday";
import Custom404 from "../404";
import Custom500 from "../500";

const Villager = async () => {
  let villager;
  let bgColor;
  let textColor;

  try {
    const data = await fetchData(apiKey);
    if (data === 404) {
      return <Custom404 />;
    }
    const randomIndex = Math.floor(Math.random() * data.length);
    villager = data[randomIndex];
    bgColor = villager.title_color || 'e06c2d';
    textColor = villager.text_color || '6b5c43';
  } catch (err) {
    return <Custom500 />;
  }

  return (
    // background image
    <main className="overflow-y-auto bg-hero-pattern bg-center min-h-screen bg-no-repeat bg-cover flex items-center justify-center pt-2">
      {/* top level card -- card background */}
      <div className=" h-auto w-3/5 rubik flex flex-col items-center py-0 px-0 fixed-bg bg-cover bg-card-pattern shadow-2xl rounded-3xl  min-h-[632px] max-w-2xl min-w-96 animate-ease-in">
        {/* Headshot */}
        <div className="rounded-full">
          <Image
            className="rounded-full bg-[#fdf8e7] p-2 m-0 -mt-6 -mb-16 shadow-2xl "
            src={
              villager && villager.nh_details
                ? villager.nh_details.icon_url || placeholder
                : placeholder
            }
            alt="headshot photo"
            height={100}
            width={100}
          />
        </div>

        {/* name + name background */}
        <Name
          villager={villager}
          style={{
            backgroundColor: `#${bgColor}`,
            color: `#${textColor}`,
          }}
        />

        {/* Chat Bubble */}
        <ChatBubble
          villager={villager}
          style={{
            backgroundColor: `#${bgColor}`,
            color: `#${textColor}`,
          }}
        />

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
        <Birthday villager={villager} />

        {/* Avatar */}
        <div className="pt-0 -mt-[15px]">
          {villager && villager.image_url ? (
            <Image
              className="z-10 mt-10 ease-in-out"
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
