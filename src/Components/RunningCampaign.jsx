import React from "react";

const RunningCampaign = ({ donation }) => {
  // "id": 3,
  //   "title": "School Supplies for Orphans",
  //   "description": "Provide school supplies for orphans to support their education.",
  //   "startDate": "2024-09-01",
  //   "endDate": "2024-12-15",
  //   "goalAmount": 15000,
  //   "raisedAmount": 14000,
  //   "image": "/images/school-supplies.jpg",
  //   "status": "Active"

  const {
    title,
    description,
    startDate,
    endDate,
    goalAmount,
    raisedAmount,
    image,
    status,
  } = donation;
  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 ">
      <figure className="w-1/2 px-4">
        <img className="w-full rounded-2xl" src={image} alt={title} />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div>
          <div>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
          </div>
          <div></div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More!!</button>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
