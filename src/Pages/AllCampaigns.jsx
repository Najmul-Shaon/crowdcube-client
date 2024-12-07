import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const allCampaigns = useLoaderData();

  // {
  //     "_id": "67532ccd162d800ad8360b61",
  //     "photo": "https://i.ibb.co.com/zxGw5Ss/1.png",
  //     "title": "adaff",
  //     "selectVal": "Startup",
  //     "description": "fafe",
  //     "amount": "2",
  //     "deadline": "2024-12-07",
  //     "email": "b@gmail.com",
  //     "name": "null"
  //   },

  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-center my-6 text-3xl font-semibold">
        All <span className="font-pacifico text-green-400">Campaigns</span>{" "}
        {allCampaigns.length}
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
              <th className="text-base">Create by</th>
              <th className="text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCampaigns.length === 0 ? (
              <h3>No Campaigns Available</h3>
            ) : (
              allCampaigns.map((campaign, i) => (
                <tr key={campaign._id}>
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
    </div>
  );
};

export default AllCampaigns;
