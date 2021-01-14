import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Location from "../../../../constants/GetLocation";

import Map from "./Map";
import EnquiryModal from "../../modals/EnquiryModal";
import DetailsUtil from "./DetailsUtil";



function DetailsInfo({hotel}){
  
    return(
        <div className="DetailsInfo">
            <Row>
                <Col className="DetailsInfo__Title offset-md-3" sm={12} md={6}>
                    <h2>{hotel.name}</h2>
                </Col>
                
                <Col sm={12} md={3} className="text-right">
                    <EnquiryModal className="testButton" hotel={hotel}></EnquiryModal>
                </Col>

                <Col className="DetailsInfo__Description " sm={12   }>
                    <h3 className="DetailsInfo__Description--title">Description</h3>
                    <p className="DetailsInfo__Description--info">{hotel.description}</p>
                </Col>

                <Col className="DetailsInfo__Reseption" sm={12} md={4}>
                    <h3 className="DetailsInfo__Reseption--title">Reseption</h3>
                    <p className="DetailsInfo__Reseption--info">Open 24/7</p>
                </Col>

                <Col className="DetailsInfo__Breakfast" sm={12} md={4}>
                    <h3 className="DetailsInfo__Breakfast--title">Breakfast</h3>
                    <p className="DetailsInfo__Breakfast--info">{hotel.selfCatering ? ("07 - 11pm"):("Not Included")}</p>
                </Col>

                <Col className="DetailsInfo__CheckIn" sm={12} md={4}>
                    <h3 className="DetailsInfo__CheckIn--title">Check-in / out</h3>
                    <p className="DetailsInfo__CheckIn--info">12pm / 10pm</p>
                </Col>
            </Row>
            <Row className="DetailsInfo__Utilities">
                <Col sm={12} >
                    <h3 className="DetailsInfo__Utilities--title">Utilities</h3>
                </Col>
                <DetailsUtil/> 
                   
            </Row>
            <Row>
                <Col className="DetailsInfo__Contact" sm={12} md={4}>
                    <h3>Contact</h3>
                    <p><strong>Phone:</strong><br/> #123 456 789</p>
                    <p><strong>Email:</strong><br/> {hotel.email}</p>
                    <Location hotel={hotel} />
                </Col>
                <Col className="DetailsInfo__Map" sm={12} md={8}>
                        {/*
                        not shure if plagarisim removed to be safe*/}
                        <Map lat={hotel.lat} lng={hotel.lng}/> 
                </Col>
                <Col sm={12}>
                    <EnquiryModal hotel={hotel}></EnquiryModal>
                </Col>

            </Row>


        </div>
    )

}

export default DetailsInfo;