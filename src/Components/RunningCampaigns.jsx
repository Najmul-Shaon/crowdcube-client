import { useLoaderData } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";
import TypeWriter from "./TypeWriter";

const RunningCampaigns = ({ isDarkMode }) => {
  const notExpiredDontaions = useLoaderData();

  return (
    <div className="container mx-auto my-24 p-4">
      <div className="text-center space-y-4 my-6">
        <p className="text-xl text-center">
          Running{" "}
          <span className="text-green-400 font-pacifico">Donations</span>
          {notExpiredDontaions.length}
        </p>

        <TypeWriter
          content={"Every act of kindness matters"}
          written={["Donate", "Support", "Impact", "Repeat!"]}
        ></TypeWriter>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notExpiredDontaions.map((donation) => (
          <RunningCampaign
            key={donation._id}
            donation={donation}
            isDarkMode={isDarkMode}
          ></RunningCampaign>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
