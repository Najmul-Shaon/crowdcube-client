import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const RunningCampaign = ({ donation, isDarkMode }) => {
  const { _id, photo, title, selectVal, description, amount, deadline } =
    donation;
  return (
    // <div className="card card-side bg-base-100 shadow-xl border-2 flex flex-col md:flex-row">
    <div
      className={`${
        isDarkMode ? "dark bg-stone-500 text-white" : "bg-base-100"
      } card card-side shadow-xl border-2 flex flex-col md:flex-row`}
    >
      <figure
        className="w-full md:w-1/2 px-4"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={`image of ${title}`}
      >
        <img className="w-full rounded-2xl" src={photo} alt={title} />
      </figure>
      <div className="card-body w-full md:w-1/2 space-y-2">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className=" space-x-2">
          <div>
            <button className="btn btn-sm btn-outline p-1 text-xs">
              Amount: ${amount}
            </button>

            <button className="btn btn-sm btn-outline p-1 text-xs">
              End:{deadline}
            </button>
          </div>
          <button className="btn btn-sm btn-outline p-1 text-xs">
            Support for: {selectVal}
          </button>
        </div>

        <div className="card-actions justify-end">
          <Link
            to={`/campaign/${_id}`}
            className="btn btn-sm btn-primary"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click for See Details"
          >
            See More!!
          </Link>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default RunningCampaign;
