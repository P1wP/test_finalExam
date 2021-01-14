import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import Button from "react-bootstrap/Button";

function EstablishmentsCancel({classname}){
    const { hotelChange, setHotelChange, create, setCreate, closeAll, toggleShow } = useContext(AuthContext);

    function cancel(){
          // RE-RENDER LIST
        if(hotelChange){
            setHotelChange(false);
        }
        else{
            setHotelChange(true);
        }
        
      
        closeAll(false, false, true)
        toggleShow( null, false, false, true);
        if(create){
            setCreate(false);
        }

        
        
    }


    return(
        <Button className={classname} type="button" onClick={cancel}>CANCEL</Button>
    )
}

export default EstablishmentsCancel;