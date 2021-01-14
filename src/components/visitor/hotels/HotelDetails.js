import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import EnquiryModal from "../modals/EnquiryModal";

function HotelDetails({hotel}){
console.log("Details")
    const ImageStyle = {
        backgroundImage: 'url(' + hotel.image + ')',
    };

    return(
        <Col sm={12} md={6} lg={4} className="hotelContainer">
            <Row>
                <Col sm={12} className="hotelContainer__img">
                    <div className="hotelContainer__img--img" style={ImageStyle} />
                </Col>
                <Col sm={12} className="hotelContainer__info">
                    <div className="hotelContainer__info--details">
                    <h4>{hotel.name}</h4>
                    <p>Maximum Guests: {hotel.maxGuests}</p>
                    <p>Price for 1 night from: {hotel.price}$</p>
                    <div className="hotelContainer__btns">

                        <Link to={"/hotel/" + hotel.id}>
                            <Button className="hotelContainer__btns--details">Details</Button>
                        </Link>
                        
                        <EnquiryModal hotel={hotel}></EnquiryModal>
                    </div>
                    </div>
                </Col>
            </Row>
        </Col>
       
    )
}

export default HotelDetails;