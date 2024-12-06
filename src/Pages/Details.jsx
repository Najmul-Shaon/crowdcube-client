const Details = () => {
  //  {
  //       "id": 1,
  //       "title": "Flood Relief for Noakhali",
  //       "description": "Help provide essential supplies and support for flood-affected families in Noakhali, Bangladesh.",
  //       "startDate": "2024-11-01",
  //       "endDate": "2024-12-31",
  //       "goalAmount": 50000,
  //       "raisedAmount": 23000,
  //       "image": "https://i.ibb.co.com/KKGVJ8B/donate-image.jpg",
  //       "status": "Active"
  //     },

  return (
    <div className="card container mx-auto w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
