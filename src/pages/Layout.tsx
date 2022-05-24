import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutTemplate = ({ children }: any) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-slate-500 text-primaryLightBlue bg-${pathname}-mobile sm:bg-${pathname}-tablet lg:bg-${pathname}-desktop min-h-full h-[initial] grid grid-cols-1  lg:grid-rows-[136px,1fr,131px] sm:grid-rows-[96px,1fr,] grid-rows-[112px,1fr,48px]  bg-no-repeat bg-cover`}
    >
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default LayoutTemplate;
