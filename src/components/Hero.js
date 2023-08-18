import React from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Hero = () => {
  return (
    <div className="text-white">
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center">
            <p className="text-success font-weight-bold mb-2">
              GROWING WITH DATA ANALYTICS
            </p>
            <h1 className="display-3 font-weight-bold mb-4">Grow with data.</h1>
            <div className="d-flex justify-content-center align-items-center">
              <p className="h2 font-weight-bold mb-3">
                Fast, flexible financing for
              </p>
              <Typed
                className="h2 font-weight-bold ms-2"
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <p className="h5 font-weight-bold text-gray-500 my-3">
              Monitor your data analytics to increase revenue for BTB, BTC,
              &amp; SASS platforms.
            </p>
            <button className="btn btn-success btn-lg rounded-pill my-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
