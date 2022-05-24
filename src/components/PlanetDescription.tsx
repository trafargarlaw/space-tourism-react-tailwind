import { useState } from "react";

interface DescriptionProps {
  selectedPlanet: {
    name: string;
    planetDescription: string;
    distance: string;
    travelTime: string;
  };
  setSelectedPlanet: React.Dispatch<
    React.SetStateAction<{
      name: string;
      planetDescription: string;
      distance: string;
      travelTime: string;
    }>
  >;
}

const PlanetDescription: React.FC<DescriptionProps> = ({
  selectedPlanet,
  setSelectedPlanet,
}) => {
  const [planetInfo] = useState([
    {
      name: "MOON",
      planetDescription: `See our planet as you’ve never seen it before. A perfect relaxing trip
    away to help regain perspective and come back refreshed. While you’re
    there, take in some history by visiting the Luna 2 and Apollo 11
    landing sites.`,
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    {
      name: "MARS",
      planetDescription: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    {
      name: "EUROPA",
      planetDescription: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    {
      name: "TITAN",
      planetDescription: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  ]);

  return (
    <div className="self-center flex text-center lg:text-left flex-col sm:mt-[53px] lg:mt-0">
      <ul className="flex h-[34px] self-center lg:self-start w-full justify-between max-w-[285px] font-body">
        <li
          className={`h-full hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full  ${
            selectedPlanet.name === "MOON" &&
            "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full"
          }`}
        >
          <button
            className=" tracking-[2.7px] "
            onClick={(e) => {
              let planet = planetInfo.find(
                (info) => info.name === e.currentTarget.innerText
              );
              setSelectedPlanet(planet!);
            }}
          >
            MOON
          </button>
        </li>
        <li
          className={`h-full hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full  ${
            selectedPlanet.name === "MARS" &&
            "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full"
          }`}
        >
          <button
            className=" tracking-[2.7px] "
            onClick={(e) => {
              let planet = planetInfo.find(
                (info) =>
                  info.name.toLowerCase() ===
                  e.currentTarget.innerText.toLowerCase()
              );

              setSelectedPlanet(planet!);
            }}
          >
            MARS
          </button>
        </li>
        <li
          className={`h-full hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full  ${
            selectedPlanet.name === "EUROPA" &&
            "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full"
          }`}
        >
          <button
            className=" tracking-[2.7px] "
            onClick={(e) => {
              let planet = planetInfo.find(
                (info) =>
                  info.name.toLowerCase() ===
                  e.currentTarget.innerText.toLowerCase()
              );

              setSelectedPlanet(planet!);
            }}
          >
            EUROPA
          </button>
        </li>
        <li
          className={`h-full hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full ${
            selectedPlanet.name === "TITAN" &&
            "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full"
          }`}
        >
          <button
            className=" tracking-[2.7px] "
            onClick={(e) => {
              let planet = planetInfo.find(
                (info) =>
                  info.name.toLowerCase() ===
                  e.currentTarget.innerText.toLowerCase()
              );

              setSelectedPlanet(planet!);
            }}
          >
            TITAN
          </button>
        </li>
      </ul>
      <h1 className="font-heading text-planet-name leading-[1] mb-[15px] mt-[22px] sm:mt-[32px] lg:mt-[52px] text-white">
        {selectedPlanet.name}
      </h1>
      <p className="font-barlow mb-[20px] lg:text-[18px] max-w-[36ch] sm:max-w-[53ch] lg:max-w-[43ch] sm:leading-[28px] lg:leading-[32px] text-primaryLightBlue">
        {selectedPlanet.planetDescription}
      </p>
      <hr className="border-[#383B4B]" />
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-[79px] justify-center lg:justify-start mt-7">
        <div className="flex flex-col  gap-[12px]">
          <span className="text-[14px] tracking-[2.36px] font-body text-primaryLightBlue">
            AVG. DISTANCE
          </span>
          <span className="text-[28px] font-heading leading-[1]">
            {selectedPlanet.distance}
          </span>
        </div>
        <div className="flex flex-col gap-[12px]">
          <span className="text-[14px] tracking-[2.36px] font-body text-primaryLightBlue">
            EST. TRAVEL TIME
          </span>
          <span className="text-[28px] font-heading leading-[1]">
            {selectedPlanet.travelTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanetDescription;
