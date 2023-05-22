import React from "react";
import { Col, Row } from "reactstrap";
import E3 from "../assets/images/E3.png";
import M1 from "../assets/images/M1.png";
import M2 from "../assets/images/M2.png";
import M3 from "../assets/images/M4.png";
import M4 from "../assets/images/M3.png";
import vetorArraw from "../assets/images/VectorArraw.svg";

export const Experiences = () => {
  return (
    <div className="experiences">
      <Row>
        <Col sm={12} lg={6}>
          <div className="Img3">
            <img src={E3} alt="" className="img-fluid" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="experiences-section">
            <div>
              <h5 className="experiences-text-title">EXPERIENCE</h5>
            </div>
            <div>
              <h1 className="experiences-sub-text-title">
                We Provide You The Best Experience
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
        <Col lg={6} md={12} className="order-md-1 order-2">
          <div className="materials-section">
            <div>
              <h3 className="more-info">MATERIALS</h3>
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

        <Col lg={6} md={12} className="order-md-2 order-1 d-inline-block">
          <Row className="flex-lg-row flex-column">
            <Col>
              <div>
                <img className="M3" src={M3} alt=""></img>
                <img className="M4" src={M4} alt=""></img>
              </div>
            </Col>

            <Col className="">
              <div>
                <img className="M1" src={M1} alt="" />
                <img className="M2" src={M2} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
