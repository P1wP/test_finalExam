import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import {
    isBrowser,
    isMobile
  } from "react-device-detect";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import EstablishmentCreateBtn from "./EstablishmentCreateBtn";
import EstablishmentsItem from "./EstablishmentsItem";

function Establishments (){
    const {closeAll, toggleShow } = useContext(AuthContext);
    const [ hidden, setHidden ] = useState(true);
    const [ icon, setIcon ] = useState(faChevronDown);

    function showMsg(){
        // SHOW LIST
        if(hidden){
            setHidden(false);
            toggleShow( null, false, false, true);
            setIcon(faTimes);
            return
        }
        // CLOSE LIST
        setHidden(true);
        // CLOSE DETAILS
        closeAll(false, false, true);
        setIcon(faChevronDown);
    }

    return(
        <>
        <div className="establishments" onClick={showMsg}>
            <div className="establishments__btn">
                <h2 className="establishments__btn--text">Establishments</h2>
                
                <FontAwesomeIcon className="establishments__btn--openClose" icon={icon} />
                
            </div>
            
        </div>
        {isBrowser && <>{!hidden && <div className="d-none d-md-none d-lg-block"><EstablishmentCreateBtn/></div>}</>}
        {isMobile && <>{!hidden && <EstablishmentsItem/>}</>}
        </>


    )

}

export default Establishments;