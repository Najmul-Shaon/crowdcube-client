import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const { id } = useParams();
  const [selectVal, SetSelectVal] = useState("");
  const { user } = useContext(AuthContext);

  const data = useLoaderData();

  const { amount, deadline, description, photo, title } = data;
  // amount: "1111";
  // deadline: "2025-01-09";
  // description: "Academic Advisors: Regularly consult with your academic advisor for guidance on course selection and degree requirements.";
  // email: "c@gmail.com";
  // name: "null";
  // photo: "https://i.ibb.co.com/TPsNWPt/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg";
  // selectVal: "Personal Issue";
  // title: "fadfadf ";
  // _id: "675464b0dbd896ca8d250442";

  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const photo = form.get("photo");
    const title = form.get("title");
    const description = form.get("description");
    const amount = form.get("amount");
    const deadline = form.get("deadline");
    const email = form.get("email");
    const name = form.get("name");

    const newCampaign = {
      photo,
      title,
      selectVal,
      description,
      amount,
      deadline,
      email,
      name,
    };

    fetch(`http://localhost:5000/myCampaigns/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Campaign Update Successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    console.log(newCampaign);
  };

  const handleSelect = (e) => {
    SetSelectVal(e.target.value);
  };
  return (
    <div className="hero mt-12 min-h-screen container mx-auto my-48">
      <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
        <h3 className="text-center my-6 text-3xl font-semibold">
          <span className="text-green-400 font-pacifico">Update</span> Campaign:
        </h3>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                defaultValue={photo}
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
                defaultValue={title}
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
                defaultValue={description}
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
                defaultValue={amount}
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
                defaultValue={deadline}
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
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
