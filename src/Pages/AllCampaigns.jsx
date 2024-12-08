import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const AllCampaigns = () => {
  const data = useLoaderData();

  const [sort, setSort] = useState("");
  // console.log(sort);

  const [allCampaigns, SetAllCampaigns] = useState(data);

  useEffect(() => {
    fetch(`http://localhost:5000/allCampaigns?sort=${sort}`).then((res) =>
      res.json().then((data) => {
        SetAllCampaigns(data);
      })
    );
  }, [sort]);

  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-center my-6 text-3xl font-semibold">
        All <span className="font-pacifico text-green-400">Campaigns</span>
      </h3>
      <div className="flex justify-end">
        <button
          onClick={() => setSort("sortViaAmount")}
          className="btn btn-outline text-green-400"
        >
          Sort by Amount
        </button>
      </div>
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
              <th className="text-base">Create by</th>
              <th className="text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCampaigns.length === 0 ? (
              <h3>No Campaigns Available</h3>
            ) : (
              allCampaigns.map((campaign, i) => (
                <tr
                  key={campaign._id}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={campaign.title}
                  className="hover:bg-gray-200"
                >
                  <th>{i + 1}</th>
                  <td>{campaign.title}</td>
                  <td>{campaign.selectVal}</td>
                  <td>${campaign.amount}</td>
                  <td>{campaign.deadline}</td>
                  <td>{campaign.email}</td>
                  <td>
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="btn btn-sm btn-outline"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default AllCampaigns;
