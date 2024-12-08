import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import profilePic from "../assets/profile.webp";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoIosHeartHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import "animate.css";

const Team = ({ isDarkMode }) => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center mt-12 mb-4">
          <button className="btn btn-outline rounded-full text-4xl shadow-lg">
            <MdKeyboardDoubleArrowDown></MdKeyboardDoubleArrowDown>
          </button>
        </div>
        <div className="flex items-center space-x-2 justify-center my-6">
          <IoIosHeartHalf className="text-red-500 text-xl"></IoIosHeartHalf>
          <h3 className="uppercase text-green-400 font-semibold text-xl">
            We Change Your Life & World
          </h3>
        </div>
        <h1 className="text-4xl uppercase text-black font-bold text-center">
          Most <span className="text-green-400 font-pacifico">Passionate </span>{" "}
          Volunteers
        </h1>
        <p className="text-lg font-normal text-black/60 w-10/12 text-center">
          The master-builder of human happiness no one rejects, dislikes or
          avoids pleasure itself pleasure,
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 mx-auto w-10/12">
        <div
          data-aos="zoom-in-down"
          className={`${
            isDarkMode ? "dark bg-stone-500 text-white" : "bg-base-100"
          } card shadow-xl`}
        >
          {/* <div data-aos="zoom-in-down" className="card bg-base-100 shadow-xl"> */}
          <figure className="p-5">
            <img src={profilePic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Najmul Shaon</h2>
            <div className="flex items-center space-x-6 mt-4">
              <TiSocialTwitter className="text-3xl"></TiSocialTwitter>
              <TiSocialFacebook className="text-3xl"></TiSocialFacebook>
              <SlSocialInstagram className="text-3xl"></SlSocialInstagram>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className={`${
            isDarkMode ? "dark bg-stone-500 text-white" : "bg-base-100"
          } card shadow-xl`}
        >
          <figure className="p-5">
            <img src={profilePic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Najmul Shaon</h2>
            <div className="flex items-center space-x-6 mt-4">
              <TiSocialTwitter className="text-3xl"></TiSocialTwitter>
              <TiSocialFacebook className="text-3xl"></TiSocialFacebook>
              <SlSocialInstagram className="text-3xl"></SlSocialInstagram>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className={`${
            isDarkMode ? "dark bg-stone-500 text-white" : "bg-base-100"
          } card shadow-xl`}
        >
          <figure className="p-5">
            <img src={profilePic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Najmul Shaon</h2>
            <div className="flex items-center space-x-6 mt-4">
              <TiSocialTwitter className="text-3xl"></TiSocialTwitter>
              <TiSocialFacebook className="text-3xl"></TiSocialFacebook>
              <SlSocialInstagram className="text-3xl"></SlSocialInstagram>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <Link className="btn bg-green-400 border-none text-white font-semibold text-lg animate__animated animate__pulse animate__duration-3s">
          See All Volunteers
        </Link>
      </div>
    </div>
  );
};

export default Team;
