import React, {useState, useEffect, useContext} from "react";
import {AuthContext} from "../../../../../../context/AuthContext";
import { BASE_URL, headers } from "../../../../../../constants/API";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EnquiriesDelete from "../EnquiriesDelete";

function MobileMessageDetails({msg}){

    const { hotelChange } = useContext(AuthContext);
    const [hotel, setHotel] = useState([]);
    const id = msg.establishmentId;

    useEffect(()=>{

    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    fetch(url, options)
        .then((result) => result.json())
        .then((json) => setHotel(json));   
    }, [id, hotelChange])
    

    function time(date){
        const old = new Date(date);
        return old.toDateString();  
    }

    return(
        <Col sm={12} md={12} lg={12} className="messageContainer">
            <Row>
                <Col sm={12} className="messageContainer__info">
                    <div className="messageContainer__info--from">{msg.name}</div>
                    <div className="messageContainer__info--date">{time(msg.createdAt)}</div>
                </Col>
                <Col sm={12} className="messageContainer__message">
                    <div className="messageContainer__message--details">
                    <Row>
                    <Col sm={12} className="enquiriesMsg__sender--hotel">
                        <p><strong>Hotel: </strong>{hotel.name}</p>
                    </Col>
                    
                    <Col sm={12} className="enquiriesMsg__sender--date">
                        <p><strong>Date: </strong>{time(msg.checkIn)} - {time(msg.checkOut)}</p>
                    </Col>
                    <Col sm={12} className="enquiriesMsg__sender--name">
                        <p><strong>Name: </strong>{msg.name}</p>
                    </Col>
                    <Col sm={12} className="enquiriesMsg__sender--email">
                        <p><strong>Email: </strong>{msg.email}</p>
                    </Col>

                    </Row>
                    
                    <div className="messageContainer__delete">
                        <EnquiriesDelete msgId={msg.id}></EnquiriesDelete>
                    </div>
                    </div>
                </Col>
            </Row>
        </Col>
       
    )
}

export default MobileMessageDetails;