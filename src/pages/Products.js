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
import Img1 from "../assets/images/1.png"
import cardAdd from "../assets/images/card-plas.svg"

const Products = () => {
  const [tab, setTab] = useState("1");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <section className="main" >
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

          <TabPane tabId="1" >
            <Row>
              <Col sm="12">
              

            <div className="">
                <Slider {...settings}>
                <div>
                    <Card className="products-card">
                        <CardImg
                            className="products-images"
                            alt="Card image cap"
                            src={Img1}
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Chair
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Sakarias Armchair
                        </CardSubtitle>
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
                                <img src={cardAdd}   alt="card-add"/>
                            </Button>
                        </div>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
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
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
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
      </div>
    </section>
  );
};

export default Products;