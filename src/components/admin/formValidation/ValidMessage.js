import React from "react";


function ValidMessage({children}) {
    return (
        <div className="success">{ children }</div>
    );
}

export default ValidMessage;