import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" text-center lg:text-left mx-6 sm:mt-[106px] sm:items-end  flex flex-col justify-between lg:flex-row lg:mx-[165px] flex-wrap lg:justify-between">
        <div className=" mx-auto lg:mx-0 ">
          <h5 className="lg:text-[27px] font-body sm:text-[20px] tracking-[2.7px] sm:tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="font-heading text-space  text-white">SPACE</h1>
          <p className="text-planet-description max-w-[43ch] font-barlow leading-7 lg:leading-9">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to={"/destination"}
          className="rounded-[50%] hover:shadow-explore transition-[box-shadow] duration-300 self-end sm:self-auto mx-auto lg:mx-0  lg:mt-0 w-[150px] h-[150px] sm:h-[242px] sm:w-[242px] lg:h-[274px] lg:w-[274px] text-Explore text-primaryDarkBlue bg-white flex justify-center items-center"
        >
          EXPLORE
        </Link>
      </div>
    </>
  );
};

export default Home;
