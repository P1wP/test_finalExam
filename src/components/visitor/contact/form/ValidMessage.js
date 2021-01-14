import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ValidMessage({validBtn}) {
    return (
        <Container>
            <div className="centerMsg">
            <div className="formSuccess">
                <h1 className="formSuccess__headline"> Success!  </h1>
                <p className="formSuccess__msg">We'll get back too you as soon as possible ;)</p>
                <Button onClick={validBtn}>HOME</Button>
            </div>
            </div>
        </Container>
    );
}

export default ValidMessage;