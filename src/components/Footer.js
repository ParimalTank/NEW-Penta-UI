import React from 'react'
import { Col, Row } from 'reactstrap'
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import twitter from "../assets/images/Twitter.svg"

export const Footer = () => {
  return (
    <div className='main footer'>
        <div>
             <Row>
                 <Col>
                   <div className='footer-left'>
                    <h1 className='footer-logo'>Panto</h1>
                    <h3 className='footer-subtext'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</h3>
                   </div>
                 </Col>
                 <Col>
                    <ul className='footer-service'>
                        <li className='footer-services'>Service</li>
                        <li>Email Marketing</li>
                        <li>Campaigns</li>
                        <li>Branding</li>
                    </ul>
                 </Col>
                 <Col>
                    <ul className='footer-service'>
                            <li className='footer-services'>Furniture</li>
                            <li>Beds</li>
                            <li>Chairs</li>
                            <li>All</li>
                        </ul>
                 </Col>
                 <Col>
                        <ul className='footer-service'>
                                    <li className='footer-services'>Follow Us</li>
                                    <li><img className='follow-us' src={facebook} alt='' />Facebook</li>
                                    <li><img className='follow-us' src={twitter} alt='' />Twitter</li>
                                    <li><img className='follow-us' src={instagram} alt='' />Instagram</li>
                        </ul>
                 </Col>
             </Row>
        </div>

        <div className='footer-copyright'>
                <div>
                   <h1>Copyright &#169; 2021</h1>
                </div>
                <div className='d-flex'>
                    <h3 className='term-condition'>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>
        </div>
    </div>
  )
}