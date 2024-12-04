import { FaHandHoldingHeart } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-12 mb-4">
        <button className="btn btn-outline rounded-full text-4xl shadow-lg">
          <MdKeyboardDoubleArrowDown></MdKeyboardDoubleArrowDown>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2 justify-center my-6">
          <FaHandHoldingHeart className="text-red-500 text-xl"></FaHandHoldingHeart>
          <h3 className="uppercase text-green-400 font-semibold text-xl ">
            about foundation
          </h3>
        </div>
        <h1 className="text-4xl uppercase text-black font-bold text-center">
          We are always there others need help
        </h1>
        <p className="text-lg font-normal text-black/60 w-10/12 text-center">
          In times of crisis, every small act of kindness makes a big
          difference. Our mission is to connect generous hearts with those in
          need, fostering hope and resilience. Together, we can create a
          brighter future for communities facing challenges. Join us in making a
          lasting impact.
        </p>
      </div>
      <div className="space-x-6 flex flex-col md:flex-row gap-6 justify-center my-6 w-10/12 mx-auto">
        <button className="btn btn-outline uppercase text-base font-semibold text-red-400">
          About Foundation
        </button>
        <button className="btn btn-outline uppercase text-base font-semibold text-green-400">
          Our Mission
        </button>
        <button className="btn btn-outline uppercase text-base font-semibold text-green-400">
          Our Vission
        </button>
      </div>
    </div>
  );
};

export default About;
