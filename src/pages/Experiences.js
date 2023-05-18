import React from 'react'
import { Col, Row } from 'reactstrap'
import E1 from "../assets/images/E1.png"
import E2 from "../assets/images/E2.png"
import E3 from "../assets/images/E3.png"
import M1 from "../assets/images/M1.png"
import M2 from "../assets/images/M2.png"
import M3 from "../assets/images/M4.png"
import M4 from "../assets/images/M3.png"
import vetorArraw from "../assets/images/VectorArraw.svg"

export const Experiences = () => {
  return (
    <div className='main experiences'>
      <Row>
        <Col>
             <img className='Img1' src={E1} alt='' />
             <img className='Img3' src={E3} alt='' />
             <img className='Img2' src={E2} alt='' />
        </Col>
        <Col>
          <div>
           <h3>EXPERIENCE</h3>
          </div>
           <div>
             <h1>We Provide You The Best Experience</h1>
           </div>
           <div>
              <h4>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</h4>
           </div>

           <div>
           <h2 className="about-info" >More Info<img className="about-arrow" src={vetorArraw} alt="more"></img></h2>
           </div>
        </Col>
      </Row>

      <Row>
         <Col>
          <div>
            <h3>MATERIALS</h3>
            </div>
            <div>
              <h1>Very serious materials for making furniture</h1>
            </div>
            <div>
                <h4>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</h4>
            </div>

            <div>
            <h2 className="about-info" >More Info<img className="about-arrow" src={vetorArraw} alt="more"></img></h2>
            </div>
         </Col>
         <Col>
             <Row>
                <Col>
                  <div>
                     <img className='M3' src={M3} alt=''></img>
                     <img className='M4' src={M4} alt=''></img>
                  </div>
                </Col>
                <Col>
                <div>
                  <img className='M1' src={M1} alt='' />
                  <img className='M2' src={M2} alt='' />
                </div>
                </Col>
             </Row>
             
         </Col>
      </Row>
    </div>
  )
}