import React from "react";
import { Col, Row } from "reactstrap";
import M1 from "../assets/images/M1.svg";
import M2 from "../assets/images/M2.svg";
import vetorArraw from "../assets/images/VectorArraw.svg";

export const Experiences = () => {
  return (
    <div className="experiences">
      <Row>
        <Col sm={12} lg={6}>
          <div className="Img3">
            <img className="M1 img-fluid" src={M1} alt="" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="experiences-section">
            <div>
              <h5 className="experiences-text-title">EXPERIENCE</h5>
            </div>
            <div>
              <h1 className="experiences-sub-text-title">
                We Provide You The <br /> Best Experience
              </h1>
            </div>
            <div>
              <h4 className="experiences-sub-text-description">
                You don't have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </h4>
            </div>

            <div>
              <h2 className="more-info">
                More Info
                <img className="about-arrow" src={vetorArraw} alt="more"></img>
              </h2>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {/* order-lg-1 order-2 */}
        <Col lg={6} md={12} className="order-lg-1 order-2">
          <div className="materials-section">
            <div>
              <h3 className="materials-text-main">MATERIALS</h3>
            </div>
            <div>
              <h1 className="materials-text">
                Very serious materials for making furniture
              </h1>
            </div>
            <div>
              <h4 className="material-text">
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </h4>
            </div>

            <div>
              <h2 className="more-info">
                More Info
                <img className="about-arrow" src={vetorArraw} alt="more"></img>
              </h2>
            </div>
          </div>
        </Col>

        <Col lg={6} md={12} className="order-lg-2 order-1 d-inline-block">
          <Row className="flex-lg-row flex-column">
            <Col className="">
              <div>
                <img className="M2 img-fluid" src={M2} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
