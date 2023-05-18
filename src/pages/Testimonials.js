import React from "react";
import S1 from "../assets/images/S1.png";
import S2 from "../assets/images/S2.png";
import S3 from "../assets/images/S3.png";
import Slider from "react-slick";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import P1 from "../assets/images/P1.svg";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.svg";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const CardDataArray = [
    {
      image: P1,
      userName: "Bang Upin",
      position: "Pedagang Asongan",
      testimonial: `“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“`,
    },
    {
      image: P2,
      userName: "Ibuk Sukijan",
      position: "Ibu Rumah Tangga",
      testimonial: `“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“`,
    },
    {
      image: P3,
      userName: "Mpok Ina",
      position: "Karyawan Swasta",
      testimonial: `“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“`,
    },
  ];

  return (
    <section className="main">
      <div className="testimonials">
        <h6 className="testimonials-title">TESTIMONIALS</h6>

        <div className="client-review-section text-center">
          Our Client Review
        </div>

        <div className="testimonial-slider">
          <Slider {...settings}>
            <div className="testimonial-image1">
              <div className="card-data text-center">
                <CardImg
                  className="testimonial-images"
                  alt="Card image cap"
                  src={P1}
                />
                <CardBody>
                  <CardTitle tag="h5">Bang Upin</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Pedagang Asongan
                  </CardSubtitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                    terlihat mahal“
                  </CardSubtitle>

                  <CardText>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </CardText>
                </CardBody>
              </div>
            </div>

            <div className="testimonial-image2">
              <div className="card-data text-center">
                <CardImg
                  className="testimonial-images"
                  alt="Card image cap"
                  src={P2}
                />
                <CardBody>
                  <CardTitle tag="h5">Ibuk Sukijan</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Karyawan Swasta
                  </CardSubtitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    “Makasih Panto, aku sekarang berasa tinggal di apartment
                    karena barang-barang yang terlihat mewah“
                  </CardSubtitle>

                  <CardText>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </CardText>
                </CardBody>
              </div>
            </div>

            <div className="testimonial-image3">
              <div className="card-data text-center">
                <CardImg
                  className="testimonial-images"
                  alt="Card image cap"
                  src={P3}
                />
                <CardBody>
                  <CardTitle tag="h5">Mpok Ina</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Pedagang Asongan
                  </CardSubtitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    “Sangat terjangkau untuk kantong saya yang tidak terlalu
                    banyak“
                  </CardSubtitle>

                  <CardText>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </CardText>
                </CardBody>
              </div>
            </div>

            <div></div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
