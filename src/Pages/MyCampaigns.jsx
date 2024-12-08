import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import Swal from "sweetalert2";

const MyCampaigns = () => {
  const allCampaigns = useLoaderData();
  const { user } = useContext(AuthContext);

  const myCampaigns = allCampaigns.filter(
    (campaign) => campaign.email === user.email
  );

  const [myRemainingCampaigns, setMyRemainingCampaigns] = useState(myCampaigns);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowncube-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });

              const remainingCampaigns = myRemainingCampaigns.filter(
                (myRemainingCampaign) => myRemainingCampaign._id !== id
              );
              setMyRemainingCampaigns(remainingCampaigns);
            }
          });
      }
    });
  };

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
              <th className="text-base">Create by</th>
              <th className="text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myRemainingCampaigns.length === 0 ? (
              <h3 className="text-center">No Campaigns Available</h3>
            ) : (
              myRemainingCampaigns.map((campaign, i) => (
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
                  <td className="space-x-2 flex items-center">
                    <Link
                      to={`update/${campaign._id}`}
                      className="btn btn-sm btn-outline text-xl bg-green-400 text-white"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Update"
                    >
                      <HiDotsVertical></HiDotsVertical>
                    </Link>
                    <Link
                      onClick={() => handleDelete(campaign._id)}
                      className="btn btn-sm btn-outline text-xl bg-orange-600 text-white"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                    >
                      <AiOutlineDelete></AiOutlineDelete>
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
