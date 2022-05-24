import { useState } from "react";
import PlanetContainer from "../components/PlanetContainer";
import PlanetDescription from "../components/PlanetDescription";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState({
    name: "MOON",
    planetDescription: `See our planet as you’ve never seen it before. A perfect relaxing trip
  away to help regain perspective and come back refreshed. While you’re
  there, take in some history by visiting the Luna 2 and Apollo 11
  landing sites.`,
    distance: "384,400 km",
    travelTime: "3 DAYS",
  });

  return (
    <div className=" w-full flex flex-col  sm:justify-between">
      <h1 className="font-body mx-auto sm:mx-0 tracking-[2.7px] lg:pl-[167px] text-sub-heading sm:pt-10 sm:pl-[39px] lg:pt-[76px] sm:tracking-[3.38px] before:mr-[18px] lg:tracking-[4.72px] before:content-['01'] lg:before:mr-7 before:opacity-25">
        PICK YOUR DESTINATION
      </h1>
      <div className="flex flex-col lg:max-w-[1047px]  mx-auto lg:flex-row mt-8 sm:mt-[60px] lg:mt-0 justify-between w-full">
        <PlanetContainer planetName={selectedPlanet.name} />
        <PlanetDescription
          selectedPlanet={selectedPlanet}
          setSelectedPlanet={setSelectedPlanet}
        />
      </div>
    </div>
  );
};

export default Destination;
