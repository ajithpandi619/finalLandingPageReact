import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Footer = () => {
  return (
    <div className="py-5 f-bg">
      <div className="container ">
        <div className="row gx-4">
          <div className="col-md-4">
            <h1 className="display-4 font-weight-bold text-success">
              Data Company
            </h1>
            <p className="py-4 text-light">
              Big data analytics helps companies build better customer
              relationships by understanding their preferences and
              decision-making processes. You can use this knowledge to
              streamline the customer journey, promote loyalty programs, and
              perform customer segmentation to deliver personalized marketing
              content.
            </p>
            <div className="d-flex justify-between md:w-75 my-4">
              <FaFacebookSquare className="f-ic" size={30} />
              <FaInstagram className="f-ic" size={30} />
              <FaTwitterSquare className="f-ic" size={30} />
              <FaGithubSquare className="f-ic" size={30} />
              <FaDribbbleSquare className="f-ic" size={30} />
            </div>
          </div>
          <div className="col-lg-8 mt-6 ">
            <div className="row">
              <div className="col-md-3">
                <h6 className="fw-bold text-danger">Solutions</h6>
                <ul className="list-unstyled text-light">
                  <li className="py-2 ">Analytics</li>
                  <li className="py-2">Marketing</li>
                  <li className="py-2">Commerce</li>
                  <li className="py-2">Insights</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="fw-bold text-danger">Support</h6>
                <ul className="list-unstyled text-light">
                  <li className="py-2">Pricing</li>
                  <li className="py-2">Documentation</li>
                  <li className="py-2">Guides</li>
                  <li className="py-2">API Status</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="fw-bold text-danger">Company</h6>
                <ul className="list-unstyled text-light">
                  <li className="py-2">About</li>
                  <li className="py-2">Blog</li>
                  <li className="py-2">Jobs</li>
                  <li className="py-2">Press</li>
                  <li className="py-2">Careers</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="font-bold text-danger">Legal</h6>
                <ul className="list-unstyled text-light">
                  <li className="py-2">Claim</li>
                  <li className="py-2">Policy</li>
                  <li className="py-2">Terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
