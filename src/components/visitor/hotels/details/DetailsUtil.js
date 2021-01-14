import React from "react";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faWind, faParking, faPaw, faSmokingBan, faGlassMartiniAlt, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function detailsUtil(){
   return(
<>
            <Col  xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faWifi}/>
            </Col>
            <Col  xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faWind}/>
            </Col>
            <Col xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faParking}/>
            </Col>
            <Col xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faPaw}/>
            </Col>
            <Col xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faSmokingBan}/>
            </Col>
            <Col xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faGlassMartiniAlt}/>
            </Col>
            <Col xs={3} sm={3}>
                <FontAwesomeIcon className="DetailsInfo__Utilities--icon" icon={faConciergeBell}/>
            </Col>
        </>
   )
    
}

export default detailsUtil;