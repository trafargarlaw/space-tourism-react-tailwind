import { Canvas } from "@react-three/fiber";

import Planet from "./Planet";

interface PlanetProps {
  planetName: string;
}

const PlanetContainer: React.FC<PlanetProps> = ({ planetName }) => {
  return (
    <div className="flex self-center justify-center items-center basis-[50%] lg:self-end">
      {/* <img
        className="h-[170px] w-[170px] sm:h-[300px] sm:w-[300px] lg:w-[445px] lg:h-[445px] mb-[26px] sm:mb-0"
        src={`/images/destination/image-${planet}.png`}
        alt={planet}
      /> */}
      <div className="h-[170px] w-[170px] sm:h-[300px] sm:w-[300px] lg:w-[445px] lg:h-[445px] mb-[26px] sm:mb-0">
        <Canvas>
          <Planet planetName={planetName} />
        </Canvas>
      </div>
    </div>
  );
};

export default PlanetContainer;
