import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Team from "../Components/Team";
import RunningCampaigns from "../Components/RunningCampaigns";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <RunningCampaigns></RunningCampaigns>
      <About></About>
      <Team></Team>
    </>
  );
};

export default Home;
