import React from "react";
import VillagerIcon from "./VillagerIcon";

const Attribute = ({ title, villager, colorScheme, iconColor }) => {
  const lowerTitle = title.toLowerCase();
  const attribute = villager[lowerTitle];
  // console.log(attribute);

  return (
    <div className={`items-center mt-5 rounded-xl border-8 box-border h-16 w-3/4 max-w-96 flex flex-row ${colorScheme}`}>
      <span className="font-normal text-white h-10 w-1/3 flex items-center justify-center">
        Species
      </span>
      <span className="bg-[#fdf8e7] w-3/4 h-full rounded-lg shadow-2xl text-center flex-grow flex items-center justify-start">
        <div className="flex-shrink-0 ml-2 mr-2">
          {villager && attribute ? (
            <VillagerIcon
              className={`rounded-full border-2 ${iconColor}`}
              species={attribute}
              alt={`${title} icon`}
            />
          ) : null}
        </div>
        {villager && attribute ? attribute : "Unknown"}
      </span>
    </div>
  );
};

export default Attribute;
