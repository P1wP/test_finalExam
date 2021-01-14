import React, { useContext, useState, useEffect} from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { BASE_URL, headers } from "../../../../../constants/API";
import {
    isBrowser,
    isMobile
  } from "react-device-detect";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MobileMessageDetails from "./mobile/MobileMessageDetails";

function MessagesItem(){
    const [ messages, setMessages ] = useState([]);
    const { hotelChange,  toggleShow } = useContext(AuthContext);


    useEffect(() => {
        // FETCH MSGs
        const FETCH_OPTIONS = {headers};
        const url = BASE_URL + "contacts";

        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setMessages(json)
            })
            .catch(error => console.log(error)) // END FETCH;

        
    }, [hotelChange]);// END USEEFFECT
    
    console.log(messages)


    function time(date){
        const old = new Date(date);
        return old.toDateString();  
    }

    return(
        <Row>
            {isBrowser &&
            <Col sm={12}>
                <div className="messages__list">
                    <Col sm={12} className="messages__list--info">
                        <div className="messages__list--info--from">FROM</div>
                        <div className="messages__list--info--email">DATE</div>
                    </Col>
                    {messages.map((message)=>(
                        <Col key={message.id} sm={12} className="messages__list--item" onClick={() => toggleShow(message, true, false, false)}>
                            <div className="messages__list--item--name">
                                <p key={message.id}>{message.name}</p>
                            </div>
                            <div className="messages__list--item--time">
                                <p key={message.id}>{time(message.createdAt)}</p>
                            </div>
                            
                        </Col>  
                    ))}
                    </div>
            </Col>
}
            
            {isMobile && 
                <Col sm={12}>
                    <Col sm={12} className="messages__list--info">
                        <div className="messages__list--info--from">FROM</div>
                        <div className="messages__list--info--email">DATE</div>
                    </Col>
                {messages.map((message)=>(
                    <MobileMessageDetails  key={message.id} msg={message}/>
                       
                               
            ))}
                </Col>
            }
      
        </Row>
        
    );
}

export default MessagesItem;