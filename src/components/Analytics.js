import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-light py-0">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid  mx-auto d-block my-5"
              src={Laptop}
              alt="/"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="text-success fw-bold mb-2">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="display-4 fw-bold mb-3">
              Manage Data Analytics Centrally
            </h1>
            <p>
              As highly visual representations of data, analytics dashboards are
              used to monitor situations where the data is constantly changing.
              By utilizing the human brain’s natural desire for visual
              information, they enable executives to easily get an instant
              overview of large volumes of data.
            </p>
            <button className="btn btn-outline-dark btn-lg rounded-pill my-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
