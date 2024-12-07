import React from "react";
import { Link } from "react-router-dom";

const RunningCampaign = ({ donation }) => {
  // {
  //     "_id": "6753410379458212d4d978a4",
  //     "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcamera-lense&psig=AOvVaw0YSuKSZEpNzLpcArKAJz6c&ust=1732202932296000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjJl_Wc64kDFQAAAAAdAAAAABAQ",
  //     "title": "333333",
  //     "selectVal": "Startup",
  //     "description": "qqqqq",
  //     "amount": "3",
  //     "deadline": "2024-12-20",
  //     "email": "b@gmail.com",
  //     "name": "null"
  //   }

  const { _id, photo, title, selectVal, description, amount, deadline } =
    donation;
  return (
    <div className="card card-side bg-base-100 shadow-xl border-2">
      <figure className="w-1/2 px-4">
        <img className="w-full rounded-2xl" src={photo} alt={title} />
      </figure>
      <div className="card-body w-1/2 space-y-2">
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
          <Link to={`/campaign/${_id}`} className="btn btn-sm btn-primary">
            See More!!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
