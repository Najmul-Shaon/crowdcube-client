import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MyCampaigns = () => {
  const allCampaigns = useLoaderData();
  const { user } = useContext(AuthContext);

  const myCampaigns = allCampaigns.filter(
    (campaign) => campaign.email === user.email
  );

  const { title, selectVal, amount, deadline } = myCampaigns;

  // console.log(allCampaigns);
  console.log(myCampaigns);
  return (
    <div className="container mx-auto">
      <h3 className="text-center my-6 text-3xl font-semibold">
        My <span className="font-pacifico text-green-400">Campaigns</span>{" "}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base">Sl</th>
              <th className="text-base">Title</th>
              <th className="text-base">Type</th>
              <th className="text-base">Amount</th>
              <th className="text-base">End Time</th>
              <th className="text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCampaigns.length === 0 ? (
              <h3>No Campaigns Available</h3>
            ) : (
              myCampaigns.map((campaign, i) => (
                <tr key={campaign._id}>
                  <th>{i + 1}</th>
                  <td>{campaign.title}</td>
                  <td>{campaign.selectVal}</td>
                  <td>${campaign.amount}</td>
                  <td>{campaign.deadline}</td>
                  <td className="space-x-2">
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="btn btn-xs btn-outline"
                    >
                      Update
                    </Link>
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="btn btn-xs btn-outline"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaigns;
