import React from 'react'
import S1 from "../assets/images/S1.png"
import S2 from "../assets/images/S2.png"
import S3 from "../assets/images/S3.png"
import Slider from 'react-slick'


export const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };


  return (
    <section className='main'>
        <div className='testimonials'>
             <div>
                <h2>TESTIMONIALS</h2>
             </div>
             <div>
                Our Client Review
             </div>
             <div>
             <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src={S1} alt='' />
          </div>
          <div>
          <img src={S2} alt='' />
          </div>
          <div>
          <img src={S3} alt='' />
          </div>
        </Slider>
      </div>
             </div>
        </div>
    </section>
  )
}
