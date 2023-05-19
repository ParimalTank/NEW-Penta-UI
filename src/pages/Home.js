import React from "react";
import bag from "../assets/images/Bag.png";
import { Col, Row } from "reactstrap";
import search from "../assets/images/Vector.svg";
import arrow from "../assets/images/VectorArraw.svg";

const Home = () => {
  return (
    <section>
      <div className="home-img">
        <div className="main">
          <div className="nav-home">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <a className="navbar-brand abs logo-name text-white" href="#1">
                  Panto
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="navbar-collapse collapse justify-content-center text-center"
                  id="collapseNavbar"
                >
                  <ul className="navbar-nav navbar-menu">
                    <li className="nav-item active">
                      <a className="nav-link text-white" href="#1">
                        Furniture
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="//codeply.com">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="#myAlert"
                        data-bs-toggle="collapse"
                      >
                        About Us
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="#myAlert"
                        data-bs-toggle="collapse"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <div className="home-cart">
                        <img src={bag}></img>
                        <span className="badge rounded-circle text-bg-warning">
                          0
                        </span>
                      </div>
                    </li> 
                  </ul> */}
                </div>

                <div className="home-cart">
                  <img src={bag} alt=""></img>
                  <span className="badge rounded-circle text-bg-warning">
                    0
                  </span>
                </div>
              </div>
            </nav>
          </div>

          <div className="home-text">
            <p className="text-white home-main-text">
              Make Your Interior More <br /> Minimalistic & Modern
            </p>
            <p className="text-white home-sub-text">
              Turn your room with panto into a lot more minimalist <br /> and
              modern with ease and speed
            </p>
          </div>

          <form role="search">
            <div className="searchbar">
              <div className="searchbar-home p-2">
                <input
                  className="form-control me-2 searchbar-input"
                  type="search"
                  placeholder="Search Furniture"
                  aria-label="Search"
                />

                <div>
                  <img
                    src={search}
                    alt="search icon"
                    className="search-icon"
                  ></img>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="about-us main">
        <Row lg={4} md={2} sm={2} xs={1}>
          <Col className="about-left-texts">
            <h3>
              Why <br />
              Choosing Us
            </h3>
          </Col>
          <Col>
            <h3 className="about-texts">Luxury facilities</h3>
            <p className="about-subtext">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <h2 className="more-info">
              More Info
              <img className="about-arrow" src={arrow} alt="more"></img>
            </h2>
          </Col>
          <Col>
            <h3 className="about-texts">Affordable Price</h3>
            <p className="about-subtext">
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <h2 className="more-info">
              More Info
              <img className="about-arrow" src={arrow} alt="more"></img>
            </h2>
          </Col>
          <Col>
            <h3 className="about-texts">Many Choices</h3>
            <p className="about-subtext">
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <h2 className="more-info">
              More Info
              <img className="about-arrow" src={arrow} alt="more"></img>
            </h2>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
