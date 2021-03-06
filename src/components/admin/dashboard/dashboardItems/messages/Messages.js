import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import MessagesItem from "./MessagesItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Messages (){

    const { closeAll } = useContext(AuthContext);

    const [ hidden, setHidden ] = useState(true);
    const [ icon, setIcon ] = useState(faChevronDown);

    function showMsg(){
        if(hidden){
            setHidden(false);
            setIcon(faTimes);
            return
        }
        setHidden(true);
        closeAll(true, false, false)
        setIcon(faChevronDown);
    }

    return(
        <>
        <div className="messages" onClick={showMsg}>
            <div className="messages__btn">
                <h2 className="messages__btn--text">Messages</h2>
                
                <FontAwesomeIcon className="messages__btn--openClose" icon={icon} />
                
            </div>
            
        </div>
        {!hidden && <MessagesItem/>}
        </>


    )

}

export default Messages;