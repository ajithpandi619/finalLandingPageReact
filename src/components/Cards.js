import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Cards = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="shadow p-4 my-4 rounded-lg text-center scale-hover">
              <img
                className="w-25 mx-auto mt-[3rem] bg-white"
                src={Single}
                alt="/"
              />
              <h2 className="h4 py-4">Single User</h2>
              <p className="h2 font-weight-bold">$149</p>
              <div className="font-medium mt-4">
                <p className="py-2 border-bottom">500 GB Storage</p>
                <p className="py-2 border-bottom">1 Granted User</p>
                <p className="py-2 border-bottom">Send up to 2 GB</p>
              </div>
              <button className="btn btn-success rounded-pill w-100 my-4">
                Start Trial
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow p-4 my-4 bg-light rounded-lg text-center scale-hover">
              <img
                className="w-25 mx-auto mt-[3rem] bg-transparent"
                src={Double}
                alt="/"
              />
              <h2 className="h4 py-4">Double User</h2>
              <p className="h2 font-weight-bold">$149</p>
              <div className="font-medium mt-4">
                <p className="py-2 border-bottom">500 GB Storage</p>
                <p className="py-2 border-bottom">2 Granted Users</p>
                <p className="py-2 border-bottom">Send up to 4 GB</p>
              </div>
              <button className="btn btn-success text-light rounded-pill w-100 my-4">
                Start Trial
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow p-4 my-4 rounded-lg text-center scale-hover">
              <img
                className="w-25 mx-auto mt-[3rem] bg-white"
                src={Triple}
                alt="/"
              />
              <h2 className="h4 py-4">Triple User</h2>
              <p className="h2 font-weight-bold">$249</p>
              <div className="font-medium mt-4">
                <p className="py-2 border-bottom">1 TB Storage</p>
                <p className="py-2 border-bottom">3 Granted Users</p>
                <p className="py-2 border-bottom">Send up to 6 GB</p>
              </div>
              <button className="btn btn-success rounded-pill w-100 my-4">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
