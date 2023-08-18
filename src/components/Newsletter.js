import React from "react";

const Newsletter = () => {
  return (
    <div className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 my-4">
            <h1 className="display-4 fw-bold mb-3">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="col-lg-4 my-4">
            <div className="d-flex flex-column">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter Email"
                />
                <button className="btn btn-success rounded-pill ms-3">
                  Notify Me
                </button>
              </div>
              <p className="mb-0">
                We care about the protection of your data. Read our{" "}
                <span className="text-success">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
