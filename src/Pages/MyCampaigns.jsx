const MyCampaigns = () => {
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
              <th className="text-base">End Time</th>
              <th className="text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaigns;
