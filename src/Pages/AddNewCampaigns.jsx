import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddNewCampaigns = () => {
  const { user } = useContext(AuthContext);

  const [selectVal, SetSelectVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const photo = form.get("photo");
    const title = form.get("title");
    const description = form.get("description");
    const amount = form.get("amount");
    const deadline = form.get("deadline");
    const email = form.get("email");
    const name = form.get("name");
    reset();
    console.log({
      photo,
      title,
      selectVal,
      description,
      amount,
      deadline,
      email,
      name,
    });
  };

  const handleSelect = (e) => {
    SetSelectVal(e.target.value);
  };

  return (
    <div className="hero mt-12 min-h-screen container mx-auto my-48">
      <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
        <h3 className="text-center my-6 text-3xl font-semibold">
          Publish a <span className="text-green-400 font-pacifico">New</span>{" "}
          Campaign:
        </h3>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter your campaign title here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Campaign Type</span>
              </label>
              <select
                onChange={handleSelect}
                className="select select-bordered"
                required
              >
                <option>Select item type</option>
                <option value={"Personal Issue"}>Personal Issue</option>
                <option value={"Startup"}>Startup</option>
                <option value={"Business"}>Business</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Min Donation Amount</span>
              </label>
              <input
                type="number"
                name="amount"
                placeholder="Enter Min Donation Amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={`${user.email}`}
                placeholder="email"
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={`${user && user.displayName}`}
                placeholder="name"
                className="input input-bordered"
                readOnly
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaigns;
