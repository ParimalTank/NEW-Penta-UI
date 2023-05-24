import React, { useState } from "react";
import Slider from "react-slick";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import vetorArraw from "../assets/images/VectorArraw.svg";
import cardAdd from "../assets/images/card-plas.svg";

const Products = () => {
  const [tab, setTab] = useState("1");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="products-section">
      <section className="main">
        <div className="products-main">
          <h3>Best Selling Products</h3>
        </div>
        <div>
          <div className="products">
            <Nav tabs className="products-nav">
              <NavItem>
                <NavLink
                  className={tab === "1" ? "active-tab" : ""}
                  onClick={() => setTab("1")}
                >
                  Char
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={tab === "2" ? "active-tab" : ""}
                  onClick={() => setTab("2")}
                >
                  Beds
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={`${tab === "3" ? "active-tab" : ""}`}
                  onClick={() => setTab("3")}
                >
                  Sofa
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={`${tab === "4" ? "active-tab" : ""}`}
                  onClick={() => setTab("4")}
                >
                  Lamp
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab={tab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div className="product-slider">
                    <Slider {...settings}>
                      <div>
                        <Card className="products-card">
                          <div className="d-flex justify-content-center align-items-center">
                            <CardImg
                              className="products-images"
                              alt="Card image cap"
                              src={Img1}
                            />
                          </div>

                          <CardBody>
                            <CardSubtitle
                              className="mb-2 text-muted products-sub-text"
                              tag="h6"
                            >
                              Chair
                            </CardSubtitle>
                            <CardTitle className="products-card-text" tag="h5">
                              Sakarias Armchair
                            </CardTitle>
                            <CardText>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                            </CardText>

                            <div className="product-card-price-btn">
                              <h4 className="price">$392</h4>
                              <Button className="product-add">
                                <img src={cardAdd} alt="card-add" />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                      <div>
                        <Card className="products-card">
                          <div className="d-flex justify-content-center align-items-center">
                            <CardImg
                              className="products-images"
                              alt="Card image cap"
                              src={Img2}
                            />
                          </div>
                          <CardBody>
                            <CardSubtitle
                              className="mb-2 text-muted products-sub-text"
                              tag="h6"
                            >
                              Chair
                            </CardSubtitle>
                            <CardTitle tag="h5">Baltsar Chair</CardTitle>
                            <CardText>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                            </CardText>

                            <div className="product-card-price-btn">
                              <h4 className="price">$392</h4>
                              <Button className="product-add">
                                <img src={cardAdd} alt="card-add" />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>

                      <div>
                        <Card className="products-card">
                          <div className="d-flex justify-content-center align-items-center">
                            <CardImg
                              className="products-images"
                              alt="Card image cap"
                              src={Img3}
                            />
                          </div>
                          <CardBody>
                            <CardSubtitle
                              className="mb-2 text-muted products-sub-text"
                              tag="h6"
                            >
                              Chair
                            </CardSubtitle>
                            <CardTitle className="products-card-text" tag="h5">
                              Baltsar Chair
                            </CardTitle>
                            <CardText>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                            </CardText>

                            <div className="product-card-price-btn">
                              <h4 className="price">$392</h4>
                              <Button className="product-add">
                                <img src={cardAdd} alt="card-add" />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>

                      <div>
                        <Card className="products-card">
                          <div className="d-flex justify-content-center align-items-center">
                            <CardImg
                              className="products-images"
                              alt="Card image cap"
                              src={Img4}
                            />
                          </div>
                          <CardBody>
                            <CardSubtitle
                              className="mb-2 text-muted products-sub-text"
                              tag="h6"
                            >
                              Chair
                            </CardSubtitle>
                            <CardTitle className="products-card-text" tag="h5">
                              Anjay Chair
                            </CardTitle>
                            <CardText>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                            </CardText>

                            <div className="product-card-price-btn">
                              <h4 className="price">$392</h4>
                              <Button className="product-add">
                                <img src={cardAdd} alt="card-add" />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>

                      <div>
                        <Card className="products-card">
                          <div className="d-flex justify-content-center align-items-center">
                            <CardImg
                              className="products-images"
                              alt="Card image cap"
                              src={Img4}
                            />
                          </div>
                          <CardBody>
                            <CardSubtitle
                              className="mb-2 text-muted products-sub-text"
                              tag="h6"
                            >
                              Chair
                            </CardSubtitle>
                            <CardTitle className="products-card-text" tag="h5">
                              Anjay Chair
                            </CardTitle>
                            <CardText>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                            </CardText>

                            <div className="product-card-price-btn">
                              <h4 className="price">$392</h4>
                              <Button className="product-add">
                                <img src={cardAdd} alt="card-add" />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Slider>
                  </div>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Chairs</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Chairs</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>

          <div className="d-flex justify-content-center align-item-center">
            <h3 className="products-view">View All</h3>
            <img className="product-vector" src={vetorArraw} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
