import React, { useState } from "react";
import CrewMember from "../components/CrewMember";

const Crew = () => {
  const [crew, setCrew] = useState([
    {
      name: "DOUGLAS HURLEY",
      role: "COMMANDER",
      image: "/images/crew/image-douglas-hurley.png",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "MARK SHUTTLEWORTH",
      role: "MISSION SPECIALIST",
      image: "/images/crew/image-mark-shuttleworth.png",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "VICTOR GLOVER",
      role: "PILOT",
      image: "/images/crew/image-victor-glover.png",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      name: "ANOUSHEH ANSARI",
      role: "FLIGHT ENGINEER",
      image: "/images/crew/image-anousheh-ansari.png",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ]);
  const [selectedMember, setSelectedMember] = useState(0);

  return (
    <>
      <div className="w-full flex flex-col lg:row-[2/span3]">
        <h1 className="font-body mx-auto sm:mx-0 tracking-[2.7px] lg:pl-[167px] text-sub-heading sm:pt-10 sm:pl-[39px] lg:pt-[76px] sm:tracking-[3.38px] before:mr-[18px] lg:tracking-[4.72px] before:content-['02'] lg:before:mr-7 before:opacity-25">
          MEET YOUR CREW
        </h1>
        <CrewMember
          member={crew[selectedMember]}
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
        />
      </div>
    </>
  );
};

export default Crew;
