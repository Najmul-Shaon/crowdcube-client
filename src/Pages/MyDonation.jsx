const MyDonation = ({ myDonation }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={myDonation.photo} alt={myDonation.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{myDonation.title}</h2>
        <p>{myDonation.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{myDonation.deadline}</div>
          <div className="badge badge-outline">{myDonation.selectVal}</div>
          <div className="badge badge-outline">${myDonation.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default MyDonation;
