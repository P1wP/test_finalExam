import React, {useContext} from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import Button from "react-bootstrap/Button";


function EstablishmentCreateBtn(){
    const { setCreate } = useContext(AuthContext);

    function createNew(){
        setCreate(true)
    }
    return(
        <Button className="establishments__createBtn" type="button" onClick={createNew}>Create New</Button>
    )
}

export default EstablishmentCreateBtn;