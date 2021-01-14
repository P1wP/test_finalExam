import React from "react";
import FooterBS from "react-bootstrap/ModalFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <FooterBS className="footer container-fluid">
            <Row>
                <Col sm={12} md={12} className="text-center">
                    <div className="footer__right">
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://www.twitter.com">

                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'twitter']} />
                        </a>

                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://www.instagram.com">
                                
                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'instagram']} />
                                
                        </a>

                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://www.facebook.com">
                                
                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'facebook']} />
                                
                        </a>

                    </div>
                    
                </Col>
              
            </Row>
            <p className="footer__madeBy">Holidaze &copy; {year}</p>
        </FooterBS>
    )
}

export default Footer;