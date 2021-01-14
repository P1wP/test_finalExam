import React, { useContext } from "react";
import {
    isBrowser
  } from "react-device-detect";
import { AuthContext } from "../../../context/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Messages from "./dashboardItems/messages/Messages";
import Enquiries from "./dashboardItems/enquiries/Enquiries";
import Establishments from "./dashboardItems/establishments/Establishments";
import EstablishmentsItem from "./dashboardItems/establishments/EstablishmentsItem";
import MessagesDetails from "./dashboardItems/messages/MessagesDetails";
import EnquiriesDetails from "./dashboardItems/enquiries/EnquiriesDetails";

function Dashboard(){
    const { msg, est, enq, props } = useContext(AuthContext);
    
    
    return(
        <div id="dashboardPage">
        <div className="container">
            <Row className="dashboard">
               
                <Col sm={12} md={8} lg={6} className="dashboard__content container">
                        <Messages />
                        <Enquiries />
                        <Establishments />
                </Col>
                
                {isBrowser && 
                    <Col sm={12} md={8} lg={6} className="offset-md-2 offset-lg-0">
                        {msg && <MessagesDetails message={props}/>}
                        {est && <EstablishmentsItem establishment={props}/>}
                        {enq && <EnquiriesDetails message={props}/>}
                    </Col>
                }
                
            </Row>
        </div>
        </div>
    )
}

export default Dashboard;