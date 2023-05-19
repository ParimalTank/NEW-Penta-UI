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
      <Row md={2} sm={2}>
        <Col>
          <div className="Img3">
            <img src={E3} alt="" />
          </div>
        </Col>
        <Col>
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

      <Row md={2} sm={2}>
        <Col>
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
        <Col>
          <Row>
            <Col>
              <div>
                <img className="M3" src={M3} alt=""></img>
                <img className="M4" src={M4} alt=""></img>
              </div>
            </Col>
            <Col>
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
