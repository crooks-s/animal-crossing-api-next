import React from "react";
import Image from "next/image";
import placeholder from "../../../public/images/placeholder.png";

const VillagerIcons = ({ className, alt, species, personality, sign, hobby }) => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key).default));
    return images;
  };

  const speciesImages = importAll(
    require.context(
      "../../../public/images/species",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const signsImages = importAll(
    require.context("../../../public/images/signs", false, /\.(png|jpe?g|svg)$/)
  );
  const personalitiesImages = importAll(
    require.context(
      "../../../public/images/personalities",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const hobbyImages = importAll(
    require.context("../../../public/images/hobbies", false, /\.(png|jpe?g|svg)$/)
  );

  const handleSrc = (species, personality, sign, hobby) => {
    if (species) {
      const speciesLower = species.toLowerCase(); // lower case d/t file naming convention in lower case
      const speciesDashes = speciesLower.replace(" ", "-"); // account for 'bear cub' species
      const speciesSrc = speciesImages[`./${speciesDashes}.png`];
      if (!speciesSrc) {
        return speciesImages[`./special.png`].src; // default to special species
      }
      return speciesSrc.src;
    }
    if (personality) {
      const personalityLower = personality.toLowerCase(); // lower case d/t file naming convention in lower case
      const personalityDashes = personalityLower.replace(" ", "-"); // account for 'big sister' personality
      const personalitySrc = personalitiesImages[`./${personalityDashes}.png`];
      if (!personalitySrc) {
        return personalitiesImages[`./normal.png`]; // default to normal personality
      }
      return personalitySrc.src;
    }
    if (sign) {
      const signLower = sign.toLowerCase(); // lower case d/t file naming convention in lower case
      const signSrc = signsImages[`./${signLower}.png`];
      return signSrc.src;
    }
    if (hobby) {
      const hobbyLower = hobby.toLowerCase(); // lower case d/t file naming convention in lower case
      const hobbySrc = hobbyImages[`./${hobbyLower}.svg`];
      if (!hobbySrc) {
        return placeholder; // default to placeholder
      }
      return hobbySrc.src;
    }
    return null;
  };

  return (
    <Image
      className={className}
      src={handleSrc(species, personality, sign, hobby)}
      alt={alt}
      height={36}
      width={36}
    />
  );
};

export default VillagerIcons;
