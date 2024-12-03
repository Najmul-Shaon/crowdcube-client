import React from "react";
import { useLoaderData } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";
import TypeWriter from "./TypeWriter";

const RunningCampaigns = () => {
  const donations = useLoaderData();
  //   console.log(data.runningCampaigns);
  return (
    <div className="container mx-auto my-24">
      <div className="text-center space-y-4 my-6">
        <p className="text-xl text-center">
          Running{" "}
          <span className="text-green-400 font-pacifico">Donations</span>
          {donations.runningCampaigns.length}
        </p>

        <TypeWriter></TypeWriter>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {donations.runningCampaigns.map((donation) => (
          <RunningCampaign donation={donation}></RunningCampaign>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
