import React, { useState, useEffect } from "react";
import EnquiriesDelete from "./EnquiriesDelete";
import { BASE_URL, headers } from "../../../../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function EnquiriesDetails({message}){
    const [hotel, setHotel] = useState([]);
    const id = message.establishmentId;

    useEffect(()=>{

    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    fetch(url, options)
        .then((result) => result.json())
        .then((json) => setHotel(json));   
    }, [id])
    

    function time(date){
        const old = new Date(date);
        return old.toDateString();  
    }
    return(
        <div className="enquiriesMsg">
            <Row>
                <Col sm={12} className="enquiriesMsg__heading">
                    <h2 className="enquiriesMsg__heading--title">ENQUIRY</h2>
                </Col>
                   
                <Col sm={12} className="enquiriesMsg__sender">
                    <Row>
                    <Col sm={12} className="enquiriesMsg__sender--hotel">
                        <p><strong>Hotel: </strong>{hotel.name}</p>
                    </Col>
                    
                    <Col sm={12} className="enquiriesMsg__sender--date">
                        <p><strong>Date: </strong>{time(message.checkIn)} - {time(message.checkOut)}</p>
                    </Col>
                    <Col sm={12} className="enquiriesMsg__sender--name">
                        <p><strong>Name: </strong>{message.name}</p>
                    </Col>
                    <Col sm={12} className="enquiriesMsg__sender--email">
                        <p><strong>Email: </strong>{message.email}</p>
                    </Col>

                    </Row>
                        <EnquiriesDelete msgId={message.id} />
                </Col>  
            </Row>
        </div>
    )
}

export default EnquiriesDetails;