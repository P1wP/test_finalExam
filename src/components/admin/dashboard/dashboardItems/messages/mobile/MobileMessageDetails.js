import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MessageDelete from "../MessageDelete";

function MobileMessageDetails({msg}){
    
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
                    <h2>Message</h2>
                    <p><strong>Name: </strong>{msg.name}</p>
                    <p><strong>Email: </strong>{msg.email}</p>
                    <h4>Message:</h4>
                    <p>{msg.message}</p>
                    
                    <div className="messageContainer__delete">
                        <MessageDelete msgId={msg.id}></MessageDelete>
                    </div>
                    </div>
                </Col>
            </Row>
        </Col>
       
    )
}

export default MobileMessageDetails;