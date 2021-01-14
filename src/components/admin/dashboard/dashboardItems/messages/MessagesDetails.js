import React from "react";
import MessagesDelete from "./MessageDelete";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function MessagesDetails({message}){

    return(
        <div className="messagesMsg">
            <Row>
                <Col sm={12} className="messagesMsg__heading">
                    <h2 className="messagesMsg__heading--title">MESSAGE</h2>
                </Col>
                   
                <Col sm={12} className="messagesMsg__sender">
                    <Row>
                    <Col sm={12} className="messagesMsg__sender--name">
                        <p><strong>Name: </strong>{message.name}</p>
                    </Col>
                    
                    <Col sm={12} className="messagesMsg__sender--email">
                        <p><strong>Email: </strong>{message.email}</p>
                    </Col>
                    <Col sm={12} className="messageMsg__sender--msg">
                        <h3>Msg:</h3>
                        <p>{message.message}</p>
                    </Col>
                    
                    </Row>
                    
                        <MessagesDelete msgId={message.id} />
                </Col>  
            </Row>
        </div>
    )
}

export default MessagesDetails;