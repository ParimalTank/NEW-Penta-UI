import React from "react";
import { Col, Row } from "reactstrap";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/Twitter.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Row lg={4} md={2} sm={2} xs={1}>
          <Col>
            <div className="footer-left">
              <h1 className="footer-logo">Panto</h1>
              <h3 className="footer-subtext">
                The advantage of hiring a workspace with us is that givees you
                comfortable service and all-around facilities.
              </h3>
            </div>
          </Col>
          <Col>
            <ul className="footer-service">
              <li className="footer-services">Service</li>
              <div className="f-service">
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
              </div>
            </ul>
          </Col>
          <Col>
            <ul className="footer-service">
              <li className="footer-services">Furniture</li>
              <div className="f-service">
                <li>Beds</li>
                <li>Chairs</li>
                <li>All</li>
              </div>
            </ul>
          </Col>
          <Col>
            <ul className="footer-service">
              <li className="footer-services">Follow Us</li>
              <div className="f-service">
                <li>
                  <img className="follow-us" src={facebook} alt="" />
                  Facebook
                </li>
                <li>
                  <img className="follow-us" src={twitter} alt="" />
                  Twitter
                </li>
                <li>
                  <img className="follow-us" src={instagram} alt="" />
                  Instagram
                </li>
              </div>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="footer-copyright">
        <div>
          <h6 className="copyright">Copyright &#169; 2021</h6>
        </div>
        <div className="d-flex">
          <h6 className="term-condition">Terms & Conditions</h6>
          <h6 className="privacy-policy">Privacy Policy</h6>
        </div>
      </div>
    </div>
  );
};
