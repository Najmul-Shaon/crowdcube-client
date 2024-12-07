import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleCampaign = useLoaderData();
  const { photo, title, selectVal, description, amount, deadline } =
    singleCampaign;
  console.log(singleCampaign);
  // "_id": "6753f614e07c82d68959546e",
  // "photo": "https://i.ibb.co.com/zxGw5Ss/1.png",
  // "title": "Academic Advisors: Regularly",
  // "selectVal": "Business",
  // "description": "Academic Advisors: Regularly consult with your academic advisor for guidance on course selection and degree requirements.",
  // "amount": "800",
  // "deadline": "2024-12-21",
  // "email": "b@gmail.com",
  // "name": "null"

  return (
    <div className="card container mx-auto w-96 shadow-xl">
      <figure>
        <img src={photo} alt={title} />
      </figure>
      <div className="card-body">
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
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
