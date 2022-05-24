import { useState } from "react";

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState({
    id: 1,
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageName: "image-launch-vehicle",
  });
  const [technologies, setTechnologies] = useState([
    {
      id: 1,
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imageName: "image-launch-vehicle",
    },
    {
      id: 2,
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      imageName: "image-spaceport",
    },
    {
      id: 3,
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imageName: "image-space-capsule",
    },
  ]);
  return (
    <div className=" w-full">
      <h1 className="font-body text-center sm:text-left mx-auto sm:mx-0 tracking-[2.7px] lg:pl-[167px] text-sub-heading sm:pt-10 sm:pl-[39px] lg:pt-[76px] sm:tracking-[3.38px] before:mr-[18px] lg:tracking-[4.72px] before:content-['03'] lg:before:mr-7 before:opacity-25">
        SPACE LAUNCH 101
      </h1>
      <div className="lg:pl-[165px] lg:flex lg:justify-between lg:flex-row-reverse">
        <div
          className={`mt-[32px] w-full lg:w-[515px] lg:h-[527px]  bg-[url('/images/technology/${selectedTech.imageName}-landscape.jpg')] lg:bg-[url('/images/technology/${selectedTech.imageName}-portrait.jpg')] bg-cover bg-no-repeat h-[170px] sm:h-[310px]`}
        ></div>
        <div className="mt-[34px] lg:self-center lg:gap-20   lg:flex">
          <ul className="flex lg:flex-col font-heading items-center w-full lg:w-auto justify-center lg:justify-start gap-4 lg:gap-8 mb-[26px] sm:mb-[44px] lg:mb-0">
            <li>
              <button
                className={`h-10 w-10 sm:h-[60px] sm:w-[60px] rounded-[50%] border border-white border-opacity-25 hover:border-opacity-100 ${
                  selectedTech.id === 1 && "bg-white text-primaryDarkBlue"
                } `}
                onClick={(e) => {
                  setSelectedTech(technologies[0]);
                }}
              >
                1
              </button>
            </li>
            <li>
              <button
                className={`h-10 w-10 sm:h-[60px] sm:w-[60px] rounded-[50%] border border-white border-opacity-25 hover:border-opacity-100  ${
                  selectedTech.id === 2 && "bg-white text-primaryDarkBlue"
                } `}
                onClick={(e) => {
                  setSelectedTech(technologies[1]);
                }}
              >
                2
              </button>
            </li>
            <li>
              <button
                className={`h-10 w-10 sm:h-[60px] sm:w-[60px] rounded-[50%] border border-white border-opacity-25 hover:border-opacity-100 ${
                  selectedTech.id === 3 && "bg-white text-primaryDarkBlue"
                } `}
                onClick={(e) => {
                  setSelectedTech(technologies[2]);
                }}
              >
                3
              </button>
            </li>
          </ul>

          <div className="text-center lg:mb-[62px] lg:self-start lg:text-left flex flex-col sm:flex-col-reverse">
            <div>
              <h2 className="font-body tracking-[2.36px] text-primaryLightBlue text-[14px]">
                THE TERMINOLOGY…
              </h2>
              <h1 className="font-heading text-astronaute-name">
                LAUNCH VEHICLE
              </h1>
              <p className="font-barlow mt-4 mx-auto text-planet-description max-w-[40ch] sm:max-w-[51ch] lg:mx-0 lg:max-w-[43.9ch]">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
