import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyDonation from "./MyDonation";

const MyDonations = () => {
  const allDonations = useLoaderData();
  const { user } = useContext(AuthContext);

  const myDonations = allDonations.filter(
    (donation) => donation.email === user.email
  );


  // const [myRemainingCampaigns, setMyRemainingCampaigns] =
  //   useFormStatus(myCampaigns);

  return (
    <div>
      <h3 className="text-center my-6 text-3xl font-semibold">
        My <span className="font-pacifico text-green-400">Donations</span>{" "}
      </h3>
      <div className="grid grid-cols-4 container mx-auto gap-6 my-24">
        {myDonations.map((myDonation) => (
          <MyDonation key={myDonation._id} myDonation={myDonation}></MyDonation>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
